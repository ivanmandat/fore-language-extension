# IDimInstance

IDimInstance
-


# IDimInstance


Сборка: Dimensions;


## Описание


Интерфейс IDimInstance содержит
 свойства и методы для доступа к данным справочника.


## Иерархия наследования


           IDimInstance


## Комментарии


Классы объектов репозитория, поддерживающих интерфейс IDimInstance:


	- MetabaseObjectClass.KE_CLASS_ADOMDDIM. Справочник ADOMD;


	- MetabaseObjectClass.KE_CLASS_METADICTIONARYRDS. Табличный справочник
	 НСИ;


	- MetabaseObjectClass.KE_CLASS_RDS_DICTIONARY. Справочник НСИ;


	- MetabaseObjectClass.KE_CLASS_RDS_COMPDICTIONARY. Составной справочник
	 НСИ;


	- MetabaseObjectClass.KE_CLASS_STDDIM. Табличный справочник;


	- MetabaseObjectClass.KE_CLASS_CLNDIM. Календарный справочник;


	- MetabaseObjectClass.KE_CLASS_USERDIM. Вычисляемый справочник.


Для получения данных справочника необходимо для соответствующего объекта
 репозитория выполнить метод [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 или [IMetabaseObjectDescriptor.OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm)
 и результат выполнения привести к типу IDimInstance.


При работе со справочниками НСИ во время их открытия для элементов будут
 загружены значения системных атрибутов и атрибутов, используемых в уникальных
 и неуникальных ключах. Значения пользовательских атрибутов загружаются
 по мере обращения к ним с помощью свойств и методов интерфейсов [IDimAttributesInstance](../IDimAttributesInstance/IDimAttributesInstance.htm),
 [IDimElements](../IDimElements/IDimElements.htm). Используя
 метод [IDimAttributesInstance.EnsureValuesLoaded](../IDimAttributesInstance/IDimAttributesInstance.EnsureValuesLoaded.htm),
 можно загрузить значения атрибутов только для определённого набора элементов.
 Загруженные атрибуты сохраняются в памяти и используются для дальнейшей
 работы с экземпляром справочника, это позволяет избежать формирования
 повторных запросов к СУБД.


Если в репозитории включён [атрибутный метод
 разграничения доступа](Admin.chm::/04_SecurityPolicy/Admin_ABAC.htm), то при открытии справочников
 НСИ загружаются значения как системных, так и пользовательских атрибутов,
 кроме заимствованных атрибутов, атрибутов допускающих множественные значения
 и отображаемых значений связанных атрибутов.


Более широкие возможности для работы со справочниками НСИ предоставляют
 интерфейсы [IRdsDictionary](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm),
 [IRdsDictionaryInstance](KeRds.chm::/Interface/IRdsDictionaryInstance/IRdsDictionaryInstance.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttributeHierarchies](IDimInstance.AttributeHierarchies.htm)


		 Свойство AttributeHierarchies
		 возвращает коллекцию данных альтернативных иерархий справочника.


		 ![](../../Property_Image.gif)
		 [Attributes](IDimInstance.Attributes.htm)


		 Свойство Attributes
		 возвращает объект, содержащий коллекцию значений атрибутов справочника.


		 ![](../../Property_Image.gif)
		 [Blocks](IDimInstance.Blocks.htm)


		 Свойство Blocks возвращает
		 объект, содержащий коллекцию блоков справочника.


		 ![](../../Property_Image.gif)
		 [BuilderException](IDimInstance.BuilderException.htm)


		 Свойство BuilderException
		 возвращает информацию об ошибке, которая может возникнуть при
		 открытии справочника.


		 ![](../../Property_Image.gif)
		 [DefaultElement](IDimInstance.DefaultElement.htm)


		 Свойство DefaultElement
		 возвращает индекс элемента по умолчанию.


		 ![](../../Property_Image.gif)
		 [Dimension](IDimInstance.Dimension.htm)


		 Свойство Dimension
		 возвращает объект, содержащий структуру справочника.


		 ![](../../Property_Image.gif)
		 [Elements](IDimInstance.Elements.htm)


		 Свойство Elements возвращает
		 коллекцию элементов экземпляра справочника.


		 ![](../../Property_Image.gif)
		 [ElementsByOrder](IDimInstance.ElementsByOrder.htm)


		 Свойство ElementsByOrder
		 возвращает итератор на дерево элементов справочника, построенное
		 с учетом пользовательской сортировки.


		 ![](../../Property_Image.gif)
		 [Ident](IDimInstance.Ident.htm)


		 Свойство Ident возвращает
		 идентификатор объекта репозитория, являющегося справочником.


		 ![](../../Property_Image.gif)
		 [Indexes](IDimInstance.Indexes.htm)


		 Свойство Indexes возвращает
		 объект, содержащий коллекцию индексов справочника.


		 ![](../../Property_Image.gif)
		 [InstanceModel](IDimInstance.InstanceModel.htm)
		 Свойство InstanceModel
		 возвращает общую модель справочника.


		 ![](../../Property_Image.gif)
		 [Key](IDimInstance.Key.htm)


		 Свойство Key возвращает
		 ключ объекта репозитория, являющегося справочником.


		 ![](../../Property_Image.gif)
		 [Levels](IDimInstance.Levels.htm)


		 Свойство Levels возвращает
		 объект, содержащий коллекцию уровней элементов справочника.


		 ![](../../Property_Image.gif)
		 [MetabaseObject](IDimInstance.MetabaseObject.htm)


		 Свойство MetabaseObject
		 возвращает данные справочника, как данные объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Name](IDimInstance.Name.htm)


		 Свойство Name возвращает
		 наименование объекта репозитория, являющегося справочником.


		 ![](../../Property_Image.gif)
		 [RootElements](IDimInstance.RootElements.htm)


		 Свойство RootElements
		 возвращает объект, содержащий массив элементов справочника, находящихся
		 на нулевом уровне.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateSelection](IDimInstance.CreateSelection.htm)


		 Метод CreateSelection
		 создает объект, содержащий отметку справочника.


		 ![](../../Sub_Image.gif)
		 [NewElement](IDimInstance.NewElement.htm)


		 Метод NewElement создает
		 объект для работы с элементом измерения.


		 ![](../../Sub_Image.gif)
		 [NewElementsOrderSetup](IDimInstance.NewElementsOrderSetup.htm)


		 Метод NewElementsOrderSetup
		 возвращает настройки пользовательской сортировки элементов справочника.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
