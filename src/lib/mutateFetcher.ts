export default async function mutateFetcher(
  url: string,
  { arg }: { arg: { id: number; completed: number } }
) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}
