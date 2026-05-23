#!/bin/bash
set -e

echo "=========================================="
echo "Iniciando MongoDB con Replica Set"
echo "=========================================="

MONGO_USER="${MONGO_USER:-admin}"
MONGO_PASSWORD="${MONGO_PASSWORD:-admin}"
MONGO_DATABASE="${MONGO_DATABASE:-admin}"
REPLICA_SET_NAME="${REPLICA_SET_NAME:-rs0}"

echo "Configuración:"
echo "  Usuario: $MONGO_USER"
echo "  Base de datos: $MONGO_DATABASE"
echo "  Replica Set: $REPLICA_SET_NAME"

echo ""
echo "[1] Iniciando mongod..."
mongod --replSet "$REPLICA_SET_NAME" --bind_ip_all --fork --logpath /var/log/mongodb.log --dbpath /data/db

echo "[2] Esperando a que MongoDB esté listo..."
MAX_ATTEMPTS=30
ATTEMPT=0
while [ $ATTEMPT -lt $MAX_ATTEMPTS ]; do
    if mongosh --eval "db.adminCommand('ping')" &>/dev/null; then
        echo "      MongoDB está listo!"
        break
    fi
    ATTEMPT=$((ATTEMPT + 1))
    echo "      Esperando... ($ATTEMPT/$MAX_ATTEMPTS)"
    sleep 2
done

if [ $ATTEMPT -ge $MAX_ATTEMPTS ]; then
    echo "ERROR: MongoDB no respondió después de $MAX_ATTEMPTS intentos"
    exit 1
fi

sleep 2

echo "[3] Verificando/inicializando Replica Set..."
RS_STATUS=$(mongosh --quiet --eval "try { rs.status().ok } catch (e) { 0 }")

if [ "$RS_STATUS" = "1" ]; then
    echo "      Replica Set ya está inicializado"
else
    echo "      Inicializando Replica Set $REPLICA_SET_NAME..."
    mongosh --quiet --eval "rs.initiate({_id: '$REPLICA_SET_NAME', members: [{_id: 0, host: 'localhost:27017'}]})"
    
    echo "      Esperando a que el nodo sea PRIMARY..."
    sleep 5
    
    MAX_WAIT=30
    WAIT=0
    while [ $WAIT -lt $MAX_WAIT ]; do
        STATE=$(mongosh --quiet --quiet --eval "try { rs.status().members[0].stateStr } catch (e) { 'NOT_READY' }")
        if [ "$STATE" = "PRIMARY" ]; then
            echo "      ✓ Nodo PRIMARY listo"
            break
        fi
        echo "      Estado: $STATE (esperando...)"
        sleep 2
        WAIT=$((WAIT + 1))
    done
fi

echo "[4] Creando usuario en admin DB..."
mongosh --quiet --eval "
try {
  db.getSiblingDB('admin').createUser({
    user: '$MONGO_USER', 
    pwd: '$MONGO_PASSWORD', 
    roles: [{role: 'root', db: 'admin'}]
  });
  print('Usuario creado en admin');
} catch (e) {
  if (e.codeName === 'UserAlreadyExists') {
    print('Usuario ya existe en admin');
  } else {
    throw e;
  }
}
"

echo ""
echo "=========================================="
echo "MongoDB listo con Replica Set!"
echo "=========================================="

tail -f /dev/null