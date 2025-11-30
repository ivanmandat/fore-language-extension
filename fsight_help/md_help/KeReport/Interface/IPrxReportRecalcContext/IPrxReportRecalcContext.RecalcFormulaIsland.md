# IPrxReportRecalcContext.RecalcFormulaIsland

IPrxReportRecalcContext.RecalcFormulaIsland
-


# IPrxReportRecalcContext.RecalcFormulaIsland


## Синтаксис


RecalcFormulaIsland (FormulaIsland: [IPrxFormulaIsland](../IPrxFormulaIsland/IPrxFormulaIsland.htm)):
 [TriState](ForeSys.chm::/Enums/TriState.htm);


## Параметры


FormulaIsland. Параметр определяет
 область формул, которая будет участвовать в вычислении.


## Описание


Свойство RecalcFormulaIsland
 определяет необходимость вычисления указанной области формул.


## Пример


Для выполнения примера необходим регламентный отчет с идентификатором
 «PRX_REPORT».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Context: IPrxReportRecalcContext;

    FormulaIsland: IPrxFormulaIsland;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("PRX_REPORT").Edit;

    Report := MObj As IPrxReport;

    Context := Report.CreateRecalcContext;

    Context.Clear;

    FormulaIsland := Report.FormulaIslands.Item(0);

    Context.RecalcFormulaIsland(FormulaIsland) := TriState.OnOption;

    Report.RecalcC(Context);

    MObj.Save;

End Sub Button1OnClick;


После выполнения примера будет произведено вычисление указанной области
 формул отчета.


См. также:


[IPrxReportRecalcContext](IPrxReportRecalcContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
