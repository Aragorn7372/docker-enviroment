/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ETR doc", "index.html", [
    [ "Encordados 🎾", "index.html", "index" ],
    [ "back-encordados 🔧", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html", [
      [ "Índice", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#índice-1", null ],
      [ "Stack", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#stack", null ],
      [ "Estructura del proyecto", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#estructura-del-proyecto", null ],
      [ "Inicio rápido", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#inicio-rápido-1", [
        [ "Prerrequisitos", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#prerrequisitos-1", null ],
        [ "Configuración", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#configuración", null ],
        [ "Ejecutar en local", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#ejecutar-en-local", null ],
        [ "Docker", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#docker", null ]
      ] ],
      [ "Tests", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#tests", null ],
      [ "Scripts", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#scripts", null ],
      [ "Pipeline de middleware", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#pipeline-de-middleware", null ],
      [ "Endpoints principales", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#endpoints-principales", [
        [ "Auth — <tt>/api/auth</tt>", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#auth--apiauth", null ],
        [ "Usuarios — <tt>/api/users</tt>", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#usuarios--apiusers", null ],
        [ "Materiales — <tt>/api/materials</tt>", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#materiales--apimaterials", null ],
        [ "Cuerdas — <tt>/api/cuerdas</tt>", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#cuerdas--apicuerdas", null ],
        [ "Pedidos — <tt>/api/purchased</tt>", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#pedidos--apipurchased", null ],
        [ "Torneos — <tt>/api/tournaments</tt>", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#torneos--apitournaments", null ],
        [ "Excel — <tt>/api/excel</tt>", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#excel--apiexcel", null ],
        [ "Export — <tt>/api/export</tt>", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#export--apiexport", null ],
        [ "Health — <tt>GET /health</tt>", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#health--get-health", null ]
      ] ],
      [ "Eventos SignalR", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#eventos-signalr", null ],
      [ "Estrategia de bases de datos", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#estrategia-de-bases-de-datos", null ],
      [ "Caché", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#caché", null ],
      [ "Variables de entorno", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#variables-de-entorno-2", null ],
      [ "Patrones y decisiones de diseño", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#patrones-y-decisiones-de-diseño", null ],
      [ "Colección Bruno", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#colección-bruno", null ],
      [ "Contribución", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#contribución-1", null ],
      [ "Desarrolladores", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2back-encordados_2README.html#desarrolladores-1", null ]
    ] ],
    [ "front-encordados 🎾", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html", [
      [ "Índice", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#índice-2", null ],
      [ "Stack", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#stack-1", null ],
      [ "Estructura del proyecto", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#estructura-del-proyecto-1", null ],
      [ "Inicio rápido", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#inicio-rápido-2", [
        [ "Prerrequisitos", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#prerrequisitos-2", null ],
        [ "Instalación", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#instalación", null ],
        [ "Desarrollo", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#desarrollo", null ],
        [ "Build de producción", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#build-de-producción", null ],
        [ "Tests", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#tests-1", null ]
      ] ],
      [ "Docker", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#docker-1", [
        [ "Inyección de variables en runtime", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#inyección-de-variables-en-runtime", null ],
        [ "Nginx", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#nginx", null ]
      ] ],
      [ "Build pipeline", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#build-pipeline", null ],
      [ "Configuración", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#configuración-1", [
        [ "Variables de entorno", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#variables-de-entorno-3", null ]
      ] ],
      [ "Rutas y control de acceso", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#rutas-y-control-de-acceso", null ],
      [ "Interceptores", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#interceptores", null ],
      [ "Servicios", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#servicios", null ],
      [ "Funcionalidades destacadas", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#funcionalidades-destacadas", [
        [ "Tablero Kanban en tiempo real", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#tablero-kanban-en-tiempo-real", null ],
        [ "Escáner QR", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#escáner-qr", null ],
        [ "Generación de códigos", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#generación-de-códigos", null ],
        [ "Informes y gráficas", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#informes-y-gráficas", null ],
        [ "Búsqueda global", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#búsqueda-global", null ]
      ] ],
      [ "Estrategia offline y PWA", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#estrategia-offline-y-pwa", [
        [ "Service Worker", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#service-worker", null ],
        [ "IndexedDB (Dexie)", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#indexeddb-dexie", null ],
        [ "Sincronización", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#sincronización", null ],
        [ "Iconos PWA", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#iconos-pwa", null ]
      ] ],
      [ "Atajos de teclado", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#atajos-de-teclado", null ],
      [ "Compatibilidad de navegadores", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#compatibilidad-de-navegadores", null ],
      [ "Convenciones de código", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#convenciones-de-código", null ],
      [ "Contribución", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#contribución-2", null ],
      [ "Desarrolladores", "md__2home_2runner_2work_2docker-enviroment_2docker-enviroment_2front-encordados_2README.html#desarrolladores-2", null ]
    ] ],
    [ "Espacios de nombres", "namespaces.html", [
      [ "Lista de espacios de nombres", "namespaces.html", "namespaces_dup" ],
      [ "Miembros del espacio de nombres ", "namespacemembers.html", [
        [ "Todos", "namespacemembers.html", null ],
        [ "Funciones", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Enumeraciones", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Clases", "annotated.html", [
      [ "Lista de clases", "annotated.html", "annotated_dup" ],
      [ "Índice de clases", "classes.html", null ],
      [ "Jerarquía de clases", "hierarchy.html", "hierarchy" ],
      [ "Miembros de clases", "functions.html", [
        [ "Todos", "functions.html", "functions_dup" ],
        [ "Funciones", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Propiedades", "functions_prop.html", "functions_prop" ]
      ] ]
    ] ],
    [ "Archivos", "files.html", [
      [ "Lista de archivos", "files.html", "files_dup" ],
      [ "Miembros de los archivos", "globals.html", [
        [ "Todos", "globals.html", null ],
        [ "Funciones", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "typedefs", "globals_type.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"20260526230741__InitialCreate_8Designer_8cs.html",
"HealthEndpointTests_8cs_source.html",
"PurchasedControllerTests_8cs_source.html",
"User_8cs_source.html",
"classBackEncordados_1_1Excel_1_1Dto_1_1ExcelMaterialsDto.html#adad5e2f7761ee4520a6b8c56df12c316",
"classBackEncordados_1_1Materials_1_1Model_1_1Material.html#acb66f30db86bfcfa9bcaeca83c46d847",
"classBackEncordados_1_1Talleres_1_1Dto_1_1TournamentRequestDto.html#a1d4c0f7b7bfc0564be04817d1e8a1ab4",
"classTestEncordados_1_1Integration_1_1Repositories_1_1CuerdasRepositoryTests.html#a1fffba2bb6d708702260433398c48fa1",
"classTestEncordados_1_1Integration_1_1Repositories_1_1PurchasedRepositoryTests.html#a0de76ae34fe6ffa3a72981fb5a60c8ef",
"classTestEncordados_1_1Unit_1_1Common_1_1Database_1_1TimestampInterceptorTests.html#a483adf0ee7647fef0cc3ca6e699a1621",
"classTestEncordados_1_1Unit_1_1Common_1_1Service_1_1Cache_1_1HybridCacheServiceTests.html#a7965eae9f5021307ca77f0345b081b14",
"classTestEncordados_1_1Unit_1_1Controllers_1_1Cuerdas_1_1CuerdasControllerTests.html#a435bb5a138de6954ada23556d31eaa8a",
"classTestEncordados_1_1Unit_1_1Controllers_1_1Talleres_1_1TournamentsControllerTests.html#a530b29076a8a71bb82083bd8d4d1d519",
"classTestEncordados_1_1Unit_1_1Excel_1_1Service_1_1ExcelServiceTests.html",
"classTestEncordados_1_1Unit_1_1Mappers_1_1TournamentsMapperTests.html#a20b0befbe18e898fce4c783eb999b311",
"classTestEncordados_1_1Unit_1_1Services_1_1Purchased_1_1PurchasedServiceTests.html#a3cb5ecc3b644b8f4df29f26815fad4b0",
"classTestEncordados_1_1Unit_1_1Validators_1_1Cuerdas_1_1CuerdaPatchValidatorTests.html#a0a9a1519d3b057da552c5fcfa859b12c",
"classTestEncordados_1_1Unit_1_1Validators_1_1Purchased_1_1StringSetupRequestValidatorTests.html#a35abb33c311f8213818edbe473c9afe1",
"dir_3882191c52cc76f6ac9b57b2ec55c89d.html",
"interfaceBackEncordados_1_1Common_1_1Service_1_1Cache_1_1ICacheService.html",
"interfaceBackEncordados_1_1Talleres_1_1Repository_1_1ITournamentRepository.html#a45e6566ac9077083431235c38e13061e",
"namespaceBackEncordados_1_1Materials_1_1Errors.html"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';