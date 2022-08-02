//#10: React Components with GENERICS
interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}

export default function Table<ITtem>(props: TableProps<ITtem>) {
  console.log('🚀 :: props', props);
  return null;
}
const Component = () => {
  return (
    <Table
      items={[
        {
          id: '1',
          name: 'David',
        },
      ]}
      renderItem={(item) => (
        <h1>
          {item.id} {item.name}
        </h1>
      )}
    ></Table>
  );
};
