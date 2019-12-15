import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Plus } from 'react-feather';
import { Spinner, Button } from 'reactstrap';

import { toggleModalProjAdd, getProjects } from '../actions';
import ProjectsList from '../components/ProjectsList';
import ErrorContainer from './ErrorContainer';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  btn: ['mt-4'],
  projects: ['mt-5'],
};
const btn = classNames(bsUtilClasses.btn);
const projectsStyle = classNames(bsUtilClasses.projects);

class ProjectsContainer extends PureComponent {
  componentDidMount() {
    const { authToken, dispatch } = this.props;
    dispatch(getProjects(authToken));
  }

  toggleModal = () => {
    const { dispatch } = this.props;
    dispatch(toggleModalProjAdd());
  };

  render() {
    const {
      loading,
      projectsAmount,
      projectsList,
      history,
      // dispatch,
    } = this.props;

    if (loading) return <Spinner color="primary" />;
    return (
      <div className={projectsStyle}>
        {projectsAmount > 0 && (
          <ProjectsList
            projectsList={projectsList}
            projectsAmount={projectsAmount}
            history={history}
          />
        )}
        <ErrorContainer type="projects" />
        <Button
          color="primary"
          className={btn}
          onClick={this.toggleModal}
          // плохая практика, при каждом ререндере создается новая ф-ция
          // onClick={() => dispatch(toggleModalProjAdd())}
        >
          <Plus />
          &nbsp;
          {projectsAmount ? 'Add new project' : 'Create your first project'}
        </Button>
      </div>
    );
  }
}

ProjectsContainer.propTypes = {
  authToken: PropTypes.string.isRequired,
  projectsList: PropTypes.array.isRequired,
  projectsAmount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// первым аргументом передается state, вторым - ownProps
const mapStateToProps = ({ projects, user, fetch }, { history }) => ({
  projectsList: projects.projectsList,
  projectsAmount: projects.projectsAmount,
  loading: fetch.loading.projects,
  authToken: user.authToken,
  history,
});

export default connect(mapStateToProps)(ProjectsContainer);
