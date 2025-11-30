# Создание представления

Создание представления
-


# Создание представления


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором "BD".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    View: IView;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_VIEW;

	    CrInfo.Id := "NewView";

	    CrInfo.Name := "Новое представление";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    View := MObj As IView;

	    View.Database := Mb.ItemById("BD").Bind As IDatabase;

	    View.NativeName := "New_View";

	    View.Sql := "Select * From Table_1";

	    View.ForceCreate := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создано новое представление. Данное представление будет строиться на данных, содержащихся в таблице с физическим именем "Table_1". Для представления будет возможность сохранения с некорректным SQL-запросом.


См.также:


[Примеры](KeDb_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
