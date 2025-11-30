# ChartCategory.refreshCorridor

ChartCategory.refreshCorridor
-


# ChartCategory.refreshCorridor


## Синтаксис


refreshCorridor(fireEvent: Boolean);


## Параметры


fireEvent. Признак вызова события.


## Описание


Метод refreshCorridor обновляет
 коридоры диаграммы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), необходимо наличие в рабочей книге
 включенных коридоров диаграмм.


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();

//Получаем вкладку «Диаграмма» на ленте инструментов рабочей книги
var chartCategory = ribbonView.getChartCategory();
//Обновляем коридоры диаграм без вызова события
chartCategory.refreshCorridor(false);
См. также:


[ChartCategory](ChartCategory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
