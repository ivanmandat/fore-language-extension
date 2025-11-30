# Настройка элементов управления

Настройка элементов управления
-


# Настройка элементов управления


Рассмотрим пример создания элемента управления, настроенного на определенное
 измерение источника данных регламентного отчета.


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REPORT_INTRO». Для источника данных регламентного
 отчета определен [срез](KeReport_Programming_DataArea.htm)
 с идентификатором «Slice». Одно из измерений источника данных - календарный
 справочник с идентификатором «D_CALENDAR».


## Пример


Для выполнения примера добавьте ссылки на системные сборки Metabase,
 Report.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    DtSource: IPrxDataSource;

    Slices: IPrxSlices;

    Dim: IPrxSliceDimension;

    Controls: IPrxReportControls;

    Control: IPrxControl;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT_INTRO").Edit;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    DtSource := DtSources.Item(0);

    Slices := DtSource.Slices;

    Dim := Slices.FindByName("Slice").Dimensions.FindById("D_CALENDAR");

    Controls := Report.Controls;

    Control := Controls.Add(Null);

    Control.Id := "Calendar";

    Control.Name := "Calendar";

    Control.Dimension := Dim;

    Control.Appearance.Report := False;

    Control.Appearance.Sheet(Report.Sheets.Item(0)) := True;

    Control.AutoRecalc := True;

    Control.Binding := "UI="+Char.Chr(34)+"DimCombo"+Char.Chr(34);

    MObj.Save;

End Sub UserProc;


В результате выполнения примера будет добавлен элемент управления в
 виде раскрывающегося списка, элемент управления будет настроен на календарное
 измерение источника данных.


См. также:


[Общие
 принципы программирования с использованием сборки Report](KeReport_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
