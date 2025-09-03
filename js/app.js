let nameField = document.getElementById('nameField');
let countField = document.getElementById('countField');
let priceField = document.getElementById('priceField');
let addBtn = document.getElementById('addBtn');
let itemsList = document.getElementById('itemsList');
let sumLbl = document.getElementById('sumLbl');



let items = [];
let plusitems = [];


addBtn.addEventListener('click', ()=>{
    if (nameField.value == '' || priceField.value == 0 || countField.value == 0) {
        window.alert('Adatok nélkül nehéz lesz!')
        return
    }

    plusitems.push({
        name:nameField.value
    })

    items.push({
        name: nameField.value,
        price: Number(priceField.value),
        count: Number(countField.value),
        sum: priceField.value * countField.value
    })
    refreshTable()
    clearForm()
    save()

});



function clearForm(){

    nameField.value=''
    priceField.value=''
    countField.value=''
}

function refreshTable(){
    itemsList.innerHTML ='';
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
         
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')
    let td6 = document.createElement('td')
    let btn = document.createElement('button')

        td3.classList.add('text-end');
        td4.classList.add('text-end');
        td5.classList.add('text-end');
        td6.classList.add('text-center')
        btn.classList.add('btn', 'btn-danger', 'btn-sm')
        btn.addEventListener('click', () => {
            removeitem(i)
        })

    td1.innerHTML = i+1 + '.';
    td2.innerHTML = items[i].name;
    td3.innerHTML = items[i].price + 'Ft';
    td4.innerHTML = items[i].count + ' db';
    td5.innerHTML = items[i].sum + 'Ft';
    btn.innerHTML = 'X'

    sum += items[i].sum;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    td6.append(btn)
    itemsList.appendChild(tr);
}
sumLbl.innerHTML=sum;
}

function save(){
    localStorage.setItem('bevLista', JSON.stringify(items))
}

function load(){
    if (localStorage.getItem('bevLista')) {
        items = JSON.parse(localStorage.getItem('bevLista'))
    }
}

function removeitem(idx){
    if (confirm('Biztosan törölni akarod?')) {
        items.splice(idx,1)
        refreshTable();
        save()
    }
    
}   

function addeditems(){
    
}
// app indulasakor

load()
refreshTable()
clearForm()