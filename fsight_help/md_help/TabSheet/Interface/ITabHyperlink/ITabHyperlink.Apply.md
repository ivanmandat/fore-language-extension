# ITabHyperlink.Apply

ITabHyperlink.Apply
-


# ITabHyperlink.Apply


## Синтаксис


Apply(Value: [ITabHyperlink](ITabHyperlink.htm));


## Параметры


Value — гиперссылка,
 параметры которой необходимо применить к текущей гиперссылке.


## Описание


Метод Apply применяет параметры
 указанной гиперссылки к текущей.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGL_REP».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    Range: ITabRange;

	    Hyperlink, Hyperlink1: ITabHyperlink;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("REGL_REP").Edit;

	    Rep := MObj As IPrxReport;

	    Tab := Rep.ActiveSheet.Table;

	    Range := Tab.Cell(0, 0);

	    Hyperlink := Range.Style.Hyperlink;

	    Hyperlink.Action := "=a0:b3";

	    Hyperlink.Enable := TriState.OnOption;

	    Hyperlink.SeparateLinkText := TriState.OnOption;

	    Hyperlink.Text := "Ссылка";

	    Range := Tab.Cell(1, 0);

	    Hyperlink1 := Range.Style.Hyperlink;

	    Hyperlink1.Apply(Hyperlink);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, в ячейке «А0» регламентного отчета будет создана
 гиперссылка с текстом «Ссылка», при нажатии на которую будет осуществляться
 выделение диапазона «a0:b3». В ячейке «А1» будет создана гиперссылка,
 к которой будут применены параметры гиперссылки в ячейке «А0».


См. также:


[ITabHyperlink](ITabHyperlink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
