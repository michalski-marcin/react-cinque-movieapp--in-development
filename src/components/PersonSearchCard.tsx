interface PersonSearchResult {
  name: string;
}

const PersonSearchCard = (result: PersonSearchResult) => {
  return <div>{result.name}</div>;
};

export default PersonSearchCard;
