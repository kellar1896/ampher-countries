import React from "react"
import './index.css'

type MainTemplateProps = {
    header: JSX.Element
    table: JSX.Element
}

const MainTemplate = ({header, table}: MainTemplateProps) => {
    return(
        <div className="main-template-container">
            <div className="header-template-container">{header}</div>
            <div className="table-complete-container">
                <div className="table-container">{table}</div>
            </div>
        </div>
    )
}

export default MainTemplate