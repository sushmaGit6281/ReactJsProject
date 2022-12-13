import React from "react";
import FieldFile from './FieldFile';
import HeaderFile from './HeaderFile';
import FooterFile from './FooterFile';
function MyFile() {
  return <div className="page-wrapper">
    <HeaderFile />
    <FieldFile />
    <FooterFile />
  </div>
}
export default MyFile