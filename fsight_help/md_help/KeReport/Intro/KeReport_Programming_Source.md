# Выбор источника данных

Выбор источника данных
-


# Выбор источника данных


Рассмотрим пример выбора источника данных регламентного отчета.


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REPORT_INTRO» и стандартного куба с идентификатором
 «CUBE_SEP».


## Пример


Для выполнения примера добавьте ссылки на системные сборки Metabase,
 Report, Cubes, Matrix.


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

    MObj := MB.ItemById("REPORT_INTRO").Edit;

    // Выбор источника данных отчета:

    Cube := MB.ItemById("CUBE_SEP").Open(Null) As ICubeInstance;

    Report := MObj As IPrxReport;

    MatrDS := Cube.Destinations.DefaultDestination As IMatrixDataSource;

    DtSources := Report.DataSources;

    DtSource := DtSources.Add(MatrDS);

    MObj.Save;

End Sub UserProc;


В результате выполнения примера в качестве источника данных регламентного
 отчета будет добавлен указанный куб.


См. также:


[Общие
 принципы программирования с использованием сборки Report](KeReport_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
