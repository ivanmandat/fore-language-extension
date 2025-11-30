# Animation.animateProp

Animation.animateProp
-


**


# Animation.animateProp


## Синтаксис


animateProp(context: [PP.Object](dhtmlCommon.chm::/Classes/object/object.htm), propertyName: String, callback: PP.Delegate|function);


## Параметры


context. Объект, у которого анимируется свойство;


propertyName. Наименование анимируемого свойства;


callback. Возвратная функция.


## Описание


Метод animateProp** воспроизводит анимацию свойства объекта.


## Пример


Для выполнения примера необходимо наличие на странице экземпляра класса [Animation](Animation.htm) с наименованием «animation» (см. «[Конструктор Animation](Constructor_Animation.htm)») и компонента [TextArea](../../Components/TextArea/TextArea.htm) с наименованием «textArea». Воспроизведём анимацию изменения ширины текстовой области в течение одной секунды:


// Получим DOM-вершину текстовой области
var domNode = textArea.getDomNode();
console.log("Исходная ширина текстовой области: " + textArea.getWidth());
// Воспроизведём анимацию изменения ширины текстовой области
animation.animateProp(textArea, "Width");
if (animation.isExecute()) {
    // Остановим воспроизведение анимации через одну секунду
    var command = "console.log(\"Ширина до завершения анимации: \" + textArea.getWidth());" +
        "animation.stop();" +
        "console.log(\"Ширина после завершения анимации: \" + textArea.getWidth());" +
        "console.log(\"Текущий шаг анимации: \" + animation.getNow());" +
        "console.log(\"Последний шаг анимации: \" + animation.step(animation.getDuration()));";
    setTimeout(command, 1000);
};

В результате выполнения примера в течение одной секунды была воспроизведена анимация изменения ширины текстовой области. Её исходная и полученная ширина, а также текущий и последний (максимально возможный) шаг анимации были выведены в консоли браузера:


Исходная ширина текстовой области: 200

Ширина до завершения анимации: 179

Ширина после завершения анимации: 179

Текущий шаг анимации: 179

Последний шаг анимации: 200


См. также:


[Animation](Animation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
