import React from "react"
import { Country } from "../../../types"
import './index.css'

type CountryDescriptionProps = {
    country: Country
}

const CountryDescription = () => {
    return(
        <div>
            <p>Country Description</p>
        </div>
    )
}

export default CountryDescription