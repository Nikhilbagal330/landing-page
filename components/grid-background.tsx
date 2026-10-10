const WIDTH = 1698;
const HEIGHT = 993;
const VANISH_X = WIDTH / 2;
const VANISH_Y = -520;
const FLOOR = 980;

function perspectiveLines() {
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];

  for (let index = 0; index <= 22; index += 1) {
    const x = -120 + ((WIDTH + 240) / 22) * index;
    lines.push({ x1: VANISH_X, y1: VANISH_Y, x2: x, y2: FLOOR });
  }

  for (let index = 1; index <= 18; index += 1) {
    const depth = (index / 18) ** 1.18;
    const y = VANISH_Y + (FLOOR - VANISH_Y) * depth;
    lines.push({
      x1: VANISH_X + (-160 - VANISH_X) * depth,
      y1: y,
      x2: VANISH_X + (WIDTH + 160 - VANISH_X) * depth,
      y2: y,
    });
  }

  return lines;
}

const LINES = perspectiveLines();

export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[993px] overflow-hidden" aria-hidden>
      <div className="absolute top-[240px] left-[60%] h-[340px] w-[220px] -translate-x-1/2 rotate-[19deg] bg-[#FF4509] blur-[140px] sm:blur-[250px]" />
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMin slice"
        className="absolute top-11 left-1/2 h-[940px] w-[128%] max-w-none -translate-x-1/2 [mask-image:linear-gradient(90deg,transparent_0%,#000_20%,#000_80%,transparent_100%),linear-gradient(180deg,transparent_0%,#000_10%,#000_58%,transparent_100%)] [mask-composite:intersect]"
      >
        <g stroke="#FF4509" strokeWidth="1.15" fill="none" opacity="0.62">
          {LINES.map((line) => (
            <line key={`${line.x1}-${line.y1}-${line.x2}-${line.y2}`} {...line} />
          ))}
        </g>
      </svg>
    </div>
  );
}
