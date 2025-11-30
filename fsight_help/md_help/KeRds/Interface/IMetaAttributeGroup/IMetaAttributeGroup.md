# IMetaAttributeGroup

IMetaAttributeGroup
-


# IMetaAttributeGroup


Сборка: Rds;


## Описание


Интерфейс IMetaAttributeGroup
 предназначен для работы с группой атрибутов базы данных временных рядов.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IMetaAttributeGroup


## Комментарии


Группа предназначена для создания группового атрибута. Данный атрибут
 позволяет одновременно менять значение для всех показателей, входящих
 в группу. Если показатель не входит в группу, то для него недоступно изменение
 значения группового атрибута. Значение атрибута, принадлежащего группе,
 будет общим по свободным атрибутам группы и разным по первичным атрибутам.


Для добавления группы атрибутов используйте метод [IMetaAttributeGroups.Add](../IMetaAttributeGroups/IMetaAttributeGroups.Add.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Filter](IMetaAttributeGroup.Filter.htm)


		 Свойство Filter возвращает
		 фильтр группы.


		 ![](../../Property_Image.gif)
		 [FreeAttributes](IMetaAttributeGroup.FreeAttributes.htm)


		 Свойство FreeAttributes
		 определяет набор свободных атрибутов, входящих в группу.


		 ![](../../Property_Image.gif)
		 [IsPartiallyFree](IMetaAttributeGroup.IsPartiallyFree.htm)


		 Свойство IsPartiallyFree
		 возвращает признак того, что в группе присутствует
		 свободный атрибут.


		 ![](../../Property_Image.gif)
		 [PrimaryAttributes](IMetaAttributeGroup.PrimaryAttributes.htm)


		 Свойство PrimaryAttributes
		 определяет набор первичных атрибутов, входящих в группу.


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


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
