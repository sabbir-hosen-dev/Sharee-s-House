import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";

function TopNavber() {
  return (
    <div className=" bg-green-50">
      <div className="wrap flex  justify-between items-center ">
        <div className="flex gap-2">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61566035229823&mibextid=ZbWKwL"
            rel="noreferrer"
          >
            <BsFacebook className="text-blue-400 cursor-pointer" />
          </a>
          <a href="https://wa.me/01789282050" target="_blank" rel="noreferrer">
            <BsWhatsapp className=" cursor-pointer text-green-400" />
          </a>

          <a
            href="https://m.me/61566035229823"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookMessenger
              className=" cursor-pointer text-blue-400"
            />
          </a>
        </div>
        <div className="">Phone: 01789282050</div>
      </div>
    </div>
  );
}

export default TopNavber;
