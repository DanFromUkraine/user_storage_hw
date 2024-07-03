import { constants } from "./constants";
import { handle_form } from "./form";
import { render_change_form } from "./change_form_render";
import { delete_options } from "./delete";

export function change_el(el) {
  el.addEventListener("click", async () => {
    const id = el.dataset.name;
    const data = await fetch(`${constants.BASE_ENDPOINT}/${id}`)
      .then((resp) => resp.json())
      .then((resp) => resp);
    render_change_form(data);
    const change_form = document.querySelector(".change_user");

    handle_form(change_form);
    fetch(`${constants.BASE_ENDPOINT}/${id}`, delete_options);
  });
}

// такого говнокоду я наче ще не писав, але треба здати швидше дз і продовжувати писати проєкт
