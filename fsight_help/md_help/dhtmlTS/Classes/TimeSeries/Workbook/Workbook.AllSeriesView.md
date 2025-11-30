# Workbook.AllSeriesView

Workbook.AllSeriesView
-


# Workbook.AllSeriesView


## Синтаксис


AllSeriesView : Array of Objects;


## Описание


Свойство AllSeriesView содержит список рядов, используемый мастером.


## Комментарии


Содержит список рядов для мастера PeriodSeriesViewMaster.


Значение свойства устанавливается с помощью метода setAllSeriesView,
 а возвращается - с помощью метода getAllSeriesView.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Получим список рядов
tsService.getAllSeriesView();

В результате выполнения примера был получен список рядов мастера.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
