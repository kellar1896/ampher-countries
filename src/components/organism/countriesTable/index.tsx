import { Table } from "antd";
import React from "react";
import { Country } from "../../../types";
import CountryDescription from "../countryDescription";
import "./index.css";

type CountriesTableProps = {
  countries: Country[];
};

const CountriesTable = ({ countries }: CountriesTableProps) => {
  const columns = [
    {
      title: "Flag",
      dataIndex: "flag",
      key: "flag",
    },
    {
      title: "Capital",
      dataIndex: "capital",
      key: "capital",
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
    },
  ];
  return (
    <div className="organism-container">
      <div className="table-container-organism">
        <Table dataSource={countries} columns={columns} scroll={{ y: 440 }} />
      </div>
      <div>
        <CountryDescription />
      </div>
    </div>
  );
};

export default CountriesTable;
