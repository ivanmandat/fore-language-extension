# IPrxSlice.Execute

IPrxSlice.Execute
-


# IPrxSlice.Execute


## Синтаксис


Execute;


## Описание


Метод Execute вычисляет срез
 даных, результатом вычисления является многомерная матрица, которую можно
 получить используя свойство [Matrix](IPrxSlice.Matrix.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REPORT, на котором расположена [область
 данных](UiReport.chm::/desktop/areadata/uireport_areadata.htm).


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DtSources: IPrxDataSources;

	    Slices: IPrxSlices;

	    Slice: IPrxSlice;

	    Matrix: IMatrixModel;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REPORT").Bind As IPrxReport;

	    DtSources := Report.DataSources;

	    Slices := DtSources.Item(0).Slices;

	    Slice := Slices.Item(0);

	    Slice.Execute;

	    Matrix := Slice.Matrix;

	    Debug.WriteLine(Matrix.DimensionCount);

	End Sub UserProc;


После выполнения примера в переменной Matrix будет содержаться многомерная
 матрица, которая является результатом выполнения первого среза источника
 данных регламентного отчета. В консоль будет выведено количество измерений
 данного среза.


См. также:


[PrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
