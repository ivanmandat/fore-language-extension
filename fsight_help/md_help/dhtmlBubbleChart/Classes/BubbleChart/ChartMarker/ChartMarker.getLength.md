# ChartMarker.getLength

ChartMarker.getLength
-


**


# ChartMarker.getLength


## Синтаксис


getLength();


## Описание


Метод getLength** возвращает для метки оси пузырьковой диаграммы длину в пикселях.


## Комментарии


Метод возвращает значение типа Number.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Создадим новую метку пузырьковой диаграммы и получим значение её длины:


// Определим кисть
var stroke = new PP.SolidColorBrush({
    Color: "#3366FF"
});
// Определим параметры метки
var settings = {
    Length: 15,
    Chart: bubbleChart,
    Thickness: 10,
    Stroke: stroke
};
// Создадим новую метку
var marker = new PP.Ui.ChartMarker(settings);
// Получим и выведем значение длины метки
console.log("Длина метки: " + marker.getLength());

В результате выполнения примера в консоли браузера было выведено значение длины метки:


Длина метки: 15


См. также:


[ChartMarker](ChartMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
