import "./App.css";

function App() {
  return (
    <>
      {/* page */}
      <div className="h-screen w-screen bg-blue-700">
        {/* container */}
        <div className="container h-screen w-md m-auto flex flex-col justify-center items-start">
          {/* card */}
          <div className="h-70 w-full bg-blue-900 rounded-lg flex flex-col p-2 shadow-xl">
            {/* header card */}
            <div className="flex flex-row-reverse items-end px-6">
              <p className="text-6xl font-500 my-2">الرياض</p>
              <h2 className="mr-2">مايو 29 2024</h2>
            </div>
            {/*== header card ==*/}
            <hr className="my-3" />
            {/* body card */}
            <div className="h-full w-full flex flex-row px-6">
              <div className="h-full w-1/2"></div>
              <div className="h-full w-1/2 flex flex-col">
                <div className="flex flex-row-reverse justify-start items-center h-1/2 w-full">
                  <p className="text-8xl">38</p>
                  <div>{/* TODO: image */}</div>
                </div>
                <div className="flex flex-col justify-evenly items-end h-1/2 w-full">
                  <p className="text-xl">broken cloud</p>
                  <p className="text-sm">الصغرى: 38 | الكبرى: 38</p>
                </div>
              </div>
              <div>{/* TODO: image */}</div>
            </div>
            {/*== body card ==*/}
          </div>
          {/*== card ==*/}
          <button className="py-2 text-white rounded-lg cursor-pointer">
            انجليزي
          </button>
        </div>
        {/*== container ==*/}
      </div>
      {/* == page == */}
    </>
  );
}

export default App;
