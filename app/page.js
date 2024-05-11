import Image from "next/image";
import "./dist/css/styles.css";
// import "./dist/images/"
export default function Home() {
  return (
    <main class="" style={{marginTop:100}}>
      
      {/* <!-- CAROUSEL HOMEPAGE 3 --> */}
      <div class="homepage__property bg-light">
        <div class="homepage__property-carousel owl-carousel owl-theme">
          <div class="item">
            <a href="#">
              <div class="tc-image-caption4">
                <img src="images/800x1000.jpg" alt="img1" />
                <div class="caption">
                  <h6 class="text-uppercase text-white">walls property</h6>
                  <h2 class="text-capitalize">family house</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, assumenda!
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#">
              <div class="tc-image-caption4">
                <img src="images/800x1000.jpg" alt="img1" />
                <div class="caption">
                  <h6 class="text-uppercase text-white">walls property</h6>
                  <h2 class="text-capitalize">family house</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, assumenda!
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#">
              <div class="tc-image-caption4">
                <img src="images/800x1000.jpg" alt="img1" />
                <div class="caption">
                  <h6 class="text-uppercase text-white">walls property</h6>
                  <h2 class="text-capitalize">family house</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, assumenda!
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#">
              <div class="tc-image-caption4">
                <img src="images/800x1000.jpg" alt="img1" />
                <div class="caption">
                  <h6 class="text-uppercase text-white">walls property</h6>
                  <h2 class="text-capitalize">family house</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, assumenda!
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#">
              <div class="tc-image-caption4">
                <img src="images/800x1000.jpg" alt="img1" />
                <div class="caption">
                  <h6 class="text-uppercase text-white">walls property</h6>
                  <h2 class="text-capitalize">family house</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, assumenda!
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- END CAROUSEL HOMEPAGE 3 --> */}
      <div class="clearfix"></div>
      <div class="search__area bg-light">
        <div class="container">
          <div class="search__area-inner">
            <div class="row">
              <div class="col-6 col-lg-3 col-md-3">
                <div class="form-group">
                  <select class="wide select_option">
                    <option data-display="Property Status">
                      Property Status
                    </option>
                    <option>For Sale</option>
                    <option>For Rent</option>
                  </select>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-3">
                <div class="form-group">
                  <select class="wide select_option">
                    <option data-display="Property Type">Property Type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Land</option>
                    <option>Luxury</option>
                  </select>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-3">
                <div class="form-group">
                  <select class="wide select_option">
                    <option data-display="Area From">Area From</option>
                    <option>1500</option>
                    <option>1200</option>
                    <option>900</option>
                    <option>600</option>
                    <option>300</option>
                    <option>100</option>
                  </select>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-3">
                <div class="form-group">
                  <select class="wide select_option">
                    <option data-display="Locations">Locations</option>
                    <option>United Kingdom</option>
                    <option>American Samoa</option>
                    <option>Belgium</option>
                    <option>Canada</option>
                    <option>Delaware</option>
                    <option>Indonesia</option>
                    <option>Malaysia</option>
                    <option>Japan</option>
                  </select>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-3">
                <div class="form-group">
                  <select class="wide select_option">
                    <option data-display="Bedrooms">Bedrooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </select>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-3">
                <div class="form-group">
                  <select class="wide select_option">
                    <option data-display="Bathrooms">Bathrooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <div class="col-12 col-lg-3 col-md-3">
                <div class="form-group">
                  <div class="filter__price">
                    <input
                      class="price-range"
                      type="text"
                      name="my_range"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-3 col-md-3">
                <div class="form-group">
                  <button class="btn btn-primary text-uppercase btn-block">
                    search <i class="fa fa-search ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- POPULAR CITY --> */}
      <section class="popular__city-large">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-6 mx-auto">
              <div class="title__head">
                <h2 class="text-center text-capitalize">popular city</h2>
                <p class="text-center text-capitalize">
                  Find Properties In These Cities.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-3">
              {/* <!-- CARD IMAGE --> */}
              <a href="#">
                <div class="card__image-hover-style-v3">
                  <div class="card__image-hover-style-v3-thumb h-230">
                    <img
                      src="images/placeholder/home1.jpeg"
                      alt=""
                      class="img-fluid w-100"
                    />
                  </div>
                  <div class="overlay">
                    <div class="desc">
                      <h6 class="text-capitalize">australia</h6>
                      <p class="text-capitalize">70 properties</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-lg-3">
              {/* <!-- CARD IMAGE --> */}
              <a href="#">
                <div class="card__image-hover-style-v3">
                  <div class="card__image-hover-style-v3-thumb h-230">
                    <img
                      src="images/placeholder/home2.jpeg"
                      alt=""
                      class="img-fluid w-100"
                    />
                  </div>
                  <div class="overlay">
                    <div class="desc">
                      <h6 class="text-capitalize">australia</h6>
                      <p class="text-capitalize">70 properties</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-lg-3">
              {/* <!-- CARD IMAGE --> */}
              <a href="#">
                <div class="card__image-hover-style-v3">
                  <div class="card__image-hover-style-v3-thumb h-230">
                    <img
                      src="images/placeholder/home3.jpeg"
                      alt=""
                      class="img-fluid w-100"
                    />
                  </div>
                  <div class="overlay">
                    <div class="desc">
                      <h6 class="text-capitalize">australia</h6>
                      <p class="text-capitalize">70 properties</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-lg-3">
              {/* <!-- CARD IMAGE --> */}
              <a href="#">
                <div class="card__image-hover-style-v3">
                  <div class="card__image-hover-style-v3-thumb h-230">
                    <img
                      src="images/placeholder/home4.jpeg"
                      alt=""
                      class="img-fluid w-100"
                    />
                  </div>
                  <div class="overlay">
                    <div class="desc">
                      <h6 class="text-capitalize">australia</h6>
                      <p class="text-capitalize">70 properties</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END POPULAR CITY --> */}

      {/* <!-- FEATURED PROPERTIES --> */}
      <section class="featured__property bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-6 mx-auto">
              <div class="title__head">
                <h2 class="text-center text-capitalize">featured properties</h2>
                <p class="text-center text-capitalize">
                  handpicked exclusive properties by our team.
                </p>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="featured__property-carousel owl-carousel owl-theme">
                <div class="item">
                  {/* <!-- ONE --> */}
                  <div class="card__image card__box">
                    <div class="card__image-header h-250">
                      <div class="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        class="img-fluid w100 img-transition"
                      />
                      <div class="info">for sale</div>
                    </div>
                    <div class="card__image-body">
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 class="text-capitalize">vila in coral gables</h6>

                      <p class="text-capitalize">
                        <i class="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul class="list-inline card__content">
                        <li class="list-inline-item">
                          <span>
                            baths <br />
                            <i class="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            beds <br />
                            <i class="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            rooms <br />
                            <i class="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            area <br />
                            <i class="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          class="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul class="list-inline my-auto">
                        <li class="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul class="list-inline my-auto ml-auto">
                        <li class="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="item">
                  {/* <!-- TWO --> */}
                  <div class="card__image card__box">
                    <div class="card__image-header h-250">
                      <div class="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        class="img-fluid w100 img-transition"
                      />
                      <div class="info">for sale</div>
                    </div>
                    <div class="card__image-body">
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 class="text-capitalize">
                        Ample Apartment At Last Floor
                      </h6>

                      <p class="text-capitalize">
                        <i class="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul class="list-inline card__content">
                        <li class="list-inline-item">
                          <span>
                            baths <br />
                            <i class="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            beds <br />
                            <i class="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            rooms <br />
                            <i class="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            area <br />
                            <i class="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          class="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul class="list-inline my-auto">
                        <li class="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul class="list-inline my-auto ml-auto">
                        <li class="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="item">
                  {/* <!-- THREE --> */}
                  <div class="card__image card__box">
                    <div class="card__image-header h-250">
                      <div class="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        class="img-fluid w100 img-transition"
                      />
                      <div class="info">for sale</div>
                    </div>
                    <div class="card__image-body">
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 class="text-capitalize">Contemporary Apartment</h6>

                      <p class="text-capitalize">
                        <i class="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul class="list-inline card__content">
                        <li class="list-inline-item">
                          <span>
                            baths <br />
                            <i class="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            beds <br />
                            <i class="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            rooms <br />
                            <i class="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            area <br />
                            <i class="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          class="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul class="list-inline my-auto">
                        <li class="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul class="list-inline my-auto ml-auto">
                        <li class="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="item">
                  {/* <!-- FOUR --> */}
                  <div class="card__image card__box">
                    <div class="card__image-header h-250">
                      <div class="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        class="img-fluid w100 img-transition"
                      />
                      <div class="info">for sale</div>
                    </div>
                    <div class="card__image-body">
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 class="text-capitalize">Family Home For Sale</h6>

                      <p class="text-capitalize">
                        <i class="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul class="list-inline card__content">
                        <li class="list-inline-item">
                          <span>
                            baths <br />
                            <i class="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            beds <br />
                            <i class="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            rooms <br />
                            <i class="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            area <br />
                            <i class="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          class="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul class="list-inline my-auto">
                        <li class="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul class="list-inline my-auto ml-auto">
                        <li class="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="item">
                  {/* <!-- FIVE --> */}
                  <div class="card__image card__box">
                    <div class="card__image-header h-250">
                      <div class="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        class="img-fluid w100 img-transition"
                      />
                      <div class="info">for sale</div>
                    </div>
                    <div class="card__image-body">
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 class="text-capitalize">
                        <a href="#">184 Lexington Avenue</a>
                      </h6>

                      <p class="text-capitalize">
                        <i class="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul class="list-inline card__content">
                        <li class="list-inline-item">
                          <span>
                            baths <br />
                            <i class="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            beds <br />
                            <i class="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            rooms <br />
                            <i class="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            area <br />
                            <i class="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          class="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul class="list-inline my-auto">
                        <li class="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul class="list-inline my-auto ml-auto">
                        <li class="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="item">
                  {/* <!-- SIX --> */}
                  <div class="card__image card__box">
                    <div class="card__image-header h-250">
                      <div class="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        class="img-fluid w100 img-transition"
                      />
                      <div class="info">for sale</div>
                    </div>
                    <div class="card__image-body">
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 class="text-capitalize">Luxury Villa With Pool</h6>

                      <p class="text-capitalize">
                        <i class="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul class="list-inline card__content">
                        <li class="list-inline-item">
                          <span>
                            baths <br />
                            <i class="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            beds <br />
                            <i class="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            rooms <br />
                            <i class="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            area <br />
                            <i class="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          class="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul class="list-inline my-auto">
                        <li class="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul class="list-inline my-auto ml-auto">
                        <li class="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="card__image card__box">
                    <div class="card__image-header h-250">
                      <div class="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        class="img-fluid w100 img-transition"
                      />
                      <div class="info">for sale</div>
                    </div>
                    <div class="card__image-body">
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 class="text-capitalize">
                        The Citizen Apartment 5th Floor
                      </h6>

                      <p class="text-capitalize">
                        <i class="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul class="list-inline card__content">
                        <li class="list-inline-item">
                          <span>
                            baths <br />
                            <i class="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            beds <br />
                            <i class="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            rooms <br />
                            <i class="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            area <br />
                            <i class="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          class="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul class="list-inline my-auto ml-auto">
                        <li class="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="item">
                  {/* <!-- SEVEN --> */}
                  <div class="card__image card__box">
                    <div class="card__image-header h-250">
                      <div class="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        class="img-fluid w100 img-transition"
                      />
                      <div class="info">for sale</div>
                    </div>
                    <div class="card__image-body">
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 class="text-capitalize">Family Home For Sale</h6>

                      <p class="text-capitalize">
                        <i class="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul class="list-inline card__content">
                        <li class="list-inline-item">
                          <span>
                            baths <br />
                            <i class="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            beds <br />
                            <i class="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            rooms <br />
                            <i class="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span>
                            area <br />
                            <i class="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          class="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul class="list-inline my-auto">
                        <li class="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul class="list-inline my-auto ml-auto">
                        <li class="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END FEATURED PROPERTIES -->

    <!-- ABOUT --> */}
      <section class="home__about">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="title__leading">
                {/* <!-- <h6 class="text-uppercase">trusted By thousands</h6> --> */}
                <h2 class="text-capitalize">why choose use?</h2>
                <p>
                  The first step in selling your property is to get a valuation
                  from local experts. They will inspect your home and take into
                  account its unique features, the area and market conditions
                  before providing you with the most accurate valuation.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" class="btn btn-primary mt-3 text-capitalize">
                  read more <i class="fa fa-angle-right ml-3"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about__image">
                <div class="about__image-top">
                  <div class="about__image-top-hover">
                    <img src="images/600x400.jpg" alt="" class="img-fluid" />
                  </div>
                </div>
                <div class="about__image-bottom">
                  <div class="about__image-bottom-hover">
                    <img src="images/600x400.jpg" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END ABOUT --> */}

      <section class="projects__partner bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
              <div class="title__head">
                <h2 class="text-center text-capitalize">our partners</h2>
                <p class="text-center text-capitalize">
                  Brand Partners Successful Projects Trusted Many Clients Real
                  Estate
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="projects__partner-logo">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    <img
                      src="images/partner-logo6.png"
                      alt=""
                      class="img-fluid"
                    />
                  </li>
                  <li class="list-inline-item">
                    <img
                      src="images/partner-logo7.png"
                      alt=""
                      class="img-fluid"
                    />
                  </li>
                  <li class="list-inline-item">
                    <img
                      src="images/partner-logo8.png"
                      alt=""
                      class="img-fluid"
                    />
                  </li>
                  <li class="list-inline-item">
                    <img
                      src="images/partner-logo1.png"
                      alt=""
                      class="img-fluid"
                    />
                  </li>
                  <li class="list-inline-item">
                    <img
                      src="images/partner-logo5.png"
                      alt=""
                      class="img-fluid"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- TESTIMONIAL --> */}
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-6 mx-auto">
              <div class="title__head">
                <h2 class="text-center text-capitalize">what people says</h2>
                <p class="text-center text-capitalize">
                  people says about walls property.
                </p>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="testimonial owl-carousel owl-theme">
            {/* <!-- TESTIMONIAL --> */}
            <div class="item testimonial__block">
              <div class="testimonial__block-card bg-reviews">
                <p>
                  Thank you walls property help me, choice dream home We were
                  impressed with the build quality, Plus they are competitively
                  priced.
                </p>
              </div>
              <div class="testimonial__block-users">
                <div class="testimonial__block-users-img">
                  <img src="images/80x80.jpg" alt="" class="img-fluid" />
                </div>
                <div class="testimonial__block-users-name">
                  jhon doe <br />
                  <span>owner, digital agency</span>
                </div>
              </div>
            </div>
            {/* <!-- END TESTIMONIAL -->
          <!-- TESTIMONIAL --> */}
            <div class="item testimonial__block">
              <div class="testimonial__block-card bg-reviews">
                <p>
                  Thank you walls property help me, choice dream home We were
                  impressed with the build quality, Plus they are competitively
                  priced.
                </p>
              </div>
              <div class="testimonial__block-users">
                <div class="testimonial__block-users-img">
                  <img src="images/80x80.jpg" alt="" class="img-fluid" />
                </div>
                <div class="testimonial__block-users-name">
                  jhon doe <br />
                  <span>owner, digital agency</span>
                </div>
              </div>
            </div>
            {/* <!-- END TESTIMONIAL --> */}
            {/* <!-- TESTIMONIAL --> */}
            <div class="item testimonial__block">
              <div class="testimonial__block-card bg-reviews">
                <p>
                  Thank you walls property help me, choice dream home We were
                  impressed with the build quality, Plus they are competitively
                  priced.
                </p>
              </div>
              <div class="testimonial__block-users">
                <div class="testimonial__block-users-img">
                  <img src="images/80x80.jpg" alt="" class="img-fluid" />
                </div>
                <div class="testimonial__block-users-name">
                  jhon doe <br />
                  <span>owner, digital agency</span>
                </div>
              </div>
            </div>
            {/* <!-- END TESTIMONIAL --> */}
            {/* <!-- TESTIMONIAL --> */}
            <div class="item testimonial__block">
              <div class="testimonial__block-card bg-reviews">
                <p>
                  Thank you walls property help me, choice dream home We were
                  impressed with the build quality, Plus they are competitively
                  priced.
                </p>
              </div>
              <div class="testimonial__block-users">
                <div class="testimonial__block-users-img">
                  <img src="images/80x80.jpg" alt="" class="img-fluid" />
                </div>
                <div class="testimonial__block-users-name">
                  jhon doe <br />
                  <span>owner, digital agency</span>
                </div>
              </div>
            </div>
            {/* <!-- END TESTIMONIAL --> */}
            {/* <!-- TESTIMONIAL --> */}
            <div class="item testimonial__block">
              <div class="testimonial__block-card bg-reviews">
                <p>
                  Thank you walls property help me, choice dream home We were
                  impressed with the build quality, Plus they are competitively
                  priced.
                </p>
              </div>
              <div class="testimonial__block-users">
                <div class="testimonial__block-users-img">
                  <img src="images/80x80.jpg" alt="" class="img-fluid" />
                </div>
                <div class="testimonial__block-users-name">
                  jhon doe <br />
                  <span>owner, digital agency</span>
                </div>
              </div>
            </div>
            {/* <!-- END TESTIMONIAL --> */}
          </div>
        </div>
      </section>
      {/* <!-- END TESTIMONIAL --> */}

      {/* <!-- BLOG --> */}
      <section class="blog__home bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-6 mx-auto">
              <div class="title__head">
                <h2 class="text-center text-capitalize">lastest news</h2>
                <p class="text-center text-capitalize">
                  Find Of The Most Popular Real Estate Company All Around
                  Indonesia.
                </p>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="row">
            <div class="col-md-4">
              {/* <!-- BLOG  --> */}
              <div class="card__image">
                <div class="card__image-header h-250">
                  <img
                    src="images/placeholder/home5.jpeg"
                    alt=""
                    class="img-fluid w100 img-transition"
                  />
                  <div class="info">event</div>
                </div>
                <div class="card__image-body">
                  {/* <!-- <span class="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span> --> */}
                  <h6 class="text-capitalize">
                    <a href="/blog-single.html">Best Interior Oppertunity </a>
                  </h6>
                  <p class="mb-0">
                    Real estate festival is one of the famous feval for explain
                    to you how all this mistaolt deand praising pain wasnad I
                    will give complete
                  </p>
                </div>
                <div class="card__image-footer">
                  <figure>
                    <img
                      src="images/80x80.jpg"
                      alt=""
                      class="img-fluid rounded-circle"
                    />
                  </figure>
                  <ul class="list-inline my-auto">
                    <li class="list-inline-item">
                      <a href="#"> tom wilson </a>
                    </li>
                  </ul>
                  <ul class="list-inline my-auto ml-auto">
                    <li class="list-inline-item">
                      <a
                        href="/blog-single.html"
                        class="btn btn-sm btn-primary"
                      >
                        <small class="text-white">
                          read more <i class="fa fa-angle-right ml-1"></i>
                        </small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END BLOG --> */}
            </div>
            <div class="col-md-4">
              {/* <!-- BLOG  --> */}
              <div class="card__image">
                <div class="card__image-header h-250">
                  <img
                    src="images/placeholder/home6.jpeg"
                    alt=""
                    class="img-fluid w100 img-transition"
                  />
                  <div class="info">event</div>
                </div>
                <div class="card__image-body">
                  {/* <!-- <span class="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span> --> */}
                  <h6 class="text-capitalize">
                    <a href="#">Tips & Trick buy real estate </a>
                  </h6>
                  <p class="mb-0">
                    Real estate festival is one of the famous feval for explain
                    to you how all this mistaolt deand praising pain wasnad I
                    will give complete
                  </p>
                </div>
                <div class="card__image-footer">
                  <figure>
                    <img
                      src="images/80x80.jpg"
                      alt=""
                      class="img-fluid rounded-circle"
                    />
                  </figure>
                  <ul class="list-inline my-auto">
                    <li class="list-inline-item">
                      <a href="#"> tom wilson </a>
                    </li>
                  </ul>
                  <ul class="list-inline my-auto ml-auto">
                    <li class="list-inline-item">
                      <a href="#" class="btn btn-sm btn-primary">
                        <small class="text-white">
                          read more <i class="fa fa-angle-right ml-1"></i>
                        </small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END BLOG --> */}
            </div>
            <div class="col-md-4">
              {/* <!-- BLOG  --> */}
              <div class="card__image">
                <div class="card__image-header h-250">
                  <img
                    src="images/placeholder/home.jpeg"
                    alt=""
                    class="img-fluid w100 img-transition"
                  />
                  <div class="info">event</div>
                </div>
                <div class="card__image-body">
                  {/* <!-- <span class="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span> --> */}
                  <h6 class="text-capitalize">
                    <a href="#">Our Must Popular Deluxe House </a>
                  </h6>
                  <p class="mb-0">
                    Real estate festival is one of the famous feval for explain
                    to you how all this mistaolt deand praising pain wasnad I
                    will give complete
                  </p>
                </div>
                <div class="card__image-footer">
                  <figure>
                    <img
                      src="images/80x80.jpg"
                      alt=""
                      class="img-fluid rounded-circle"
                    />
                  </figure>
                  <ul class="list-inline my-auto">
                    <li class="list-inline-item">
                      <a href="#"> tom wilson </a>
                    </li>
                  </ul>
                  <ul class="list-inline my-auto ml-auto">
                    <li class="list-inline-item">
                      <a href="#" class="btn btn-sm btn-primary">
                        <small class="text-white">
                          read more <i class="fa fa-angle-right ml-1"></i>
                        </small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END BLOG --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END BLOG --> */}

      {/* <!-- CALL TO ACTION --> */}
      <section class="cta-v1 py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-9">
              <h2 class="text-uppercase text-white">
                Looking To Sell Or Rent Your Property?
              </h2>
              <p class="text-capitalize text-white">
                We Will Assist You In The Best And Comfortable Property Services
                For You
              </p>
            </div>
            <div class="col-lg-3">
              <a href="#" class="btn btn-light text-uppercase">
                request a quote <i class="fa fa-angle-right ml-3 arrow-btn"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END CALL TO ACTION --> */}

     
    </main>
  );
}
