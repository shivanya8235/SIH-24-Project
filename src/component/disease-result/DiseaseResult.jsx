import React from "react";
import Container from "../container/Container";

const DiseaseResult = ({
  DiseasePic,
  DiseaseDesc,
  DiseaseDiagnosis,
  uploadAgainHanlder,
}) => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <>
        <div className="flex flex-col items-center justify-center gap-4 p-2">
          <div>
            <img src={DiseasePic} alt="" />
            <div>
              <p className="font-semibold ">Disease</p>
              <p>{DiseaseDesc}</p>
            </div>
            <div>
              <p className="font-semibold ">Disease Diagnosis</p>
              <p className="">{DiseaseDiagnosis}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={uploadAgainHanlder}
              className="bg-[var(--ternery-color)] px-4 py-2 font-semibold text-white rounded-md">
              Upload Again
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default DiseaseResult;
