import express from 'express';

//importacion de los routers
import RouteMascota from "./routes/rtMascota/RouteMascota.js";
import RouteMedicamento from "./routes/rtMedicamento/RouteMedicamento.js";
import RoutePersona from "./routes/rtPersona/RoutePersona.js";
import RouteProducto from "./routes/rtProducto/RouteProducto.js";
import RouteSucursal from "./routes/rtSucursal/RouteSucursal.js";
import RouteUrl from "./routes/rtUrl/RouteUrl.js"

const app = express();

//declaracion de uso de json en el proyecto
app.use(express.json());

//declaracion de uso de los routers
app.use(RouteMascota);
app.use(RouteMedicamento);
app.use(RoutePersona);
app.use(RouteProducto);
app.use(RouteSucursal)
app.use(RouteUrl);

export default app;
