# ITable

ITable
-


# ITable


Сборка: Db;


## Описание


Интерфейс ITable содержит свойства
 и методы объекта репозитория - [Таблица](UiNavObj.chm::/Table/UiDb_relational_table.htm).


## Иерархия наследования


ITable


## Комментарии


При создании новой таблицы для её корректной работы необходимо, чтобы
 в настройках был задан следующий минимальный набор свойств:


	- [Database](ITable.Database.htm);


	- [NativeName](ITable.NativeName.htm);


	- [Fields](ITable.Fields.htm).


Примечание.
 Для контроля уникальности данных со стороны СУБД рекомендуется всегда
 создавать индексы в коллекции [Indexes](ITable.Indexes.htm).
 Один из индексов должен являться [первичным
 ключом](../ITableIndex/ITableIndex.Primary.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CaseSensitiveNativeName](ITable.CaseSensitiveNativeName.htm)
		 Свойство CaseSensitiveNativeName
		 определяет физическое имя таблицы в базе данных с учётом регистра
		 символов.


		 ![](../../Property_Image.gif)
		 [Checks](ITable.Checks.htm)
		 Свойство Checks возвращает
		 ограничения таблицы.


		 ![](../../Property_Image.gif)
		 [Database](ITable.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой будут храниться данные таблицы.


		 ![](../../Property_Image.gif)
		 [External](ITable.External.htm)
		 Свойство External возвращает
		 признак присоединенной таблицы.


		 ![](../../Property_Image.gif)
		 [Fields](ITable.Fields.htm)
		 Свойство Fields возвращает
		 объект, содержащий все поля таблицы.


		 ![](../../Property_Image.gif)
		 [ForeignKeys](ITable.ForeignKeys.htm)
		 Свойство ForeignKeys
		 возвращает коллекцию внешних ключей таблицы.


		 ![](../../Property_Image.gif)
		 [Indexes](ITable.Indexes.htm)
		 Свойство Indexes возвращает
		 объект, содержащий все индексы таблицы.


		 ![](../../Property_Image.gif)
		 [IsRecreateFL](ITable.IsRecreateFL.htm)
		 Свойство IsRecreateFL
		 определяет, пересоздавать ли внешние связи таблицы.


		 ![](../../Property_Image.gif)
		 [NativeName](ITable.NativeName.htm)
		 Свойство NativeName
		 определяет физическое имя таблицы в базе данных.


		 ![](../../Property_Image.gif)
		 [Triggers](ITable.Triggers.htm)
		 Свойство Triggers возвращает
		 объект, содержащий все триггеры таблицы.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AlterTable](ITable.AlterTable.htm)
		 Метод AlterTable осуществляет
		 обновление структуры указанной таблицы на сервере БД, в соответствии
		 со структурой текущей таблицы.


		 ![](../../Sub_Image.gif)
		 [AttachTable](ITable.AttachTable.htm)
		 Метод AttachTable обновляет
		 информацию о структуре таблицы в репозитории, в соответствии со
		 структурой таблицы на сервере БД.


		 ![](../../Sub_Image.gif)
		 [CreateTable](ITable.CreateTable.htm)
		 Метод CreateTable осуществляет
		 создание таблицы на основе имеющихся метаданных.


		 ![](../../Sub_Image.gif)
		 [DropTable](ITable.DropTable.htm)
		 Метод DropTable осуществляет
		 удаление таблицы из базы данных на сервере.


		 ![](../../Sub_Image.gif)
		 [UpdateTable](ITable.UpdateTable.htm)
		 Метод UpdateTable осуществляет
		 обновление структуры таблицы на сервере БД в соответствии со структурой
		 текущей таблицы.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)
 | [IDatasetModel](../IDatasetModel/IDatasetModel.htm) | [IDatasetInstance](../IDatasetInstance/IDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
