import { destinations } from "../../../data";

const BookingCard = () => {
  return destinations.map((destination) => (
    <div key={destination.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-48 object-cover"
        />
        {destination.featured && (
          <span className="absolute bottom-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <span>📍 {destination.location}</span>
          <span>⭐ {destination.rating}</span>
        </div>
        <h3 className="text-lg font-semibold mt-1">{destination.title}</h3>
        <p className="text-orange-600 font-bold mt-2">
          {destination.price} <span className="text-gray-500 font-normal">/per person</span>
        </p>
        <button className="mt-3 w-full bg-[#fbb552] text-white py-2 rounded-lg hover:bg-orange-600">
          Book Now
        </button>
      </div>
    </div>
  ));
};

const BookingSection = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/images/img1.jpg"
          alt="Background"
          className="object-cover w-full h-[400px]"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-black">
          <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">Booking Now</h1>
          <h1 className="text-xl font-bold mt-2 text-center">Traveling opens the door to creating memories</h1>
          <p className='w-[700px] mt-3 lg:block hidden text-center font-semibold text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates.</p>
          <p className='block lg:hidden mt-3 text-center font-semibold text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates.</p>
        </div>
      </div>
      <div className='pt-10 flex items-center justify-center text-center'>
        <div className="w-[50px] h-[2px] bg-orange-500" />
        <h5 className="text-orange-500 mx-4 text-5xl italic">Booking</h5>
        <div className="w-[50px] h-[2px] bg-orange-500" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <BookingCard />
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
