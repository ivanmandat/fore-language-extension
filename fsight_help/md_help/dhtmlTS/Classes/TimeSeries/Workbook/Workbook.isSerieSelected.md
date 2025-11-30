# Workbook.isSerieSelected

Workbook.isSerieSelected
-


# Workbook.isSerieSelected


## Синтаксис


isSerieSelected(serieKey) : Boolean;


## Параметры


serieKey. Number. Ключ ряда.


## Описание


Метод isSerieSelected определяет,
 выделен ли ряд.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Получим ключ первого ряда
serie = wbk.getSeries()[0];
key = serie.k;
// Получим признак выделенности ряда
console.log(wbk.isSerieSelected(key) ? "Первый ряд выделен" : "Первый ряд не выделен");

В результате выполнения примера был получен признак выделенности первого
 ряда.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
