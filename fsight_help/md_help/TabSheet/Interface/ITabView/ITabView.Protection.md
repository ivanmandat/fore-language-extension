# ITabView.Protection

ITabView.Protection
-


# ITabView.Protection


## Синтаксис


Protection: [ITabProtection](../ITabProtection/ITabProtection.htm);


## Описание


Свойство Protection возвращает
 объект, содержащий настройки защиты электронной таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    View: ITabView;

	    Prot: ITabProtection;

	Begin

	    MB:=MetabaseClass.Active;

	    Rep:=MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Tab:=Rep.ActiveSheet.Table;

	    View:=Tab.View;

	    Prot:=View.Protection;

	End Sub UserProc;


После выполнения примера в переменной «Prot» будет содержаться настройки
 для защита активного листа регламентного отчета.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
