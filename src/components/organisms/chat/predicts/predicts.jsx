import { useState } from "react";
import { PredictsIntro } from "./predicts-intro";
import { CreatePredict } from "./create-predict";

export function Predicts() {
  const [screen, setScreen] = useState("intro");

  return (
    <div className="lg:pb-0 pb-20">
      {screen === "intro" && <PredictsIntro setScreen={setScreen} />}{" "}
      {screen === "create" && <CreatePredict />}
    </div>
  );
}
