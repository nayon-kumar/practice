import "./App.css";
import ControlledForm from "./components/ControlledForm/ControlledForm";
import Form from "./components/Form/Form";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import UncontrolledForm from "./components/UncontrolledForm/UncontrolledForm";

function App() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl my-5">Learing form handling</h1>
        {/* <Form /> */}
        {/* <FormAction /> */}
        {/* <ControlledForm /> */}
        {/* <UncontrolledForm /> */}
        {/* <HookForm /> */}
        <ProductManagement />
      </div>
    </>
  );
}

export default App;
