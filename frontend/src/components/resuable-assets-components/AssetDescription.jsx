import React from "react";

function AssetDescription({ description }) {
  return (
    <div className="asset-description">
      <h2 id="desc">Description: </h2>
      <p>{description}</p>
    </div>
  );
}

export default AssetDescription;
