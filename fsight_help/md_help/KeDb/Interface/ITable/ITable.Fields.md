# ITable.Fields

ITable.Fields
-


# ITable.Fields


## Синтаксис


Fields: [ITableFields](../ITableFields/ITableFields.htm);


## Описание


Свойство Fields возвращает объект, содержащий все поля таблицы.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором "BD".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Table: ITable;

	    MObj: IMetabaseObject;

	    f: ITableField;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TABLE;

	    CrInfo.Id := "New_Table";

	    CrInfo.Name := "New_Table";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Table := MObj As ITable;

	    Table.Database := Mb.ItemById("BD").Bind As IDatabase;

	    f := Table.Fields.Add;

	    f.DataType := DbDataType.String;

	    f.Id := "Text_Field";

	    f.Name := "Текстовое поле";

	    f.Size := 50;

	    Table.NativeName := "New_Table";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана новая таблица. В данной таблице будет содержаться одно текстовое поле.


См.также:


[ITable](ITable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
