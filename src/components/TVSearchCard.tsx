interface TVSearchResult {
  name: string;
}

const TVSearchCard = (result: TVSearchResult) => {
  return <div>{result.name}</div>;
};

export default TVSearchCard;
