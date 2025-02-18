export function toCapital(str) {
    return str[0].toUppercase() + str.slice(1)
}
export function toTitle(str) {
    let title = ''
    for (let i = 0; i < str.length; i++) {
        if ((str[i - 1] == ' ') || str[i] == str[0]) {
            title += str[i].toUpperCase()
        } else {
            title += str[i]
        }
    }
    return title
}
