# Создание таблицы

Создание таблицы
-


# Создание таблицы


### Пример 1


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором «BD».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Table: ITable;

	    MObj: IMetabaseObject;

	    f: ITableField;

	    i: ITableIndex;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TABLE;

	    CrInfo.Id := "NewTable";

	    CrInfo.Name := "Новая таблица";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Table := MObj As ITable;

	    Table.Database := Mb.ItemById("BD").Bind As IDatabase;

	    //Поле таблицы

	    f := Table.Fields.Add;

	    f.DataType := DbDataType.String;

	    f.Id := "Text_Field";

	    f.Name := "Текстовое поле";

	    f.Size := 50;

	    //Индекс по созданному полю

	    i := Table.Indexes.Add;

	    i.Fields.Add(f);

	    i.Primary := True;

	    Table.NativeName := "NewTable";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана новая таблица. В таблице будет содержаться одно текстовое поле, а также индекс по этому полю. Табличные данные будут храниться в схеме, на которую настроена база данных «BD».


### Пример 2


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором «BD». База данных настроена для подключения к серверу БД, в котором содержится таблица с физическим именем «Table_1».


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


После выполнения примера в корневом каталоге репозитория будет создана прикрепленная таблица. Данная таблица будет ссылаться на таблицу с физическим именем «Table_1», хранящуюся на сервере БД.


См. также:


[Примеры](KeDb_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
