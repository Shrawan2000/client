import React from "react";
import "../dist/css/styles.css";
function page() {
  return (
    <div style={{ marginTop: 35 }}>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="products__filter mb-30">
                <div class="products__filter__group">
                  <div class="products__filter__header">
                    <h5 class="text-center text-capitalize">property filter</h5>
                  </div>
                  <div class="products__filter__body">
                    <div class="form-group">
                      <select class="wide select_option">
                        <option data-display="Property Status">
                          Property Status
                        </option>
                        <option>For Sale</option>
                        <option>For Rent</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select class="wide select_option">
                        <option data-display="Property Type">
                          Property Type
                        </option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Land</option>
                        <option>Luxury</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select class="wide select_option">
                        <option data-display="Area From">Area From </option>
                        <option>1500</option>
                        <option>1200</option>
                        <option>900</option>
                        <option>600</option>
                        <option>300</option>
                        <option>100</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select class="wide select_option">
                        <option data-display="Locations">Locations</option>
                        <option>United Kingdom</option>
                        <option>American Samoa</option>
                        <option>Belgium</option>
                        <option>Canada</option>
                        <option>Delaware</option>
                      </select>
                    </div>
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
                    <div class="form-group">
                      <div class="form-group">
                        <select class="wide select_option">
                          <option data-display="Bathrooms">Bathrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="mb-3">Price range</label>
                      <div class="filter__price">
                        <input
                          class="price-range"
                          type="text"
                          name="my_range"
                          value=""
                        />
                      </div>
                    </div>

                    <div class="form-group mb-0 mt-2">
                      <a
                        class="btn btn-outline-primary btn-block text-capitalize advanced-filter"
                        data-toggle="collapse"
                        href="#multiCollapseExample1"
                        aria-controls="multiCollapseExample1"
                      >
                        <i class="fa fa-plus-circle"></i> advanced filter
                      </a>

                      <div
                        class="collapse multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div class="advancedfilter">
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox2" type="checkbox" />
                            <label
                              for="checkbox2"
                              class="label-brand text-capitalize"
                            >
                              Air Conditioning
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox3" type="checkbox" />
                            <label
                              for="checkbox3"
                              class="label-brand text-capitalize"
                            >
                              Swiming Pool
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox4" type="checkbox" />
                            <label
                              for="checkbox4"
                              class="label-brand text-capitalize"
                            >
                              Central Heating
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox5" type="checkbox" />
                            <label
                              for="checkbox5"
                              class="label-brand text-capitalize"
                            >
                              Spa & Massage
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox6" type="checkbox" />
                            <label
                              for="checkbox6"
                              class="label-brand text-capitalize"
                            >
                              Pets Allow
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox7" type="checkbox" />
                            <label
                              for="checkbox7"
                              class="label-brand text-capitalize"
                            >
                              Air Conditioning
                            </label>
                          </div>

                          <div class="checkbox checkbox-primary">
                            <input id="checkbox8" type="checkbox" />
                            <label
                              for="checkbox8"
                              class="label-brand text-capitalize"
                            >
                              Gym
                            </label>
                          </div>

                          <div class="checkbox checkbox-primary">
                            <input id="checkbox9" type="checkbox" />
                            <label
                              for="checkbox9"
                              class="label-brand text-capitalize"
                            >
                              Alarm
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox10" type="checkbox" />
                            <label
                              for="checkbox10"
                              class="label-brand text-capitalize"
                            >
                              Window Covering
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox11" type="checkbox" />
                            <label
                              for="checkbox11"
                              class="label-brand text-capitalize"
                            >
                              Free WiFi
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox12" type="checkbox" />
                            <label
                              for="checkbox12"
                              class="label-brand text-capitalize"
                            >
                              Car Parking
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="products__filter__footer">
                    <div class="form-group mb-0">
                      <button class="btn btn-primary text-capitalize btn-block">
                        <i class="fa fa-search ml-1"></i> search property{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" wrapper__list__category">
                <div class="widget widget__archive">
                  <div class="widget__title">
                    <h5 class="text-dark mb-0 text-center">
                      Categories Property
                    </h5>
                  </div>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="text-capitalize">
                        apartement
                        <span class="badge badge-primary">14</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-capitalize">
                        villa
                        <span class="badge badge-primary">4</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-capitalize">
                        family house
                        <span class="badge badge-primary">2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-capitalize">
                        modern villa
                        <span class="badge badge-primary">8</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-capitalize">
                        town house
                        <span class="badge badge-primary">10</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-capitalize">
                        office
                        <span class="badge badge-primary">12</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="download mb-0">
                <h5 class="text-center text-capitalize">
                  Property Attachments
                </h5>
                <div class="download__item">
                  <a href="#" target="_blank">
                    <i class="fa fa-file-pdf-o mr-3" aria-hidden="true"></i>
                    Download Document.Pdf
                  </a>
                </div>
                <div class="download__item">
                  <a href="#" target="_blank">
                    <i class="fa fa-file-word-o mr-3" aria-hidden="true"></i>
                    Presentation 2016-17.Doc
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-12">
                  <div class="tabs__custom-v2">
                    <ul class="nav nav-pills myTab" role="tablist">
                      <li class="list-inline-item mr-auto">
                        <span class="title-text">Sort by</span>
                        <div class="btn-group">
                          <a
                            href="javascript:void(0)"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Based Properties
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)">
                              Low to High Price
                            </a>
                            <a class="dropdown-item" href="javascript:void(0)">
                              High to Low Price{" "}
                            </a>
                            <a class="dropdown-item" href="javascript:void(0)">
                              Sell Properties
                            </a>

                            <a class="dropdown-item" href="javascript:void(0)">
                              Rent Properties
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link pills-tab-one"
                          data-toggle="pill"
                          href="#pills-tab-one"
                          role="tab"
                          aria-controls="pills-tab-one"
                          aria-selected="true"
                        >
                          <span class="fa fa-th-list"></span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link active pills-tab-two"
                          data-toggle="pill"
                          href="#pills-tab-two"
                          role="tab"
                          aria-controls="pills-tab-two"
                          aria-selected="false"
                        >
                          <span class="fa fa-th-large"></span>
                        </a>
                      </li>
                    </ul>

                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade"
                        id="pills-tab-one"
                        role="tabpanel"
                        aria-labelledby="pills-tab-one"
                      >
                        <div class="row">
                          <div class="col-lg-12">
                            {/* hello */}
                            <div class="card__image card__box-v1">
                              <div class="row no-gutters">
                                <div class="col-md-4 col-lg-3 col-xl-4">
                                  <div class="card__image__header h-250">
                                    <a href="#">
                                      <div class="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        class="img-fluid w100 img-transition"
                                      />
                                      <div class="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div class="card__image__body">
                                    <span class="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">vila in coral gables</a>
                                    </h6>
                                    <div class="card__image__body-desc">
                                      <p class="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div class="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        class="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul class="list-inline my-auto">
                                      <li class="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul class="list-inline my-auto ml-auto price">
                                      <li class="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card__image card__box-v1">
                              <div class="row no-gutters">
                                <div class="col-md-4 col-lg-3 col-xl-4">
                                  <div class="card__image__header h-250">
                                    <a href="#">
                                      <div class="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="images/placeholder/home1.jpeg"
                                        alt=""
                                        class="img-fluid w100 img-transition"
                                      />
                                      <div class="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div class="card__image__body">
                                    <span class="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">
                                        Ample Apartment At Last Floor
                                      </a>
                                    </h6>
                                    <div class="card__image__body-desc">
                                      <p class="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div class="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        class="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul class="list-inline my-auto">
                                      <li class="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul class="list-inline  my-auto ml-auto price">
                                      <li class="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card__image card__box-v1">
                              <div class="row no-gutters">
                                <div class="col-md-4 col-lg-3 col-xl-4">
                                  <div class="card__image__header h-250">
                                    <a href="#">
                                      <div class="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        class="img-fluid w100 img-transition"
                                      />
                                      <div class="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div class="card__image__body">
                                    <span class="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">
                                        Ample Apartment At Last Floor
                                      </a>
                                    </h6>
                                    <div class="card__image__body-desc">
                                      <p class="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div class="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        class="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul class="list-inline my-auto">
                                      <li class="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul class="list-inline  my-auto ml-auto price">
                                      <li class="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card__image card__box-v1">
                              <div class="row no-gutters">
                                <div class="col-md-4 col-lg-3 col-xl-4">
                                  <div class="card__image__header h-250">
                                    <a href="#">
                                      <div class="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        class="img-fluid w100 img-transition"
                                      />
                                      <div class="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div class="card__image__body">
                                    <span class="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">Family Home For Sale</a>
                                    </h6>
                                    <div class="card__image__body-desc">
                                      <p class="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div class="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        class="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul class="list-inline my-auto">
                                      <li class="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul class="list-inline  my-auto ml-auto price">
                                      <li class="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card__image card__box-v1">
                              <div class="row no-gutters">
                                <div class="col-md-4 col-lg-3 col-xl-4">
                                  <div class="card__image__header h-250">
                                    <a href="#">
                                      <div class="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        class="img-fluid w100 img-transition"
                                      />
                                      <div class="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div class="card__image__body">
                                    <span class="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">Luxury Villa With Pool</a>
                                    </h6>
                                    <div class="card__image__body-desc">
                                      <p class="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div class="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        class="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul class="list-inline my-auto">
                                      <li class="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul class="list-inline  my-auto ml-auto price">
                                      <li class="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card__image card__box-v1">
                              <div class="row no-gutters">
                                <div class="col-md-4 col-lg-3 col-xl-4">
                                  <div class="card__image__header h-250">
                                    <a href="#">
                                      <div class="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        class="img-fluid w100 img-transition"
                                      />
                                      <div class="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div class="card__image__body">
                                    <span class="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">184 Lexington Avenue</a>
                                    </h6>
                                    <div class="card__image__body-desc">
                                      <p class="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div class="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        class="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul class="list-inline my-auto">
                                      <li class="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul class="list-inline  my-auto ml-auto price">
                                      <li class="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card__image card__box-v1">
                              <div class="row no-gutters">
                                <div class="col-md-4 col-lg-3 col-xl-4">
                                  <div class="card__image__header h-250">
                                    <a href="#">
                                      <div class="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        class="img-fluid w100 img-transition"
                                      />
                                      <div class="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div class="card__image__body">
                                    <span class="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">
                                        The Citizen Apartment 5th Floor
                                      </a>
                                    </h6>
                                    <div class="card__image__body-desc">
                                      <p class="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div class="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        class="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul class="list-inline my-auto">
                                      <li class="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul class="list-inline  my-auto ml-auto price">
                                      <li class="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div
                        class="tab-pane fade show active"
                        id="pills-tab-two"
                        role="tabpanel"
                        aria-labelledby="pills-tab-two"
                      >
                        <div class="row">
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> Citra Garden Estate</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home5.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> Ample Apartment At Last Floor</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home3.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> Contemporary Apartment</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home5.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> Citra Garden Estate</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> Family Home For Sale</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home1.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> Citra Garden Estate</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home8.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> Luxury Villa With Pool</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home2.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> Citra Garden Estate</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home1.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> 184 Lexington Avenue</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home2.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> The Citizen Apartment 5th Floor</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home3.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6>Ample Apartment At Last Floor</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home4.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div class="card__image-hover h-250">
                                <div class="card__image-hover-overlay">
                                  <div class="listing-badges">
                                    <span class="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div class="card__image-content">
                                    <div class="card__image-content-desc">
                                      <h6> Contemporary Apartment</h6>
                                      <p class="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul class="list-inline card__hidden-content">
                                      <li class="list-inline-item">
                                        Baths
                                        <span>
                                          <i class="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Beds
                                        <span>
                                          <i class="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Rooms
                                        <span>
                                          <i class="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li class="list-inline-item">
                                        Area
                                        <span>
                                          <i class="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home6.jpeg"
                                    class="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div class="cleafix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
