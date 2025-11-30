# TSService.getAllSeriesView

TSService.getAllSeriesView
-


# TSService.getAllSeriesView


## Синтаксис


getAllSeriesView() : Array of Objects;


## Описание


Метод getAllSeriesView содержит
 список рядов, используемый мастером.


## Комментарии


Возвращает список рядов для мастера PeriodSeriesViewMaster.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Получим список рядов мастера:


// Получим список рядов
tsService.getAllSeriesView();

В результате выполнения примера было получен список рядов мастера.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
