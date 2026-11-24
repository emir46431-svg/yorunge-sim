import periodicTable from "../../data/periodic-table.json" with { type: "json" };

/** Category keys match PubChem GroupBlock after lowercase/kebab normalization. */
export const categories = Object.freeze({
  nonmetal: "Ametal",
  "noble-gas": "Soy gaz",
  "alkali-metal": "Alkali metal",
  "alkaline-earth-metal": "Toprak alkali metal",
  metalloid: "Yarı metal",
  halogen: "Halojen",
  "post-transition-metal": "Geçiş sonrası metal",
  "transition-metal": "Geçiş metali",
  lanthanide: "Lantanit",
  actinide: "Aktinit",
});

/** Reference-only records; presence here does not enable molecular editing. */
export const elements = Object.freeze(
  periodicTable.elements.map((element) => Object.freeze(element)),
);
export const periodicTableSource = Object.freeze({
  ...periodicTable.source,
  notes: Object.freeze([...periodicTable.source.notes]),
});

function fold(value) {
  return String(value)
    .trim()
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("ı", "i");
}

/** Exact atomic number, symbol, Turkish name or English name; undefined if absent. */
export function findElement(query) {
  if (query == null || String(query).trim() === "") return undefined;
  const key = fold(query);
  if (/^\d+$/.test(key))
    return elements.find((element) => element.atomic_number === Number(key));
  return elements.find((element) =>
    [element.symbol, element.name, element.name_en].some(
      (value) => fold(value) === key,
    ),
  );
}
