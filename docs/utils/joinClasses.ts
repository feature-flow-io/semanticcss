export function joinClasses(classes: Array<string | boolean>) {
  return classes.filter(Boolean).join(' ')
}
