# IRdsLinkedBinding

IRdsLinkedBinding
-


# IRdsLinkedBinding


Сборка: Rds;


## Описание


Интерфейс IRdsLinkedBinding
 содержит свойства привязки атрибутов, используемых для связи с другими
 табличными справочниками НСИ.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           [IRdsBaseBinding](../IRdsBaseBinding/IRdsBaseBinding.htm)


           IRdsLinkedBinding


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dictionary](IRdsLinkedBinding.Dictionary.htm)


		 Свойство Dictionary
		 возвращает справочник НСИ, с которым осуществляется связь.


		 ![](../../Property_Image.gif)
		 [Reference](IRdsLinkedBinding.Reference.htm)


		 Свойство Reference
		 определяет атрибут справочника, с которым осуществляется связь.


## Свойства, унаследованные от [IRdsBaseBinding](../IRdsBaseBinding/IRdsBaseBinding.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attribute](../IRdsBaseBinding/IRdsBaseBinding.Attribute.htm)
		 Свойство Attribute
		 определяет атрибут, для которого настраивается привязка.


		 ![](../../Property_Image.gif)
		 [BindingType](../IRdsBaseBinding/IRdsBaseBinding.BindingType.htm)
		 Свойство BindingType
		 возвращает тип привязки.


		 ![](../../Property_Image.gif)
		 [DataDomain](../IRdsBaseBinding/IRdsBaseBinding.DataDomain.htm)
		 Свойство DataDomain
		 определяет тип данных для хранения в атрибуте многобайтовой информации.


		 ![](../../Property_Image.gif)
		 [DataType](../IRdsBaseBinding/IRdsBaseBinding.DataType.htm)
		 Свойство DataType определяет
		 тип данных атрибута.


		 ![](../../Property_Image.gif)
		 [DetailTable](../IRdsBaseBinding/IRdsBaseBinding.DetailTable.htm)
		 Свойство DetailTable
		 определяет физическое имя таблицы, из которой будут загружаться
		 множественные значения атрибута.


		 ![](../../Property_Image.gif)
		 [DetailTableObject](../IRdsBaseBinding/IRdsBaseBinding.DetailTableObject.htm)
		 Свойство DetailTableObject
		 определяет описание таблицы репозитория, из которой будут загружаться
		 множественные значения атрибута.


		 ![](../../Property_Image.gif)
		 [Field](../IRdsBaseBinding/IRdsBaseBinding.Field.htm)
		 Свойство Field определяет
		 идентификатор поля источника данных, к которому осуществляется
		 привязка атрибута.


		 ![](../../Property_Image.gif)
		 [HasMultipleValues](../IRdsBaseBinding/IRdsBaseBinding.HasMultipleValues.htm)
		 Свойство HasMultipleValues
		 определяет, могут ли по данному атрибуту храниться множественные
		 значения.


		 ![](../../Property_Image.gif)
		 [InUniqueKey](../IRdsBaseBinding/IRdsBaseBinding.InUniqueKey.htm)
		 Свойство InUniqueKey
		 определяет признак использования привязки ключа.


		 ![](../../Property_Image.gif)
		 [KeyField](../IRdsBaseBinding/IRdsBaseBinding.KeyField.htm)
		 Свойство KeyField определяет
		 поле таблицы с множественными значениями, которое будет связано
		 с полем источника данных [Field](../IRdsBaseBinding/IRdsBaseBinding.Field.htm).


		 ![](../../Property_Image.gif)
		 [Nullable](../IRdsBaseBinding/IRdsBaseBinding.Nullable.htm)
		 Свойство Nullable определяет,
		 могут ли по атрибуту, для которого создана привязка, храниться
		 пустые значения.


		 ![](../../Property_Image.gif)
		 [OrderField](../IRdsBaseBinding/IRdsBaseBinding.OrderField.htm)
		 Свойство OrderField
		 определяет поле таблицы с множественными значениями, в котором
		 хранятся номера значений.


		 ![](../../Property_Image.gif)
		 [ValueField](../IRdsBaseBinding/IRdsBaseBinding.ValueField.htm)
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
