# ITabHyperlink.Enable

ITabHyperlink.Enable
-


# ITabHyperlink.Enable


## Синтаксис


Enable: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство Enable определяет,
 будет ли текст ячейки рассматриваться как гиперссылка.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    Range: ITabRange;

	    Hyperlink: ITabHyperlink;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Reg_rep").Edit;

	    Rep := MObj As IPrxReport;

	    Tab := Rep.ActiveSheet.Table;

	    Range := Tab.Cell(0, 0);

	    Hyperlink := Range.Style.Hyperlink;

	    Hyperlink.Action := "=Лист2";

	    Hyperlink.Enable := TriState.OnOption;

	    Hyperlink.SeparateLinkText := TriState.OnOption;

	    Hyperlink.Text := "Goto_List2";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в ячейке "А0" регламентного отчета
 будет создана гиперссылка с текстом "Goto_List2", при нажатии
 на которую будет осуществляться переход на «Лист2».


См. также:


[ITabHyperlink](ITabHyperlink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
