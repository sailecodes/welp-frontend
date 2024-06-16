import { CiStar } from "react-icons/ci";

const Restaurants = () => {
  return (
    <main className="restaurants">
      <RestaurantsItem />
    </main>
  );
};

const RestaurantsItem = () => {
  return (
    <div className="restaurants-item">
      <header className="restaurants-item--name">Starbucks</header>
      <div className="restaurants-item--reviews">
        <RestaurantsItemReviewStar />
        <RestaurantsItemReviewStar />
        <RestaurantsItemReviewStar />
      </div>
      <div className="restaurants-item--food-types"></div>
      <div className="restaurants-item--food-accessibility"></div>
    </div>
  );
};

const RestaurantsItemReviewStar = () => {
  return (
    <div className="restaurants-item-review-star">
      <CiStar />
    </div>
  );
};

export default Restaurants;
