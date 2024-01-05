export function formDate(date: number) {
    const d = new Date(date)
    return d.toLocaleDateString()
}