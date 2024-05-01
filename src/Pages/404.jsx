import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const Error = useRouteError();
    return (
        <div className="flex bg-amber-200 justify-center border-x-2 rounded-xl shadow-lg min-h-screen items-center flex-col">
            <div className="container flex-1 p-4 bg-slate-500 rounded-xl shadow-lg border-x-2 justify-center" >
                <div className="text-center">
                    <h1 className="text-3xl font-bold">404</h1>
                    <h2 className="text-xl">Oops! Page Not Found</h2>
                    <h3 className="text-slate-500">Sorry, Unexpeected Error has Occurred</h3>
                    <p className="font-bold justify-center text-center size-18">{Error.statusText ||Error.message}</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;