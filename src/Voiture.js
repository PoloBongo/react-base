import React from "react";

function Voiture({marque, couleur}) {
    return(
        <div>
            {marque} et {couleur}
        </div>
    );
}

export default Voiture;