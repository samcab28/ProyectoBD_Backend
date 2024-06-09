import express from 'express';
import cors from 'cors';

import {getConnection, scheduleBackup} from "./database/connection.js";


const app = express();

// Permitir solicitudes desde el origen de tu frontend
app.use(cors({
    origin: 'http://localhost:3000', // Reemplaza con la URL de tu frontend
    credentials: true,
}));

// Usar JSON en la aplicación
app.use(express.json());



(async () => {
    await getConnection(); // Conectar a la base de datos
    scheduleBackup(); // Programar backups
})();



//importacion de los routers
import RouteMascota from "./routes/rtMascota/RouteMascota.js";
import RouteMedicamento from "./routes/rtMedicamento/RouteMedicamento.js";
import RoutePersona from "./routes/rtPersona/RoutePersona.js";
import RouteProducto from "./routes/rtProducto/RouteProducto.js";
import RouteSucursal from "./routes/rtSucursal/RouteSucursal.js";
import RouteUrl from "./routes/rtUrl/RouteUrl.js";
import RouteAnimal from "./routes/rtAnimal/RouteAnimal.js";
import RouteMarcaProducto from "./routes/rtMarcaProducto/RouteMarcaProducto.js";
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
import RouteSexo from "./routes/rtSexo/RouteSexo.js";
import RouteTipoPersona from "./routes/rutasTipoDe/rtTipoPersona/RouteTipoPersona.js";
import RouteEstadoPedido from "./routes/rutasEstado/rtEstadoPedido/RouteEstadoPedido.js";
import RouteEstadoCita from "./routes/rutasEstado/rtEstadoCita/RouteEstadoCita.js";
import RouteEstadoEnvio from "./routes/rutasEstado/rtEstadoEnvio/RouteEstadoEnvio.js";
import RouteTipoProducto from "./routes/rutasTipoDe/rtTipoProducto/RouteTipoProducto.js";
import RouteUnidadMedida from "./routes/rtUnidadMedida/RouteUnidadMedida.js";
import RouteMetodoPago from "./routes/rutasTipoMetodoPago/rtmetodoPago/RouteMetodoPago.js";
import RouteEfectivo from "./routes/rutasTipoMetodoPago/rtEfectivo/RouteEfectivo.js";
import RouteSinpe from "./routes/rutasTipoMetodoPago/rtSinpe/RouteSinpe.js";
import RouteTransferencia from "./routes/rutasTipoMetodoPago/rtTransferencia/RouteTransferencia.js";
import RouteTarjeta from "./routes/rutasTipoMetodoPago/rtTarjeta/RouteTarjeta.js";
import RouteHistorialClick from "./routes/rutasHistorial/rtHistorialClick/RouteHistorialClick.js";
import RouteHistorialLogin from "./routes/rutasHistorial/rtHistorialLogin/RouteHistorialLogin.js";
import RouteCobro from "./routes/rtCobro/RouteCobro.js";
import RouteResena from "./routes/rtResena/RouteResena.js";
import RouteCarrito from "./routes/rtCarrito/RouteCarrito.js"
import RouteAlmacenamiento from "./routes/rtAlmacenamiento/RouteAlmacenamiento.js"
import RouteDireccionPersona from "./routes/rtDireccionPersona/RouteDireccionPersona.js";
import RouteInfoTarjeta from "./routes/rtInfoTarjeta/RouteInfoTarjeta.js"; 
import RoutePersonalEncargado from './routes/rtPersonalEncargado/RoutePersonalEncargado.js';


//declaracion de uso de los routers
app.use(RouteDireccionPersona);
app.use(RouteResena);
app.use(RouteMascota);
app.use(RouteMedicamento);
app.use(RoutePersona);
app.use(RouteProducto);
app.use(RouteSucursal)
app.use(RouteUrl);
app.use(RouteAnimal);
app.use(RouteMarcaProducto);
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
app.use(RouteCobro);
app.use(RoutePedido);
app.use(RouteDetallePedido);
app.use(RouteEnvio);
app.use(RouteServicioPredeterminado);
app.use(RouteHistorialPreferencia);
app.use(RouteSexo);
app.use(RouteTipoPersona);
app.use(RouteEstadoPedido);
app.use(RouteEstadoCita);
app.use(RouteEstadoEnvio);
app.use(RouteTipoProducto);
app.use(RouteUnidadMedida);
app.use(RouteMetodoPago);
app.use(RouteEfectivo);
app.use(RouteTipoProducto);
app.use(RouteUnidadMedida);
app.use(RouteMetodoPago);
app.use(RouteEfectivo);
app.use(RouteSinpe);
app.use(RouteTransferencia);
app.use(RouteTarjeta);
app.use(RouteHistorialClick);
app.use(RouteHistorialLogin);
app.use(RouteCarrito);
app.use(RouteAlmacenamiento);
app.use(RouteInfoTarjeta);
app.use(RoutePersonalEncargado);

export default app;
