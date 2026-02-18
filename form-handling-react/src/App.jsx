import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App () {
  return (
    <div className="App">
      <h1>User Registration</h1>
      <section>
        <h2>Controlled Component</h2>
        <RegistrationForm />
      </section>
      <hr />
      <section>
        <h2>Formik Component</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;