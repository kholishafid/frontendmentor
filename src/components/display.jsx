import { useContext } from "solid-js";
import { DateStoreContext } from "./date_contex";

const Display = () => {
  const [date, valid, dateDiffDisplay, {}] = useContext(DateStoreContext);

  return (
    <div className="pb-8">
      <h1 className="font-bold italic text-6xl md:text-8xl font-poppins-bold text-off-black">
        <span className="text-purple-primary">
          {!valid() ? "--" : dateDiffDisplay().year}
        </span>{" "}
        years
      </h1>
      <h1 className="font-bold italic text-6xl md:text-8xl font-poppins-bold text-off-black">
        <span className="text-purple-primary">
          {!valid() ? "--" : dateDiffDisplay().month}
        </span>{" "}
        months
      </h1>
      <h1 className="font-bold italic text-6xl md:text-8xl font-poppins-bold text-off-black">
        <span className="text-purple-primary">
          {!valid() ? "--" : dateDiffDisplay().day}
        </span>{" "}
        days
      </h1>
    </div>
  );
};

export default Display;
