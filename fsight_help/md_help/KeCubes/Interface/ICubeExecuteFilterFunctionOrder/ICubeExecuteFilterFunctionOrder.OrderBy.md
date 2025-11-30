# ICubeExecuteFilterFunctionOrder.OrderBy

ICubeExecuteFilterFunctionOrder.OrderBy
-


# ICubeExecuteFilterFunctionOrder.OrderBy


## Синтаксис


OrderBy: String;


## Описание


Свойство OrderBy определяет
 выражение, которое обычно представляет MDX-выражение, возвращающее сортируемое
 измерение.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest», в этом каталоге имеется куб ADOMD
 - «SALES». В структуре куба должны присутствовать измерения на базе справочников
 ADOMD с идентификаторами «DATE» и «COUNTRY», в измерении фактов имеется
 показатель «[Measures].[Reseller Order Count]».


			Sub UserProc;

Var

    Mb: IMetabase;

    CubeInst: ICubeInstance;

    DestInst: ICubeInstanceDestination;

    Sels: IDimSelectionSet;

    CubeExecSet: ICubeExecuteSetup;

    FilterSetup: ICubeExecuteFilterSetup;

    DimSetup: ICubeExecuteDimSetup;

    FilterItem: ICubeExecuteFilterItem;

    FilterFunction: ICubeExecuteFilterFunction;

    Exec: ICubeInstanceDestinationExecutor;

    Matr: IMatrix;

Begin

    Mb := MetabaseClass.Active;

    CubeInst := MB.ItemByIdNamespace("SALES", MB.GetObjectKeyById("ADOMDTest")).Open(Null) As ICubeInstance;

    DestInst := CubeInst.Destinations.DefaultDestination;

    Sels := DestInst.CreateDimSelectionSet;

    CubeExecSet := Sels As ICubeExecuteSetup;

    //Получение объекта для настройки фильтрации по измерениям

    FilterSetup := CubeExecSet.Filter;

    //Распределение измерений по группам, задание отметки и установка фильтра измерения

    For Each DimSetup In CubeExecSet Do

        If DimSetup.Id = "DATE" Then

            DimSetup.Selection.SelectAll;

            DimSetup.GroupIndex := 2; //По строкам

            FilterFunction := (FilterSetup As ICubeExecuteFilterFunctionFactory).CreatePredefined(CubeExecuteFilterFunctionPredefined.Order);

            (FilterFunction As ICubeExecuteFilterFunctionOrder).OrderBy := "[Measures].[Reseller Order Count]";

            (FilterFunction As ICubeExecuteFilterFunctionOrder).OrderType := "ASC";

            FilterItem := FilterSetup.Add;

            FilterItem.Function_ := FilterFunction;

            FilterItem.Dimension := DimSetup;

        Elseif DimSetup.Id = "COUNTRY" Then

            DimSetup.Selection.SelectElement(1, False);

            DimSetup.GroupIndex := 1; //По столбцам

        Else

            DimSetup.Selection.SelectElement(0, False);

            DimSetup.GroupIndex := 0; //Остальные измерения в фиксированные

        End If;

    End For;

    //Подготовка к расчету

    Exec := DestInst.CreateExecutor;

    Exec.PrepareExecute(Sels);

    //Расчет

    Exec.PerformExecute;

    //Получение матрицы с результатами расчета

    Matr := Exec.Matrix;

End Sub UserProc;


При выполнении примера будет осуществлена подготовка и расчет указанного
 куба ADOMD. При расчете результирующий набор данных будет отсортирован
 по возрастанию значений.


См. также:


[ICubeExecuteFilterFunctionOrder](ICubeExecuteFilterFunctionOrder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
