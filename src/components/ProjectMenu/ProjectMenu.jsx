import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  CardBody,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from 'reactstrap';
import {
  MoreVertical,
  CornerDownLeft,
  // Lock, Unlock
} from 'react-feather';
import './ProjectMenu.css';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  link: ['text-decoration-none', 'text-dark'],
  menuAddons: ['d-flex', 'justify-content-between'],
  cardTitle: ['font-weight-bold'],
};
const link = classNames(bsUtilClasses.link);
const menuAddons = classNames(bsUtilClasses.menuAddons);
const cardTitle = classNames(bsUtilClasses.cardTitle);

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
    const { toggleModalProjAdd, title, tasksAmount } = this.props;

    return (
      <CardBody className="project-menu">
        <div className={menuAddons}>
          <Link to="/projects" className={link}>
            <CornerDownLeft className="project-menu_return-icon" />
            &nbsp;projects ...
          </Link>
          <Dropdown isOpen={dropdownOpen} toggle={this.toggle} size="sm">
            <DropdownToggle color="white">
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
              <DropdownItem divider />
              <DropdownItem disabled>
                Delete current project
                {/* <button type="button"><Lock /></button> */}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <CardTitle className={cardTitle}>
          <h4>
            {title}
            &nbsp;
            <Badge className="project-menu_badge">{tasksAmount}</Badge>
          </h4>
        </CardTitle>
      </CardBody>
    );
  }
}

ProjectMenu.propTypes = {
  toggleModalProjAdd: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  tasksAmount: PropTypes.number.isRequired,
};

export default ProjectMenu;
