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
"AppConfigExtensions_8cs.html",
"IExportArchiveManager_8cs_source.html",
"RepositoriesConfig_8cs_source.html",
"classBackEncordados_1_1Common_1_1Dto_1_1ExportEntityInfo.html#a5afb5cb4b67343cdffcad7a345416ab6",
"classBackEncordados_1_1Excel_1_1Dto_1_1ExcelUsersDto.html#ad32a3738af2321f4da8aff78fb8702b4",
"classBackEncordados_1_1Purchased_1_1Dto_1_1StringSetupDto.html#acfeed34fa7cfb594285eada6663d3ef5",
"classTestEncordados_1_1Integration_1_1Email_1_1MailKitEmailServiceTests.html#a3d18ddabec40f04ea4245a96ea786069",
"classTestEncordados_1_1Integration_1_1Repositories_1_1ExcelRepositoryTests.html#abaa349a90e4a1d3e866636a5cdbadf9c",
"classTestEncordados_1_1Integration_1_1Repositories_1_1TournamentRepositoryTests.html#ac9aadfe5e4c5d04bf1977cdf778cb2ea",
"classTestEncordados_1_1Unit_1_1Common_1_1Dto_1_1PageResponseDtoTests.html#ab52e588d152d0767239dd565d871496b",
"classTestEncordados_1_1Unit_1_1Common_1_1Service_1_1Email_1_1EmailTemplatesTests.html#af581383759d036cdd76282858bbc034d",
"classTestEncordados_1_1Unit_1_1Controllers_1_1Purchased_1_1PurchasedControllerTests.html#a43ec1bd6ebf602983a041a2c43e52b4b",
"classTestEncordados_1_1Unit_1_1Errors_1_1CuerdaErrorTests.html#a8f216eb9c0475b4cf3281750804760e3",
"classTestEncordados_1_1Unit_1_1Filters_1_1TransactionalAttributeTests.html#a3545214d0622fe9d21013819dc1dce5a",
"classTestEncordados_1_1Unit_1_1Services_1_1AuthService_1_1JwtTokenExtractorTests.html#a3c198f61846b333210ee162ab91e0d90",
"classTestEncordados_1_1Unit_1_1Services_1_1Purchased_1_1PurchasedServiceTests.html#ad466fa46a48897e5f0f3e2343c23f0bb",
"classTestEncordados_1_1Unit_1_1Validators_1_1Materials_1_1MaterialRequestValidatorTests.html#abee3ddc2314d4e7ab4dfc8ec65dae669",
"classTestEncordados_1_1UserControllerTests.html#a24ebf7f1f4da898cf1e33582b439bea5",
"functions_a.html",
"interfaceBackEncordados_1_1Purchased_1_1Repository_1_1IPuchasedRepository.html#af5cdec0ced28fefc20ba39272e7eac34",
"namespaceBackEncordados_1_1Materials_1_1Model.html#abdb675af6253d1f00af73bef13aae7c0a11c8710495e2a38227db7745b989a579"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';