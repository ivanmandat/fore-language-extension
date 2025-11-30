# TableCreator

TableCreator
-


# TableCreator


Сборка: Cubes;


## Описание


Класс TableCreator реализует объект, используемый для автоматического создания таблиц репозитория.


## Свойства объекта класса, унаследованные от [ITableCreator](../../Interface/ITableCreator/ITableCreator.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Connection](../../Interface/ITableCreator/ITableCreator.Connection.htm)


		 Свойство Connection
		 определяет соединение, в рамках которого будут выполняться запросы
		 по созданию таблицы и загрузке данных.


		 ![](../../Property_Image.gif)
		 [Database](../../Interface/ITableCreator/ITableCreator.Database.htm)


		 Свойство Database определяет
		 базу данных, в которой будет создана таблица.


		 ![](../../Property_Image.gif)
		 [DataRow](../../Interface/ITableCreator/ITableCreator.DataRow.htm)


		 Свойство DataRow определяет
		 индекс строки в источнике данных, начиная с которой будет производиться
		 загрузка данных в таблицу.


		 ![](../../Property_Image.gif)
		 [Fields](../../Interface/ITableCreator/ITableCreator.Fields.htm)


		 Свойство Fields возвращает
		 коллекцию полей источника данных, на основании которых будут созданы
		 поля в таблице.


		 ![](../../Property_Image.gif)
		 [ObjectCreateInfo](../../Interface/ITableCreator/ITableCreator.ObjectCreateInfo.htm)


		 Свойство ObjectCreateInfo
		 определяет описание объекта репозитория, который будет соответствовать
		 создаваемой таблице.


		 ![](../../Property_Image.gif)
		 [RowCount](../../Interface/ITableCreator/ITableCreator.RowCount.htm)


		 Свойство RowCount определяет
		 количество строк данных, которые необходимо загрузить в созданную
		 таблицу.


		 ![](../../Property_Image.gif)
		 [SkipEmptyRows](../../Interface/ITableCreator/ITableCreator.SkipEmptyRows.htm)


		 Свойство SkipEmptyRows
		 определяет признак пропуска пустых строк.


		 ![](../../Property_Image.gif)
		 [Source](../../Interface/ITableCreator/ITableCreator.Source.htm)


		 Свойство Source определяет
		 источник, на основании которого будет создана таблица.


## Методы объекта класса, унаследованные от [ITableCreator](../../Interface/ITableCreator/ITableCreator.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddConverter](../../Interface/ITableCreator/ITableCreator.AddConverter.htm)


		 Метод AddConverter
		 выполняет преобразование значений указанного поля.


		 ![](../../Sub_Image.gif)
		 [Execute](../../Interface/ITableCreator/ITableCreator.Execute.htm)


		 Метод Execute осуществляет
		 создание таблицы и загрузку в нее данных.


См. также:


[Классы сборки Cubes](../KeCubes_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
