import React from "react";

const Carousel =()=>{
    return(
        <div>
           <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="image/img-home.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="image/img-1.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="image/img-2.jpg" alt="Third slide"/>
    </div>
  </div>
</div>
        </div>
    )
}

export default Carousel