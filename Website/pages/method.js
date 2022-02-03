import Navbar from "../components/frame/Navbar.js";
import Footer from "../components/frame/Footer.js";
import Titlebar from "../components/frame/Titlebar.js";

export default function Method() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <Titlebar title="Method" />
            <Footer />
        </div>
    );
}
