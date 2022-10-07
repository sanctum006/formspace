import React from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarFooter,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import { connect } from "react-redux";
import { FaPlus } from "react-icons/fa";

import { QUESTIONS_SIDEBAR } from "../constants/form";
import { closeSidebar, openSidebar } from "../reduxSlices/formSlice";

class CreateForm extends React.Component {
  openSidebar = (sidebar) => {
    this.props?.openSidebar({ sidebar });
  };

  closeSidebar = (sidebar) => {
    this.props?.closeSidebar({ sidebar });
  };

  render() {
    return (
      <div className="full-height-flex-container">
        <ProSidebar collapsed={this.props?.questionsSidebar}>
          {/* <SidebarHeader
            style={{
              // height: "100%",
              maxHeight: "90%",
            }}
          >
            <Menu>
              {[
                "name",
                "age",
                "age",
                "age",
                "age",
                "age",
                "age",
                "age",
                "age",
                ,
                "age",
                ,
                "age",
                ,
                "age",
                ,
                "age",
                ,
                "age",
                ,
                "age",
                "age",
                "age",
                ,
                "age",
                "age",
                "age",
                ,
                "age",
                ,
                "age",
                ,
                "age",
                ,
                "age",
                ,
                "age",
                ,
                "age",
                ,
                "age",
              ].map((item) => (
                <MenuItem>{item}</MenuItem>
              ))}
              <MenuItem>Dashboard</MenuItem>
              <SubMenu title="Components">
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>
            </Menu>
          </SidebarHeader>
          <SidebarFooter
            style={{
              textAlign: "center",
              padding: "15px",
              position: "fixed",
              bottom: "0px",
              backgroundColor: "red",
            }}
            onClick={() => alert("asdf")}
          >
            {this.props?.questionsSidebar ? (
              <FaPlus size={25} />
            ) : (
              <p>Add Question</p>
            )}
          </SidebarFooter> */}
        </ProSidebar>
        <p onClick={() => this.openSidebar(QUESTIONS_SIDEBAR)}>FORM</p>
        <ProSidebar rtl={"rtl"} collapsed={this.props?.questionDetailsSidebar}>
          <Menu>
            <MenuItem>Dashboard</MenuItem>
            <SubMenu title="Components">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questionsSidebar: state.form.sidebars.QUESTIONS_SIDEBAR,
    questionDetailsSidebar: state.form.sidebars.QUESTION_DETAILS_SIDEBAR,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openSidebar: (payload) => dispatch(openSidebar(payload)),
    closeSidebar: (payload) => dispatch(closeSidebar(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
