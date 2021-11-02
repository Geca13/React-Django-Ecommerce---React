import React from 'react'
import { Alert } from 'react-bootstrap'

function Alerts({variant, children}) {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

export default Alerts

