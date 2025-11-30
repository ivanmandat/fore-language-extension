# Animation.animateCSS

Animation.animateCSS
-


**


# Animation.animateCSS


## Синтаксис


animateCSS(context: HTMLElement, propertyName: String, callback: PP.Delegate|function);


## Параметры


context. DOM-вершина, у которой меняется свойство;


propertyName. Наименование анимируемого свойства;


callback. Возвратная функция.


## Описание


Метод animateCSS** воспроизводит анимацию css-свойства объекта.


## Пример


Для выполнения примера необходимо наличие на странице экземпляра класса [Animation](Animation.htm) с наименованием «animation» (см. «[Конструктор Animation](Constructor_Animation.htm)») и компонента [TextArea](../../Components/TextArea/TextArea.htm) с наименованием «textArea». Воспроизведём анимацию изменения высоты текстовой области в течение одной секунды:


// Получим DOM-вершину текстовой области
var domNode = textArea.getDomNode();
console.log("Исходная высота текстовой области: " + domNode.style.height);
// Воспроизведём анимацию изменения высоты текстовой области
animation.animateCSS(domNode, "height");
if (animation.isExecute()) {
    // Остановим воспроизведение анимации через одну секунду
    var command = "console.log(\"Высота до завершения анимации: \" + domNode.style.height);" +
        "animation.stopToEnd();" +
        "console.log(\"Высота после завершения анимации: \" + domNode.style.height);";
    setTimeout(command, 1000);
};

В результате выполнения примера в течение одной секунды была воспроизведена анимация изменения высоты текстовой области. Исходное значение высоты, а также её значение до и после завершения анимации были выведены в консоли браузера:


Исходная высота текстовой области: 200px


Высота до завершения анимации: 178px


Высота после завершения анимации: 200px


См. также:


[Animation](Animation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
