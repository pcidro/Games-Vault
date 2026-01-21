import React from "react";
import { GlobalContext } from "../GlobalContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { usuario } = React.useContext(GlobalContext);

  return usuario ? children : navigate("/login");
};

export default ProtectedRoute;
