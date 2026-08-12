import Owl from "./Owl";
import styles from "./OrbitBadge.module.css";

/**
 * The brand voice line orbiting the owl — a slow rotating seal, stamped
 * over a corner of a photograph. Pure CSS rotation, no JS.
 */
export default function OrbitBadge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ring = `${text} · `.repeat(2).trim();

  return (
    <div className={`${styles.badge} ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className={styles.ring}>
        <defs>
          <path
            id="orbit-circle"
            d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
          />
        </defs>
        <text className={styles.ringText}>
          <textPath href="#orbit-circle" startOffset="0">
            {ring}
          </textPath>
        </text>
      </svg>
      <Owl className={styles.owl} />
    </div>
  );
}
