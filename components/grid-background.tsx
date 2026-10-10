export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(ellipse_at_top,rgba(255,76,0,0.22),transparent_58%)]" />
      <div className="absolute inset-x-[-30%] top-16 h-[560px] origin-top [transform:perspective(680px)_rotateX(63deg)] bg-[linear-gradient(to_right,rgba(255,76,0,0.32)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,76,0,0.32)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:linear-gradient(to_bottom,black_12%,transparent_76%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
