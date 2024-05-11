import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-soft">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="images/logo-blue-stiky.png" alt="" class="img-fluid" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav99"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_nav99">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
              
               <a class="nav-link active" href="/">
                  Home
                </a>
               
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/properties">
                  Properties
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            <ul class="navbar-nav">
              <li>
                <a
                  href="#"
                  class="btn btn-primary text-capitalize rounded-pill"
                >
                  <i class="fa fa-plus-circle mr-1"></i> Add Listing
                </a>
              </li>
            </ul>

            <div class="top-search navigation-shadow">
              <div class="container">
                <div class="input-group">
                  <form action="#">
                    <div class="row no-gutters mt-3">
                      <div class="col">
                        <input
                          class="form-control border-secondary border-right-0 rounded-0"
                          type="search"
                          value=""
                          placeholder="Search "
                          id="example-search-input4"
                        />
                      </div>
                      <div class="col-auto">
                        <a
                          class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                          href="/search-result.html"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Page;
