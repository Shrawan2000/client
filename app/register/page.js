import React from "react";
import "../dist/css/styles.css";
function page() {
  return (
    <div style={{marginTop:35}}>
      
      <div class="clearfix"></div>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="card mx-auto" style={{ maxWidth: 520 }}>
                <div class="card-body">
                  <h4 class="card-title mb-4">Register</h4>
                  <form action="#">
                    <div class="form-row">
                      <div class="col form-group">
                        <label>First name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        />
                      </div>
                      <div class="col form-group">
                        <label>Last name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" placeholder="" />
                      <small class="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div class="form-group">
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          checked=""
                          type="radio"
                          name="gender"
                          value="option1"
                        />
                        <span class="custom-control-label"> Male </span>
                      </label>
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          type="radio"
                          name="gender"
                          value="option2"
                        />
                        <span class="custom-control-label"> Female </span>
                      </label>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-lg-6">
                        <label>City</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="form-group col-lg-6">
                        <label>Country</label>
                        <select class="form-control">
                          <option>Choose...</option>
                          <option>Uzbekistan</option>
                          <option>Russia</option>
                          <option selected="">United States</option>
                          <option>India</option>
                          <option>Afganistan</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Create password</label>
                        <input class="form-control" type="password" />
                      </div>
                      <div class="form-group col-md-6">
                        <label>Repeat password</label>
                        <input class="form-control" type="password" />
                      </div>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Register
                      </button>
                    </div>
                    <div class="form-group">
                      <label class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          checked=""
                        />
                        <span class="custom-control-label">
                          I am agree with <a href="#">terms and contitions</a>
                        </span>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <a href="javascript:" id="return-to-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default page;
