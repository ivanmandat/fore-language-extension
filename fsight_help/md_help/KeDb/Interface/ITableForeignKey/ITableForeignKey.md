# ITableForeignKey

ITableForeignKey
-


# ITableForeignKey


Сборка: Db;


## Описание


Интерфейс ITableForeignKey предназначен
 для работы с внешним ключом таблицы.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           ITableForeignKey


## Комментарии


Для создания внешнего ключа используйте метод [ITableForeignKeys.Add](../ITableForeignKeys/ITableForeignKeys.Add.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AlterType](ITableForeignKey.AlterType.htm)
		 Свойство AlterType
		 определяет способ обновления ключа.


		 ![](../../Property_Image.gif)
		 [Columns](ITableForeignKey.Columns.htm)
		 Свойство Columns определяет
		 поле таблицы, которое является внешним ключом.


		 ![](../../Property_Image.gif)
		 [ComparedWith](ITableForeignKey.ComparedWith.htm)
		 Свойство ComparedWith
		 определяет индекс элемента, с которым сравнивается внешний
		 ключ.


		 ![](../../Property_Image.gif)
		 [IsCascade](ITableForeignKey.IsCascade.htm)
		 Свойство IsCascade
		 определяет, удалять ли записи в текущей таблице при
		 их удалении в связанной.


		 ![](../../Property_Image.gif)
		 [RColumns](ITableForeignKey.RColumns.htm)
		 Свойство RColumns определяет
		 поле, на которое ссылается внешний ключ.


		 ![](../../Property_Image.gif)
		 [RTable](ITableForeignKey.RTable.htm)
		 Свойство RTable определяет
		 идентификатор таблицы, на которую ссылается внешний ключ.


		 ![](../../Property_Image.gif)
		 [RTableObject](ITableForeignKey.RTableObject.htm)
		 Свойство RTableObject
		 определяет таблицу, на которую ссылается внешний ключ.


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
 сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
