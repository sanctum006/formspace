import React from "react";
import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";

class CreateForm extends React.Component {
  render() {
    return (
      <ProSidebar>
        <Menu>
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    );
  }
}

export default CreateForm;
