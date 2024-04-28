import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    
    return (
        <div className="flex justify-center bg-slate-400 min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
                {children}
                {/* <p className="text-center text-slate-500 text-sm mt-5">
                    {type === 'login' ? "Don't have an account? " : "Already have an account? "}
                    <Link to="/register" className="text-blue-600 font-bold">Register</Link>
                </p> */}
            </div>
        </div>
    );
};

export default AuthLayouts;
