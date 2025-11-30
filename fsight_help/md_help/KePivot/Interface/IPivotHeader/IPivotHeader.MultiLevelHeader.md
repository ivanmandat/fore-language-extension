# IPivotHeader.MultiLevelHeader

IPivotHeader.MultiLevelHeader
-


# IPivotHeader.MultiLevelHeader


## Синтаксис


MultiLevelHeader: Boolean;


## Описание


Свойство MultiLevelHeader определяет,
 будет ли использоваться многоуровневый заголовок.


## Комментарии


Если свойству установлено значение True,
 то уровни измерений будут отображаться в отдельных строках/столбцах без
 повторения родительских элементов. При этом не будет учитываться изменение
 значения свойства [IPivotDimensionLevelPropertiesCommon.Separated](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.Separated.htm).


По умолчанию свойству установлено значение False,
 при этом, в зависимости от значения свойства [IPivotDimensionLevelPropertiesCommon.Separated](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.Separated.htm),
 элементы разных уровней формируют иерархию внутри ячейки или отображаются
 в отдельных строках/столбцах с дублированием родительских элементов.


См. также:


[IPivotHeader](IPivotHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
