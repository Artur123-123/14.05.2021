const app = document.getElementById('app')
const nav = document.getElementById('navig')
const header = document.getElementById('header')
const h1 = document.getElementById('h1')
const divBooks = document.getElementById('grid-container')

const divBook1 = document.createElement('div')
const h3DivBook1 = document.createElement('h3')
const pBook1 = document.createElement('p')
const buttonUsun1 = document.createElement('button')

const divBook2 = document.createElement('div')
const h3DivBook2 = document.createElement('h3')
const pBook2 = document.createElement('p')
const buttonUsun2 = document.createElement('button')

const divBook3 = document.createElement('div')
const h3DivBook3 = document.createElement('h3')
const pBook3 = document.createElement('p')
const buttonUsun3 = document.createElement('button')

const divBook4 = document.createElement('div')
const h3DivBook4 = document.createElement('h3')
const pBook4 = document.createElement('p')
const buttonUsun4 = document.createElement('button')

const divBook5 = document.createElement('div')
const h3DivBook5 = document.createElement('h3')
const pBook5 = document.createElement('p')
const buttonUsun5 = document.createElement('button')

const divBook6 = document.createElement('div')
const h3DivBook6 = document.createElement('h3')
const pBook6 = document.createElement('p')
const buttonUsun6 = document.createElement('button')

const buttonUsun = document.createElement('button')

nav.setAttribute('class', 'navigation')
h1.setAttribute('class', 'margin-header')

divBooks.appendChild(divBook1)
divBook1.setAttribute('id', 'grid-element1')
divBook1.setAttribute('class', 'book')
divBook1.appendChild(h3DivBook1)
h3DivBook1.innerText = 'Book1'
divBook1.appendChild(pBook1)
pBook1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divBook1.appendChild(buttonUsun1)
buttonUsun1.innerText = "Usuń"

divBooks.appendChild(divBook2)
divBook2.setAttribute('id', 'grid-element2')
divBook2.setAttribute('class', 'book')
divBook2.appendChild(h3DivBook2)
h3DivBook2.innerText = 'Book2'
divBook2.appendChild(pBook2)
pBook2.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divBook2.appendChild(buttonUsun2)
buttonUsun2.innerText = "Usuń"

divBooks.appendChild(divBook3)
divBook3.setAttribute('id', 'grid-element3')
divBook3.setAttribute('class', 'book')
divBook3.appendChild(h3DivBook3)
h3DivBook3.innerText = 'Book3'
divBook3.appendChild(pBook3)
pBook3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divBook3.appendChild(buttonUsun3)
buttonUsun3.innerText = "Usuń"


divBooks.appendChild(divBook4)
divBook4.setAttribute('id', 'grid-element4')
divBook4.setAttribute('class', 'book')
divBook4.appendChild(h3DivBook4)
h3DivBook4.innerText = 'Book4'
divBook4.appendChild(pBook4)
pBook4.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divBook4.appendChild(buttonUsun4)
buttonUsun4.innerText = "Usuń"

divBooks.appendChild(divBook5)
divBook5.setAttribute('id', 'grid-element5')
divBook5.setAttribute('class', 'book')
divBook5.appendChild(h3DivBook5)
h3DivBook5.innerText = 'Book5'
divBook5.appendChild(pBook5)
pBook5.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divBook5.appendChild(buttonUsun5)
buttonUsun5.innerText = "Usuń"

divBooks.appendChild(divBook6)
divBook6.setAttribute('id', 'grid-element6')
divBook6.setAttribute('class', 'book')
divBook6.appendChild(h3DivBook6)
h3DivBook6.innerText = 'Book6'
divBook6.appendChild(pBook6)
pBook6.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divBook6.appendChild(buttonUsun6)
buttonUsun6.innerText = "Usuń"