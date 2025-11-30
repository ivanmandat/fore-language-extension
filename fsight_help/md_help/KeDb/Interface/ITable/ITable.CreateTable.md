# ITable.CreateTable

ITable.CreateTable
-


# ITable.CreateTable


## Синтаксис


CreateTable;


## Описание


Метод CreateTable осуществляет
 создание таблицы на сервере БД по имеющимся метаданным.


## Комментарии


Каждому объекту репозитория «Таблица» соответствует физическая таблица,
 созданная на сервере БД. При создании и сохранении таблицы репозитория
 осуществляется автоматическое создание таблицы на сервере БД.


Данный метод осуществляет создание физической таблицы на сервере по
 имеющемуся описанию таблицы репозитория. Его применение актуально, если
 нету необходимости создания соответствующего объекта в репозитории.


Примечание.
 При создании и сохранении таблицы репозитория вызов данного метода осуществляется
 автоматически.


## Пример 1


Пример создания таблицы в репозитории:


Для выполнения примера предполагается наличие БД репозитория с идентификатором
 «BD».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Table: ITable;

	    Field: ITableField;

	Begin

	    MB := MetabaseClass.Active;

	    MB := MetabaseClass.Active;

	    //Информация для создания объекта

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TABLE;

	    CrInfo.Id := "New_Table";

	    CrInfo.Name := "Новая таблица";

	    CrInfo.Parent := MB.Root;

	    //Создание временного объекта.
	 После изменения параметров таблица будет сохранена

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Table := MObj As ITable;

	    Table.Database := Mb.ItemById("BD").Bind As IDatabase;

	    Table.NativeName := "New_Table";

	    //Создание описания одного поля

	    Field := Table.Fields.Add;

	    Field.DataType := DbDataType.String;

	    Field.Id := "Text_Field";

	    Field.Name := "Текстовое поле";

	    Field.Size := 50;

	    //Сохранение таблицы репозитория

	    //При сохранении автоматически будет создана таблица на сервере БД

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана
 новая таблица. При сохранении объекта репозитория будет создана соответствующая
 таблица на сервере БД.


## Пример 2


Пример создания таблицы на сервере БД без создания соответствующего
 объекта репозитория:


Для выполнения примера предполагается наличие БД репозитория с идентификатором
 «BD».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Table: ITable;

	    Field: ITableField;

	Begin

	    MB := MetabaseClass.Active;

	    //Информация для создания объекта

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TABLE;

	    CrInfo.Id := "New_Table";

	    //Создание временного объекта

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Table := MObj As ITable;

	    Table.Database := Mb.ItemById("BD").Bind As IDatabase;

	    Table.NativeName := "New_Table1";

	    //Создание описания одного поля

	    Field := Table.Fields.Add;

	    Field.DataType := DbDataType.String;

	    Field.Id := "Text_Field";

	    Field.Name := "Текстовое поле";

	    Field.Size := 50;

	    //Создание физической таблицы на сервере БД

	    //по имеющемуся описанию таблицы репозитория

	    Table.CreateTable;

	End Sub UserProc;


После выполнения примера на сервере в базе данных будет создана новая
 таблица, содержащая одно поле.


См. также:


[ITable](ITable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
