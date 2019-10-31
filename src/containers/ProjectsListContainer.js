import { connect } from 'react-redux';

import ProjectsList from '../components/ProjectsList';

const mapStateToProps = ({ projects }) => ({ projects });

export default connect(mapStateToProps)(ProjectsList);
