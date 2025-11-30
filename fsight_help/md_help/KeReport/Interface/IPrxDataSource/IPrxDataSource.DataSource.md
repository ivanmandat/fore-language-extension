# IPrxDataSource.DataSource

IPrxDataSource.DataSource
-


# IPrxDataSource.DataSource


## Синтаксис


DataSource: [IMatrixDataSource](KeMatrix.chm::/Interface/IMatrixDataSource/IMatrixDataSource.htm);


## Описание


Свойство DataSource определяет
 многомерную матрицу источника данных.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REGULAR_REPORT, в котором содержатся [источники
 данных](UiReport.chm::/desktop/Source/Window/UiReport_Source_Window_AreaSource.htm#add_data_source1). В отчете добавьте таблицу, построенную на основе
 первого источника данных.


Добавьте ссылки на системные сборки: Dimensions, Matrix, Metabase,
 Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    DtSources: IPrxDataSources;

	    DtSource: IPrxDataSource;

	    DimSS: IDimSelectionSet;

	    Matr: IMatrix;

	    MatrDS: IMatrixDataSource;

	    Coord: IMatrixCoord;

	    i: Integer;

	Begin

	    //Откроем отчет на редактирование

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("REGULAR_REPORT").Edit;

	    Report := MObj As IPrxReport;

	    //Получим первый источник данных отчета

	    DtSources := Report.DataSources;

	    DtSource := DtSources.Item(0);

	    //Определим многомерную матрицу источника

	    MatrDS := DtSource.DataSource;

	    //Заменим значение элемента матрицы, если источник данных можно редактировать

	    If MatrDS.ReadOnly = False Then

	        DimSS := MatrDS.CreateDimSelectionSet;

	        Matr := MatrDS.Execute(DimSS);

	        Coord := Matr.CreateCoord;

	        For i := 0 To Matr.DimensionCount - 1 Do

	            Coord.Item(i) := 0;

	        End For;

	        Matr.Item(Coord) := 10;

	        //Сохраним матрицу с данными в источнике

	        MatrDS.SaveData(Matr);

	        //Сохраним регламентный отчет

	        MObj.Save;

	    End If;

	End Sub UserProc;


После выполнения примера в регламентном отчете будет содержаться заданное
 значение в таблице первого источника данных.


См. также:


[IPrxDataSource](IPrxDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
