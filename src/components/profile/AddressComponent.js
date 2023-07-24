import React from "react";

const AddressComponent = ({ address }) => {
  const { city, fullAddress } = address;

  return (
    <div>
      <p>City: {city}</p>
      <p>Full Address: {fullAddress}</p>
    </div>
  );
};

export default AddressComponent;
