# IView.UpdateView

IView.UpdateView
-


# IView.UpdateView


## Синтаксис


UpdateView;


## Описание


Метод UpdateView осуществляет обновление структуры представления на сервере БД в соответствии со структурой текущего представления.


## Комментарии


Данный метод является аналогом метода [AlterView](IView.AlterView.htm). При работе метода UpdateView, в качестве структуры представления, которую необходимо обновить, берется структура текущего представления в репозитории.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    View: IView;

	Begin

	    Mb := MetaBaseClass.Active;

	    View := Mb.ItemById("View_1").Edit As IView;

	    View.Sql := "Select * From Tab_1";

	    View.UpdateView;

	End Sub UserProc;


После выполнения примера будет изменен текст SQL-запроса представления в базе, без изменения представления в репозитории. Идентификатор таблицы репозитория - «View_1».


См.также:


[IView](IView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
