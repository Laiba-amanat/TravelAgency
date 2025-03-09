
import img4 from '../../../assets/image/sub.png';

const SubscribeSection = () => {
  return (
    <div className="bg-blue-100 py-16 mt-5">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2 text-start lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Subscribe now to get useful traveling information.
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full sm:w-96 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
            />
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            adipisci sunt in, provident facere ipsam.
          </p>
        </div>

        {/* Right Section (Image) */}
      <div className="hidden sm:block lg:w-1/2 flex justify-center">
          <img
            src={img4}
            alt="Traveler"
            className="lg:max-w-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
