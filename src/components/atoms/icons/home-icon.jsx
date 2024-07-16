export function HomeIcon({ className, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "33"}
      height={height || "33"}
      viewBox="0 0 33 33"
      stroke="currentColor"
      fill="none"
      className={className}
    >
      <path
        d="M11.3333 32V21.6667C11.3333 20.7531 11.6962 19.877 12.3422 19.2311C12.9881 18.5851 13.8643 18.2222 14.7778 18.2222H18.2222C19.1357 18.2222 20.0119 18.5851 20.6578 19.2311C21.3038 19.877 21.6667 20.7531 21.6667 21.6667V32M4.44444 16.5H1L16.5 1L32 16.5H28.5556V28.5556C28.5556 29.4691 28.1927 30.3452 27.5467 30.9911C26.9007 31.6371 26.0246 32 25.1111 32H7.88889C6.97537 32 6.09926 31.6371 5.4533 30.9911C4.80734 30.3452 4.44444 29.4691 4.44444 28.5556V16.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
