import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div className="item-list" style={{ display: "flex", gap: 30, flexWrap: "wrap", padding: 30 }}>
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
