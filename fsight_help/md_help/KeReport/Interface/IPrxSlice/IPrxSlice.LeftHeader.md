# IPrxSlice.LeftHeader

IPrxSlice.LeftHeader
-


# IPrxSlice.LeftHeader


## Синтаксис


LeftHeader: [IPrxSliceHeader](../IPrxSliceHeader/IPrxSliceHeader.htm);


## Описание


Свойство LeftHeader возвращает
 объект, содержащий все измерения среза, расположенные по строкам.


## Комментарии


Для получения объектов, содержащих все фиксированные измерения среза
 и все измерения среза, расположенные по столбцам, используйте свойства
 [IPrxSlice.FixedHeader](IPrxSlice.FixedHeader.htm) и [IPrxSlice.TopHeader](IPrxSlice.TopHeader.htm)
 соответственно.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REPORT».


Добавьте ссылки на системные сборки Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    DtSource: IPrxDataSource;

    Slices: IPrxSlices;

    Slice: IPrxSlice;

    LeftSlice: IPrxSliceHeader;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    DtSources := Report.DataSources;

    DtSource := DtSources.Item(0);

    Slices := DtSources.Item(0).Slices;

    Slice := Slices.Item(0);

    Slice.Execute;

    LeftSlice := Slice.LeftHeader;

    Debug.WriteLine("Наименования измерений первого среза, расположенного по строкам:");

    For i := 0 To LeftSlice.Count-1 Do

        Debug.WriteLine((i+1).ToString + ". " + LeftSlice.Item(i).Name);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены наименования
 измерений первого среза, расположенных по строкам.


См. также:


[PrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
