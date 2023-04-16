export default function Tile(props: { name: string; time: string }) {
  return (
    <section className="p-2 m-2">
      <span className="my-1 text-xl"> {props.time} </span>
      <div className="flex justify-between bg-blue-200 rounded-xl">
        <span className="p-1 m-2 text-2xl">{props.name}</span>
        <span className="p-1 m-2 text-lg">Category</span>
      </div>
    </section>
  );
}
