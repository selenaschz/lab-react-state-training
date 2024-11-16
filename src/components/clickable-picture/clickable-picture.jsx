import { useState } from "react";
import onGlasses from "../../assets/images/maxence.png";
import offGlasses from "../../assets/images/maxence-glasses.png";

function ClickablePicture({ className = "" }) {
    const [src, setSrc] = useState(onGlasses);
    const handleClick = () => {
        setSrc( src === onGlasses ? offGlasses : onGlasses);
    };
     return (
        <div className={`d-flex justify-content-center ${className}`}>
            <img className="img-fluid w-50" src={src} alt="image" onClick={handleClick} />
        </div>
     );
}

 export default ClickablePicture;