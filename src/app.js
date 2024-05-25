import express from 'express';

//importacion de los routers
import RouteMascota from "./routes/rtMascota/RouteMascota.js";
import RouteMedicamento from "./routes/rtMedicamento/RouteMedicamento.js";
import RoutePersona from "./routes/rtPersona/RoutePersona.js";
import RouteProducto from "./routes/rtProducto/RouteProducto.js";
import RouteSucursal from "./routes/rtSucursal/RouteSucursal.js";
import RouteUrl from "./routes/rtUrl/RouteUrl.js";
import RouteAnimal from "./routes/rtAnimal/RouteAnimal.js";
import RouteMarcaProducto from "./routes/rtMarcaProducto/RouteMarcaProducto.js";

// HACER PRUEBAS
import RouteCitaMedica from "./routes/rtCitaMedica/RouteCitaMedica.js";
import RouteTipoMedicamento from "./routes/rutasTipoDe/rtTipoMedicamento/RouteTipoMedicamento.js";
import RouteProductoRecetado from "./routes/rtProductoRecetado/RouteProductoRecetado.js";
import RouteExpediente from "./routes/rtExpediente/RouteExpediente.js";
import RouteEvento from "./routes/rtEvento/RouteEvento.js";
import RouteDivisa from "./routes/rtDivisa/RouteDivisa.js";
import RoutePedido from "./routes/rtPedido/RoutePedido.js";
import RouteDetallePedido from "./routes/rtDetallePedido/RouteDetallePedido.js";
import RouteEnvio from "./routes/rtEnvio/RouteEnvio.js";
import RouteServicioPredeterminado from "./routes/rtServicioPredeterminado/RouteServicioPredeterminado.js";
import RouteHistorialPreferencia from "./routes/rutasHistorial/rtHistorialPreferencia/RouteHistorialPreferencia.js";

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
app.use(RouteAnimal);
app.use(RouteMarcaProducto);

// HACER PRUEBAS
app.use(RouteCitaMedica);
app.use(RouteTipoMedicamento); 
app.use(RouteProductoRecetado);
app.use(RouteExpediente);
app.use(RouteEvento); 
app.use(RouteDivisa);
app.use(RoutePedido); 
app.use(RouteDetallePedido); 
app.use(RouteEnvio); 
app.use(RouteServicioPredeterminado);
app.use(RouteHistorialPreferencia); 

export default app;
