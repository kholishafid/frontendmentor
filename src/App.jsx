import { DateStoreProvider } from "./components/date_contex";
import Form from "./components/form";
import Display from "./components/display";

function App() {
  return (
    <DateStoreProvider>
      <div className="w-screen h-screen grid place-items-center p-4">
        <div className="w-full overflow-hidden md:w-[800px] h-min bg-white rounded-2xl rounded-br-[8rem] md:rounded-br-[10rem] p-5 sm:p-8">
          <Form />
          <Display />
        </div>
      </div>
    </DateStoreProvider>
  );
}

export default App;
