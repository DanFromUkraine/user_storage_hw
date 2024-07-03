import big_template from "../templates/big_render.hbs";
import { constants } from "./constants";
import { delete_el } from "./delete";
import { change_el } from "./change";
async function render_full_page() {
    const users = await fetch(`${constants.BASE_ENDPOINT}`).then(users => users.json()).then(users => users)
    await new Promise((resolve) => {
        document.querySelector(".card_list").insertAdjacentHTML("afterbegin", big_template(users));
        document.querySelectorAll(".card").forEach(card => {
            delete_el(card.querySelector(".card-avatar"));
            change_el(card.querySelector(".change-js"));
        })
        resolve();
})
}

window.addEventListener("DOMContentLoaded", render_full_page)