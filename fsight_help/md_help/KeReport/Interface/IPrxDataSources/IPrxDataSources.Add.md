# IPrxDataSources.Add

IPrxDataSources.Add
-


# IPrxDataSources.Add


## Синтаксис


Add(Value: [IMatrixDataSource](KeMatrix.chm::/Interface/IMatrixDataSource/IMatrixDataSource.htm)):
 [IPrxDataSource](../IPrxDataSource/IPrxDataSource.htm);


## Параметры


Value. Многомерный источник
 данных.


## Описание


Метод Add добавляет источник
 данных, передаваемый посредством параметра Value.


## Пример


Для выполнения примера предполагается наличие куба с идентификатором
 «CUBE» и регламентного отчета с идентификатором «REGULAR_REPORT». В модуле
 подключите системные сборки: Metabase, Report, Cubes, Matrix.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Cube: ICubeInstance;

    Report: IPrxReport;

    MatrDS: IMatrixDataSource;

    DtSources: IPrxDataSources;

    DtSource: IPrxDataSource;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REGULAR_REPORT").Edit;

    Cube := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

    Report := MObj As IPrxReport;

    MatrDS := Cube.Destinations.DefaultDestination As IMatrixDataSource;

    DtSources := Report.DataSources;

    DtSource := DtSources.Add(MatrDS);

    MObj.Save;

End Sub UserProc;


После выполнения примера, в качестве источника данных регламентного
 отчета, будет добавлен куб с идентификатором «CUBE».


См. также:


[IPrxDataSources](IPrxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
