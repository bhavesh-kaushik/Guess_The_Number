 let number;

 const generateNumber = () => {
    let n1 = Math.random();
    let n2 = n1 * 10;

     n2 = Math.trunc(n2);

    n2 = (n2 % 6) + 1;
    number = n2;

    console.log(number);
 };

//  generateNumber();



const generate_number_btn_click = () => {
    document.querySelector('#section1').style.display='none';
    document.querySelector('#section2').style.display='none';
    document.querySelector('#section3').style.display='block';


    setTimeout(() => {
        generateNumber();
        document.querySelector('#field').value = " ";

        document.querySelector('#section1').style.display='none';
        document.querySelector('#section2').style.display='block';
        document.querySelector('#section3').style.display='none';
    }, 3000);
};

// check numb

const checkNumber = () => {
    let value = document.querySelector('#field').value;
    if (value ==  number) {
        alert("Congratulations, You Won The Game...!!!");
    } else {
        alert("OOPS!! Guess Again...");
    }
    generate_number_btn_click();
};