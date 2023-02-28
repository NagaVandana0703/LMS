import React, { useMemo } from "react";
import MainLayout from "../layout/MainLayout";
import { AVMenuItems } from "../reduxsaga/jsondata";

function AVlayout({ element }) {
  const menuItems = useMemo(() => AVMenuItems, []);
  return (
    <MainLayout Component={element} menuItems={menuItems} />
  );
}
export default AVlayout;
