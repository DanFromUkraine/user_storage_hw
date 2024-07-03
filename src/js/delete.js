import { constants } from "./constants";
export const delete_options = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
    body: undefined
}
export function delete_el(el) {
    // Якщо ви тільки но додали елемент, треба спершу перезавантажити сторінку, щоб у цього елемента з'явився id. Я пробував складати запити за ім'ям, але вони не працюють. Треба якусь бібліотеку підключати, що буде генерити унікальний id щоразу;
    el.addEventListener("click", () => {
        
        fetch(`${constants.BASE_ENDPOINT}/${(el.dataset.name) }`, delete_options)
        el.parentNode.parentNode.remove();
    })
}