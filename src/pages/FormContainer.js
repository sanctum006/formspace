import { connect } from "react-redux";
import { validateString } from "../utilities/common";
import AllForms from "./AllForms";
import CreateForm from "./CreateForm";

const FormContainer = ({ formId }) => {
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
