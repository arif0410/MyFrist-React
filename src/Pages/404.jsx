import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const Error = useRouteError();
    return (
        <div className="flex bg-amber-200 justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold">404</h1>
            <h2 className="text-xl">Oops! Page Not Found</h2>
            <p className="text-slate-500">Sorry, Unexpeected Error has Occurred</p>
            <p className="font-bold size-8">{Error.statusText ||Error.message}</p>
        </div>
    )
}

export default ErrorPage;