# IRdsBaseBinding

IRdsBaseBinding
-


# IRdsBaseBinding


Сборка: Rds;


## Описание


Интерфейс IRdsBaseBinding содержит
 базовые свойства привязки атрибутов к полям источника.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IRdsBaseBinding


## Комментарии


Привязки атрибутов используются при автоматическом создании табличных
 справочника НСИ и загрузке в них данных. Коллекция привязок доступна в
 свойстве [IMetaRdsLoader.Bindings](../IMetaRdsLoader/IMetaRdsLoader.Bindings.htm).


Интерфейс IRdsBaseBinding является
 базовым для следующих интерфейсов:


	- [IRdsPredefinedBinding](../IRdsPredefinedBinding/IRdsPredefinedBinding.htm).
	 Параметры привязки системного атрибута;


	- [IRdsTranslationBinding](../IRdsTranslationBinding/IRdsTranslationBinding.htm).
	 Параметры привязки атрибута, содержащего значения на определенном
	 языке;


	- [IRdsUserAttributeBinding](../IRdsUserAttributeBinding/IRdsUserAttributeBinding.htm).
	 Параметры привязки пользовательского атрибута;


	- [IRdsLinkedBinding](../IRdsLinkedBinding/IRdsLinkedBinding.htm).
	 Параметры привязки связанного атрибута;


	- [IRdsImportedBinding](../IRdsImportedBinding/IRdsImportedBinding.htm).
	 Параметры привязки заимствованного атрибута.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attribute](IRdsBaseBinding.Attribute.htm)
		 Свойство Attribute
		 определяет атрибут, для которого настраивается привязка.


		 ![](../../Property_Image.gif)
		 [BindingType](IRdsBaseBinding.BindingType.htm)
		 Свойство BindingType
		 возвращает тип привязки.


		 ![](../../Property_Image.gif)
		 [DataDomain](IRdsBaseBinding.DataDomain.htm)
		 Свойство DataDomain
		 определяет тип данных для хранения в атрибуте многобайтовой информации.


		 ![](../../Property_Image.gif)
		 [DataType](IRdsBaseBinding.DataType.htm)
		 Свойство DataType определяет
		 тип данных атрибута.


		 ![](../../Property_Image.gif)
		 [DetailTable](IRdsBaseBinding.DetailTable.htm)
		 Свойство DetailTable
		 определяет физическое имя таблицы, из которой будут загружаться
		 множественные значения атрибута.


		 ![](../../Property_Image.gif)
		 [DetailTableObject](IRdsBaseBinding.DetailTableObject.htm)
		 Свойство DetailTableObject
		 определяет описание таблицы репозитория, из которой будут загружаться
		 множественные значения атрибута.


		 ![](../../Property_Image.gif)
		 [Field](IRdsBaseBinding.Field.htm)
		 Свойство Field определяет
		 идентификатор поля источника данных, к которому осуществляется
		 привязка атрибута.


		 ![](../../Property_Image.gif)
		 [HasMultipleValues](IRdsBaseBinding.HasMultipleValues.htm)
		 Свойство HasMultipleValues
		 определяет, могут ли по данному атрибуту храниться множественные
		 значения.


		 ![](../../Property_Image.gif)
		 [InUniqueKey](IRdsBaseBinding.InUniqueKey.htm)
		 Свойство InUniqueKey
		 определяет признак использования привязки ключа.


		 ![](../../Property_Image.gif)
		 [KeyField](IRdsBaseBinding.KeyField.htm)
		 Свойство KeyField определяет
		 поле таблицы с множественными значениями, которое будет связано
		 с полем источника данных [Field](IRdsBaseBinding.Field.htm).


		 ![](../../Property_Image.gif)
		 [Nullable](IRdsBaseBinding.Nullable.htm)
		 Свойство Nullable определяет,
		 могут ли по атрибуту, для которого создана привязка, храниться
		 пустые значения.


		 ![](../../Property_Image.gif)
		 [OrderField](IRdsBaseBinding.OrderField.htm)
		 Свойство OrderField
		 определяет поле таблицы с множественными значениями, в котором
		 хранятся номера значений.


		 ![](../../Property_Image.gif)
		 [ValueField](IRdsBaseBinding.ValueField.htm)
		 Свойство ValueField
		 определяет поле таблицы с множественными значениями, в котором
		 хранятся сами значения.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
