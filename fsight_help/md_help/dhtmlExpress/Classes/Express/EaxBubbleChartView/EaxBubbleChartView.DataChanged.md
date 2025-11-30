# EaxBubbleChartView.DataChanged

EaxBubbleChartView.DataChanged
-


**


# EaxBubbleChartView.DataChanged


## Синтаксис


DataChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Data - массив настроек пузырьковой диаграммы в виде JSON-объектов с полями Name и Value.


## Описание


Событие DataChanged** наступает после изменения данных пузырьковой диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной пузырьковой диаграммой в области данных. Обработаем событие DataChanged, выводя измененное значение расположения легенды пузырьковой диаграммы экспресс-отчета:


// Получаем мастер управления пузырьковой диаграммой экспресс-отчета
var master = expressBox.getPropertyBarView().getBubbleChartMaster();
// Получаем представление пузырьковой диаграммы экспресс-отчета
var bubbleChartView = master.getDataView();
// Обрабатываем событие DataChanged
bubbleChartView.DataChanged.add(function (sender, args) {
    var items = args.Data;
    for (var i in items) {
        var item = items[i];
        if (item.Name == "chartmaster.legendpanel.legendposition") {
            console.log("Расположение легенды пузырьковой диаграммы: " + item.Value);
        }
    }
    console.log(args);
});

Выполним данный пример и изменим вручную положение легенды пузырьковой диаграммы экспресс-отчета на панели «Легенда». В результате в консоли браузера будет выведено значение нового расположения легенды (в данном случае - в нижнем правом углу):


Расположение легенды пузырьковой диаграммы: Bottom&Right


См. также:


[EaxBubbleChartView](EaxBubbleChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
