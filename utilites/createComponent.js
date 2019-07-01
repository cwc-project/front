const fs = require('fs')
const minimist = require('minimist')
const path = require('path')

const args = minimist(process.argv)
let name = args.name
name = name[0].toUpperCase() + name.slice(1)

const reg = /\.jsx?/i
const result = name.match(reg)

const componentName = (result !== null) ? name.split(result[0])[0] : name
const location = path.resolve(__dirname, `../src/components/${componentName}`)

fs.stat(location, (err, stats) => {
    if(err == null) {
        console.log('COMPONENT ALREADY EXISTS!!!');
    } else if(err.code == 'ENOENT') {
        const component = `import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './${componentName}.css'

//использование встроенных стилей bootstrap
// const  bsUtilClasses = {}

export default function ${componentName}() {
    // return()
}

// ${componentName}.propTypes = {}`

        const index = `export { default } from './${componentName}'`
        
        fs.mkdir(location, () => {
            console.log(`folder ${componentName} created in components directory`)
            fs.writeFile(`${location}/${componentName}.jsx`, component, () => {console.log(`${componentName}.jsx created`)})
            fs.writeFile(`${location}/${componentName}.css`, '', () => {console.log(`${componentName}.css created`)})
            fs.writeFile(`${location}/index.js`, index, () => {console.log('index.js created')})
        })
    } else {
        console.log('Error: ', err.code)
    }
})