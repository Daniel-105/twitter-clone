const ColComponent: React.FC<{ name: string }> = ({ name }) => {
  return <div className="col"> {name}</div>;
};

export default ColComponent;
