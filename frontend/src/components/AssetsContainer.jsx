import React from "react";
import Box from "./asset-containers-herosection/Box";
import AssetDescription from "./resuable-assets-components/AssetDescription";
import AssetTitle from "./resuable-assets-components/AssetTitle";

function AssetsContainer({ index, title, description, content }) {
  return (
    <div className="single-asset-container">
      <AssetTitle title={title} />
      <AssetDescription description={description} />
      <Box index={index} content={content} />
    </div>
  );
}

export default AssetsContainer;
