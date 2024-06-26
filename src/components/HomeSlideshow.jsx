import HomeSlideshowItem from "./HomeSlideshowItem";

const HomeSlideshow = () => {
  return (
    <section className="home-slideshow">
      <div className="home-slideshow--slider">
        <HomeSlideshowItem num={1} />
        <HomeSlideshowItem num={2} />
        <HomeSlideshowItem num={3} />
      </div>
      <div className="home-slideshow--markers">
        <div className="home-slideshow--markers-marker" />
      </div>
    </section>
  );
};

export default HomeSlideshow;
