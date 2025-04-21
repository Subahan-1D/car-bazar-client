
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
const ContactCard = ({ contactData }) => {
  const { name, phoneNumber, email, location, time , currentLocation , times } = contactData;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
      {/* Header */}
      <div className="mb-4 border-b pb-2 border-gray-100">
        <h2 className="text-xl font-bold text-blue-700 tracking-wide uppercase text-center">
          {name}
        </h2>
      </div>

      {/* Body Content */}
      <div className="space-y-3 text-gray-600 text-[15px]">
        {phoneNumber && (
          <div className="flex items-center gap-2">
            <FaPhone className="w-5 h-5 text-blue-500" />
            <span>{phoneNumber}</span>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-2">
            <MdEmail className="w-5 h-5 text-blue-500" />
            <span>{email}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-2">
            <FaLocationDot className="w-5 h-5 text-blue-500" />
            <span>{location}</span>
          </div>
        )}
        {currentLocation && <div className="flex items-center gap-2">
            <FaLocationDot className="w-5 h-5 text-blue-500" />
            <span>{currentLocation}</span>
          </div> }
        {time && (
          <div className="flex items-center gap-2">
            <IoIosTime className="w-5 h-5 text-blue-500" />
            <span>{time}</span>
          </div>
        )}
          {times && (
          <div className="flex items-center gap-2">
            <IoIosTime className="w-5 h-5 text-blue-500" />
            <span>{times}</span>
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactCard;
