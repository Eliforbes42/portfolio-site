import React from "react";

export const mapToListItems = (items: string[]) => items.map((item) => <li>{item}</li>);

export const mapToSubListItems = (data: { [key: string]: string[] }): JSX.Element[] => {
  return Object.keys(data).map((key) => (
    <>
      <li>{key}</li>
      <ul>
        {data[key].map((item: string) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  ));
};
