# IPivotHeader

IPivotHeader
-


# IPivotHeader


Сборка: Pivot;


## Описание


Интерфейс IPivotHeader содержит
 свойства и методы для работы с коллекцией измерений, расположенных в выбранном
 заголовке таблицы.


## Иерархия наследования


           [IPivotDimensionLevelPropertiesCommon](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.htm)


           IPivotHeader


## Комментарии


Заголовок таблицы можно получить, используя следующие свойства:


	- [IPivot.FixedHeader](../IPivot/IPivot.FixedHeader.htm);


	- [IPivot.LeftHeader](../IPivot/IPivot.LeftHeader.htm);


	- [IPivot.TopHeader](../IPivot/IPivot.TopHeader.htm).


При работе с [аналитической
 областью данных](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm) заголовок таблицы, описываемый интерфейсом
 IPivotHeader, может быть приведен к интерфейсу [IDataAreaHeaderStyleSettingsBase](ForeSys.chm::/Interface/IDataAreaHeaderStyleSettingsBase/IDataAreaHeaderStyleSettingsBase.htm)
 для настройки оформления с помощью свойства [IEaxGridViewSettings.GetStyleSettings](KeExpress.chm::/Interface/IEaxGridViewSettings/IEaxGridViewSettings.GetStyleSettings.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dim](IPivotHeader.Dim.htm)
		 Свойство Dim возвращает
		 данные измерения, расположенного в заданной позиции заголовка
		 таблицы.


		 ![](../../Property_Image.gif)
		 [DimCount](IPivotHeader.DimCount.htm)
		 Свойство DimCount возвращает
		 количество измерений, имеющихся в выбранном заголовке таблицы.


		 ![](../../Property_Image.gif)
		 [EvaluatedSlots](IPivotHeader.EvaluatedSlots.htm)
		 Свойство EvaluatedSlots
		 возвращает коллекцию вычисляемых столбцов, расположенных в заголовке
		 таблицы.


		 ![](../../Property_Image.gif)
		 [MultiLevelHeader](IPivotHeader.MultiLevelHeader.htm)
		 Свойство MultiLevelHeader
		 определяет, будет ли использоваться многоуровневый заголовок.


		 ![](../../Property_Image.gif)
		 [Numbering](IPivotHeader.Numbering.htm)
		 Свойство Numbering
		 возвращает параметры управления нумерацией в заголовках.


		 ![](../../Property_Image.gif)
		 [PivotDim](IPivotHeader.PivotDim.htm)
		 Свойство PivotDim возвращает
		 измерение, расположенное в заданной позиции заголовка таблицы.


		 ![](../../Property_Image.gif)
		 [Settings](IPivotHeader.Settings.htm)
		 Свойство Settings возвращает
		 настройки заголовка таблицы.


		 ![](../../Property_Image.gif)
		 [StairsHierarchy](IPivotHeader.StairsHierarchy.htm)
		 Свойство StairsHierarchy
		 определяет, будет ли использоваться [ступенчатая
		 иерархия](uianalyticalarea.chm::/tableview/layout/layout_dim.htm#stairs_hierarchy).


## Свойства, унаследованные от [IPivotDimensionLevelPropertiesCommon](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ChildrenBeforeParents](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.ChildrenBeforeParents.htm)
		 Свойство ChildrenBeforeParents
		 определяет, размещать ли [дочерние
		 элементы иерархии перед родительскими](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm#locating_child_elements).


		 ![](../../Property_Image.gif)
		 [CollapseChildren](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.CollapseChildren.htm)
		 Свойство CollapseChildren
		 указывает, будут ли дочерние элементы измерения(ий) находиться
		 в свернутом состоянии при построении таблицы.


		 ![](../../Property_Image.gif)
		 [DuplicateParent](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.DuplicateParent.htm)
		 Свойство DuplicateParent
		 определяет, будут ли повторяться [элементы
		 уровня для дочерних](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm#parent_after).


		 ![](../../Property_Image.gif)
		 [IsChildrenBeforeParents](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.IsChildrenBeforeParents.htm)
		 Свойство IsChildrenBeforeParents
		 возвращает признак того, размещаются ли [дочерние
		 элементы иерархии перед родительскими](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm#locating_child_elements).


		 ![](../../Property_Image.gif)
		 [IsCollapseChildren](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.IsCollapseChildren.htm)
		 Свойство IsCollapseChildren
		 возвращает признак нахождения дочерних элементов измерения в свернутом
		 состоянии.


		 ![](../../Property_Image.gif)
		 [IsDuplicateParent](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.IsDuplicateParent.htm)
		 Свойство IsDuplicateParent
		 возвращает признак того, повторяются ли [элементы
		 уровня для дочерних](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm#parent_after).


		 ![](../../Property_Image.gif)
		 [IsSeparated](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.IsSeparated.htm)
		 Свойство IsSeparated
		 возвращает признак того, размещаются ли [элементы
		 уровней в отдельных столбцах](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm#split).


		 ![](../../Property_Image.gif)
		 [Separated](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.Separated.htm)
		 Свойство Separated
		 определяет, будут ли размещаться [элементы
		 уровней в отдельных столбцах](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm#split).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddDim](IPivotHeader.AddDim.htm)
		 Метод AddDim осуществляет
		 добавление измерения в выбранный заголовок таблицы.


		 ![](../../Sub_Image.gif)
		 [Clear](IPivotHeader.Clear.htm)
		 Метод Clear осуществляет
		 удаление всех измерений из выбранного заголовка таблицы.


		 ![](../../Sub_Image.gif)
		 [DeleteDim](IPivotHeader.DeleteDim.htm)
		 Метод DeleteDim осуществляет
		 удаление указанного измерения из выбранного заголовка таблицы.


		 ![](../../Sub_Image.gif)
		 [InsertDim](IPivotHeader.InsertDim.htm)
		 Метод InsertDim осуществляет
		 вставку измерения в указанную область выбранного заголовка таблицы.


См. также:


[Интерфейсы
 сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
