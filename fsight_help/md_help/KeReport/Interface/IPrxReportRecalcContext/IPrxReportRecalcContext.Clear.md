# IPrxReportRecalcContext.Clear

IPrxReportRecalcContext.Clear
-


# IPrxReportRecalcContext.Clear


## Синтаксис


Clear;


## Описание


Метод Clear сбрасывает параметры
 вычисления регламентного отчета.


## Пример


Для выполнения примера необходим регламентный отчет с идентификатором
 «PRX_REPORT».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Context: IPrxReportRecalcContext;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("PRX_REPORT").Edit;

    Report := MObj As IPrxReport;

    Context := Report.CreateRecalcContext;

    Context.ParamValuesChanged := TriState.OnOption;

    Report.RecalcC(Context);

    MObj.Save;

End Sub Button1OnClick;


После выполнения примера будет произведено вычисление отчета.


См. также:


[IPrxReportRecalcContext.Clear](IPrxReportRecalcContext.Clear.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
