# IPivotDimension

IPivotDimension
-


# IPivotDimension


Сборка: Pivot;


## Описание


Интерфейс IPivotDimension содержит
 свойства измерения источника данных.


## Иерархия наследования


           [IPivotDimensionLevelPropertiesCommon](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.htm)


           [IPivotDimensionLevelProperties](../IPivotDimensionLevelProperties/IPivotDimensionLevelProperties.htm)


           IPivotDimension


## Комментарии


Свойства измерения можно получить, используя следующие свойства и методы:


	- [IPivotDimensions.FindByKey](../IPivotDimensions/IPivotDimensions.FindByKey.htm);


	- [IPivotDimensions.Item](../IPivotDimensions/IPivotDimensions.Item.htm);


	- [IEaxDrillSettings.Dimension](KeExpress.chm::/Interface/IEaxDrillSettings/IEaxDrillSettings.Dimension.htm);


	- [IEaxPivotDimensionInstance.PivotDimension](KeExpress.chm::/Interface/IEaxPivotDimensionInstance/IEaxPivotDimensionInstance.PivotDimension.htm);


	- [IPivotDimensionLevel.Dimension](../IPivotDimensionLevel/IPivotDimensionLevel.Dimension.htm);


	- [IPivotDimensionLevels.Dimension](../IPivotDimensionLevels/IPivotDimensionLevels.Dimension.htm).


При работе с [аналитической
 областью данных](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm) измерение, описываемое интерфейсом
 IPivotDimension, может быть приведено к следующим интерфейсам:


	- [IDataAreaHeaderSettingsBase](ForeSys.chm::/Interface/IDataAreaHeaderSettingsBase/IDataAreaHeaderSettingsBase.htm)
	 - для получения настроек отображения с помощью свойства [IEaxGridViewSettings.GetViewSettings](KeExpress.chm::/Interface/IEaxGridViewSettings/IEaxGridViewSettings.GetViewSettings.htm);


	- [IDataAreaHeaderStyleSettingsBase](ForeSys.chm::/Interface/IDataAreaHeaderStyleSettingsBase/IDataAreaHeaderStyleSettingsBase.htm)
	 - для получения стиля оформления с помощью свойства [IEaxGridViewSettings.GetStyleSettings](KeExpress.chm::/Interface/IEaxGridViewSettings/IEaxGridViewSettings.GetStyleSettings.htm);


	- [IDataAreaTransformationsGetter](ForeSys.chm::/Interface/IDataAreaTransformationsGetter/IDataAreaTransformationsGetter.htm)
	 - для настройки формул преобразования по измерению с помощью метода
	 [IEaxDataAreaSlice.GetTransformations](KeExpress.chm::/Interface/IEaxDataAreaSlice/IEaxDataAreaSlice.GetTransformations.htm)
	 или [IEaxDataAreaSlice.GetFootnotesTransformations](KeExpress.chm::/Interface/IEaxDataAreaSlice/IEaxDataAreaSlice.GetFootnotesTransformations.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DimInstance](IPivotDimension.DimInstance.htm)
		 Свойство DimInstance
		 возвращает данные измерения.


		 ![](../../Property_Image.gif)
		 [Levels](IPivotDimension.Levels.htm)
		 Свойство Levels возвращает
		 коллекцию уровней измерения.


		 ![](../../Property_Image.gif)
		 [Settings](IPivotDimension.Settings.htm)
		 Свойство Settings возвращает
		 настройки измерения источника данных.


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


[Интерфейсы сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
