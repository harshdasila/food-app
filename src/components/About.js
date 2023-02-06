import { Outlet } from "react-router-dom";

const About = () =>{
    return(
        <>
        <h1>This is my about section</h1>
        <Outlet/>
        </>
    )
}
export default About;