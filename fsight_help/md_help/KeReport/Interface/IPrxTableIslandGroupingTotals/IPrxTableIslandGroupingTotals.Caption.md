# IPrxTableIslandGroupingTotals.Caption

IPrxTableIslandGroupingTotals.Caption
-


# IPrxTableIslandGroupingTotals.Caption


## Синтаксис


Caption : [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Caption определяет
 заголовок итогов.


## Комментарии


Для определения оформления итогов используйте свойство [IPrxTableIslandGroupingTotals.Style](IPrxTableIslandGroupingTotals.Style.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT, на листе которого расположена реляционная
 область данных.


Добавьте ссылки на системные сборки: Drawing, Matrix, Metabase, Report,
 Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    TabIs: IPrxTableIslands;

	    TI: IPrxTableIsland;

	    Grs: IPrxTableIslandGroupings;

	    Gr: IPrxTableIslandGrouping;

	    GrT: IPrxTableIslandGroupingTotals;

	    Style: IPrxCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Report").Edit;

	    Report := MObj As IPrxReport;

	    TabIs := Report.TableIslands;

	    TI := TabIs.Item(0);

	    TI := Ti.Edit;

	    Grs := TI.Groupings;

	    Gr := Grs.Item(0);

	    GrT := Gr.Totals;

	    GrT.Caption.AsString := "VALUE";

	    GrT.Method(TI.Layout.Rows(0).Cells(0)).Method := BasicAggregatorOperation.Sum;

	    Style := GrT.Style;

	    Style.BackgroundColor := New GxColor.CreateRGB(0, 0, 250);

	    Style.Font.Bold := TriState.OnOption;

	    TI.Save;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут настроены параметры итогов.


См. также:


[IPrxTableIslandGroupingTotals](IPrxTableIslandGroupingTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
