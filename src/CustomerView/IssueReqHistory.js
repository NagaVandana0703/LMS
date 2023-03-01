import React, { useEffect, useMemo } from "react";
import { TableHeader } from "../AdminView/AVStyles";
import MainDataTable from "../Helpers/MainDataTable";
import { useDispatch, useSelector } from "react-redux";
import { loadgetAllBookIssuesRequest } from "../reduxsaga/actions";

const IssueReqHistory = () => {
  const userdetails = JSON.parse(localStorage.getItem('user_details'));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadgetAllBookIssuesRequest())
  }, []);
  const storeData = useSelector(state => state.AdminView)
  const { getallbookissues } = storeData;
  const rowData = []
  for (let obj of getallbookissues) {
    if (obj.user.userId === userdetails.userId)
      rowData.push(obj)
  }

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