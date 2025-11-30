# Workbook.getSerieByIndexAndParent

Workbook.getSerieByIndexAndParent
-


# Workbook.getSerieByIndexAndParent


## Синтаксис


getSerieByIndexAndParent(index, parentKey);


## Параметры


index. Number. Индекс ряда
 потомка;


parentKey. Number. Ключ родительского
 ряда.


## Описание


Метод getSerieByIndexAndParent
 возвращает ряд по индексу у определенного родителя.


## Комментарии


Если родительский ряд не задан, поиск ряда будет произведен в корневом
 уровне вложенности.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Получим ключ третьего ряда
serie = wbk.getSeries()[2];
key = serie.k;
// Получим первого потомка третьего ряда
wbk.getSerieByIndexAndParent(0, key);

В результате выполнения примера был получен первый потомок третьего
 ряда.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
