import React from "react";
import "./Toegewezen Rapportages.css";
import { mdiFileDocumentOutline } from "@mdi/js";
import Icon from "@mdi/react";

function ToegewezenRapportages() {
  const rapportages = [
    { id: 1, title: "Inspectie Winkelcentrum Noord" },
    { id: 2, title: "Schadeopname Appartement 3B" },
    { id: 3, title: "Achterstallig Onderhoud Gebouw C" },
    { id: 4, title: "Technische Installatie Check P1" },
    { id: 5, title: "Modificaties Inventarisatie Hal 12" },
    { id: 6, title: "Inspectie Kantoorpand Zuid" },
    { id: 7, title: "Schadeopname Parkeergarage" },
    { id: 8, title: "Onderhoudsrondgang Blok D" },
  ];

  return (
    <div className="RapportagesPage">
      <h1 className="RapportagesTitle">Toegewezen Rapportages</h1>

      <div className="RapportagesList">
        {rapportages.map((r) => (
          <div key={r.id} className="RapportageItem">
            <Icon
              path={mdiFileDocumentOutline}
              size={2}
              color="rgba(41,52,57,1)"
            />
            <span>{r.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToegewezenRapportages;