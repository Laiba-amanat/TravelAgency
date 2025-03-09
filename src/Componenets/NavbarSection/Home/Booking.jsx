import img1 from '../../../assets/image/b1.jpg';
import img2 from '../../../assets/image/b2.jpg';
import img3 from '../../../assets/image/b3.jpg';
import img4 from '../../../assets/image/b4.jpg';

const destinations = [
  { id: 1, image: img1, location: "London", title: "Westminister Bridge", price: "$99", rating: "5.0 (3)", featured: true },
  { id: 2, image: img2, location: "Phuket", title: "Beautiful Sunrise, Thailand", price: "$99", rating: "Not rated", featured: true },
  { id: 3, image: img3, location: "Paris", title: "Holmen Lofoten, France", price: "$99", rating: "Not rated", featured: true },
  { id: 4, image: img4, location: "Bali", title: "Bali, Indonesia", price: "$99", rating: "Not rated", featured: true },
];

const BookingCard = ({ destination }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="relative">
        <img src={destination.image} alt={destination.title} className="w-full h-48 object-cover" />
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
          {destination.price}{" "}
          <span className="text-gray-500 font-normal">/per person</span>
        </p>
        <button className="mt-3 w-full bg-[#fbb552] text-white py-2 rounded-lg hover:bg-orange-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

const Booking = () => {
  return (
    <div>
      <div className=" pt-10 "
                style={{ display: 'flex', alignItems: 'center', textAlign: 'center',justifyContent:"center" }}>
                 <div style={{ marginRight: '10px', flexGrow: '0.04', width: '50px', height: '2px', backgroundColor: 'orange' }} />
                <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: 'ittalic' }}>Booking</h5>
                <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '50px', backgroundColor: 'orange' }} />
              </div>
              <h3 className='text-center mt-2 font-bold'>Explore Our Feature Tour</h3>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <BookingCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
