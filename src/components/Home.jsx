import React from 'react';
import SUV from '../../public/SUV.png'
import CLE from '../../public/merc.png'
import BMW3 from '../../public/320d.png'
import BMW5 from '../../public/520i.png'
import Astra from '../../public/astra.png'
import Bayon from '../../public/bayon.png'
import Corolla from '../../public/corolla.png'
import I20 from '../../public/i20.png'
import Footer from './Footer';
import SearchBar from '../assets/Searchbar';


const CarRentSection = () => {
  const cars = [
    { brand: 'Toyota', model: 'Corolla', imageUrl: Corolla },
    { brand: 'Hyundai', model: 'Bayon', imageUrl: Bayon },
    { brand: 'Hyundai', model: 'i20', imageUrl: I20 },
    { brand: 'BMW', model: '320d', imageUrl: BMW3 },
    { brand: 'BMW', model: '520i', imageUrl: BMW5 },
    { brand: 'Opel', model: 'Astra', imageUrl: Astra },
  ];
  return (
    
    <section className="relative">
      
      <div className="flex md:justify-between p-8">
        
        <div className="">
          {/* <span className='text-2xl'>Start your journey with</span> <br />
          <span className='text-6xl font-rounded font-bold'>Best Choice</span> <br />
          <span className='text-2xl font-bold'>Car Rental</span> <br />
          <span className="text-orange-500 text-3xl font-bold">For You</span> */}
          <SearchBar />
          
          
          
        </div>

        {/* Car Image */}
        <div className="relative mt-8 md:mt-0">
          <div
            className="absolute -right-8 -top-10 bg-orange-500 w-[580px] h-[580px]"
            style={{
              borderRadius: '100% 0 100% 100%', // Top-left is sharp, others are rounded
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' // Adjust the sharp corner placement
            }}
          >
          
          </div>
          <img
            className="relative top-8 "
            src={SUV}
            alt="Car"
          />
            
        </div>
      </div> 

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between space-x-10">
        <div className="mt-8 ml-16 flex justify-end ">
          <img
            src={CLE}
            alt="SUV"
            className="w-[600px]"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">
            About <span className="text-orange-500">US</span>
          </h2>
          <p className="text-gray-500 mr-4 text-xl">
          Welcome to our platform, your go-to resource for finding trusted car rental companies across Morocco. We’re here to make car rentals simple and reliable, connecting you with top providers to ensure a smooth travel experience. Our mission is to expand this service worldwide, helping travelers everywhere find the right car, anytime, anywhere. Whether you’re exploring locally or planning your next international adventure, we’re here to make your journey easier.
          </p>
        </div>
        

      </div>
      <div className="bg-gray-800 text-white p-8 flex flex-col items-center rounded-t-md">
        
        <h2 className="text-3xl font-semibold mb-2">Search a car near you</h2>
        <p className="text-gray-400 mb-6">Whenever you are, there is a car</p>

        
        <div className="flex space-x-4">
          
          <input 
          className="p-3 w-96 bg-white text-gray-700 rounded-md outline-none"
          placeholder='AirPort, Train Station, City ...'
          />
          <button className="p-3 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition">
            SEARCH NOW
          </button>
        </div>
        
      </div>
      
    <Footer/>
    </section>
    
  );
};

export default CarRentSection;
