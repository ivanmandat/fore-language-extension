# IPrxSlice.AggregationEnabled

IPrxSlice.AggregationEnabled
-


# IPrxSlice.AggregationEnabled


## Синтаксис


AggregationEnabled: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство AggregationEnabled
 позволяет настроить в срезе агрегацию данных.


## Комментарии


При настроенной агрегации доступна множественная отметка по фиксированным
 измерениям.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Report», также необходимо подключить системные сборки
 Metabase, Report.


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

    If Not Slice.IsAggregationEnabled Then

        Slice.AggregationEnabled:= TriState.OnOption;

    End If;

    MObj.Save;

End Sub Macro;


После выполнения примера для первого среза первого источника данных
 отчета будет включаться агрегация, если она не была включена ранее.


См. также:


[PrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
