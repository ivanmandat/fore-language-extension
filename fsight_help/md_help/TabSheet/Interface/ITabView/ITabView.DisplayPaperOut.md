# ITabView.DisplayPaperOut

ITabView.DisplayPaperOut
-


# ITabView.DisplayPaperOut


## Синтаксис


DisplayPaperOut: Boolean;


## Описание


Свойство DisplayPaperOut определяет
 видимость разметки страниц на листе таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Rep: IPrxReport;

	    View: ITabView;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Report_1").Edit;

	    Rep := MObj As IPrxReport;

	    View := Rep.ActiveSheet.Table.View;

	    View.DisplayPaperOut := True;

	    MObj.Save;

	End Sub Userproc;


После выполнения примера для активного листа регламентного отчета будет
 включена разметка на страницы. Идентификатор регламентного отчета - "Report_1".


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
