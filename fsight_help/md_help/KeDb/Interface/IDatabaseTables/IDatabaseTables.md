# IDatabaseTables

IDatabaseTables
-


# IDatabaseTables


## Описание


Интерфейс IDatabaseTables содержит
 свойства и методы коллекции таблиц, хранящихся на сервере БД.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [TableName](IDatabaseTables.TableName.htm)
		 Свойство TableName
		 возвращает физическое имя таблицы в базе данных.


## Свойства, унаследованные от [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Command](Dal.chm::/Interface/IDalCursor/IDalCursor.Command.htm)
		 Свойство Command возвращает
		 объект, предназначенный для работы с базой данных с помощью SQL-запросов.


		 ![](../../Property_Image.gif)
		 [Fields](Dal.chm::/Interface/IDalCursor/IDalCursor.Fields.htm)
		 Свойство Fields возвращает
		 коллекцию полей курсора, полученного после выполнения SQL-запроса.


## Методы, унаследованные от [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Close](Dal.chm::/Interface/IDalCursor/IDalCursor.Close.htm)
		 Метод Close осуществляет
		 закрытие курсора.


		 ![](../../Sub_Image.gif)
		 [Eof](Dal.chm::/Interface/IDalCursor/IDalCursor.Eof.htm)
		 Метод Eof возвращает
		 признак, является ли текущая запись последней в таблице, получившейся
		 в результате выполнения команды на сервере БД.


		 ![](../../Sub_Image.gif)
		 [Next](Dal.chm::/Interface/IDalCursor/IDalCursor.Next.htm)
		 Метод Next осуществляет
		 переход на следующую запись в таблице, которая получилась в результате
		 выполнения команды на сервере БД.


См.также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
