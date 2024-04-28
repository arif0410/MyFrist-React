import AuthLayouts from "../components/Layouts/AuthLayouts"
import FormRegister from "../components/Fragments/FormRegister"
import { Link } from "react-router-dom";

const RegisterPage = () => {
    
    return (
        <AuthLayouts title="Register">
            <FormRegister/>
            <p className="text-center text-slate-500 text-sm mt-5">
                Have an Account.?{" "}
                <Link to="/login" className="font-bold text-blue-600 hover:underline">Sign in</Link>
            </p>
        </AuthLayouts>
    )
}

export default RegisterPage;