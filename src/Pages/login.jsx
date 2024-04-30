import AuthLayouts from "../components/Layouts/AuthLayouts"
import FormLogin from "../components/Fragments/FormLogin"
import { Link } from "react-router-dom";

const LoginPage = () => {
    
    return (
        <AuthLayouts title="Login" type="login">
            <FormLogin/>
            {/* <p className="text-center text-slate-500 text-sm mt-5">
                Don't Have an Account.?{" "}
                <Link to="/register" className="font-bold text-blue-600 hover:underline">Sign Up</Link>
            </p> */}
        </AuthLayouts>
    )
}

export default LoginPage;