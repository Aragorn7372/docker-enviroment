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
  [ "FunkoApi", "index.html", [
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
"IEmailService_8cs_source.html",
"PurchasedServiceTests_8cs.html#a0edebf83bce71e4039556585f74d887e",
"classBackEncordados_1_1Common_1_1Database_1_1Config_1_1VersionInterceptor.html#a6c6e4b2429e2967585c20c4b7eb5a44e",
"classBackEncordados_1_1Excel_1_1Dto_1_1ExcelPedidosDto.html#ac7c3ea5a0b3d9baaaaa5db915c222cc9",
"classBackEncordados_1_1Migrations_1_1User_1_1UserDbContextModelSnapshot.html#ac24406054443cefa910b1a5a0849f20d",
"classBackEncordados_1_1Usuarios_1_1Model_1_1User.html#ac17e4433e0f46ea3a998ab4fe909137d",
"classTestEncordados_1_1Integration_1_1Repositories_1_1CuerdasRepositoryTests.html#acc05f90bffa3bbb021581a0c75faed8c",
"classTestEncordados_1_1Integration_1_1Repositories_1_1TournamentRepositoryTests.html#a0a31626f556fb47baeb78f7fd518e717",
"classTestEncordados_1_1Unit_1_1Common_1_1Dto_1_1CreateEncoderRequestDtoTests.html#af4c1afefda7a591b9bcef2319e43728e",
"classTestEncordados_1_1Unit_1_1Common_1_1Service_1_1Cloudinary_1_1CloudinaryServiceTests.html#a8e54873630178f06e98133396dd010b4",
"classTestEncordados_1_1Unit_1_1Controllers_1_1Materials_1_1MaterialsControllerTests.html#a6b75dc5dfe0f41a6bfcb377bfb1baf3f",
"classTestEncordados_1_1Unit_1_1Controllers_1_1Talleres_1_1TournamentsControllerTests.html#ae14cab7d8cad7a081f9d7ca3340a8217",
"classTestEncordados_1_1Unit_1_1Excel_1_1Service_1_1ExcelServiceTests.html#aead7dcf7b0e73b5257723d2089b3baed",
"classTestEncordados_1_1Unit_1_1Services_1_1AuthService_1_1AuthServiceTests.html#a13ea787be10e4d6bb847abf206bdcc72",
"classTestEncordados_1_1Unit_1_1Services_1_1Purchased_1_1PurchasedServiceTests.html#a88548f7db1175a84bf32b12053b3f00a",
"classTestEncordados_1_1Unit_1_1Validators_1_1Cuerdas_1_1CuerdaRequestValidatorTests.html#af09b9044763170f5a83620eee4378d76",
"classTestEncordados_1_1Unit_1_1Validators_1_1Usuarios_1_1ChangeRoleRequestDtoValidatorTests.html#ae81649cc6e3f6e77a5e9b9052f608a6e",
"dir_94f90b41e0d9b037db0fec4739febd4e.html",
"interfaceBackEncordados_1_1Excel_1_1Repository_1_1IExcelRepository.html#aac50e25eb73d15530d45466eb3828576",
"materiales_8page_8html_source.html",
"pedido_8model_8ts.html"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';