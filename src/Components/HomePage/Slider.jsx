

import "../../styles/slider.css";

export default function Slider() {
  return (
    <>
<div class="container">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
      <li data-target="#myCarousel" data-slide-to="5"></li>
      <li data-target="#myCarousel" data-slide-to="6"></li>
    </ol>

    <div class="carousel-inner">
      <div class="item active">
        <img src="https://image01.realme.net/general/20220223/1645616420545.jpg" alt="Los Angeles" />
      </div>

      <div class="item">
        <img src="https://image01.realme.net/general/20220223/1645609869986.jpg" alt="Chicago" />
      </div>
    
      <div class="item">
        <img src="https://image01.realme.net/general/20220223/1645594784465.jpg" alt="New york" />
      </div>

      <div class="item">
        <img src="https://image01.realme.net/general/20220222/1645503314531.jpg" alt="New york" />
      </div>

      <div class="item">
        <img src="https://image01.realme.net/general/20211222/1640196988019.jpg" alt="New york" />
      </div>

      <div class="item">
        <img src="https://image01.realme.net/general/20211230/1640840664469.jpg" alt="New york" />
      </div>

      <div class="item">
        <img src="https://image01.realme.net/general/20211224/1640322758041.jpg" alt="New york" />
      </div>
    </div>


    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>



     
    </>
  );
}
