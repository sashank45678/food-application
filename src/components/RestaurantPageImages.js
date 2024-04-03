const RestaurantPageImages = ({ images }) => {
  return (
    <div className="w-11/12 h-80 px-11">
        <h1 className="text-3xl font-bold px-2 py-2 ml-9">What's on your mind?</h1>
      <div className="px-3 mx-3 py-2  border-gray-400 border-b-2 ">
        <div className="flex flex-row overflow-x-scroll no-scrollbar">
          {images.map((image, index) => {
            return (
              <img
                className="w-72 h-60"
                key={image.id}
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  image.imageId
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RestaurantPageImages;
