import MountainMark from "./MountainMark";
import { settings } from "../data/content";

export default function Logo({
  iconClassName = "h-9 w-9",
  textClassName = "font-sans text-lg font-semibold tracking-wide",
  iconColor = "#c9a24b",
}: {
  iconClassName?: string;
  textClassName?: string;
  iconColor?: string;
}) {
  if (settings.logoImage) {
    return <img src={settings.logoImage} alt={settings.logoText || "Logo"} className={iconClassName} />;
  }
  return (
    <>
      <MountainMark className={iconClassName} color={iconColor} />
      <span className={textClassName}>{settings.logoText}</span>
    </>
  );
}
