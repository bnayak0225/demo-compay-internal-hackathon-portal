import {useNavigate} from "react-router";
const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    if(!localStorage.getItem("userId")){
        navigate("/login")
    }
    return (children)
}
export default PrivateRoute