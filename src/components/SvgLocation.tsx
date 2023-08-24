export function SvgLocation() {
  const svgCode = `
  <svg width="20" height="24" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="inline dark:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
  `;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: svgCode }} />
    </div>
  );
}
