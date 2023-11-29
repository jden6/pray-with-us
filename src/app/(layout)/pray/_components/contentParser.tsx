const ContentParser = ({contents}: { contents: string }) => {
  const parsedContent = JSON.parse(contents);
  return <ul>
    {parsedContent.map((content: any, index:number) =>
      <li key={index}>{index + 1}. {content.value}</li>)}
  </ul>;
};

export default ContentParser;