import { IMG } from "@/lib/data";

type PhotoSlotProps = {
  imageKey: string;
  label: string;
  className?: string;
  parallax?: string;
};

export default function PhotoSlot({
  imageKey,
  label,
  className = "",
  parallax,
}: PhotoSlotProps) {
  const url = IMG[imageKey];
  const empty = !url;
  const classes = ["ph", empty ? "empty" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      data-i={imageKey}
      data-l={label}
      {...(parallax !== undefined ? { "data-p": parallax } : {})}
      style={url ? { backgroundImage: `url(${url})` } : undefined}
    />
  );
}
