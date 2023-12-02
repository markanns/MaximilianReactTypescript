import { type ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: React.ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: React.ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;
  if (mode === "hint") {
    return <div className="infobox infobox-hint">{children}</div>;
  }

  const { severity } = props;
  return (
    <div className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      {children}
    </div>
  );
}

export default InfoBox;
