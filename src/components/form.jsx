import { createSignal, useContext } from "solid-js";
import arrow from "../public/icon-arrow.svg";
import { DateStoreContext } from "./date_contex";
import moment from "moment";
const Form = () => {
  const [
    date,
    valid,
    dateDiffDisplay,
    { setDay, setMonth, setYear, setDateValid, setContextDateDiffDisplay },
  ] = useContext(DateStoreContext);

  const [inputValid, setInputValid] = createSignal({
    day: {
      isValid: true,
      isFilled: true,
    },
    month: {
      isValid: true,
      isFilled: true,
    },
    year: {
      isValid: true,
      isFilled: true,
    },
  });

  const validateDate = () => {
    let dateInput = moment([date().year, date().month - 1, date().day]);

    if (date().year === 0) {
      return setInputValid((prev) => {
        return { ...prev, year: { isFilled: false, isValid: true } };
      });
    } else {
      let valid = true;
      if (moment() < dateInput || dateInput.invalidAt() === 0) {
        valid = false;
      }
      setInputValid((prev) => {
        return { ...prev, year: { isFilled: true, isValid: valid } };
      });
    }

    if (date().month === 0) {
      return setInputValid((prev) => {
        return { ...prev, month: { isFilled: false, isValid: true } };
      });
    } else {
      let valid = true;
      if (!dateInput.isValid() && dateInput.invalidAt() === 1) {
        valid = false;
      }
      setInputValid((prev) => {
        return { ...prev, month: { isFilled: true, isValid: valid } };
      });
    }

    if (date().day === 0) {
      return setInputValid((prev) => {
        return { ...prev, day: { isFilled: false, isValid: true } };
      });
    } else {
      let valid = true;
      if (!dateInput.isValid() && dateInput.invalidAt() === 2) {
        valid = false;
      }
      setInputValid((prev) => {
        return { ...prev, day: { isFilled: true, isValid: valid } };
      });
    }

    const validationArr = [];
    Object.keys(inputValid()).map((key) => {
      validationArr.push(inputValid()[key].isValid);
      validationArr.push(inputValid()[key].isFilled);
    });
    if (!validationArr.includes(false)) {
      setDateValid();
      setContextDateDiffDisplay();
    } else {
      setDateValid(false);
    }
  };

  return (
    <div>
      <div className="flex gap-8">
        <label htmlFor="day" class="relative">
          <p className="uppercase tracking-[4px] mb-2 text-smokey-grey font-bold">
            day
          </p>
          <input
            type="number"
            placeholder="DD"
            id="day"
            className={`text-[32px] w-40 p-2 px-4 font-bold border border-light-grey outline-none rounded-lg ${
              !inputValid().day.isFilled || !inputValid().day.isValid
                ? "border-light-red"
                : ""
            }`}
            onInput={(e) => setDay(e.target.value)}
          />
          <div class="absolute -bottom-7">
            {!inputValid().day.isFilled && (
              <p class="text-light-red italic">This field is required</p>
            )}
            {!inputValid().day.isValid && (
              <p class="text-light-red italic">Must be a valid day</p>
            )}
          </div>
        </label>
        <label htmlFor="month" class="relative">
          <p className="uppercase tracking-[4px] mb-2 text-smokey-grey font-bold">
            month
          </p>
          <input
            type="number"
            placeholder="MM"
            id="month"
            className={`text-[32px] w-40 p-2 px-4 font-bold border border-light-grey outline-none rounded-lg ${
              !inputValid().month.isFilled || !inputValid().month.isValid
                ? "border-light-red"
                : ""
            }`}
            onInput={(e) => setMonth(e.target.value)}
          />
          <div class="absolute -bottom-7">
            {!inputValid().month.isFilled && (
              <p class="text-light-red italic">This field is required</p>
            )}
            {!inputValid().month.isValid && (
              <p class="text-light-red italic text-sm">Must be a valid month</p>
            )}
          </div>
        </label>
        <label htmlFor="year" class="relative">
          <p className="uppercase tracking-[4px] mb-2 text-smokey-grey font-bold">
            year
          </p>
          <input
            type="number"
            placeholder="YYYY"
            id="year"
            className={`text-[32px] w-40 p-2 px-4 font-bold border border-light-grey outline-none rounded-lg ${
              !inputValid().year.isFilled || !inputValid().year.isValid
                ? "border-light-red"
                : ""
            }`}
            onInput={(e) => setYear(e.target.value)}
          />
          <div class="absolute -bottom-7">
            {!inputValid().year.isFilled && (
              <p class="text-light-red italic">This field is required</p>
            )}
            {!inputValid().year.isValid && (
              <p class="text-light-red italic">Must be in the past</p>
            )}
          </div>
        </label>
      </div>
      <div className="flex items-center gap-2">
        <hr className="flex-1" />
        <button
          className="bg-purple-primary p-4 w-20 h-20 rounded-full active:bg-off-black"
          onClick={validateDate}
        >
          <img src={arrow} alt="arrow" className="m-0 p-0 w-20" />
        </button>
      </div>
    </div>
  );
};

export default Form;
