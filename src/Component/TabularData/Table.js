import React, { useContext } from "react";
import { Context } from "../../Pages/TabularData/TabularDataProvider";
import "./Table.css";

export const Table = () => {
  const tabularData = useContext(Context);
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            {tabularData.columns.map((item) => {
              return <th key={item.key}>{item.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tabularData.rows.map((row) => {
            return (
              <tr key={row.id}>
                {tabularData.columns.map((col) => {
                  return (
                    <td key={col.key}>
                      {typeof row[col.key] === "string" ? (
                        row[col.key]
                      ) : col.key === "name" ? (
                        <>
                          <h6>{row[col.key].title}</h6>
                          <p>{row[col.key].des}</p>
                          {row[col.key].action && <button>More...</button>}
                        </>
                      ) : row[col.key].title ? (
                        <>
                          <i>{row[col.key].title}</i>
                          <p>{row[col.key].des}</p>
                        </>
                      ) : (
                        "Product"
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
