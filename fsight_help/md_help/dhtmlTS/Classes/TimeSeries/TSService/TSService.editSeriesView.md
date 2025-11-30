# TSService.editSeriesView

TSService.editSeriesView
-


# TSService.editSeriesView


## Синтаксис


editSeriesView(wbk, series, callback);


## Параметры


wbk. PP.TS.Workbook. Задает [рабочую книгу](../Workbook/Workbook.htm);


series. Array. Задает массив
 рядов;


callback. PP.Delegate. Задает
 обработчик окончания выполнения операции.


## Описание


Метод editSeriesView изменяет
 настройки отображения рядов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Получим первый ряд
serie = wbk.getSelectedSeries()[0];
// Изменим значение ряда
serie.n = "Новое название ряда";
series = [serie];
// Применим настройки
tsService.editSeriesView(wbk, series);
workbookBox.refreshAll();

После выполнения примера было изменено наименование ряда.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
