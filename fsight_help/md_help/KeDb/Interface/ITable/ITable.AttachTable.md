# ITable.AttachTable

ITable.AttachTable
-


# ITable.AttachTable


## Синтаксис


AttachTable(TableName: String; MakeExternal: Boolean);


## Параметры


TableName — физическое имя таблицы-источника полей.


MakeExternal — параметр, определяющий признак присоединенной таблицы. Если в качестве значения параметра передается False, то происходит обновление структура таблицы, если True, то для таблицы будет установлен признак прикрепленной.


## Описание


Метод AttachTable обновляет информацию о структуре таблицы в репозитории, в соответствии со структурой таблицы на сервере БД. Обновлению подвергается информация о структуре полей, индексов, триггеров, ограничений таблицы. Также метод используется при создании присоединенной таблицы.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором "BD". База данных настроена для подключения к серверу БД, в котором содержится таблица с физическим именем "Table_1".


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Table: ITable;

	Begin

	    Mb := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_EXTERNTABLE;

	    CrInfo.Id := "NewAttachTable";

	    CrInfo.Name := "NewAttachTable";

	    CrInfo.Parent := Mb.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Table := MObj As ITable;

	    Table.Database := Mb.ItemById("BD").Bind As IDatabase;

	    Table.AttachTable("Table_1", True);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана прикрепленная таблицы. Данная таблицы будет ссылаться на таблицу с физическим именем "Table_1", хранящуюся на сервере БД.


См.также:


[ITable](ITable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
