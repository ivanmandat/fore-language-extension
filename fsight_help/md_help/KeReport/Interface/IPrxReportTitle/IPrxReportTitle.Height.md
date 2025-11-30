# IPrxReportTitle.Height

IPrxReportTitle.Height
-


# IPrxReportTitle.Height


## Синтаксис


Height: Double;


## Описание


Свойство Height определяет высоту
 заголовка регламентного отчета.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Title: IPrxReportTitle;

    d: Double;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    Title := Report.Title;

    Title.Height := 8.5;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет установлена высота заголовка регламентного
 отчета - «8.5». Идентификатор регламентного отчета - «Report».


См. также:


[IPrxReportTitle](IPrxReportTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
