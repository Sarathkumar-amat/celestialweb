export function getFormatDate(dateString) {
    const date = new Date(dateString);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
    return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}