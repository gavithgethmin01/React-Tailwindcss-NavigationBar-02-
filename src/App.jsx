import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen w-full relative bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">Section 1</h1>
        <p>
          At felis fusce, vitae pretium eget, ornare vel dignissim varius
          pulvinar eget. Elementum fermentum lacus nec odio, cursus dolor, mus.
          Pellentesque, neque diam bibendum platea finibus lacus faucibus
          convallis tristique. Urna, rutrum vivamus tristique vestibulum
          dignissim amet eros laoreet magnis libero lacus. Amet, hac, phasellus
          pellentesque rhoncus curabitur rhoncus metus.
        </p>
      </div>
      <div className=" min-h-screen w-full relative bg-gradient-to-r from-blue-700 via-green-800 to-yellow-500 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">Section 2</h1>
        <p>
          At felis fusce, vitae pretium eget, ornare vel dignissim varius
          pulvinar eget. Elementum fermentum lacus nec odio, cursus dolor, mus.
          Pellentesque, neque diam bibendum platea finibus lacus faucibus
          convallis tristique. Urna, rutrum vivamus tristique vestibulum
          dignissim amet eros laoreet magnis libero lacus. Amet, hac, phasellus
          pellentesque rhoncus curabitur rhoncus metus.
        </p>
      </div>
      <div className=" min-h-screen w-full relative bg-gradient-to-r from-green-600 via-pink-500 to-red-500 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">Section 3</h1>
        <p>
          At felis fusce, vitae pretium eget, ornare vel dignissim varius
          pulvinar eget. Elementum fermentum lacus nec odio, cursus dolor, mus.
          Pellentesque, neque diam bibendum platea finibus lacus faucibus
          convallis tristique. Urna, rutrum vivamus tristique vestibulum
          dignissim amet eros laoreet magnis libero lacus. Amet, hac, phasellus
          pellentesque rhoncus curabitur rhoncus metus.
        </p>
      </div>
    </>
  );
}

export default App;
