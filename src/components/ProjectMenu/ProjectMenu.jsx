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
import './ProjectMenu.css';

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
    const { toggleModalProjAdd, title } = this.props;

    return (
      <CardBody className="project-menu">
        <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="div" className="text-right">
            <MoreVertical className="project-menu_more-icon " />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>
              current:&nbsp;
              {title}
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
          <h4>{title}</h4>
        </CardTitle>
      </CardBody>
    );
  }
}

ProjectMenu.propTypes = {
  toggleModalProjAdd: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectMenu;
