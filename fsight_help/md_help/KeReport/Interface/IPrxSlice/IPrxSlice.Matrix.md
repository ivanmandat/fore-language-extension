# IPrxSlice.Matrix

IPrxSlice.Matrix
-


# IPrxSlice.Matrix


## Синтаксис


Matrix: [IMatrixModel](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.htm);


## Описание


Свойство Matrix возвращает объект,
 содержащий многомерную матрицу, полученную путём фиксации одного или нескольких
 измерений куба.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    Slice: IPrxSlice;

    Matrix: IMatrixModel;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Bind;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    Slice := Slices.Item(0);

    Slice.Execute;

    Matrix := Slice.Matrix;

End Sub UserProc;


После выполнения примера в переменной «Matrix» будет содержаться многомерная
 матрица первого среза источника данных регламентного отчета с идентификатором
 Report.


См. также:


[IPrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
