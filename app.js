let button          = document.querySelector('#button')
let nickname        = document.querySelector('#nickname')
let PeriodeRotasi   = document.querySelector('#Periode-Rotasi')
let PeriodeOrbit    = document.querySelector('#Periode-Orbit')
let Iklim           = document.querySelector('#Iklim')
let Population      = document.querySelector('#Population')


function getInfo(){ 

let randomNumber = Math.floor((Math.random() * 61) + 1)

let apiUrl= `https://swapi.co/api/planets/${randomNumber}`  

    axios.get(apiUrl).then(function(response){
    updateInfo(response.data)
})
}

function updateInfo(data) {
    nickname.innerText      = `Nama Planetnye : ${data.name}`
    PeriodeRotasi.innerText = `Periode Rotasi : ${data.rotation_period}`
    PeriodeOrbit.innerText  = `Periode Orbit : ${data.orbital_period}`
    Iklim.innerText         = `Iklim : ${data.climate}`
    Population.innerText    = `Populasi : ${data.population}`
    

}

button.addEventListener('click', getInfo)  