export default function getTileColor(state: number) {
  switch (state) {
    case -1:
      return "red";
    case 0:
      return "none";
    case 1:
      return "green";
    default:
      return "black";
  }
}
