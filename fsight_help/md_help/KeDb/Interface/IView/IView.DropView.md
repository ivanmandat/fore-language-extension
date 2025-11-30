# IView.DropView

IView.DropView
-


# IView.DropView


## Синтаксис


DropView;


## Описание


Метод DropView осуществляет удаление представления из базы данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    View: IView;

	Begin

	    MB := MetabaseClass.Active;

	    View := MB.ItemById("New_View_1").Bind As IView;

	    View.DropView;

	End Sub UserProc;


После выполнения примера, из базы данных на сервере будет удалено представление, на которое ссылается представление репозитория «New_View_1».


См.также:


[IView](IView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
