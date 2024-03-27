import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return (<div>
        <h1> Oppppssss!!</h1>
        <p> Something went wrong.</p>
        <p>{ err.status+ '!'}</p>
        <p>{ err.statusText}</p>
    </div>)
}
export default Error;