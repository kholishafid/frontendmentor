import moment from "moment";
import { createSignal, createContext, useContext } from "solid-js";

export const DateStoreContext = createContext(
  {
    year: 0,
    month: 0,
    day: 0,
  },
  {}
);

export function DateStoreProvider(props) {
  const [date, setDate] = createSignal({
    year: 0,
    month: 0,
    day: 0,
  });
  const [valid, setValid] = createSignal(false);
  const [dateDiffDisplay, setDateDiffDisplay] = createSignal({
    year: 0,
    month: 0,
    day: 0,
  });
  const dates = [
    date,
    valid,
    dateDiffDisplay,
    {
      setDay(n) {
        setDate((prev) => {
          return { ...prev, day: parseInt(n ? n : 0) };
        });
      },
      setMonth(n) {
        setDate((prev) => {
          return { ...prev, month: parseInt(n ? n : 0) };
        });
      },
      setYear(n) {
        setDate((prev) => {
          return { ...prev, year: parseInt(n ? n : 0) };
        });
      },
      setDateValid(val = true) {
        setValid(val);
      },
      setContextDateDiffDisplay(val = true) {
        let dateNow = moment();
        let dateInput = moment([date().year, date().month - 1, date().day]);
        let dateDiff = dateNow.diff(dateInput);
        let duration = moment.duration(dateDiff);

        setDateDiffDisplay({
          day: duration.days(),
          month: duration.months(),
          year: duration.years(),
        });
      },
    },
  ];

  return (
    <DateStoreContext.Provider value={dates}>
      {props.children}
    </DateStoreContext.Provider>
  );
}

export function useDateContext() {
  return useContext(DateStoreContext);
}
