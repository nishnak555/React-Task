import { useState } from "react";
import "./Accordian.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordian = () => {
  const [arrow, setarrow] = useState(false);

  const handleArrowClick = () => {
    setarrow(!arrow);
  };

  return (
    <div className={arrow ? "accordianMainContainer" : "hideContent"}>
      <div
        className={
          arrow ? "accordianUpperSection" : "accordianUpperSection-show"
        }
      >
        <p>Accordion 1</p>
        {arrow ? (
          <IoIosArrowUp
            onClick={handleArrowClick}
            cursor="pointer"
            fontSize="25px"
          />
        ) : (
          <IoIosArrowDown
            onClick={handleArrowClick}
            cursor="pointer"
            fontSize="25px"
          />
        )}
      </div>

      <div className={arrow ? "accordianLowerSection" : "hideContent-close"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          error quae. Magni numquam cumque in exercitationem maxime ut culpa,
          facilis voluptate corporis, inventore iure eveniet. Aut rerum
          laudantium accusantium voluptates, doloribus totam adipisci quaerat
          ipsum!
          
        </p>
      </div>
    </div>
  );
};

export default Accordian;
