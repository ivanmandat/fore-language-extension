# IDalColumns

IDalColumns
-


# IDalColumns


Сборка: Dal;


## Описание


Интерфейс IDalColumns содержит
 свойства и методы для работы с курсором, который содержит системную информацию
 о полях таблиц, хранящихся в БД.


## Комментарии


Интерфейс не содержит собственных свойств или методов. Пример его использования
 приведен в описании свойства [IDalConnection.Columns](../IDalConnection/IDalConnection.Columns.htm).


## Свойства, унаследованные от [IDalCursor](../IDalCursor/IDalCursor.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Fields](../IDalCursor/IDalCursor.Fields.htm)
		 Свойство Fields возвращает
		 коллекцию полей курсора, полученного после выполнения SQL-запроса.


		 ![](../../Property_Image.gif)
		 [Command](../IDalCursor/IDalCursor.Command.htm)
		 Свойство Command возвращает
		 объект, предназначенный для работы с базой данных с помощью SQL-запросов.


## Методы, унаследованные от [IDalCursor](../IDalCursor/IDalCursor.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Close](../IDalCursor/IDalCursor.Close.htm)
		 Метод Close осуществляет
		 закрытие курсора.


		 ![](../../Sub_Image.gif)
		 [Eof](../IDalCursor/IDalCursor.Eof.htm)
		 Метод Eof возвращает
		 признак, является ли текущая запись последней в таблице, получившейся
		 в результате выполнения команды на сервере БД.


		 ![](../../Sub_Image.gif)
		 [Next](../IDalCursor/IDalCursor.Next.htm)
		 Метод Next осуществляет
		 переход на следующую запись в таблице, которая получилась в результате
		 выполнения команды на сервере БД.


См. также:


[Интерфейсы сборки Dal](../Dal_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
