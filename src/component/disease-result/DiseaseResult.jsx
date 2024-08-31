import React from "react";

const DiseaseResult = props => {
  const { DiseasePic, DiseaseDesc, DiseaseDiagnosis } = props;
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default DiseaseResult;
