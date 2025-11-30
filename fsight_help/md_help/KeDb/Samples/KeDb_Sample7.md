# Создание процедуры

Создание процедуры
-


# Создание процедуры


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором "BD".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Proc: IProcedure;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_PROCEDURE;

	    CrInfo.Id := "NewProcedure";

	    CrInfo.Name := "Новая процедура";

	    CrInfo.Parent := MB.Root;

	    Proc := MB.CreateObject(CrInfo).Edit As IProcedure;

	    Proc.Database := Mb.ItemById("BD").Bind As IDatabase;

	    Proc.Text(Proc.Database.DriverId) :=

	        "As" + #13 + #10 +

	        "Begin" + #13 + #10 +

	        "For i In 1..10 Loop" + #13 + #10 +

	        "Insert Into Table_1(field1, field2) Values(i, i);" + #13 + #10 +

	        "End Loop;" + #13 + #10 +

	        "End;";

	    Proc.NativeName := "NewProc";

	    (Proc As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана новая процедура. При выполнении данной команды, в таблицу с физическим наименованием "Table_1" в цикле будут добавлены десять записей с указанными значениями двух полей.


См.также:


[Примеры](KeDb_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
