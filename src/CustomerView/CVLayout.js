import React, { useMemo } from 'react';
import MainLayout from "../layout/MainLayout";
import { CVMenuitems } from "../reduxsaga/jsondata";

function CVLayout({ element }) {
  const menuItems = useMemo(() => CVMenuitems, []);
  return (
    <MainLayout Component={element} menuItems={menuItems} />
  );
}
export default CVLayout;
