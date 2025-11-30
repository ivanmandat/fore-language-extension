# IPrxDataSources.FindById

IPrxDataSources.FindById
-


# IPrxDataSources.FindById


## Синтаксис


FindById(Id: String): [IPrxDataSource](../IPrxDataSource/IPrxDataSource.htm);


## Параметры


Id. Идентификатор
 искомого источника данных.


## Описание


Метод FindById осуществляет
 поиск источника данных регламентного отчета по идентификатору.


## Комментарии


Поиск осуществляется по [идентификатору](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Id.htm),
 который был задан для объекта репозитория.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», в котором содержатся [источники
 данных](UiReport.chm::/desktop/Source/Window/UiReport_Source_Window_AreaSource.htm#add_data_source1). Один из источников с идентификатором «CUBE».
 В модуле подключите системные сборки: Metabase, Report.


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

    DtSource := Report.DataSources.FindById("CUBE");

    For Each Slice In DtSource.Slices Do

        Debug.WriteLine(Slice.Name)

    End For;

End Sub UserProc;


После выполнения примера в консоль будут выведены наименования срезов,
 содержащихся в кубе с идентификатором «CUBE».


См. также:


[IPrxDataSources](IPrxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
