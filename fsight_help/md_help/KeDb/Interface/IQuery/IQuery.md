# IQuery

IQuery
-


# IQuery


Сборка: Db;


## Описание


Интерфейс IQuery содержит свойства
 и методы объекта репозитория - [Запрос](UiNavObj.chm::/Query/query.htm).


## Иерархия наследования


IQuery


## Комментарии


При создании нового запроса для его корректной работы необходимо, чтобы
 в настройках был задан следующий минимальный набор свойств:


	- [Database](IQuery.Database.htm);


	- [Sql](IQuery.Sql.htm) или [SqlText](IQuery.SqlText.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoDefineStorage](IQuery.AutoDefineStorage.htm)
		 Свойство AutoDefineStorage
		 определяет, будет ли производиться автоматическое определение
		 настроек для сохранения данных при сохранении запроса.


		 ![](../../Property_Image.gif)
		 [Database](IQuery.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой хранится запрос.


		 ![](../../Property_Image.gif)
		 [ParamsCheck](IQuery.ParamsCheck.htm)
		 Свойство ParamsCheck
		 определяет, будут ли учитываться параметры при выполнении Запроса.


		 ![](../../Property_Image.gif)
		 [Sql](IQuery.Sql.htm)
		 Свойство Sql определяет
		 текст SQL-запроса к базе данных у объекта Запрос.


		 ![](../../Property_Image.gif)
		 [SqlText](IQuery.SqlText.htm)
		 Свойство SqlText определяет
		 текст SQL-запроса к базе данных у объекта Запрос для определенного
		 драйвера базы данных.


		 ![](../../Property_Image.gif)
		 [Storage](IQuery.Storage.htm)
		 Свойство Storage возвращает
		 настройки для сохранения данных.


		 ![](../../Property_Image.gif)
		 [SubstituteAllParamsInQuery](IQuery.SubstituteAllParamsInQuery.htm)
		 Свойство SubstituteAllParamsInQuery
		 определяет, будут ли подставляться все значения параметров в тело
		 запроса при его [выполнении](uinavobj.chm::/Query/Query.htm#view).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearSqlText](IQuery.ClearSqlText.htm)
		 Метод ClearSqlText
		 осуществляет очистку текста запроса объекта Запрос.


		 ![](../../Sub_Image.gif)
		 [RefreshFields](IQuery.RefreshFields.htm)
		 Метод RefreshFields
		 обновляет список полей объекта Запрос по информации из базы данных.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)
 | [IDatasetModel](../IDatasetModel/IDatasetModel.htm) | [IDatasetInstance](../IDatasetInstance/IDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
