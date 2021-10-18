export function joinClasses(classes: Array<string | boolean | undefined | null>) {
  return classes.filter(Boolean).join(' ')
}
