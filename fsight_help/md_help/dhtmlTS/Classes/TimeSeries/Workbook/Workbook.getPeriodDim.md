# Workbook.getPeriodDim

Workbook.getPeriodDim
-


**


# Workbook.getPeriodDim


## Синтаксис


getPeriodDim();


## Описание


Метод getPeriodDim** возвращает
 календарное измерение.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Получим календарное измерение:


// Получим календарное измерение
periodDim = wbk.getPeriodDim();
// -> PP.Mb.DimSource {_AllowHasData: true, _AllowCalculation: true, _AllowSelection: true, _AllowSchemaCreation: true, _AllowElementsGroupCreation: true…}

В результате выполнения примера было получено календарное измерение.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
