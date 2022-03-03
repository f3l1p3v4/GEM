import React, { useState } from "react";
import ReportForm from "../components/ReportForm";
import ReportList from "../components/ReportList";

function ReportPage() {
  const [dataForm, setDataForm] = useState("");
  const [dataMessage, setDataMessage] = useState(
    "Todas igrejas de Campo Grande MS"
  );

  return (
    <>
      <ReportForm data={setDataForm} message={setDataMessage} />
      <ReportList data={dataForm} message={dataMessage} />
    </>
  );
}

export default ReportPage;
