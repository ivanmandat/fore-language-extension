# IPivotDimensionLevel

IPivotDimensionLevel
-


# IPivotDimensionLevel


Сборка: Pivot;


## Описание


Интерфейс IPivotDimensionLevel
 используется для работы с уровнем измерения таблицы.


## Иерархия наследования


           [IPivotDimensionLevelPropertiesCommon](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.htm)


           [IPivotDimensionLevelProperties](../IPivotDimensionLevelProperties/IPivotDimensionLevelProperties.htm)


           IPivotDimensionLevel


## Комментарии


Для получения уровня измерения используйте свойство [IPivotDimensionLevels.Item](../IPivotDimensionLevels/IPivotDimensionLevels.Item.htm).


При работе с [аналитической
 областью данных](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm) уровень измерения, описываемый интерфейсом
 IPivotDimensionLevel, может быть приведён к интерфейсу [IDataAreaHeaderStyleSettingsBase](ForeSys.chm::/Interface/IDataAreaHeaderStyleSettingsBase/IDataAreaHeaderStyleSettingsBase.htm)
 для настройки оформления с помощью свойства [IEaxGridViewSettings.GetStyleSettings](KeExpress.chm::/Interface/IEaxGridViewSettings/IEaxGridViewSettings.GetStyleSettings.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dimension](IPivotDimensionLevel.Dimension.htm)
		 Свойство Dimension
		 возвращает объект-родитель уровня измерения.


		 ![](../../Property_Image.gif)
		 [Level](IPivotDimensionLevel.Level.htm)
		 Свойство Level возвращает
		 объект для работы с уровнем в качестве уровня элементов справочника.


## Свойства, унаследованные от [IPivotDimensionLevelProperties](../IPivotDimensionLevelProperties/IPivotDimensionLevelProperties.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Namings](../IPivotDimensionLevelProperties/IPivotDimensionLevelProperties.Namings.htm)
		 Свойство Namings возвращает
		 коллекцию наименований элементов.


		 ![](../../Property_Image.gif)
		 [Numbering](../IPivotDimensionLevelProperties/IPivotDimensionLevelProperties.Numbering.htm)
		 Свойство Numbering
		 возвращает параметры управления нумерацией измерения/уровня таблицы.


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


См. также:


[Интерфейсы
 сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
