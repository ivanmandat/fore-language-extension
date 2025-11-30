# IMetabaseUpdateSqlNode

IMetabaseUpdateSqlNode
-


# IMetabaseUpdateSqlNode


## Описание


Интерфейс IMetabaseUpdateSqlNode
 содержит свойства объекта обновления - [SQL-оператор](UpdManager.chm::/CreateUpdate/Admin_CreateUpdate_AddSQL.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](IMetabaseUpdateSqlNode.Database.htm)
		 Свойство Database определяет
		 ключ базы данных, для соединения с которой будет выполняться SQL-запрос.


		 ![](../../Property_Image.gif)
		 [DatabaseNode](IMetabaseUpdateSqlNode.DatabaseNode.htm)
		 Свойство DatabaseNode
		 возвращает БД, к которой будет выполняться SQL-запрос в виде объекта
		 обновления.


		 ![](../../Property_Image.gif)
		 [IgnoreErrors](IMetabaseUpdateSqlNode.IgnoreErrors.htm)
		 Свойство IgnoreErrors
		 определяет возможность пропуска SQL-оператора, если во время его
		 выполнения возникает ошибка.


		 ![](../../Property_Image.gif)
		 [IsDatabaseValid](IMetabaseUpdateSqlNode.IsDatabaseValid.htm)
		 Свойство IsDatabaseValid
		 возвращает признак того, присутствует ли в текущем репозитории
		 БД, к которой выполняет запрос SQL-оператор.


		 ![](../../Property_Image.gif)
		 [Sql](IMetabaseUpdateSqlNode.Sql.htm)
		 Свойство Sql определяет
		 текст запроса SQL-оператора, выполняемого при обновлении.


## Свойства, унаследованные от [IMetabaseUpdateNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Condition](../IMetabaseUpdateNode/IMetabaseUpdateNode.Condition.htm)
		 Свойство Condition
		 возвращает условие, при выполнении которого будет осуществляться
		 обновление объекта.


		 ![](../../Property_Image.gif)
		 [CustomProperties](../IMetabaseUpdateNode/IMetabaseUpdateNode.CustomProperties.htm)
		 Свойство CustomProperties
		 возвращает коллекцию пользовательских метаданных объекта обновления.


		 ![](../../Property_Image.gif)
		 [Enabled](../IMetabaseUpdateNode/IMetabaseUpdateNode.Enabled.htm)
		 Свойство Enabled определяет,
		 выполнять ли обновление объекта.


		 ![](../../Property_Image.gif)
		 [Index](../IMetabaseUpdateNode/IMetabaseUpdateNode.Index.htm)
		 Свойство Index возвращает
		 индекс объекта обновления.


		 ![](../../Property_Image.gif)
		 [Key](../IMetabaseUpdateNode/IMetabaseUpdateNode.Key.htm)
		 Свойство Key возвращает
		 ключ объекта обновления.


		 ![](../../Property_Image.gif)
		 [Label](../IMetabaseUpdateNode/IMetabaseUpdateNode.Label.htm)
		 Свойство Label определяет
		 наименование объекта обновления.


		 ![](../../Property_Image.gif)
		 [NodeType](../IMetabaseUpdateNode/IMetabaseUpdateNode.NodeType.htm)
		 Свойство NodeType возвращает
		 тип объекта обновления.


		 ![](../../Property_Image.gif)
		 [ParentNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.ParentNode.htm)
		 Свойство ParentNode
		 возвращает родительскую структуру для объекта обновления.


## Методы


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearSql](IMetabaseUpdateSqlNode.ClearSql.htm)
		 Метод ClearSql очищает
		 текст SQL-запроса для всех драйверов.


		 ![](../../Sub_Image.gif)
		 [SetDefaultSql](IMetabaseUpdateSqlNode.SetDefaultSql.htm)
		 Метод SetDefaultSql
		 устанавливает текст SQL-запроса, используемый по умолчанию для
		 всех СУБД.


## Методы, унаследованные от [IMetabaseUpdateNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Prepare](../IMetabaseUpdateNode/IMetabaseUpdateNode.Prepare.htm)
		 Метод Prepare осуществляет
		 подготовку объекта к обновлению.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
