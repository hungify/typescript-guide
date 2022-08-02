interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}

export function Table<TItem>(props: TableProps<TItem>) {
  console.log('🚀 :: props', props);
  return null;
}

export function Component() {
  return (
    <Table
      items={[
        {
          id: 1,
          name: 'John',
        },
      ]}
      renderItem={(item) => (
        <h1>
          {item.id} {item.name}
        </h1>
      )}
    ></Table>
  );
}
