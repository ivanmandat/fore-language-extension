# ImageList.applyToBackground

ImageList.applyToBackground
-


# ImageList.applyToBackground


## Синтаксис


applyToBackground(node: HTMLElement, rowIdx: Number,
 colIdx: Number, addToImage: String, addToPosition: String);


## Параметры


node. DOM-элемент, к которому
 применяется метод;


rowIdx. Индекс строки;


colIdx. Индекс столбца;


addToImage. Строка, добавляемая
 к ссылке на изображение в css-классе. Необязательный параметр;


addToPosition. Строка, добавляемая
 к описанию позиции изображения в css-классе. Необязательный параметр.


## Описание


Метод applyToBackground устанавливает
 в качестве фона DOM-элемента указанное изображение из спрайта.


## Пример


Для выполнения примера необходимо подключить к html-странице ссылки
 на библиотеку PP.js и таблицы визуальных стилей PP.css. Предполагается
 наличие файла, содержащего набор пиктограмм, с наименованием «ProfileProducts.png».
 Данный файл должен находиться на одном уровне с html-страницей. Создадим
 список пиктограмм, затем создадим div-элемент и установим для него в качестве
 фона изображение из спрайта:


// Создаем список пиктограмм
var imagelist = new PP.ImageList();
// Указываем источник списка пиктограмм
imagelist.setSource("ProfileProducts.png");
// Устанавливаем высоту и ширину пиктограмм
imagelist.setIconHeight(32);
imagelist.setIconWidth(32);
// Создаём div-элемент
var divElem = PP.createElement(document.body);
// Устанавливаем для div-элемента изображение в качестве фона
imagelist.applyToBackground(divElem, 1, 0);
// Выведем в консоль значения смещения по горизонтали и вертикали
console.log(imagelist.getLeft(), imagelist.getTop());
В результате выполнения примера в консоль будут выведены значения смещения
 по горизонтали и вертикали. На html-странице отобразится div-элемент
 с фоном установленного изображения из спрайта:


![](ImageList_applyToBackground.png)


См. также:


[ImageList](ImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
