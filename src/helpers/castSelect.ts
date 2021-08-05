export function castSelect (data: Array<any>): Array<any> {
  return data.map((cat) => ({ value: cat.id, label: cat.name }))
}
