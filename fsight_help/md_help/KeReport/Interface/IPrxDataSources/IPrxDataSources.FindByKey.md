# IPrxDataSources.FindByKey

IPrxDataSources.FindByKey
-


# IPrxDataSources.FindByKey


## Синтаксис


FindByKey(Key: Integer): [IPrxDataSource](../IPrxDataSource/IPrxDataSource.htm);


## Параметры


Key. Ключ источника данных,
 по которому происходит поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий источник данных.


## Комментарии


Внутри коллекции [IPrxDataSources](IPrxDataSources.htm) используется
 диапазон ключей, где каждому источнику данных присваивается ключ, начиная
 с единицы.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», в котором содержатся [источники
 данных](UiReport.chm::/desktop/Source/Window/UiReport_Source_Window_AreaSource.htm#add_data_source1). Один из источников с ключом «1». В модуле подключите
 системные сборки: Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    DtSource: IPrxDataSource;

    Slice: IPrxSlice;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REGULAR_REPORT").Bind;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    DtSource := Report.DataSources.FindByKey(1);

    For Each Slice In DtSource.Slices Do

        Debug.WriteLine(Slice.Name)

    End For;

End Sub UserProc;


После выполнения примера в консоль будут выведены наименования срезов,
 содержащихся в кубе с ключом «1».


См. также:


[IPrxDataSources](IPrxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
