document.getElementById('btn-add-money')
    .addEventListener('click', function (event){
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');

        // my current taka
        const myAccount = document.getElementById('Current-account').innerText;
        const myTaka = parseFloat(myAccount);

        if(typeof addMoney === 'number' && addMoney >= 0){
            if(myTaka >= 0){
                const final = myTaka - addMoney;
                document.getElementById('Current-account').innerText = final;
                
                // Value

                const balance = getTextFieldValueById('account-balance');
                const newBalace = balance + addMoney;
                document.getElementById('account-balance').innerText = newBalace;

                // add history

                const div = document.createElement('div');
                div.classList.add('w-9/12','border-2','py-8','px-8','m-auto','border-inherit','rounded-2xl','mt-5');
                div.innerHTML = `
                
                <h4 class="font-bold text-lg" >${addMoney} Taka is Donated for famine-2024 at Donate for Flood at Noakhali, Bangladesh</h4>
                <p>Date :${date} Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
                `
                document.getElementById('history-container').appendChild(div);
                    alert("Congrates! You have donated for humankind.Succesfully",addMoney);   
            }

            
        }
        else{
            alert("Please Enter Valid Amount.");
        }
        

        
    });
    const date = new Date();


