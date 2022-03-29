import React from "react";

class Contacto extends React.Component{
    render (){
        return(
            <div>
                <div className="container mt-3">
        <div className="row justify-content-center">
                <div className="card" style="width: 71rem;">
                <h4 className="card-header  text-center"><i class="bi-pin-map-fill"></i> Ubícanos</h4>
                    <div className="card-body">
                        Nos ubicamos en Santa María Atarasquillo, Lerma, México
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.765731317081!2d-99.45866153560604!3d19.20543191151621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf3e07b6d3197%3A0x6dab8371b379acb7!2sUniversidad%20Tecnol%C3%B3gica%20del%20Valle%20de%20Toluca%20(UTVT)%20Unidad%20Acad%C3%A9mica%20de%20Capulhuac!5e0!3m2!1ses-419!2smx!4v1621802711090!5m2!1ses-419!2smx" width="1100" height="400" style="border:0;" allowfullscreen="" loading="lazy"/>
                </div>
        </div>
    </div>
            </div>
        )
    }
}

export default Contacto