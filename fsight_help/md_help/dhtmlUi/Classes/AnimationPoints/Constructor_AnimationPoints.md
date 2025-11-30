# Конструктор AnimationPoints

Конструктор AnimationPoints
-


**


# Конструктор AnimationPoints


## Синтаксис


AnimationPoints(settings: Object);


## Параметры


settings. JSON-объект со значениями
 свойств класса.


## Описание


Конструктор AnimationPoints** создаёт экземпляр класса **[AnimationPoints](AnimationPoints.htm)**.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файл сценария PP.js и файл стилей PP.css, а сам пример нужно запустить
 в консоли браузера. Создадим текстовую область и добавим её на страницу:


// Создадим текстовую область
var textArea = new PP.Ui.TextArea({
    Width: 200, // Ширина
    Height: 100 // Высота
});
// Добавим данную область в документ
textArea.addToNode(document.body);

В результате выполнения примера на страницу была добавлена текстовая
 область:


![](../Animation/Animation.png)


Затем создадим объект набора анимаций, реализующий плавное изменение
 размеров данной области и её поворот. По окончании воспроизведения окрасим
 текстовую область в жёлтый цвет, рассчитаем длительность анимации в целом
 и длительность каждого её шага:


// Определим переменную для хранения длительность анимации
var startTime = 0;
// Получим DOM-вершину текстовой области
var domNode = textArea.getDomNode();
// Создадим 2 точки анимации
var animationPoints = new PP.Ui.AnimationPoints({
    Items: [{
            Value: 0,
            // Укажем массив анимаций
            Items: [{
                    Context: domNode,
                    PropertyName: "width", // изменяемый параметр (ширина)
                    AnimationType: PP.Ui.AnimationType.CSS,
                    Start: 0, // начальное значение изменяемого параметра
                    End: 300, // конечное значение изменяемого параметра
                    Duration: 1000 // длительность анимации
                }, {
                    Context: domNode,
                    PropertyName: "height", // изменяемый параметр (высота)
                    AnimationType: PP.Ui.AnimationType.CSS,
                    Start: 1, // начальное значение изменяемого параметра
                    End: 150, // конечное значение изменяемого параметра
                    Duration: 1000 // длительность анимации
                }
            ]
        }, {
            Value: 1000,
            // Укажем массив анимаций
            Items: [{
                    Context: textArea,
                    PropertyName: 'Rotate', // изменяемый параметр (угол поворота)
                    AnimationType: PP.Ui.AnimationType.PPProp,
                    Start: 0, // начальное значение изменяемого параметра
                    End: 5, // конечное значение изменяемого параметра
                    Duration: 500 // длительность анимации
                }
            ]
        }
    ]
});
// Обработаем событие Started
animationPoints.Started.add(function () {
    // Определим время начала анимации
    startTime = Date.now();
    // Выведем сообщение о начале анимации
    console.log("Анимация началась")
});
// Обработаем событие Step
animationPoints.Step.add(function () {
    // Рассчитаем длительность шага анимации
    console.log("Шаг анимации закончился, длительность шага: " + (Date.now() - startTime));
});
// Обработаем событие Ended
animationPoints.Ended.add(function () {
    // Рассчитаем реальную длительность анимации
    console.log("Анимация закончилась, длительность анимации: " + (Date.now() - startTime));
});
// Определим возвратную функцию
var animateCallback = function (sender, args) {
    /* По завершении анимации закрасим текстовую область
	жёлтым цветом */
    args.Args.Node.style.backgroundColor = "yellow";
};
// Зададим возвратную функцию
animationPoints.setCallback(PP.Delegate(this.animateCallback, animationPoints, {
    Node: domNode
}));
// Запустим воспроизведение анимации
animationPoints.run();
// Остановим анимацию через 3,5 секунды после её запуска
setTimeout("animationPoints.stop();", 3500);

В результате выполнения примера был создан объект группы анимаций, реализующий
 плавное изменение размеров текстовой области и её поворот. Анимация была
 остановлена через 3,5 секунды после начала воспроизведения. По окончании
 воспроизведения область окрасилась в жёлтый цвет:


![](AnimationPoints2.png)


С помощью обработки событий [Started](AnimationPoints.Started.htm),
 [Ended](AnimationPoints.Ended.htm) и [Step](AnimationPoints.Step.htm)
 была рассчитана и выведена в консоль браузера длительность анимации в
 целом и длительность каждого её шага:


Анимация началась


Шаг анимации закончился, длительность шага: 1006


Шаг анимации закончился, длительность шага: 1505


Анимация закончилась, длительность анимации: 1506


См. также:


[AnimationPoints](AnimationPoints.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
