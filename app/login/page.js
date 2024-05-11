import React from "react";
import "../dist/css/styles.css";
function page() {
  return (
    <div style={{marginTop:35}}>
    
      <div class="clearfix"></div>

      {/* <!-- LISTING LIST --> */}
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              {/* <!-- Form Login --> */}
              <div class="card mx-auto" style={{ maxWidth: 380 }}>
                <div class="card-body">
                  <h4 class="card-title mb-4">Sign in</h4>
                  <form action="#">
                    <a
                      href="#"
                      class="btn btn-facebook btn-block mb-2 text-white"
                    >
                      <i class="fa fa-facebook"></i>  Sign in with
                      Facebook
                    </a>
                    <a href="#" class="btn btn-primary btn-block mb-4">
                      <i class="fa fa-google"></i>  Sign in with Google
                    </a>
                    <div class="form-group">
                      <input
                        class="form-control"
                        placeholder="Username"
                        type="text"
                      />
                    </div>
                    {/* <!-- form-group// --> */}
                    <div class="form-group">
                      <input
                        class="form-control"
                        placeholder="Password"
                        type="password"
                      />
                    </div>
                    {/* <!-- form-group// --> */}

                    <div class="form-group">
                      <a href="#" class="float-right">
                        Forgot password?
                      </a>
                      <label class="float-left custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          checked=""
                        />
                        <span class="custom-control-label"> Remember </span>
                      </label>
                    </div>
                    {/* <!-- form-group form-check .// --> */}
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Login
                      </button>
                    </div>
                    {/* <!-- form-group// --> */}
                  </form>
                </div>
                {/* <!-- card-body.// --> */}
              </div>
              {/* <!-- card .// --> */}

              <p class="text-center mt-4">
                Don't have account? <a href="#">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END LISTING LIST --> */}

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

      <a href="javascript:" id="return-to-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default page;
