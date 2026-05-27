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
"PurchasedServiceTests_8cs.html#a70aa6a3a9ebb9c175c3d7b5fca55af2f",
"classBackEncordados_1_1Common_1_1Database_1_1Helpers_1_1UlidToStringConverter.html#aa1b612900595ff42f4735b8f71ab52f7",
"classBackEncordados_1_1Excel_1_1Dto_1_1ExcelTournamentDto.html#a8b5ab2e8a52e010b18317df8ef078876",
"classBackEncordados_1_1Purchased_1_1Dto_1_1PedidoLineaPatchDto.html#a9679d37aa27ef5bd842954bf76943c8f",
"classBackEncordados_1_1Usuarios_1_1Service_1_1Auth_1_1JwtTokenExtractor.html#a247b5c89fbad69763d4c6056e22ef02e",
"classTestEncordados_1_1Integration_1_1Repositories_1_1CuerdasRepositoryTests.html#afb2563d85ab26a2aed09ae59c9a5ff26",
"classTestEncordados_1_1Integration_1_1Repositories_1_1TournamentRepositoryTests.html#a25366402a2904d0157bd4395594848c0",
"classTestEncordados_1_1Unit_1_1Common_1_1Dto_1_1ExcelAdvancedRequestDtoTests.html",
"classTestEncordados_1_1Unit_1_1Common_1_1Service_1_1Cloudinary_1_1CloudinaryServiceTests.html#ad8cdb2cb6140f2ba3828a4a0d538d367",
"classTestEncordados_1_1Unit_1_1Controllers_1_1Materials_1_1MaterialsControllerTests.html#aa809236d6a38a164ff1b8349eed361e9",
"classTestEncordados_1_1Unit_1_1Controllers_1_1Talleres_1_1TournamentsControllerTests.html#aeba3ea849127007a35cdf7ae126f1b8d",
"classTestEncordados_1_1Unit_1_1Export_1_1Controller_1_1ExportControllerTests.html#a6068df0daf0020a2e71d97492f9aec17",
"classTestEncordados_1_1Unit_1_1Services_1_1AuthService_1_1AuthServiceTests.html#a9f57fb8071a1a3b4738087eece866155",
"classTestEncordados_1_1Unit_1_1Services_1_1Purchased_1_1PurchasedServiceTests.html#a91ea2440c10bbf99917873759ec1fe0f",
"classTestEncordados_1_1Unit_1_1Validators_1_1Materials_1_1CuerdaRequestValidatorTests.html#a437bc1523baddaef837f7e526d2062b7",
"classTestEncordados_1_1Unit_1_1Validators_1_1Usuarios_1_1UserRequestDtoValidatorTests.html#a1daa5686a5b5d618e73f574a554706cc",
"dir_c589757657a2ce9049780a4d5e028e8f.html",
"interfaceBackEncordados_1_1Materials_1_1Repository_1_1IProductsRepository.html",
"namespaceBackEncordados_1_1Common_1_1Database.html"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';