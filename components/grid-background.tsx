export function GridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[993px] overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/images/background image.svg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
    </div>
  );
}