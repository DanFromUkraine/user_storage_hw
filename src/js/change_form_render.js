import change_form_tpl from "../templates/change_user.hbs"

export function render_change_form(data) {
    const form_html = change_form_tpl(data);
    document.querySelector(".forms_cont").insertAdjacentHTML("beforeend", form_html);
    
}