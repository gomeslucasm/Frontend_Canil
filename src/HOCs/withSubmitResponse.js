import { React, useState } from "react";

const withSubmitResponse = (WrappedComponent) => {

    const WithSubmitResponse = () => {

        const [submitResponse, setSubmit] = useState(null);

        return(
            <WrappedComponent /> 
        )
    }

}