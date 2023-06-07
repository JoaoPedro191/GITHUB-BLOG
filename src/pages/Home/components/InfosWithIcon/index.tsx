import { ReactNode } from "react";
import { InfosWithIconContainer } from "./style";

interface InfosWithIconProps {
  icon?: ReactNode;
  name?: string;
}

const InfosWithIcon = ({ name, icon }: InfosWithIconProps) => {
  return (
    <InfosWithIconContainer>
      {icon}
      <span>{name}</span>
    </InfosWithIconContainer>
  );
};

export { InfosWithIcon };
