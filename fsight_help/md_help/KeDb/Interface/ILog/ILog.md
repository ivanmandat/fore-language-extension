# ILog

ILog
-


# ILog


Сборка: Db;


## Описание


Интерфейс ILog содержит свойства
 и методы объекта репозитория - [Журнал](UiNavObj.chm::/journal/UiDb_relational_journal.htm).


## Иерархия наследования


ILog


## Комментарии


При создании нового журнала для его корректной работы необходимо, чтобы
 в настройках был задан следующий минимальный набор свойств:


	- [Database](ILog.Database.htm);


	- [NativeName](ILog.NativeName.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](ILog.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой хранится журнал.


		 ![](../../Property_Image.gif)
		 [Fields](ILog.Fields.htm)
		 Свойство Fields возвращает
		 объект, содержащий все поля журнала.


		 ![](../../Property_Image.gif)
		 [NativeName](ILog.NativeName.htm)
		 Свойство NativeName
		 определяет физическое имя журнала.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AlterLog](ILog.AlterLog.htm)
		 Метод AlterLog осуществляет
		 обновление структуры таблицы указанного журнала на сервере БД,
		 в соответствии со структурой текущего журнала.


		 ![](../../Sub_Image.gif)
		 [CreateLog](ILog.CreateLog.htm)
		 Метод CreateLog осуществляет
		 создание журнала в базе данных на основе имеющихся метаданных.


		 ![](../../Sub_Image.gif)
		 [DropLog](ILog.DropLog.htm)
		 Метод DropLog осуществляет
		 удаление журнала из базы данных.


		 ![](../../Sub_Image.gif)
		 [PutRecord](ILog.PutRecord.htm)
		 Метод PutRecord осуществляет
		 добавление записи в журнал.


		 ![](../../Sub_Image.gif)
		 [UpdateLog](ILog.UpdateLog.htm)
		 Метод UpdateLog осуществляет
		 обновление структуры таблицы журнала в базе данных.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)
 | [IDatasetModel](../IDatasetModel/IDatasetModel.htm) | [IDatasetInstance](../IDatasetInstance/IDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
