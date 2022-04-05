import { Button } from "antd";
import React from "react";
import './index.css'
import companyIcon from '../../../assets/ampher-logo.png'

const Header = () => {
    return(
        <div className="header-container">
            <img src={companyIcon} alt="" />
            <Button type="primary">Reset Data</Button>
        </div>
    )
}

export default Header
