export default function ProductPage(params) {
  console.log(params);
  return (
    <main>
      <h1> {params.name}</h1>
      This is a single product page
    </main>
  );
}
