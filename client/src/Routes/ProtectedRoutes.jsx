import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({auth, children }) => {   
    return auth ? children : <Navigate to="/" />;
   
}
export default ProtectedRoutes;