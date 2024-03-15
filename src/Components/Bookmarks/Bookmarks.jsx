import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = () => {
  return (
    <>

      <div className="md:w-1/3 border-2 border-red-300 m-3 p-5">

        <div className="font-bold py-4 mb-8 bg-gray-200 border text-blue-700 border-blue-700">
          <p>Spent time on read : <span></span></p>
        </div>

        <p className="font-bold text-2xl">Bookmarks Here</p>
        <Bookmark></Bookmark>

      </div>

    </>
  );
};

export default Bookmarks;