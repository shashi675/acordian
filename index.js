const ques = document.querySelectorAll(".ques");

const ans = document.querySelectorAll(".ans");

const plusSign = document.querySelectorAll(".plus-sign");

const crossSign = document.querySelectorAll(".cross-sign");

var prvClickedItem = -1;

// for checking the list is open or not:

let isItemClose = [true, true, true];

for(let i = 0; i < ques.length; i++) {
    ques[i].addEventListener("click", function() {

        (isItemClose[i] === true) ? isItemClose[i] = false : isItemClose[i] = true;

        for(let j = 0; j < ques.length; j++) {
            if(isItemClose[j] === false && j != i) {
                ans[j].classList.add("hidden");
                plusSign[j].classList.remove("hidden");
                crossSign[j].classList.add("hidden");
                isItemClose[j] = true;
            }
        }

        ans[i].classList.toggle("hidden");
        plusSign[i].classList.toggle("hidden");
        crossSign[i].classList.toggle("hidden");



        
        // if(prvClickedItem != -1 && prvClickedItem != i) {
        //     if(count[prvClickedItem] === false)
        //     {
        //         ans[prvClickedItem].classList.add("hidden");
        //         plusSign[prvClickedItem].classList.remove("hidden");
        //         crossSign[prvClickedItem].classList.add("hidden");
        //         count[prvClickedItem] = true;
        //     }
        // // console.log(prvClickedItem);
        // }

        // console.log(prvClickedItem);
        // prvClickedItem = i;
        // console.log(prvClickedItem);
        // ans[i].classList.toggle("hidden");
        // plusSign[i].classList.toggle("hidden");
        // crossSign[i].classList.toggle("hidden");

        // (count[i] === true) ? count[i] = false : count[i] = true;
    });
}