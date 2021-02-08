import React from "react";

import hotel1 from "./../img/hotel-1.jpg";
import hotel2 from "./../img/hotel-2.jpg";
import hotel3 from "./../img/hotel-3.jpg";

import user1 from "./../img/user-3.jpg";
import user2 from "./../img/user-4.jpg";
import user3 from "./../img/user-5.jpg";
import user4 from "./../img/user-6.jpg";

import user5review from "./../img/user-1.jpg";
import user6review from "./../img/user-2.jpg";

import sprite from "./../img/sprite.svg";

class HotelView extends React.Component {
  render() {
    return (
      <main className="hotel-view">
        <div className="gallery">
          <figure className="gallery__figure">
            <img src={hotel1} alt="Hotel 1" className="gallery__photo" />
          </figure>
          <figure className="gallery__figure">
            <img src={hotel2} alt="Hotel 2" className="gallery__photo" />
          </figure>
          <figure className="gallery__figure">
            <img src={hotel3} alt="Hotel 2" className="gallery__photo" />
          </figure>
        </div>

        <div className="overview">
          <h1 className="overview__heading">Hotel Las Palmas</h1>

          <div className="overview__stars">
            <svg className="overview__icon-star">
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
          </div>

          <div className="overview__location">
            <svg className="overview__icon-location">
              <use xlinkHref={`${sprite}#icon-location-pin`} />
            </svg>
            <button className="btn-inline">Monterrey, México</button>
          </div>

          <div className="overview__rating">
            <div className="overview__rating-average">8.6</div>
            <div className="overview__rating-count">429 votes</div>
          </div>
        </div>

        <div className="detail">
          <div className="description">
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              nisi dignissimos debitis ratione sapiente saepe. Accusantium
              cumque, quas, ut corporis incidunt deserunt quae architecto
              voluptate.
            </p>

            <p className="paragraph">
              Accusantium cumque, quas, ut corporis incidunt deserunt quae
              architecto voluptate delectus, inventore iure aliquid aliquam.
            </p>

            <ul className="list">
              <li className="list__item">Close to the beach</li>
              <li className="list__item">Breakfast are included</li>
              <li className="list__item">Free airport shuttle</li>
              <li className="list__item">Free wifi in all rooms</li>
              <li className="list__item">Air conditioning and heating</li>
              <li className="list__item">Pets allowed</li>
              <li className="list__item">We speak all languages</li>
              <li className="list__item">Perfect for families</li>
            </ul>

            <div className="recommend">
              <div className="recommend__count">
                Daniel and other 3 friends recommend this hotel
              </div>
              <div className="recommend__friends">
                <img src={user1} alt="user 1" className="recommend__photo" />
                <img src={user2} alt="user 2" className="recommend__photo" />
                <img src={user3} alt="user 3" className="recommend__photo" />
                <img src={user4} alt="user 4" className="recommend__photo" />
              </div>
            </div>
          </div>

          <div className="user-reviews">
            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </blockquote>
              <figcaption className="review__user">
                <img
                  src={user5review}
                  alt="review 1"
                  className="review__photo"
                />
                <div className="review__user-box">
                  <p className="review__user-name">Portilla</p>
                  <p className="review__user-date">Feb 20th, 2019</p>
                </div>

                <div className="review__rating">7.8</div>
              </figcaption>
            </figure>

            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi.
              </blockquote>
              <figcaption className="review__user">
                <img
                  src={user6review}
                  alt="review 2"
                  className="review__photo"
                />
                <div className="review__user-box">
                  <p className="review__user-name">Valencia</p>
                  <p className="review__user-date">Apr 29th, 2021</p>
                </div>

                <div className="review__rating">9.2</div>
              </figcaption>
            </figure>

            <button className="btn-inline">
              Show all
              <span> &rarr;</span>
            </button>
          </div>
        </div>

        <div className="cta">
          <h2 className="cta__book-now">
            Good news, we have 4 free rooms for your selected date
          </h2>

          <button className="btn">
            <span className="btn__visible">Book now!</span>
            <span className="btn__invisible">Only 4 rooms left</span>
          </button>
        </div>
      </main>
    );
  }
}

export default HotelView;
