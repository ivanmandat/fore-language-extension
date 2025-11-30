# PivotHighlightType

PivotHighlightType
-


# PivotHighlightType


## Описание


Перечисление PivotHighlightType
 содержит условия, по которым будут отбираться подсвечиваемые данные.


Используется свойством [IPivotHighlightItem.ConditionType](../Interface/IPivotHighlightItem/IPivotHighlightItem.ConditionType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Нет подсветки.


		 1
		 EqA. Равные A.


		 2
		 NEqA. Не равные A.


		 3
		 GA. Большие A.


		 4
		 LA. Меньшие A.


		 5
		 GEqA. Большие или равные
		 A.


		 6
		 LEqA. Меньшие или равные
		 A.


		 7
		 NLAandNGB. Между А
		 и В включительно.


		 8
		 LAorGB. Меньшие A или
		 большие B.


		 9
		 ALargest. A наибольших.


		 10
		 ALowest. A наименьших.


		 11
		 SelectionSet. Данные,
		 соответствующие указанной отметке.


## Комментарии


Если выбрано условие EqA, NEqA,
 GA, LA,
 GEqA, LEqA,
 ALargest, ALowest, то значение,
 с которым будет производиться сравнение, должно быть определено в свойстве
 [IPivotHighlightItem.ConditionValueA](../Interface/IPivotHighlightItem/IPivotHighlightItem.ConditionValueA.htm).


При условии NLAandNGB и LAorGB значения указываются в свойствах
 [IPivotHighlightItem.ConditionValueA](../Interface/IPivotHighlightItem/IPivotHighlightItem.ConditionValueA.htm)
 и [IPivotHighlightItem.ConditionValueB](../Interface/IPivotHighlightItem/IPivotHighlightItem.ConditionValueB.htm).


При условии SelectionSet в свойстве
 [IPivotHighlightItem.ConditionValueA](../Interface/IPivotHighlightItem/IPivotHighlightItem.ConditionValueA.htm)
 задаётся отметка подсвечиваемых данных, а в свойстве [IPivotHighlightItem.ConditionValueB](../Interface/IPivotHighlightItem/IPivotHighlightItem.ConditionValueB.htm)
 задаётся цвет. Отметка описывается интерфейсом [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)
 и должна представлять из себя комплексную отметку, включающую отметки
 всех источников, данные которых необходимо подсветить. Цвет описывается
 интерфейсом [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm).


Примечание.
 Работа с условием SelectionSet
 доступна только при работе с регламентными отчётами.


См. также:


[Перечисления сборки Pivot](KePivot_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
