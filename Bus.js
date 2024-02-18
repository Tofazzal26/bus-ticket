

const totalSeat = document.getElementsByClassName('Seat');

for (  let index = 0; index < totalSeat.length; index++) {
    const element = totalSeat[index];
    element.addEventListener('click', function(event) {
        const seatName = event.target.innerText
        
    
    })
}


// way one

// const transfer = document.getElementById('transfer');
        
// const p = document.createElement('p');
        
// const p3 = document.createElement('p');
// const p2 = document.createElement('p');
// p.innerText = seatName
// p2.innerText = 'economy';
// p3.innerText = 550;
// transfer.appendChild(p);
// transfer.appendChild(p2);
// transfer.appendChild(p3);


function commontIdText(id, value){
    const element = document.getElementById(id)
    element.innerText = value;
}


