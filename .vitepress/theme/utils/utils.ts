export function formDate(date: string) {
    const d = new Date(date)
    return d.toLocaleDateString()
}