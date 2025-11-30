# EaxChartView.Rendered

EaxChartView.Rendered
-


**


# EaxChartView.Rendered


## Синтаксис


Rendered: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Rendered** наступает
 после отрисовки диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной диаграммой в рабочей
 области экспресс-отчета. Обработаем событие **Rendered**,
 выводя в консоль браузера сообщение о том, в каком режиме открыт экспресс-отчет
 - для просмотра или для редактирования:


// Получаем представление диаграммы экспресс-отчета
var chartView = expressBox.getDataView().getChartView();
// Обрабатываем событие Rendered
chartView.Rendered.add(function () {
    var isViewMode = chartView.getViewMode();
    if (isViewMode) {
        console.log("Экспресс-отчет находится в режиме просмотра.");
    } else {
        console.log("Экспресс-отчет находится в режиме редактирования.");
    }
});

После выполнения данного примера в консоли браузера в результате наступления
 события **Rendered** будет
 выведено сообщение о том, что экспресс-отчета находится в режиме редактирования.


См. также:


[EaxChartView](EaxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
