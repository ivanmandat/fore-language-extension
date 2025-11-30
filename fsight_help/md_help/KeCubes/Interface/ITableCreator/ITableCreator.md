# ITableCreator

ITableCreator
-


# ITableCreator


Сборка: Cubes;


## Описание


Интерфейс ITableCreator содержит
 свойства и методы объекта, используемого для автоматического создания
 таблиц репозитория.


## Иерархия наследования


ITableCreator


## Комментарии


Для создания таблицы необходимо:


	- Инициализировать объект класса [TableCreator](../../Class/TableCreator/TableCreator.htm);


	- В свойстве [Database](ITableCreator.Database.htm)
	 указать базу данных, в которой будет создана таблица;


	- В свойстве [Source](ITableCreator.Source.htm) указать
	 источник, на основании структуры и данных которого будет сформирована
	 таблица;


	- В свойстве [ObjectCreateInfo](ITableCreator.ObjectCreateInfo.htm)
	 указать информацию о создаваемой таблице репозитория;


	- Вызвать метод [Execute](ITableCreator.Execute.htm).


После указания всех параметров и вызова метода [Execute](ITableCreator.Execute.htm)
 в репозитории будет создана таблица в соответствии с информацией [ObjectCreateInfo](ITableCreator.ObjectCreateInfo.htm)
 и структурой, аналогичной структуре источника [Source](ITableCreator.Source.htm).
 Соответствующая физическая таблица также будет создана на сервере БД,
 настройки которого указаны в базе данных [Database](ITableCreator.Database.htm).
 В таблицу будут загружены все данные из указанного источника.


Для ограничения загружаемых данных можно указать свойства [DataRow](ITableCreator.DataRow.htm)
 и [RowCount](ITableCreator.RowCount.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Connection](ITableCreator.Connection.htm)


		 Свойство Connection
		 определяет соединение, в рамках которого будут выполняться запросы
		 по созданию таблицы и загрузке данных.


		 ![](../../Property_Image.gif)
		 [Database](ITableCreator.Database.htm)


		 Свойство Database определяет
		 базу данных, в которой будет создана таблица.


		 ![](../../Property_Image.gif)
		 [DataRow](ITableCreator.DataRow.htm)


		 Свойство DataRow определяет
		 индекс строки в источнике данных, начиная с которой будет производиться
		 загрузка данных в таблицу.


		 ![](../../Property_Image.gif)
		 [Fields](ITableCreator.Fields.htm)


		 Свойство Fields возвращает
		 коллекцию полей источника данных, на основании которых будут созданы
		 поля в таблице.


		 ![](../../Property_Image.gif)
		 [ObjectCreateInfo](ITableCreator.ObjectCreateInfo.htm)


		 Свойство ObjectCreateInfo
		 определяет описание объекта репозитория, который будет соответствовать
		 создаваемой таблице.


		 ![](../../Property_Image.gif)
		 [RowCount](ITableCreator.RowCount.htm)


		 Свойство RowCount определяет
		 количество строк данных, которые необходимо загрузить в созданную
		 таблицу.


		 ![](../../Property_Image.gif)
		 [SkipEmptyRows](ITableCreator.SkipEmptyRows.htm)


		 Свойство SkipEmptyRows
		 определяет признак пропуска пустых строк.


		 ![](../../Property_Image.gif)
		 [Source](ITableCreator.Source.htm)


		 Свойство Source определяет
		 источник, на основании которого будет создана таблица.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddConverter](ITableCreator.AddConverter.htm)


		 Метод AddConverter
		 выполняет преобразование значений указанного поля.


		 ![](../../Sub_Image.gif)
		 [Execute](ITableCreator.Execute.htm)


		 Метод Execute осуществляет
		 создание таблицы и загрузку в нее данных.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
