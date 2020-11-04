import React, { Component } from 'react';
import img1 from '../assests/img1.jpeg'
import img2 from '../assests/img2.jpeg'
import img3 from '../assests/img3.jpeg'
import img4 from '../assests/img4.jpeg'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide container-fluid"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={img1}
                class="d-block w-100"
                alt="..."
                style={{ height: '35vh' }}
              />
            </div>
            <div class="carousel-item">
              <img
               src={img2}
                class="d-block w-100"
                alt="..."
                style={{ height: '35vh' }}
              />
            </div>
            <div class="carousel-item">
              <img
               src={img3}
                class="d-block w-100"
                alt="..."
                style={{ height: '35vh' }}
              />
            </div>
            <div class="carousel-item">
              <img
               src={img4}
                class="d-block w-100"
                alt="..."
                style={{ height: '35vh' }}
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
