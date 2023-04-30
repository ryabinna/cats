
/*section faq*/

const faqItems = document.getElementsByClassName("faq-item");

for (item of faqItems)  {
    item.addEventListener("click", function() {
        const sign = this.querySelector(".sign");
        
        const signP = this.querySelector(".sign-p");
        const answer = this.querySelector(".answer-item");
        if (signP.textContent === "-") {
            signP.textContent = "+";
           } else {
              signP.textContent = "-";
          };
          sign.classList.toggle("sign-active");
          answer.classList.toggle("answer-active");
})
};




 