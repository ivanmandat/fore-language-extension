# Workbook.getSerieDepth

Workbook.getSerieDepth
-


# Workbook.getSerieDepth


## Синтаксис


getSerieDepth(serie) : Number;


## Параметры


serie. Object. Объект ряда.


## Описание


Метод getSerieDepth возвращает
 уровень вложенности ряда.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Получим уровень вложенности первого ряда
serie = wbk.getSeries()[1];
wbk.getSerieDepth(serie);

В результате выполнения примера был получен уровень вложенности первого
 ряда.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
