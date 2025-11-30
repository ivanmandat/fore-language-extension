# ISlDistance.ComputeValues

ISlDistance.ComputeValues
-


# ISlDistance.ComputeValues


## Синтаксис


ComputeValues: Boolean;


## Описание


Свойство ComputeValues определяет,
 вычислять ли матрицу расстояний.


## Комментарии


Допустимые значения:


	- True. Матрица расстояний
	 вычисляется. Для получения матрицы расстояний между объектами используйте
	 свойство [ISlDistance.Values](ISlDistance.Values.htm);


	- False. Матрица расстояний
	 не вычисляется.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    hc: SmHierarchicalClusterAnalysis;

    Obj: ISlSeries;

    ClustCompOrd: IClustersCompositionOrderItem;

    x1: Array[3] Of Double;

    Dist: ISlDistance;

    res, i, j: Integer;

    D: Double;

    masDouble, std: Array Of Double;

Begin

    hc := New SmHierarchicalClusterAnalysis.Create;

    //добавление признаков, в данном случае 5 объектов с 3мя признаками

    x1[0] := 1; x1[1] := 1; x1[2] := 1;

    Obj := hc.Objects;

    Obj.Add.Value := x1;

    x1[0] := 2; x1[1] := 3; x1[2] := 2;

    Obj.Add.Value := x1;

    x1[0] := 3; x1[1] := 6; x1[2] := 3;

    Obj.Add.Value := x1;

    x1[0] := 4; x1[1] := 8; x1[2] := 10;

    Obj.Add.Value := x1;

    x1[0] := 5; x1[1] := 8; x1[2] := 0;

    Obj.Add.Value := x1;

    //способ расчета расстояния между кластерами

    hc.ClusterLink := ClusterLinkType.Centroid;

    //число кластеров, на которое нужно разбить множество объектов

    hc.ClusterCount := 2;

    //параметры расчёта расстояний между объектами

    Dist := hc.Distance;

    //способ расчета расстояния между объектами

    Dist.Type := ObjectDistanceType.EuclideanSqr;

    //способ стандартизации признаков

    Dist.Standartization := StandartizationType.ScaleStd;

    std := New Double[hc.Objects.Count];

    For i := 0 To std.Length - 1 Do

        std[i] := 1 + i / 2;

    End For;

    //коэффициенты стандартизации

    Dist.StandartizationCoefficients := std;

    //вычисление матрицы расстояний

    hc.Distance.ComputeValues := True;

    res := hc.Execute;

    Debug.WriteLine(hc.Errors);

    Debug.WriteLine("== Объекты в порядке построения ==");

    masDouble := hc.Iord;

    For i := 0 To Obj.Count - 1 Do

        d := masDouble[i];

        Debug.WriteLine(i.ToString + " - " + d.ToString);

    End For;

    Debug.WriteLine("");

    Debug.WriteLine("=== Объединение в кластеры ===");

    For i := 0 To hc.ClustersCompositionOrder.Count - 1 Do

        ClustCompOrd := hc.ClustersCompositionOrder.Item(i);

        Debug.Write(i.ToString + ":" + ClustCompOrd.IndexUpperCluster.ToString + "+" + ClustCompOrd.IndexLowerCluster.ToString + ",");

        Debug.WriteLine(" d=" + ClustCompOrd.ClusterDistance.ToString);

    End For;

    Debug.WriteLine("");

    Debug.WriteLine("== Расстояния между кластерами в момент объединения ==");

    masDouble := hc.Dord;

    For i := 0 To Obj.Count - 1 Do

        d := masDouble[i];

        Debug.WriteLine(i.ToString + " - " + d.ToString);

    End For;

    Debug.WriteLine("");

    Debug.WriteLine("==Матрица расстояний ==");

    masDouble := Dist.Values;

    For i := 0 To Obj.Count - 1 Do

        Debug.WriteLine("Объект №" + i.ToString + " ");

        For j := 0 To Obj.Count - 1 Do

            d := masDouble[i, j];

            Debug.WriteLine(d.ToString + ", ");

        End For;

    End For;

End Sub UserProc;


В результате выполнения примера заданы настройки:


	- способ расчета расстояний между кластерами;


	- число кластеров, на которое нужно разбить множество объектов;


	- способ расчета расстояний между объектами;


	- способ стандартизации признаков;


	- настройки стандартизации коэффициентов.


В окно консоли выведены объекты в порядке построения, объединение в
 кластеры, расстояния между кластерами в момент объединения и матрица расстояний.


См. также:


[ISlDistance](ISlDistance.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
