const Banner = () => {
  return (
    <div className="carousel w-full h-80 max-w-7xl mx-auto">
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/n1p7QTR/public-health-concept-illustration-114360-8989.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/fqskpdD/hug-concept-illustration-114360-25662.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/P6gFR8N/blood-donation-banner-template-23-2149170486.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/xgcwPzm/medical-care-concept-illustration-114360-4961.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
