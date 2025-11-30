# IMetaAttribute

IMetaAttribute
-


# IMetaAttribute


Сборка: Rds;


## Описание


Интерфейс IMetaAttribute предназначен
 для работы с атрибутом базы данных временных рядов уровня временных рядов
 или наблюдений.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IMetaAttribute


## Комментарии


Для работы с коллекцией атрибутов используйте интерфейс [IMetaAttributes](../IMetaAttributes/IMetaAttributes.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IMetaAttribute.Attributes.htm)


		 Свойство Attributes
		 возвращает все атрибуты, содержащиеся в том же справочнике, что
		 и данный атрибут.


		 ![](../../Property_Image.gif)
		 [BasisAttribute](IMetaAttribute.BasisAttribute.htm)


		 Свойство BasisAttribute
		 возвращает атрибут базового справочника, если справочник является
		 составным.


		 ![](../../Property_Image.gif)
		 [BasisIndex](IMetaAttribute.BasisIndex.htm)


		 Свойство BasisIndex
		 возвращает индекс базового справочника, если справочник является
		 составным.


		 ![](../../Property_Image.gif)
		 [CollectionAttribute](IMetaAttribute.CollectionAttribute.htm)


		 Свойство CollectionAttribute
		 возвращает атрибут, являющийся родительским для атрибута системной
		 таблицы, хранящей значения множественного атрибута.


		 ![](../../Property_Image.gif)
		 [CollectionAttributes](IMetaAttribute.CollectionAttributes.htm)


		 Свойство CollectionAttributes
		 возвращает коллекцию атрибутов системной таблицы, хранящей значения
		 множественного атрибута.


		 ![](../../Property_Image.gif)
		 [DataDomain](IMetaAttribute.DataDomain.htm)


		 Свойство DataDomain
		 определяет тип данных для хранения в атрибуте многобайтовой информации.


		 ![](../../Property_Image.gif)
		 [DataType](IMetaAttribute.DataType.htm)


		 Свойство DataType определяет
		 тип данных, которые могут содержаться в значениях элементов по
		 данному атрибуту.


		 ![](../../Property_Image.gif)
		 [DefaultValue](IMetaAttribute.DefaultValue.htm)


		 Свойство DefaultValue
		 определяет значение для элементов по данному атрибуту по умолчанию.


		 ![](../../Property_Image.gif)
		 [Dictionary](IMetaAttribute.Dictionary.htm)


		 Свойство Dictionary
		 возвращает объект-родитель.


		 ![](../../Property_Image.gif)
		 [Field](IMetaAttribute.Field.htm)


		 Свойство Field возвращает
		 поле таблицы, в котором будут храниться значения атрибута.


		 ![](../../Property_Image.gif)
		 [FieldId](IMetaAttribute.FieldId.htm)


		 Свойство FieldId возвращает
		 идентификатор поля таблицы, в котором будут храниться значения
		 атрибута.


		 ![](../../Property_Image.gif)
		 [FieldSize](IMetaAttribute.FieldSize.htm)


		 Свойство FieldSize
		 определяет длину поля таблицы, в котором будут храниться значения
		 атрибута.


		 ![](../../Property_Image.gif)
		 [FilterInHierarchyByDefault](IMetaAttribute.FilterInHierarchyByDefault.htm)


		 Свойство FilterInHierarchyByDefault
		 определяет отметку, используемую для атрибута по умолчанию.


		 ![](../../Property_Image.gif)
		 [Group](IMetaAttribute.Group.htm)


		 Свойство Group определяет
		 группу атрибута.


		 ![](../../Property_Image.gif)
		 [HasMultipleValues](IMetaAttribute.HasMultipleValues.htm)


		 Свойство HasMultipleValues
		 определяет, может ли элемент по данному атрибуту иметь множественные
		 значения.


		 ![](../../Property_Image.gif)
		 [Hidden](IMetaAttribute.Hidden.htm)


		 Свойство Hidden определяет,
		 является ли данный атрибут скрытым.


		 ![](../../Property_Image.gif)
		 [IsInHierarchyByDefault](IMetaAttribute.IsInHierarchyByDefault.htm)


		 Свойство IsInHierarchyByDefault
		 определяет, участвует ли атрибут в иерархии по умолчанию.


		 ![](../../Property_Image.gif)
		 [Kind](IMetaAttribute.Kind.htm)


		 Свойство Kind определяет
		 тип атрибута.


		 ![](../../Property_Image.gif)
		 [Nullable](IMetaAttribute.Nullable.htm)


		 Свойство Nullable определяет,
		 может ли элемент по данному атрибуту иметь пустое значение.


		 ![](../../Property_Image.gif)
		 [OrderInHierarchyByDefault](IMetaAttribute.OrderInHierarchyByDefault.htm)


		 Свойство OrderInHierarchyByDefault
		 определяет порядок атрибута в иерархии по умолчанию.


		 ![](../../Property_Image.gif)
		 [Predefined](IMetaAttribute.Predefined.htm)


		 Свойство Predefined
		 возвращает признак того, является ли данный атрибут системным.


		 ![](../../Property_Image.gif)
		 [Primary](IMetaAttribute.Primary.htm)


		 Свойство Primary возвращает
		 признак: входит ли атрибут в уникальный ключ базы данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [Tag](IMetaAttribute.Tag.htm)


		 Свойство Tag возвращает
		 вид атрибута.


		 ![](../../Property_Image.gif)
		 [TagData](IMetaAttribute.TagData.htm)


		 Свойство TagData определяет
		 пользовательский признак атрибута.


		 ![](../../Property_Image.gif)
		 [Translations](IMetaAttribute.Translations.htm)


		 Свойство Translations
		 возвращает коллекцию настроек, содержащих параметры перевода атрибутов
		 базы данных временных рядов на различные языки.


		 ![](../../Property_Image.gif)
		 [ValuesObject](IMetaAttribute.ValuesObject.htm)


		 Свойство ValuesObject
		 определяет объект, на который ссылается атрибут.


## Методы


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [EqualObject](IMetaAttribute.EqualObject.htm)


		 Метод EqualObject возвращает
		 признак того, принадлежит ли атрибут объекту.


		 ![](../../Sub_Image.gif)
		 [InDefaultHierarchy](IMetaAttribute.InDefaultHierarchy.htm)


		 Метод InDefaultHierarchy
		 возвращает признак того, входит ли атрибут в иерархию, заданную
		 по умолчанию.


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


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
