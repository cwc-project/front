import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  // Card,
  CardBody,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { MoreVertical } from 'react-feather';

class ProjectMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () =>
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));

  render() {
    const { dropdownOpen } = this.state;
    const projectTitle = 'Project';
    const { toggleModalProjAdd } = this.props;

    return (
      // <Card>
      <CardBody>
        <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="div" className="text-right">
            <MoreVertical style={{ cursor: 'pointer' }} />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>
              current:&nbsp;
              {projectTitle}
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={toggleModalProjAdd}>
              Add new project
            </DropdownItem>
            <DropdownItem>Edit current project</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Delete current project</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <CardTitle className="font-weight-bold ">
          <h4>Project</h4>
        </CardTitle>
      </CardBody>
      // </Card>
    );
  }
}

ProjectMenu.propTypes = {
  toggleModalProjAdd: PropTypes.func.isRequired,
};

export default ProjectMenu;
