export function Logo(props: React.HtmlHTMLAttributes<SVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" {...props}>
      <g fill="none" fillRule="evenodd">
        <rect width="120" height="120" fill="#FFF" rx="28" />
        <g transform="translate(7 8)">
          <rect
            width="32"
            height="49"
            x="37"
            y="56"
            fill="#58B3E4"
            rx="16"
            style={{ mixBlendMode: 'multiply' }}
          />
          <rect
            width="32"
            height="49"
            x="9"
            y="28"
            fill="#E084AE"
            rx="16"
            style={{ mixBlendMode: 'multiply' }}
            transform="rotate(90 25 52.5)"
          />
          <rect
            width="32"
            height="49"
            x="37"
            fill="#FFB92E"
            rx="16"
            style={{ mixBlendMode: 'multiply' }}
          />
          <rect
            width="32"
            height="49"
            x="65"
            y="28"
            fill="#BEDB4D"
            rx="16"
            style={{ mixBlendMode: 'multiply' }}
            transform="rotate(90 81 52.5)"
          />
          <rect
            width="32"
            height="49"
            x="16.638"
            y="48.138"
            fill="#AE8ED0"
            rx="16"
            style={{ mixBlendMode: 'multiply' }}
            transform="rotate(45 32.638 72.638)"
          />
          <rect
            width="32"
            height="49"
            x="56.638"
            y="8.138"
            fill="#FEE302"
            rx="16"
            style={{ mixBlendMode: 'multiply' }}
            transform="rotate(45 72.638 32.638)"
          />
          <rect
            width="32"
            height="49"
            x="16.638"
            y="8.138"
            fill="#FA8554"
            rx="16"
            style={{ mixBlendMode: 'multiply' }}
            transform="scale(-1 1) rotate(45 0 -46.157)"
          />
          <rect
            width="32"
            height="49"
            x="56.638"
            y="48.138"
            fill="#60CBA5"
            rx="16"
            style={{ mixBlendMode: 'multiply' }}
            transform="scale(-1 1) rotate(45 0 -102.725)"
          />
        </g>
      </g>
    </svg>
  );
}
