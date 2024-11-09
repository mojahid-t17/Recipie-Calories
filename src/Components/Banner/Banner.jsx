import './banner.css';
const Banner = () => {
    return (
        <div>
          <div className='banner text-white pt-14 space-y-6 block '>
               <h1 className='md:text-5xl text-2xl text-center font-bold mt-14'>Discover exceptional cooking <br /> class tailored for you!</h1>
               <p className='text-center md:mx-52'>
               Enhance your cooking skills with our personalized class! Learn new techniques and create delicious dishes in a fun, hands-on environment.Enhance your cooking skills with our personalized class! Learn new techniques and create delicious dishes in a fun, hands-on environment.
               </p>
               <div className='text-center'>
               <button className="btn px-3 py-4 rounded
                font-bold bg-emerald-500">Explore Now</button>
                <button className='border  px-4 py-3 rounded-lg ml-4 hover:bg-emerald-500'>Our Feedback</button>
                
               </div>
          </div>
        </div>
    );
};

export default Banner;