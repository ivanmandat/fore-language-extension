# ISourceDataImportDestinationInfo.SelectionSet

ISourceDataImportDestinationInfo.SelectionSet
-


# ISourceDataImportDestinationInfo.SelectionSet


## Синтаксис


SelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство SelectionSet определяет
 отметку измерений, в соответствии с которой необходимо произвести индексацию.


## Комментарии


Если свойство не задано, то осуществляется индексация по полной отметке
 всех измерений. При это предварительно отстраивается матрица с данными
 и индексируются только те элементы, по которым имеются данные.


Если свойство задано, то индексируются только отмеченные элементы измерений.


См. также:


[ISourceDataImportDestinationInfo](ISourceDataImportDestinationInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
