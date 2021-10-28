let option_1 = document.getElementById("option-1");
let option_2 = document.getElementById("option-2");
let option_3 = document.getElementById("option-3");
let option_4 = document.getElementById("option-4");
let custom_amount = document.getElementById("custom-amount");
let newsletter_email = document.getElementById('newsletter-email')
let options = [];
options.push(option_1);
options.push(option_2);
options.push(option_3);
options.push(option_4);

let setSelected = function (option, e) {
    e.preventDefault();
    custom_amount.placeholder="Enter your desired amount"
    list = Array.from(option.classList);
    if (!list.includes("SelectedOption")) {
        for (let option of options) {
            list = Array.from(option.classList);
            if (list.includes("SelectedOption")) {
                option.classList.remove("SelectedOption");
                break;
            }
        }
        option.classList.add("SelectedOption");
        custom_amount.value = "";
    }
};
let hideDonationPlaceholder = function (){
    custom_amount.placeholder=""
}
let showDonationPlaceholder = function (){
    custom_amount.placeholder="Enter your desired amount"
    custom_amount.blur()
}
let hideNewsletterPlaceholder = function (){
    
        newsletter_email.placeholder=""
}
let showNewsletterPlaceholder = function (){
    if(newsletter_email.value==""){
    newsletter_email.placeholder="Enter your email address"
    newsletter_email.blur()
    }
}
let selectCustom = function (e) {
    e.preventDefault();
    if (custom_amount.value == "") {
        option_1.classList.add("SelectedOption");
        showDonationPlaceholder()
    } else {
        for (let option of options) {
            list = Array.from(option.classList);
            if (list.includes("SelectedOption")) {
                option.classList.remove("SelectedOption");
                break;
            }
        }
    }
};


option_1.addEventListener("click", (e) => setSelected(option_1, e));
option_2.addEventListener("click", (e) => setSelected(option_2, e));
option_3.addEventListener("click", (e) => setSelected(option_3, e));
option_4.addEventListener("click", (e) => setSelected(option_4, e));
custom_amount.addEventListener("input", (e) => selectCustom(e));
custom_amount.addEventListener("click", (e) => hideDonationPlaceholder(e));
newsletter_email.addEventListener("click", (e) => hideNewsletterPlaceholder(e));
newsletter_email.addEventListener("input", (e) => showNewsletterPlaceholder(e));

