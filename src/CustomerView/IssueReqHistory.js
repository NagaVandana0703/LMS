import React, { lazy,useEffect, useMemo } from "react";
import { TableHeader } from "../AdminView/AVStyles";
import { useDispatch, useSelector } from "react-redux";
import { loadgetAllBookIssuesRequest } from "../reduxsaga/actions";
const MainDataTable = lazy(() => import("../Helpers/MainDataTable"));

const IssueReqHistory = () => {
  const userdetails = JSON.parse(localStorage.getItem('user_details'));
  const dispatch = useDispatch();
  const storeData = useSelector(state => state.AdminView)
  const { getallbookissues } = storeData;
  const rowData = []
  for (let obj of getallbookissues) {
    if (obj.user.userId === userdetails.userId)
      rowData.push(obj)
  }
  
  useEffect(() => {
    dispatch(loadgetAllBookIssuesRequest())
  }, []);
 

  const columnDefs = useMemo(()=>[
    { field: 'bookDetails.bookName', headerName: 'Book' },
    { field: 'bookDetails.authorName', headerName: 'Author' },
    { field: 'bookDetails.bookCategory.category', headerName: 'Category' },

  ],[])
  return (
    <>
      <TableHeader>My Issue Requests</TableHeader>
      <MainDataTable columnDefs={columnDefs} rowData={rowData} defaultColDef={{ flex: 1 }} />
    </>
  )
}

export default IssueReqHistory;