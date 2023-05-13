export default async function mutateFetcher<T>(
  url: string,
  { arg }: { arg: T }
) {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
}
