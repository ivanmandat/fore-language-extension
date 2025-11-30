# EaxChartView.RequestMetadata

EaxChartView.RequestMetadata
-


**


# EaxChartView.RequestMetadata


## Синтаксис


RequestMetadata: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata** генерируется при отсутствии метаданных в источнике данных диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. страницу «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Обработаем событие RequestMetadata:


// Получаем представление диаграммы экспресс-отчета
var chartView = expressBox.getDataView().getChartView();
// Обрабатываем событие RequestMetadata
chartView.RequestMetadata.add(function () {
    console.log("Осуществляется запрос метаданных.")
});
// Вызываем событие RequestMetadata
chartView.RequestMetadata.fire(this);

После выполнения примера в результате вызова события RequestMetadata в консоли браузера будет выводиться сообщение о том, что осуществляется запрос метаданных.


См. также:


[EaxChartView](EaxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
