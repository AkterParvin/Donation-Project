import { Outlet } from "react-router-dom";
import Nav from "./Nav";


const Root = () => {
    return (
       <section>
            <div className="max-w-7xl mx-auto">
                <Nav></Nav>
                <div >
                <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default Root;