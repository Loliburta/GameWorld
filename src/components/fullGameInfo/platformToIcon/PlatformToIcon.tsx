import { Icon } from "@iconify/react";
import windowsIcon from "@iconify-icons/ant-design/windows-filled";
import playstation2Icon from "@iconify-icons/simple-icons/playstation2";
import playstation3Icon from "@iconify-icons/simple-icons/playstation3";
import playstation4Icon from "@iconify-icons/simple-icons/playstation4";
import playstation5Icon from "@iconify-icons/simple-icons/playstation5";
import playstationvitaIcon from "@iconify-icons/simple-icons/playstationvita";
import xboxIcon from "@iconify-icons/cib/xbox";
import nintendoswitchIcon from "@iconify-icons/cib/nintendo-switch";
import nintendogamecubeIcon from "@iconify-icons/simple-icons/nintendogamecube";
import nintendo3dsIcon from "@iconify-icons/cib/nintendo-3ds";
import nesIcon from "@iconify-icons/teenyicons/nes-outline";
import snesIcon from "@iconify-icons/whh/controllersnes";
import wiiIcon from "@iconify-icons/cib/wii";
import wiiuIcon from "@iconify-icons/cib/wiiu";
import gameboyIcon from "@iconify-icons/whh/gameboy";
import appleIcon from "@iconify-icons/ant-design/apple-filled";

type IconObjectType = {
  [key: string]: JSX.Element;
};
interface Props {
  name: string;
}
export const PlatformToIcon: React.FC<Props> = ({ name }) => {
  const iconObject: IconObjectType = {
    PC: <Icon icon={windowsIcon} />,
    "PlayStation 2": <Icon icon={playstation2Icon} width="32px" />,
    "PlayStation 3": <Icon icon={playstation3Icon} width="32px" />,
    "PlayStation 4": <Icon icon={playstation4Icon} width="32px" />,
    "PlayStation 5": <Icon icon={playstation5Icon} width="32px" />,
    "PS Vita": <Icon icon={playstationvitaIcon} />,
    "Nintendo Switch": <Icon icon={nintendoswitchIcon} />,
    GameCube: <Icon icon={nintendogamecubeIcon} />,
    "Nintendo 3DS": <Icon icon={nintendo3dsIcon} />,
    NES: <Icon icon={nesIcon} />,
    SNES: <Icon icon={snesIcon} />,
    Wii: <Icon icon={wiiIcon} />,
    "Wii U": <Icon icon={wiiuIcon} />,
    "Game Boy Color": <Icon icon={gameboyIcon} />,
    iOS: <Icon icon={appleIcon} />,
  };
  if (iconObject[name]) {
    return <div className="platform__icon">{iconObject[name]}</div>;
  }
  if (name.split(" ")[0] === "Xbox") {
    return (
      <div className="xbox">
        <Icon icon={xboxIcon} />
        <div className="xbox__name">{name.split(" ").slice(1).join(" ")}</div>
      </div>
    );
  }
  return <>{name}</>;
};
