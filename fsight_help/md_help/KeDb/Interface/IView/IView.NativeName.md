# IView.NativeName

IView.NativeName
-


# IView.NativeName


## Синтаксис


NativeName: String;


## Описание


Свойство NativeName определяет физическое имя представления в базе данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором "BD". В данной базе создана таблица с физическим именем "Table_1".


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

	    CrInfo.Id := "New_View_1";

	    CrInfo.Name := "New_View_1";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    View := MObj As IView;

	    View.Database := Mb.ItemById("BD").Bind As IDatabase;

	    View.NativeName := "New_View_1";

	    View.Sql := "SELECT * FROM Table_1";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создано новое представление. Данное представление будет строиться на основе данных таблицы "Table_1".


См.также:


[IView](IView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
