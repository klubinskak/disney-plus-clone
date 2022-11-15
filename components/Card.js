const Card = ({ thumbnail }) => {
  return (
    <div className="w-[150px] hover:scale-105 duration-500 ease-in-out md:w-[200px] lg:w-[230px] inline-block cursor-pointer relative z-0">
    <img className="rounded hover:border-4 w-full h-auto block z-10 mt-2 ml-2 mr-2" src={thumbnail.url} alt={thumbnail.title} />
    </div>
  )
};

export default Card;
