import Card from "./Card";
import {
  AiOutlineRight, AiOutlineLeft
} from 'react-icons/ai'

const Section = ({ genre, videos, rowID }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="pt-5 pr-10 pl-10">
      <h3>{genre}</h3>
      <div className="relative flex items-center group">
        <AiOutlineLeft
          onClick={slideLeft}
          className="text-white left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full flex gap-3 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {videos.map((video) => (
            <a key={video.id} href={`/video/${video.slug}`}>
              <Card thumbnail={video.thumbnail} />
            </a>
          ))}
        </div>
        <AiOutlineRight
          onClick={slideRight}
          className=" text-white right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Section;
