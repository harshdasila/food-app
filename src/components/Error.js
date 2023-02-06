import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <>
        <h1>{err.status} Opps!!</h1>
        <h2>Something went Wrong bhaiya 🫥  </h2>
        <h2>{err.data}</h2>
        </>
    )
}
export default Error;