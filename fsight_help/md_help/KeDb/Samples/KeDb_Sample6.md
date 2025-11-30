# Создание команды СУБД

Создание команды СУБД
-


# Создание команды СУБД


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором "BD".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    SQLCom: ISQLCommand;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_SQLCOMMAND;

	    CrInfo.Id := "NewSqlCommand";

	    CrInfo.Name := "Новая команда СУБД";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    SQLCom := MObj As ISQLCommand;

	    SQLCom.Database := MB.ItemById("BD").Bind As IDatabase;

	    SQLCom.Text("ORCL") := "Insert Into Table_1(Field1, Field2) Values(12, 12)";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана новая команда СУБД. При выполнении данной команды, в таблицу с физическим наименованием "Table_1" будет добавляться запись с указанными значениями двух полей.


См.также:


[Примеры](KeDb_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
