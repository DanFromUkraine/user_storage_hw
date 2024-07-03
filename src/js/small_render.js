import small_tpl from "../templates/small_render.hbs";

export function small_render(user_info) {
    document.querySelector(".card_list").insertAdjacentHTML("beforeend", small_tpl(user_info));
}
