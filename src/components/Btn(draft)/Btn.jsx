import './Btn.css'
import React from 'react'
import { Button } from 'reactstrap'


export default function Btn(props) {
    const { icon, children } = props

    return (
        <Button { ...props }>
            Hello!
        </Button>
    )
}