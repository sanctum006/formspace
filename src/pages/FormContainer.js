import { connect } from "react-redux";
import { createRandomString, validateString } from "../utilities/common";
import AllForms from "./AllForms";
import CreateForm from "./CreateForm";

const FormContainer = ({ formId }) => {
  console.log(createRandomString());
  return validateString(formId) ? <CreateForm /> : <AllForms />;
};

const mapStateToProps = (state) => {
  return {
    formId: state.router.queryParams?.formId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
