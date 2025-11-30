# IPrxSlice.Report

IPrxSlice.Report
-


# IPrxSlice.Report


## Синтаксис


Report: [IPrxReport](../IPrxReport/IPrxReport.htm);


## Описание


Свойство Report возвращает объект-родитель.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с идентификатором «Report», также необходимо подключить системные сборки Metabase, Report.


			Sub Macro;

Var

     MB: IMetabase;

     MObj: IMetabaseObject;

     Report: IPrxReport;

     Slice: IPrxSlice;

Begin

     MB := MetabaseClass.Active;

     MObj := MB.ItemById("Report").Edit;

     Report := MObj As IPrxReport;

     Slice:= Report.DataSources.Item(0).Slices.Item(0);

     debug.WriteLine(Slice.Report.Name);

End Sub Macro;


После выполнения примера в консоль будет выведено наименование регламентного отчета.


См. также:


[PrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
