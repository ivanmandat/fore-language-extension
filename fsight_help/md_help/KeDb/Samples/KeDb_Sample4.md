# Создание запроса

Создание запроса
-


# Создание запроса


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором "BD".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInf: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Query: IQuery;

	Begin

	    MB := MetabaseClass.Active;

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_QUERY;

	    CrInf.Id := "NewQuery";

	    CrInf.Name := "NewQuery";

	    CrInf.Parent := Mb.Root;

	    MObj := Mb.CreateObject(CrInf).Edit;

	    Query := MObj As IQuery;

	    Query.Database := Mb.ItemById("BD").Bind As IDatabase;

	    Query.Sql := "SELECT * FROM Table_1";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан новый запрос. Данный запрос будет осуществлять выборку всех данных из таблицы с физическим именем "Table_1".


См.также:


[Примеры](KeDb_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
