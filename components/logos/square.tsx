const LogoSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" {...props}>
    <rect
      x="0"
      y="0"
      width="70"
      height="70"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
    />
    <rect
      x="20"
      y="20"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeOpacity="0.4"
    />
    <circle cx="20" cy="20" r="4" fill="currentColor" />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
);

export default LogoSquare;
