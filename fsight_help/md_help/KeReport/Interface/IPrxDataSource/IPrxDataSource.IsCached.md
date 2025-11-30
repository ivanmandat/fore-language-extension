# IPrxDataSource.IsCached

IPrxDataSource.IsCached
-


# IPrxDataSource.IsCached


## Синтаксис


IsCached: Boolean;


## Описание


Свойство IsCached возвращает
 признак [кешируемого](UiNav.chm::/03_Objects/UiNav_Obj_BasicPropCache.htm)
 источника данных регламентного отчета.


## Комментарии


Свойство содержит допустимые значения, если источником данных регламентного
 отчета является [куб](UiNavObj.chm::/Cube/CreateCube/UiMd_Cube_CreateCube.htm).


Допустимые значения:


	- True. Источник данных
	 является кешируемым объектом;


	- False. Источник данных
	 не является кешируемым объектом.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REGULAR_REPORT, в котором содержатся [источники
 данных](UiReport.chm::/desktop/Source/Window/UiReport_Source_Window_AreaSource.htm#add_data_source1): куб без кеширования, куб с кешированием.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DtSources: IPrxDataSources;

	    DtSource: IPrxDataSource;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим отчет

	    Report := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

	    // Получим источники данных
	 отчета

	    DtSources := Report.DataSources;

	    // Выведем признак кешируемых источников данных

	    For Each DtSource In DtSources Do

	        Debug.WriteLine(DtSource.IsCached);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будет выведен признак кешируемых
 источников данных: для куба без кеширования - False,
 для куба с кешированием - True.


См. также:


[IPrxDataSource](IPrxDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
