let dateInput = document.getElementById("dateInput");
let dateSubmitButton = document.getElementById("dateSubmitButton");
let resultArea = document.querySelector(".resultArea");
let startupWindow = document.getElementById("pageLoadModal");

let age;

dateSubmitButton.addEventListener("click", () =>
{
    console.log(dateInput.value);

    let inputNumbers = dateInput.value.split('-');

    console.log(inputNumbers);

    let currentDate = new Date();
    let dateTime = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`;
    
    let currentDateNumbers = dateTime.split('-');

    console.log(currentDateNumbers);

    //subtracts the current year from the user's year of birth and sets it to the age variable
    age = currentDateNumbers[0] - inputNumbers[0];

    //subtracts the current month from the birth month and the current day from the birth day
    let monthVerify = currentDateNumbers[1] - inputNumbers[1];
    let dayVerify = currentDateNumbers[2] - inputNumbers[2];

    //if monthVerify is a negative number or if the monthVerify equals 0 and dayVerify is a negative number
    //this means the user's birthday has not occured yet in the current year and the age should be decremented by 1
    if (monthVerify < 0 || (monthVerify == 0 && dayVerify < 0))
    {
        age--;
    }

    {
        if (age >= 18)
        {
            resultArea.innerHTML = `
                                        <br />
                                        <h4>Access granted. Proceeding to website...</h4>
                                        <br />
                                    `;
            setTimeout(() =>
            {
                let backdrop = document.querySelector('.modal-backdrop');
                let pageContent = document.querySelector(".page-content");

                backdrop.classList.add('modal-backdrop-custom');
                startupWindow.remove();
                document.body.style.overflow = '';
                pageContent.style.webkitFilter = 'blur(0px)';
            }, 1000);
        }
        else
        {
            resultArea.innerHTML = `
                                        <br />
                                        <h4>Access denied. Go boot up Roblox lil' bro.</h4>
                                        <br />
                                   `;
        }
    }
    
})

document.addEventListener('DOMContentLoaded', function () 
{
    // Initialize the Bootstrap modal
    let pageLoadModal = new bootstrap.Modal(document.getElementById('pageLoadModal'));

    // Show the modal when the page is fully loaded
    pageLoadModal.show();
});