let history=[];
let hearts=document.getElementsByClassName('fa-heart');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click',function increment(){
let love=parseInt(document.getElementById('love').innerText);
    love++;
    document.getElementById('love').innerText=love;
    })
    

}
let copies=document.getElementsByClassName('box-border');
for (let i=0; i < copies.length; i++) {
    copies[i].addEventListener('click',function increment(){
let copy=parseInt(document.getElementById('copied').innerText);
    copy++;
    document.getElementById('copied').innerText=copy;
    alert("Copied!");
    })
    

}
let buttons=document.getElementsByClassName('copybtn');
for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let card=this.closest('.card');
        let text=card.getElementsByClassName('cardtext')[0].innerText;
        navigator.clipboard.writeText(text)
           });
}
let calls=document.getElementsByClassName('calling');
let balance=parseInt(document.getElementById('balance').innerText);
for (let i=0; i<calls.length;i++) {
    calls[i].addEventListener('click', function() {
        if (balance>=20) {
            let card=this.closest('.card');
            let service=card.getElementsByClassName('service')[0].innerText;
            let number=card.getElementsByClassName('cardtext')[0].innerText;
            alert("Calling " +service+ " (" +number+ ") ... ...");
            balance = balance - 20;
            document.getElementById('balance').innerText=balance;
            let data={
                name:service,
                number:number,
                date:new Date().toLocaleTimeString()
            };
            history.push(data);
            let contain=document.getElementById('history');
            let div=document.createElement('div');
            div.innerHTML=`
                <div class="w-[16.4rem] deletebtn flex items-center justify-between rounded-[0.5rem] bg-[rgba(250,250,250,1)] p-[1rem]">
                    <div>
                        <p class="text-[0.8rem] font-semibold text-[rgba(17,17,17,1)]">${data.name}</p>
                        <p class="text-[0.8rem] font-normal text-[rgba(92,92,92,1)]">${data.number}</p>
                    </div>
                    <div>
                        <p class="text-[0.9rem] font-normal text-[rgba(17,17,17,1)]">${data.date}</p>
                    </div>
                </div>`;
            contain.appendChild(div);
        } else {
            alert("Insufficient balance! :(");
        }
    });
}
document.getElementById('clear').addEventListener('click',function clear() {
let divs = document.querySelectorAll('.deletebtn');
    divs.forEach(div=>div.remove());
});


