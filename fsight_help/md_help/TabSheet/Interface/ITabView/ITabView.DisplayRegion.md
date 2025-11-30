# ITabView.DisplayRegion

ITabView.DisplayRegion
-


# ITabView.DisplayRegion


## Синтаксис


DisplayRegion: Boolean;


## Описание


Свойство DisplayRegion определяет,
 будут ли отображаться границы области данных и формул.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    View: ITabView;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("Reg_rep").Edit;

	    Rep:=MObj As IPrxReport;

	    Tab:=Rep.ActiveSheet.Table;

	    View:=Tab.View;

	    View.DisplayRegion:=False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет отключено отображение границ областей
 данных и формул на активной странице регламентного отчета. Идентификатор
 регламентного отчета - «Reg_rep».


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
