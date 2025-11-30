# IDimensionModel

IDimensionModel
-


# IDimensionModel


## Описание


Интерфейс IDimensionModel отвечает
 за общую модель и структуру справочника.


## Комментарии


Классы объектов репозитория, поддерживающих интерфейс IDimensionModel:


	- MetabaseObjectClass.KE_CLASS_METADICTIONARYRDS. Справочник НСИ;


	- MetabaseObjectClass.KE_CLASS_RDS_COMPDICTIONARY. Составной справочник
	 НСИ;


	- MetabaseObjectClass.KE_CLASS_STDDIM. Табличный справочник;


	- MetabaseObjectClass.KE_CLASS_CLNDIM. Календарный справочник;


	- MetabaseObjectClass.KE_CLASS_USERDIM. Вычисляемый справочник.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AbacSecured](IDimensionModel.AbacSecured.htm)
		 Свойство AbacSecured
		 возвращает признак наличия [атрибутных
		 прав доступа](Admin.chm::/04_SecurityPolicy/Admin_ABAC.htm) у элементов табличного справочника
		 НСИ.


		 ![](../../Property_Image.gif)
		 [AsCalendar](IDimensionModel.AsCalendar.htm)
		 Свойство AsCalendar
		 возвращает параметры сопоставления обычного и календарного справочников.


		 ![](../../Property_Image.gif)
		 [AttributeHierarchies](IDimensionModel.AttributeHierarchies.htm)
		 Свойство AttributeHierarchies
		 возвращает коллекцию альтернативных иерархий атрибутов справочника.


		 ![](../../Property_Image.gif)
		 [Attributes](IDimensionModel.Attributes.htm)
		 Свойство Attributes
		 возвращает объект, содержащий коллекцию атрибутов справочника.


		 ![](../../Property_Image.gif)
		 [Blocks](IDimensionModel.Blocks.htm)
		 Свойство Blocks возвращает
		 объект, содержащий коллекцию блоков справочника.


		 ![](../../Property_Image.gif)
		 [Hierarchies](IDimensionModel.Hierarchies.htm)
		 Свойство Hierarchies
		 возвращает коллекцию альтернативных иерархий справочника.


		 ![](../../Property_Image.gif)
		 [Indexes](IDimensionModel.Indexes.htm)
		 Свойство Indexes возвращает
		 объект, содержащий коллекцию индексов справочника.


		 ![](../../Property_Image.gif)
		 [IsCalendar](IDimensionModel.IsCalendar.htm)
		 Свойство IsCalendar
		 определяет, используется ли справочник в качестве календарного.


		 ![](../../Property_Image.gif)
		 [Levels](IDimensionModel.Levels.htm)
		 Свойство Levels возвращает
		 объект, содержащий коллекцию уровней справочника.


		 ![](../../Property_Image.gif)
		 [SupportElementDependencies](IDimensionModel.SupportElementDependencies.htm)
		 Свойство SupportElementDependencies
		 возвращает признак возможности отслеживать ссылки на элементы
		 текущего справочника.


		 ![](../../Property_Image.gif)
		 [TrackElementDependents](IDimensionModel.TrackElementDependents.htm)
		 Свойство TrackElementDependents
		 возвращает признак отслеживания ссылок на элементы текущего справочника.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
