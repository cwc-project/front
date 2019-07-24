/* eslint no-console: [0] */
const fs = require('fs');
const minimist = require('minimist');
const path = require('path'); /* eslint import/no-extraneous-dependencies: [0] */

const args = minimist(process.argv);
let { name } = args;
name = name[0].toUpperCase() + name.slice(1);
const reg = /(container(\.jsx?)?|(\.jsx?))/i;
const result = name.match(reg);

const componentName = result !== null ? name.split(result[0])[0] : name;
const containerName = `${componentName}Container.js`;
const location = path.resolve(__dirname, `../src/containers/${containerName}`);

fs.stat(location, err => {
  if (err == null) {
    console.log('CONTAINER ALREADY EXISTS!!!');
  } else if (err.code === 'ENOENT') {
    const container = `import { connect } from 'react-redux'
import {} from '../actions'
import ${componentName} from '../components/${componentName}'

function mapStateToProps(state) {
    return {
        //
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(${componentName})`;

    fs.writeFile(location, container, () => {});
  } else {
    console.log('Error: ', err.code);
  }
});
