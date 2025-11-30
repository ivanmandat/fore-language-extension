# IView.CreateView

IView.CreateView
-


# IView.CreateView


## Синтаксис


CreateView;


## Описание


Метод CreateView осуществляет создание представления в базе данных на основе имеющихся метаданных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MbObj: IMetabaseObject;

	    CrInfo: IMetabaseObjectCreateInfo;

	    View: IView;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_VIEW;

	    CrInfo.Id := "New_View_1";

	    CrInfo.Name := "New_View_1";

	    CrInfo.Parent := MB.Root;

	    MbObj := MB.CreateObject(CrInfo).Edit;

	    View := MbObj As IView;

	    View.Database := Mb.ItemById("BD").Bind As IDatabase;

	    View.Sql := "SELECT * FROM Table_1";

	    View.NativeName := "New_View_1";

	    View.CreateView; //Создание представления в БД на сервере по имеющимся метаданным

	    MB.DeleteObject(MbObj.Key); //Удаление из репозитория пустого объекта

	End Sub UserProc;


После выполнения примера на сервере в базе данных будет создано представление.


См.также:


[IView](IView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
