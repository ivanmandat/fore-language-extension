# Workbook.getSerieVisibleSize

Workbook.getSerieVisibleSize
-


# Workbook.getSerieVisibleSize


## Синтаксис


getSerieVisibleSize(serie) : Number;


## Параметры


serie. Object. Объект ряда.


## Описание


Метод getSerieVisibleSize возвращает
 количество строк, занимаемое рядом и его потомками.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Получим количество строк, занимаемое вторым рядом и его потомками.
serie = wbk.getSeries()[1];
wbk.getSerieVisibleSize(serie);
// -> 2

В результате выполнения примера было получено количество строк, занимаемое
 вторым рядом и его потомками.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
