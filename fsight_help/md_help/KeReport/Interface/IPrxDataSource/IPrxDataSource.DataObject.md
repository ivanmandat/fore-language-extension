# IPrxDataSource.DataObject

IPrxDataSource.DataObject
-


# IPrxDataSource.DataObject


## Синтаксис


DataObject: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm);


## Описание


Свойство DataObject возвращает
 объект репозитория, соответствующий данному источнику данных.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REGULAR_REPORT, в котором содержатся [источники
 данных](UiReport.chm::/desktop/Source/Window/UiReport_Source_Window_AreaSource.htm#add_data_source1).


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    DSs: IPrxDataSources;

	    DS: IPrxDataSource;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

	    DSs := Rep.DataSources;

	    For Each DS In DSs Do

	        Debug.WriteLine(DS.DataObject.Id);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены идентификаторы объектов
 репозитория, содержащихся в источнике данных регламентного отчета.


См. также:


[IPrxDataSource](IPrxDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
