# IPivotFilter

IPivotFilter
-


# IPivotFilter


Сборка: Pivot;


## Описание


Интерфейс IPivotFilter содержит
 свойства, определяющие параметры фильтрации данных.


## Иерархия наследования


           IPivotFilter


## Комментарии


Задавать параметры фильтрации данных возможно с помощью команды [FilterSetup](UiLib.chm::/Interface/IUiCommandTarget/Command/Command_FilterSetup.htm) плагина
 [Express](UiLib.chm::/Interface/IUiCommandTarget/IUiCommandTarget.Execute.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Area](IPivotFilter.Area.htm)
		 Свойство Area определяет
		 область, для которой применяется фильтрация данных.


		 ![](../../Property_Image.gif)
		 [Elements](IPivotFilter.Elements.htm)
		 Свойство Elements определяет
		 элемент таблицы, по которому будет осуществляться фильтрация.


		 ![](../../Property_Image.gif)
		 [Range](IPivotFilter.Range.htm)
		 Свойство Range возвращает
		 диапазон, в котором будет осуществляться фильтрация данных.


		 ![](../../Property_Image.gif)
		 [SeparateHeaders](IPivotFilter.SeparateHeaders.htm)
		 Свойство SeparateHeaders
		 определяет, будут ли использоваться настройки фильтрации раздельно
		 для строк и столбцов.


## Свойства, унаследованные от [IPivotFilterSettings](../IPivotFilterSettings/IPivotFilterSettings.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalTableSourceSelSet](../IPivotFilterSettings/IPivotFilterSettings.AdditionalTableSourceSelSet.htm)
		 Свойство AdditionalTableSourceSelSet
		 возвращает дополнительную отметку, в соответствии с которой
		 будет производиться фильтрация.


		 ![](../../Property_Image.gif)
		 [AttributeLinks](../IPivotFilterSettings/IPivotFilterSettings.AttributeLinks.htm)
		 Свойство AttributeLinks
		 возвращает параметры фильтрации по связям атрибутов измерений.


		 ![](../../Property_Image.gif)
		 [Condition](../IPivotFilterSettings/IPivotFilterSettings.Condition.htm)
		 Свойство Condition
		 определяет параметры выражения для фильтрации.


		 ![](../../Property_Image.gif)
		 [ConditionType](../IPivotFilterSettings/IPivotFilterSettings.ConditionType.htm)
		 Свойство ConditionType
		 определяет тип условия, по которому будут фильтроваться данные.


		 ![](../../Property_Image.gif)
		 [ConditionValueA](../IPivotFilterSettings/IPivotFilterSettings.ConditionValueA.htm)
		 Свойство ConditionValueA
		 определяет первое значение, используемое при фильтрации данных.


		 ![](../../Property_Image.gif)
		 [ConditionValueB](../IPivotFilterSettings/IPivotFilterSettings.ConditionValueB.htm)
		 Свойство ConditionValueB
		 определяет второе число, используемое при фильтрации данных.


		 ![](../../Property_Image.gif)
		 [Enabled](../IPivotFilterSettings/IPivotFilterSettings.Enabled.htm)
		 Свойство Enabled определяет,
		 будут ли фильтроваться данные в таблице.


		 ![](../../Property_Image.gif)
		 [FilterSelection](../IPivotFilterSettings/IPivotFilterSettings.FilterSelection.htm)
		 Свойство FilterSelection
		 определяет отметку, в соответствии с которой будет выполняться
		 фильтрация отображаемых данных.


		 ![](../../Property_Image.gif)
		 [FilterSources](../IPivotFilterSettings/IPivotFilterSettings.FilterSources.htm)
		 Свойство FilterSources
		 определяет, будут ли использоваться для фильтрации внешние фильтры.


		 ![](../../Property_Image.gif)
		 [KeepNeighbors](../IPivotFilterSettings/IPivotFilterSettings.KeepNeighbors.htm)
		 Свойство KeepNeighbors
		 определяет, будут ли данные фильтроваться по уровням иерархии
		 последнего измерения.


		 ![](../../Property_Image.gif)
		 [KeepParent](../IPivotFilterSettings/IPivotFilterSettings.KeepParent.htm)
		 Свойство KeepParent
		 определяет, останутся ли [владельцы
		 неисключенных элементов](UiAnalyticalArea.chm::/Working_with_table_data/Filtering.htm) в отфильтрованной таблице.


		 ![](../../Property_Image.gif)
		 [SupressEmpty](../IPivotFilterSettings/IPivotFilterSettings.SupressEmpty.htm)
		 Свойство SupressEmpty
		 определяет, будут ли фильтроваться ячейки с пустыми значениями.


		 ![](../../Property_Image.gif)
		 [SupressNoNumeric](../IPivotFilterSettings/IPivotFilterSettings.SupressNoNumeric.htm)
		 Свойство SupressNoNumeric
		 определяет, будут ли фильтроваться ячейки с нечисловыми значениями.


		 ![](../../Property_Image.gif)
		 [SupressZeros](../IPivotFilterSettings/IPivotFilterSettings.SupressZeros.htm)
		 Свойство SupressZeros
		 определяет, будут ли фильтроваться ячейки с нулевыми значениями.


		 ![](../../Property_Image.gif)
		 [UseAdditionalTableSource](../IPivotFilterSettings/IPivotFilterSettings.UseAdditionalTableSource.htm)
		 Свойство UseAdditionalTableSource
		 определяет, будет ли использоваться фильтрация по дополнительной
		 отметке, отличной от отметки в источнике.


		 ![](../../Property_Image.gif)
		 [UseAttributesLinks](../IPivotFilterSettings/IPivotFilterSettings.UseAttributesLinks.htm)
		 Свойство UseAttributesLinks
		 возвращает признак использования фильтрации по связям атрибутов
		 измерений.


		 ![](../../Property_Image.gif)
		 [UseCondition](../IPivotFilterSettings/IPivotFilterSettings.UseCondition.htm)
		 Свойство UseCondition
		 определяет, будет ли в таблице использоваться фильтрация данных
		 по условию.


		 ![](../../Property_Image.gif)
		 [UseFilterSelection](../IPivotFilterSettings/IPivotFilterSettings.UseFilterSelection.htm)
		 Свойство UseFilterSelection
		 возвращает признак наличия отметки, по которой выполняется фильтрация.


		 ![](../../Property_Image.gif)
		 [UseTransformationFilter](../IPivotFilterSettings/IPivotFilterSettings.UseTransformationFilter.htm)
		 Свойство UseTransformationFilter
		 определяет, будет ли использоваться фильтрация данных по формуле.


См. также:


[Интерфейсы сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
