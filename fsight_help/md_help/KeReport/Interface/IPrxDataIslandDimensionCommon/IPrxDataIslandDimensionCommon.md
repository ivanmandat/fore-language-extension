# IPrxDataIslandDimensionCommon

IPrxDataIslandDimensionCommon
-


# IPrxDataIslandDimensionCommon


## Описание


Интерфейс IPrxDataIslandDimensionCommon
 позволяет работать с измерением, на основе которого построена область
 данных.


## Комментарии


Интерфейс предназначен для работы с [областью данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm),
 которая является устаревшим типом таблицы. Для работы с аналитической
 областью данных используйте интерфейс [IEaxDatArea](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm).


Интерфейс является базовым для следующих интерфейсов:


	- [IPrxDataIslandDimension](../IPrxDataIslandDimension/IPrxDataIslandDimension.htm);


	- [IPrxDataIslandLevel](../IPrxDataIslandLevel/IPrxDataIslandLevel.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Drill](IPrxDataIslandDimensionCommon.Drill.htm)
		 Свойство Drill определяет
		 параметры расшифровки области данных.


		 ![](../../Property_Image.gif)
		 [Drilled](IPrxDataIslandDimensionCommon.Drilled.htm)
		 Свойство Drilled определяет
		 состояние опции «Расшифровка».


		 ![](../../Property_Image.gif)
		 [IsDrilled](IPrxDataIslandDimensionCommon.IsDrilled.htm)
		 Свойство IsDrilled
		 определяет, включена ли опция «Расшифровка».


		 ![](../../Property_Image.gif)
		 [Naming](IPrxDataIslandDimensionCommon.Naming.htm)
		 Свойство Naming возвращает
		 объект, содержащий наименование элементов измерения. Индекс наименования
		 передается посредством параметра Index.


		 ![](../../Property_Image.gif)
		 [NamingCount](IPrxDataIslandDimensionCommon.NamingCount.htm)
		 Свойство NamingCount
		 определяет количество дополнительных наименований элементов измерения.


		 ![](../../Property_Image.gif)
		 [Style](IPrxDataIslandDimensionCommon.Style.htm)
		 Свойство Style определяет
		 параметры оформления области данных.


## Свойства, унаследованные от [IPrxDataIslandHeaderCommon](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoIndent](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.AutoIndent.htm)
		 Свойство AutoIndent
		 определяет, будут ли использованы автоматические отступы для элементов.


		 ![](../../Property_Image.gif)
		 [ChildrenBeforeParents](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.ChildrenBeforeParents.htm)
		 Свойство ChildrenBeforeParents
		 определяет состояние опции «Дети перед родителями».


		 ![](../../Property_Image.gif)
		 [DuplicateParent](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.DuplicateParent.htm)
		 Свойство DuplicateParent
		 определяет состояние опции «Повторять элемент уровня».


		 ![](../../Property_Image.gif)
		 [Hierarchical](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.Hierarchical.htm)
		 Свойство Hierarchical
		 определяет состояние опции «Раскрывающаяся иерархия».


		 ![](../../Property_Image.gif)
		 [HierarchyTotals](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.HierarchyTotals.htm)
		 Свойство HierarchyTotals
		 определяет параметры итогов по иерархии.


		 ![](../../Property_Image.gif)
		 [IsAutoIndent](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.IsAutoIndent.htm)
		 Свойство IsAutoIndent
		 определяет, включено ли использование [автоматических
		 отступов для элементов](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.AutoIndent.htm).


		 ![](../../Property_Image.gif)
		 [IsChildrenBeforeParents](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.IsChildrenBeforeParents.htm)
		 Свойство IsChildrenBeforeParents
		 определяет, установлена ли опция «Дети перед родителями».


		 ![](../../Property_Image.gif)
		 [IsHierarchical](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.IsHierarchical.htm)
		 Свойство IsHierarchical определяет,
		 установлена ли раскрывающаяся иерархия.


		 ![](../../Property_Image.gif)
		 [IsParentDuplicated](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.IsParentDuplicated.htm)
		 Свойство IsParentDuplicated
		 определяет, установлено ли повторение элементов уровня
		 для строк/столбцов.


		 ![](../../Property_Image.gif)
		 [IsSeparated](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.IsSeparated.htm)
		 Свойство IsSeparated определяет,
		 установлено ли размещение элементов уровня в отдельном строке/столбце.


		 ![](../../Property_Image.gif)
		 [LevelTotals](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.LevelTotals.htm)
		 Свойство LevelTotals
		 определяет параметры итогов по уровням.


		 ![](../../Property_Image.gif)
		 [Separated](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.Separated.htm)
		 Свойство Separated
		 определяет состояние опции «Разместить элементы уровня отдельно».


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
