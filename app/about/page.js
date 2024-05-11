import React from "react";
import "../dist/css/styles.css"

function page() {
  return (
    <div style={{marginTop:35}}>
      <section class="home__about bg-light">
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
    </div>
  );
}

export default page;
