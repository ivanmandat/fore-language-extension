# IView.RecreateView

IView.RecreateView
-


# IView.RecreateView


## Синтаксис


RecreateView;


## Описание


Метод RecreateView осуществляет пересоздание представления на сервере БД.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    View: IView;

	Begin

	    Mb := MetaBaseClass.Active;

	    View := Mb.ItemById("VIEW_1").Bind As IView;

	    View.RecreateView;

	End Sub UserProc;


После выполнения примера произойдет пересоздание представления с наименованием "View_1" на сервере БД.


См.также:


[IView](IView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
