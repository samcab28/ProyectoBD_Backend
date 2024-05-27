import express from 'express';
import cors from 'cors';

const app = express();

// Permitir solicitudes desde el origen de tu frontend
app.use(cors({
    origin: 'http://localhost:3000', // Reemplaza con la URL de tu frontend
    credentials: true,
}));

// Usar JSON en la aplicación
app.use(express.json());

//importacion de los routers
import RouteMascota from "./routes/rtMascota/RouteMascota.js";
import RouteMedicamento from "./routes/rtMedicamento/RouteMedicamento.js";
import RoutePersona from "./routes/rtPersona/RoutePersona.js";
import RouteProducto from "./routes/rtProducto/RouteProducto.js";
import RouteSucursal from "./routes/rtSucursal/RouteSucursal.js";


//declaracion de uso de los routers
app.use(RouteMascota);
app.use(RouteMedicamento);
app.use(RoutePersona);
app.use(RouteProducto);
app.use(RouteSucursal)
<<<<<<< Updated upstream
=======
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

app.use(RouteSexo);
app.use(RouteTipoPersona);
app.use(RouteEstadoPedido);
app.use(RouteEstadoCita);
app.use(RouteEstadoEnvio);
app.use(RouteTipoProducto);
app.use(RouteUnidadMedida);
app.use(RouteMetodoPago);
app.use(RouteEfectivo);
app.use(RouteSinpe);
app.use(RouteTransferencia);
app.use(RouteTarjeta);
app.use(RouteHistorialClick);
app.use(RouteHistorialLogin);

>>>>>>> Stashed changes

export default app;
