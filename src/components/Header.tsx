export default function Header(props: { title: string }) {
  return (
    <header className="flex-none p-2 m-2 h-10 font-extrabold uppercase text-3xl">
      {props.title}
    </header>
  );
}
