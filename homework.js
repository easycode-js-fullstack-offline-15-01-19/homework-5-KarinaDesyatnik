// -------------------------- Home work --------------------------
// -------------------------- Десятник Карина --------------------------


//DOM. Задачи.
// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
console.log(document.head);
// 2. body
console.log(document.body);
// 3. все дочерние элементы body и вывести их в
// консоль.
console.log(body.children);
// 4. первый div и все его дочерние у
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
let firstDiv = body.firstElementChild;
console.log(firstDiv);
console.log(firstDiv.children);

// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark

function isParent(parent, child) {
	if (parent === child.closest('div')) {
		return true
	} else {
		return false
	}
}

//2. Получить список всех ссылок, которые не находятся внутри списка ul

let links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));
console.log(links);

//3. Найти элемент, который находится перед и после списка ul

console.log(document.querySelector('ul').previousSibling);
console.log(document.querySelector('ul').nextSibling);

//4. Посчитать количество элементов li в списке
console.log(document.getElementsByTagName('li').length);

//Задачи Свойства 

//1. Найти параграф и получить его текстовое содержимое (только текст!)
const pText = document.querySelector('p');
console.log(pText.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает 
// информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних
//  узлов (если детей нет - 0)
function elementInfo(dom) {
	let about = {};
	about.type = dom.nodeType;
	about.name = dom.tagName;
	about.numberNodes = dom.children.length ? dom.children.length : 0;
	return about;
}

// 3. Получить массив, который состоит из текстового содержимого 
// ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
function linkArray (domNode) {
    let textArray = [];
    let links = domNode.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        textArray.push(links[i].innerHTML);
    }
    return textArray;
}

//4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
//-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let p = document.getElementsByTagName('p')[0];
let pChildren = p.childNodes;
for (let i = 0; i < pChildren.length; i++) {
    if (pChildren[i].nodeType === 3) {
        pChildren[i].data = "-text-";
    }
}

//1. Найти в коде список ul и добавить класс “list”

let ul = document.querySelector('ul');
ul.classList.add("list");


//2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let link = document.querySelector('span').nextSibling.nextSibling.setAttribute('id', 'link');

// 3. На li через один (начиная с самого первого) установить класс “item”
let liList = list.getElementsByTagName('li');
for (let i = 0; i < liList.length; i++) {
    if (i % 2 === 0) {
        liList[i].classList.add('item');
    }
}

// 4. На все ссылки в примере установить класс “custom-link”

for (let i = 0; i < allSiteLinks.length; i++) {
    allSiteLinks[i].classList.add('custom-link');
}

// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
/* <ul>
<li><a href="#">Link1</a></li>
...
<li class=”new-item”>item 5</li>
<li class=”new-item”>item 6</li>
</ul>
 */

for (let i = 1; i < 5; i++) {
    let newLi = document.createElement("li");
    newLi.classList.add('new-item');
    let newNumber = list.children.length+ 1;
    newLi.innerHTML = "item" + newNumber;
    list.appendChild(newLi);


//2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
let liLinks = document.getElementsByClassName('list')[0].getElementsByTagName('a');
for (let i = 0; i < liLinks.length; i++) {
    let newLi = document.createElement("strong");
    liLinks[i].appendChild(newLi);
}

//3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

let image = document.createElement('img');
document.body.insertBefore(image, document.body.firstChild);
document.body.firstChild.setAttribute('src', 'img/img.jpg');
document.body.firstChild.setAttribute('alt', 'this image');


// Найти на странице элемент mark, добавить в конец содержимого текст
// “green” и на элемент установить класс green

let green = document.getElementsByTagName('mark')[0];
green.innerHTML += "green";
green.classList.add('green');


// Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let listChildren = list.children;
let listArray = [];
for (let i = 0; i < listChildren.length; i++) {
    listArray[i] = listChildren[i].textContent;
}

function compare(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
}

let sortListArray = listArray.sort(compare);
for (let i = 0; i < listChildren.length; i++) {
    listChildren[i].textContent = sortListArray[i];
}