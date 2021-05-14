const app = document.getElementById('app')
const nav = document.getElementById('navig')
const header = document.getElementById('header')
const h1 = document.getElementById('h1')
const divBooks = document.getElementById('grid-container')

const divBook1 = document.createElement('div')
const h3DivBook1 = document.createElement('h3')
const pBook1 = document.createElement('p')

const divBook2 = document.createElement('div')
const h3DivBook2 = document.createElement('h3')
const pBook2 = document.createElement('p')

const divBook3 = document.createElement('div')
const h3DivBook3 = document.createElement('h3')
const pBook3 = document.createElement('p')

nav.setAttribute('class', 'navigation')
h1.setAttribute('class', 'margin-header')

divBooks.appendChild(divBook1)
divBook1.setAttribute('id', 'grid-element1')
divBook1.setAttribute('class', 'book')
divBook1.appendChild(h3DivBook1)
h3DivBook1.innerText = 'Book1'
divBook1.appendChild(pBook1)
pBook1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."

divBooks.appendChild(divBook2)
divBook2.setAttribute('class', 'book')
divBook2.appendChild(h3DivBook2)
h3DivBook2.innerText = 'Book2'
divBook2.appendChild(pBook2)
pBook2.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."

divBooks.appendChild(divBook3)
divBook3.setAttribute('class', 'book')
divBook3.appendChild(h3DivBook3)
h3DivBook3.innerText = 'Book3'
divBook3.appendChild(pBook3)
pBook3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."