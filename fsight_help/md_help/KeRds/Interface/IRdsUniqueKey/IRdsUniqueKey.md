# IRdsUniqueKey

IRdsUniqueKey
-


# IRdsUniqueKey


Сборка: Rds;


## Описание


Интерфейс IRdsUniqueKey предназначен
 для работы с уникальным ключом справочника НСИ.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IRdsUniqueKey


## Комментарии


Уникальный ключ - базовый идентификатор для записей справочника НСИ.
 Ключ может состоять из единственного атрибута справочника, значения которого
 уникальны для каждого элемента. Если справочник не имеет единственного
 уникального атрибута, то ключ может быть составлен из нескольких атрибутов,
 совокупность значений которых гарантирует уникальность.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IRdsUniqueKey.Attributes.htm)


		 Свойство Attributes
		 возвращает атрибуты уникального ключа справочника НСИ.


		 ![](../../Property_Image.gif)
		 [CaseSensitive](IRdsUniqueKey.CaseSensitive.htm)


		 Свойство CaseSensitive
		 определяет, чувствителен ли уникальный ключ к регистру.


		 ![](../../Property_Image.gif)
		 [Contains](IRdsUniqueKey.Contains.htm)


		 Свойство Contains определяет,
		 входит ли указанный атрибут в уникальный ключ справочника НСИ.


		 ![](../../Property_Image.gif)
		 [Dictionary](IRdsUniqueKey.Dictionary.htm)


		 Свойство Dictionary
		 возвращает справочник НСИ, которому принадлежит уникальный ключ.


		 ![](../../Property_Image.gif)
		 [UseInSelection](IRdsUniqueKey.UseInSelection.htm)


		 Свойство UseInSelection
		 определяет, используется ли уникальный ключ при формировании отметки.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Check](IRdsUniqueKey.Check.htm)


		 Метод Check проверяет
		 уникальность значений элементов по атрибутам, включенным в уникальный
		 ключ.


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
