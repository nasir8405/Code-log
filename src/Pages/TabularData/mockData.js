export const tabularData = {
  columns: [
    { header: "ID", key: "id" },
    { header: "Name", key: "name" },
    { header: "Product", key: "product" },
  ],
  rows: [
    {
      id: "1",
      name: {
        title: "John",
        des: "This is some content",
        action: false,
      },
      product: { columns: [], rows: [] },
    },
    {
      id: "2",
      name: "Victor",
      product: "Sam",
    },
    {
      id: "3",
      name: {
        title: "John",
        des: "This is some content",
        action: true,
      },
      product: { title: "Apple", des: "This is some content" },
    },
  ],
};
