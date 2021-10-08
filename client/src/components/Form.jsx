import React from 'react'
import Button from './Button'

const Form = ({submitFunciton, update, children}) => {
    return (
        <form>
            {children}
            <Button type="primary" link={null} text={update ? "Update" : "Submit"} action={submitFunciton} />
        </form>
    )
}

export default Form
