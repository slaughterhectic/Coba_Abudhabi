import { OWL_PATH, OWL_VIEWBOX } from "./owlPath";

/**
 * The mark. Olive on plaster, black metal on the shopfront, reversed on ink.
 * Inherits `currentColor`, so colour is set by the surface it sits on.
 * Minimum width is 40px on screen — do not render smaller.
 */
export default function Owl({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox={OWL_VIEWBOX}
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d={OWL_PATH} />
    </svg>
  );
}
