# IClustersCompositionOrderItem.IndexLowerCluster

IClustersCompositionOrderItem.IndexLowerCluster
-


# IClustersCompositionOrderItem.IndexLowerCluster


## Синтаксис


IndexLowerCluster: Integer;


## Описание


Свойство IndexLowerCluster возвращает
 номер кластера, соединённого с [IndexUpperCluster](IClustersCompositionOrderItem.IndexUpperCluster.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    hc: SmHierarchicalClusterAnalysis;

    Obj: ISlSeries;

    x1: Array Of Double;

    Dist: ISlDistance;

    res, i: Integer;

    D: Double;

    ClsOrder: IClustersCompositionOrder;

    ClOrder: IClustersCompositionOrderItem;

Begin

    hc := New SmHierarchicalClusterAnalysis.Create;

    x1 := New Double[3];

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

    hc.ClusterLink := ClusterLinkType.Centroid;

    hc.ClusterCount := 2;

    Dist := hc.Distance;

    Dist.Type := ObjectDistanceType.EuclideanSqr;

    Dist.Standartization := StandartizationType.ScaleStd;

    res := hc.Execute;

    If res <> 0 Then

        Debug.WriteLine(hc.Errors);

    Else

        Debug.WriteLine("Последовательность составления кластеров");

        ClsOrder := hc.ClustersCompositionOrder;

        Debug.WriteLine("Нижний кл. Верхний кл. Расстояние");

        For i := 0 To ClsOrder.Count - 1 Do

            ClOrder := ClsOrder.Item(i);

            d := ClOrder.IndexLowerCluster;

            Debug.Write(d.ToString + ", ");

            d := ClOrder.IndexUpperCluster;

            Debug.Write(d.ToString + ", ");

            d := ClOrder.ClusterDistance;

            Debug.WriteLine(d.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена последовательность
 составления кластеров и расстояния между ними в момент объединения:


Выполнение модуля начато


Последовательность составления кластеров


Нижний кл. Верхний кл. Расстояние


1, 2, 0.876065401536542


3, 5, 2.58561954166393


3, 4, 4.70500361153063


Выполнение модуля завершено


См. также:


[IClustersCompositionOrderItem](IClustersCompositionOrderItem.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
