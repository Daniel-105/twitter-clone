import ColComponent from "./ColComponent";

const items: string[] = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const RowComponent: React.FC = () => {
  return (
    <div className="row">
      {items.map((item: string) => (
        <ColComponent name={item} />
      ))}
    </div>
  );
};

export default RowComponent;
