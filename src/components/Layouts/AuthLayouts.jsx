import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    
    return (
        <div className="flex border-slate-100 rounded-lg shadow-lg dark:border-slate-500 justify-center bg-slate-400 min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
                {children}
                <Navigation type={type}/>
                
                {/* <p className="text-center text-slate-500 text-sm mt-5">
                    {type === "login" ? "Don't have an account? " : "Already have an account? "}
                    {type === "login" && (<Link to="/register" className="text-blue-600 font-bold">Sign Up</Link>)}
                    {type === "register" && (<Link to="/login" className="text-blue-600 font-bold">Sign In</Link>)}
                </p> */}
            </div>
        </div>
    );
};

const Navigation =({type}) =>{
    if (type === "login") {
        return (
            <p className="text-center text-slate-500 text-sm mt-5">
                Don't Have an Account.?{" "} 
                <Link to="/register" className="font-bold text-blue-600 hover:underline">Sign Up</Link>
            </p>
        )
    }else{
        return (
            <p className="text-center text-slate-500 text-sm mt-5">
                Have an Account.?{" "} 
                <Link to="/login" className="font-bold text-blue-600 hover:underline">Sign In</Link>
            </p>
        )
    }
}

export default AuthLayouts;
