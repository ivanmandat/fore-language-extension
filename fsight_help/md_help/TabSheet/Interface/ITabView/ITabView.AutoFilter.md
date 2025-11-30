# ITabView.AutoFilter

ITabView.AutoFilter
-


# ITabView.AutoFilter


## Синтаксис


AutoFilter: [ITabAutoFilter](../ITabAutoFilter/ITabAutoFilter.htm);


## Описание


Свойство AutoFilter возвращает
 объект, содержащий автофильтр таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    View: ITabView;

	    b: Boolean;

	Begin

	    MB:=MetabaseClass.Active;

	    Rep:=MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Tab:=Rep.ActiveSheet.Table;

	    View:=Tab.View;

	    b:=View.AutoFilter.Enabled;

	End Sub UserProc;


После выполнения примера в переменной «b» будет содержаться «True»,
 если включен автофильтр регламентного отчета.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
