import { FaRegUserCircle, FaSearch } from "react-icons/fa";
const Header = () => {
    return (
        <div >
           <nav className="md:flex justify-between items-center my-4 space-y-6 mx-3">
              <div>
                <h2 className="text-[#150B2B] text-3xl font-bold">Recipe Calories</h2>
              </div>
              <div>
                <ul className="flex space-x-12">
                    <li className="text-xl"><a href="">Home</a></li>
                    <li className="text-xl"><a href="">Recipes</a></li>
                    <li className="text-xl"><a href="">About</a></li>
                </ul>
              </div>
              <div className="flex items-center">
            

              <label className="relative ">
                <input
                  type="text"
                  className="bg-slate-100 rounded-xl pl-10 pr-10 py-3 text-red-300 mr-2"
                  placeholder="Search"
                />
                <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-green-400" />
              </label>

                 <div className="bg-green-500 h-11 w-11 flex items-center justify-center rounded-full">
                     <a href="" className="text-2xl">    < FaRegUserCircle /></a>
                 </div>
              </div>
           </nav>
        </div>
    );
};

export default Header;