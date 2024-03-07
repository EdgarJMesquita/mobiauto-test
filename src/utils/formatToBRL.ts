export function formatToBRL(value?: number) {
  if (!value) return "Preço não disponível";

  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
