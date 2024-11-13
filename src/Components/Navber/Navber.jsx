import { useEffect, useState } from "react";
import TopNavber from './TopNavber';
import BottomNav from './BottomNav';


function Navber() {
  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${fixed ? "nav-fixd" : " "}`}>
      {!fixed && <TopNavber />}
      <BottomNav data={fixed} />
    </header>
  );
}

export default Navber;
