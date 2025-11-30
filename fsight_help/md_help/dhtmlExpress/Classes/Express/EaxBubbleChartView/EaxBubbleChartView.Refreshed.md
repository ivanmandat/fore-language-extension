# EaxBubbleChartView.Refreshed

EaxBubbleChartView.Refreshed
-


# EaxBubbleChartView.Refreshed


## Синтаксис


Refreshed: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Refreshed наступает после отрисовки пузырьковой диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной пузырьковой диаграммой в области данных. Обработаем событие Refreshed, выводя в консоль браузера значение флага «Режим просмотра» для экспресс-отчета:


// Получаем мастер управления пузырьковой диаграммой экспресс-отчета
var master = expressBox.getPropertyBarView().getBubbleChartMaster();
// Получаем представление пузырьковой диаграммы экспресс-отчета
var bubbleChartView = master.getDataView();
// Обрабатываем событие Rendered
bubbleChartView.Refreshed.add(function () {
    var isViewMode = bubbleChartView.getViewMode();
    if (isViewMode) {
        console.log("Экспресс-отчет находится в режиме просмотра.");
    } else {
        console.log("Экспресс-отчет находится в режиме редактирования.");
    }
});
bubbleChartView.Refreshed.fire(this);


После выполнения данного примера в результате вызова события Refreshed в консоли браузера будет выведено сообщение о том, что экспресс-отчет находится в режиме редактирования.


См. также:


[EaxBubbleChartView](EaxBubbleChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
