# Animation.animateDomNodeProp

Animation.animateDomNodeProp
-


**


# Animation.animateDomNodeProp


## Синтаксис


animateDomNodeProp(context: HTMLElement, propertyName: String, callback: PP.Delegate|function);


## Параметры


context. DOM-вершина, у которой анимируется свойство;


propertyName. Наименование анимируемого свойства;


callback. Возвратная функция.


## Описание


Метод animateDomNodeProp** воспроизводит анимацию свойства DOM-элемента с текущими параметрами.


## Пример


Для выполнения примера необходимо наличие на странице экземпляра класса [Animation](Animation.htm) с наименованием «animation» (см. «[Конструктор Animation](Constructor_Animation.htm)») и компонента [TextArea](../../Components/TextArea/TextArea.htm) с наименованием «textArea». Воспроизведём анимацию изменения содержимого текстовой области в течение одной секунды:


// Получим DOM-вершину текстовой области
var domNode = textArea.getDomNode();
// Установим текст
textArea.setContent("10");
console.log("Исходный текст: " + domNode.innerText);
// Воспроизведём анимацию изменения текста
animation.animateDomNodeProp(domNode, "innerText");
if (animation.isExecute()) {
    // Остановим воспроизведение анимации через одну секунду
    var command = "console.log(\"Текст до завершения анимации: \" + domNode.innerText);" +
        "animation.stopToStart();" +
        "console.log(\"Текст после завершения анимации: \" + domNode.innerText);";
    setTimeout(command, 1000);
};

В результате выполнения примера в течение одной секунды была воспроизведена анимация изменения внутреннего текста DOM-элемента, соответствующего текстовой области. Исходное значение данного текста, а также значение до и после завершения анимации были выведены в консоли браузера:


Исходный текст: 10


Текст до завершения анимации: 178


Текст после завершения анимации: 10


См. также:


[Animation](Animation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
