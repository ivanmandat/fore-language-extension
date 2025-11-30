# PP.setCapture

PP.setCapture
-


**


# PP.setCapture


## Синтаксис


setCapture(domNode, events: Array);


## Параметры


*domNode.* Значение, которое требуется запомнить;


*events.* Массив событий. Необязательный параметр, значение по умолчанию не определено.


## Описание


Метод setCapture** запоминает указанное значение.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файл сценария PP.js. Создадим DOM-вершину и запомним её разметку:


// Создадим DOM-элемент
var markup = "<div id=\"test\" onclick=\"alert(12)\"></div>";
var dom = PP.htmlToDOM(markup);
console.log("Исходная разметка:");
console.log(dom.outerHTML);
console.log("");
// Сохраним созданный DOM-элемент
PP.setCapture(dom, [onclick]);
console.log("Сохранённая разметка до её очистки:")
// Получим сохранённую разметку
console.log(PP.getCaptureNode() != undefined ? PP.getCaptureNode().outerHTML : "\"\"");
console.log("");
// Очистим сохранённую разметку
PP.releaseCapture(dom);
console.log("Сохранённая разметка после её очистки:")
// Получим сохранённую разметку
console.log(PP.getCaptureNode() != undefined ? PP.getCaptureNode().outerHTML : "\"\"");

В результате выполнения примера в консоли браузера была выведена исходная HTML-разметка созданной DOM-вершины, а также сохранённая разметка до и после её очистки:


Исходная разметка:


<div id="test" onclick="alert(12)"></div>


Сохранённая разметка до её очистки:


<div id="test" onclick="alert(12)"></div>


Сохранённая разметка после её очистки:


""


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
