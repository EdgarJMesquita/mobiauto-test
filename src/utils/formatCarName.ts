export function formatCarName(name: string) {
  return name
    .toLocaleLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(".", "-")
    .replaceAll("(", "")
    .replaceAll(")", "");
}
