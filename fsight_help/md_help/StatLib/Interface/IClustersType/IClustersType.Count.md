# IClustersType.Count

IClustersType.Count
-


# IClustersType.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 кластеров.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    hc: SmHierarchicalClusterAnalysis;

    Obj: ISlSeries;

    x1: Array Of Double;

    Dist: ISlDistance;

    res, i, j: Integer;

    D: Double;

    masDouble: Array Of Double;

    Cls: IClustersType;

    Cl: IClusterType;

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

        Debug.WriteLine("=== Центры кластеров ===");

        Cls := hc.Clusters;

        For i := 0 To Cls.Count - 1 Do //по кластерам

            Debug.Write("Кластер №" + i.ToString + " ");

            Cl := Cls.Item(i);

            masDouble := Cl.Center;

            For j := 0 To masDouble.Length-1 Do //по всем признакам в кластере

                d := masDouble[j];

                Debug.Write(d.ToString + ", ");

            End For;

        Debug.WriteLine("");

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены центры кластеров:


Выполнение модуля начато


=== Центры кластеров ===


Кластер №0 1.5, 2, 1.5,


Кластер №1 4, 7.33333333333333, 4.33333333333333,


Выполнение модуля завершено


См. также:


[IClustersType](IClustersType.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
