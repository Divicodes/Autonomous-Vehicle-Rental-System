import React from "react";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./screens/LoginPage/Login";
import Register from "./screens/Register/Register";
import SuccessRegister from "./screens/SuccessRegister/SuccessRegister";
import AdminLogin from "./screens/AdminLogin/AdminLogin";
import SlotBookingSuccess from "./screens/SlotBookingSuccess/SlotSuccess";
import Admin from "./screens/Admin";
import VehicleOwner from "./screens/VehicleOwner";
import VehicleRider from "./screens/VehicleRider";
import Profile from "./screens/Profile";
import Bookings from "./screens/Bookings";
import SimulationData from "./screens/SimulationData";
import Ride from "./screens/Ride";
import Tickets from "./screens/Tickets";
import AddAV from "./screens/AddAV";
import Vehicles from "./screens/Vehicles";
import Payment from "./screens/Payment";
import Confirmation from "./screens/Confirmation";
import Billing from "./screens/Billing";
import UpdateVehicle from "./screens/UpdateVehicle";
import DeleteVehicle from "./screens/DeleteVehicle";
import OwnerBookings from "./screens/OwnerBookings";
import FinalMessage from "./screens/FinalMessage";
import DeleteBooking from "./screens/DeleteBooking";
import CreateTicket from "./screens/CreateTicket";
import ViewTicket from "./screens/ViewTicket";
import UpdateTicket from "./screens/UpdateTicket";
import DeleteTicket from "./screens/DeleteTicket";
import ViewAdminTicket from "./screens/ViewAdminTicket";
import UpdateAdminTicket from "./screens/UpdateAdminTicket";
import DeleteAdminTicket from "./screens/DeleteAdminTicket";
import Stats from "./screens/Stats";

const App = () => (
  <BrowserRouter>
   
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/owner" component={VehicleOwner} />
      <Route path="/rider" component={VehicleRider} />
      <Route path="/register" component={Register} />
      <Route path="/success" component={SuccessRegister} />
      <Route path="/adminlogin" component={AdminLogin} />
      <Route path="/slotsuccess" component={SlotBookingSuccess} />
      <Route path="/profile" component={Profile} />
      <Route path="/bookings" component={Bookings} />
      <Route path="/simulationData" component={SimulationData} />
      <Route path="/tickets" component={Tickets} />
      <Route path="/addav" component={AddAV} />
      <Route path="/vehicles" component={Vehicles} />
      <Route path="/updateVehicle" component={UpdateVehicle} />
      <Route path="/deleteVehicle" component={DeleteVehicle} />
      <Route path="/ownerBookings" component={OwnerBookings} />
      <Route path="/ride" component={Ride} />
      <Route path="/payment" component={Payment} />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/billing" component={Billing} />
      <Route path="/finalmessage" component={FinalMessage} />
      <Route path="/deleteBooking" component={DeleteBooking} />
      <Route path="/createTicket" component={CreateTicket} />
      <Route path="/viewTicket" component={ViewTicket} />
      <Route path="/updateTicket" component={UpdateTicket} />
      <Route path="/deleteTicket" component={DeleteTicket}/>
      <Route path="/viewAdminTicket" component={ViewAdminTicket}/>
      <Route path="/updateAdminTicket" component={UpdateAdminTicket}/>
      <Route path="/deleteAdminTicket" component={DeleteAdminTicket}/>
      <Route path="/stats" component={Stats}/>
    </Switch>
  </BrowserRouter>
);

export default App;
