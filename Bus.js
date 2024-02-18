

const totalSeat = document.getElementsByClassName('Seat');

let count =  4;

for (  let index = 0; index < totalSeat.length; index++) {
    const element = totalSeat[index];
    element.addEventListener('click', function(event) {

        count = count - 1;

        if( count < 0) {
            alert('Only 4 seats can be selected');
            return;
        }

        console.log(count);

        const seatName = event.target.innerText
        
        const backgroundColor = event.target.style.background = "#1dd100";
        const Color = event.target.style.color = "white";

        // seat count - 

        const seatDecress = document.getElementById('seatDecress').innerText;
        
        const convertDecress = parseInt(seatDecress);

        document.getElementById('seatDecress').innerText = convertDecress + 1;

         // seat count - end


        //  Seat Left + 

        const SeatLeft = document.getElementById('Seat-Left').innerText;
        const ConvertSeat = parseInt(SeatLeft);
        document.getElementById('Seat-Left').innerText = ConvertSeat - 1;
        

        //  Seat Left end


        

        // append child kora hoise

        const transfer = document.getElementById('transfer');

        const div = document.createElement('div');

        const p = document.createElement('p');
        const p3 = document.createElement('p');
        const p2 = document.createElement('p');
        p.innerText = seatName
        p2.innerText = 'economy';
        p3.innerText = 550;
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        div.classList.add('flex', 'justify-between', 'py-2','ticketPrice');
        transfer.appendChild(div);

        // first ticket here

        const firstTicketPrice = document.getElementsByClassName('ticketPrice')[0].childNodes[2].innerText;
        const convertTicket = parseInt(firstTicketPrice);
        

        // total price here
        
        const totalPrice = document.getElementById('totalPrice').innerText;
        const convertTotal = parseInt(totalPrice);
        document.getElementById('totalPrice').innerText = convertTicket + convertTotal;

        // grand total here

        const grandTotal = document.getElementById('grandTotal').innerText = convertTicket + convertTotal;

        event.target.setAttribute('disabled', true);

    })
}




function commontIdText(id, value){
    const element = document.getElementById(id)
    element.innerText = value;
}


