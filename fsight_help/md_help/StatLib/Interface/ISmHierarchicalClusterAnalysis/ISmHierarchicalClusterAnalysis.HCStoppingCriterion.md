# ISmHierarchicalClusterAnalysis.HCStoppingCriterion

ISmHierarchicalClusterAnalysis.HCStoppingCriterion
-


# ISmHierarchicalClusterAnalysis.HCStoppingCriterion


## Синтаксис


HCStoppingCriterion:
 [HCStoppingCriterionType](../../Enums/HCStoppingCriterionType.htm);


## Описание


Свойство HCStoppingCriterion определяет
 критерий останова.


## Комментарии


Для определения порогового значения расстояний между кластерами используйте
 свойство [ISmHierarchicalClusterAnalysis.ThresholdClusterDistance](ISmHierarchicalClusterAnalysis.ThresholdClusterDistance.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    hc: SmHierarchicalClusterAnalysis;

	    Dist: ISlDistance;

	    Cls: IClustersType;

	    Obj: ISlSeries;

	    ClustCompOrd: IClustersCompositionOrderItem;

	    masDouble, std: Array Of Double;

	    masInteger: Array Of Integer;

	    x1: Array[2] Of Double;

	    res, i, j: Integer;

	    str: String;

	Begin

	    hc := New SmHierarchicalClusterAnalysis.Create;

	    //список показателей

	    Obj := hc.Objects;

	    Obj.Clear;

	    //добавление показателей

	    x1[0] := 27; x1[1] := 19;

	    Obj.Add.Value := x1;

	    x1[0] := Double.Nan; x1[1] := 46;

	    Obj.Add.Value := x1;

	    x1[0] := 25; x1[1] := 15;

	    Obj.Add.Value := x1;

	    x1[0] := 36; x1[1] := 27;

	    Obj.Add.Value := x1;

	    //число кластеров, на которое нужно разбить множество объектов

	    hc.ClusterCount := 2;

	    //способ расчета расстояния между кластерами

	    hc.ClusterLink := ClusterLinkType.Centroid;

	    //параметры расчёта расстояний между объектами

	    Dist := hc.Distance;

	    //способ расчета расстояния между объектами

	    hc.Distance.Type := ObjectDistanceType.EuclideanSqr;

	    //способ стандартизации признаков

	    hc.Distance.Standartization := StandartizationType.ScaleStd; // через стандартное отклонение

	    std := New Double[hc.Objects.Count];

	    For i := 0 To std.Length - 1 Do

	        std[i] := 1 + i / 2;

	    End For;

	    //коэффициенты стандартизации

	    hc.Distance.StandartizationCoefficients := std;

	    //критерий останова

	    hc.HCStoppingCriterion := HCStoppingCriterionType.NumberOfClusters;

	    //ThresholdDistance

	    //пороговое значение расстояний между кластерами

	    hc.ThresholdClusterDistance := 0.00;

	    //создание дендрограммы

	    hc.CreateDendrogram := True;

	    //ориентация дендрограммы

	    hc.DendrogramOrientation := DendrogramOrientationType.East;

	    // Метод обработки пропусков

	    hc.MissingData.Method := MissingDataMethod.Casewise;

	    res := hc.Execute;

	    Debug.WriteLine(hc.Errors);

	    Debug.WriteLine("=== Принадлежность ===");

	    Debug.WriteLine("Объект-Кластер");

	    //принадлежность к кластерам

	    masDouble := hc.Membership.Value;

	    For i := 0 To masDouble.Length - 1 Do

	        Debug.WriteLine(i.ToString + " - " + masDouble[i].ToString);

	    End For;

	    Debug.WriteLine("");

	    Debug.WriteLine("=== Расстояния ===");

	    //последовательность составления кластеров

	    For i := 0 To hc.ClustersCompositionOrder.Count - 1 Do

	        ClustCompOrd := hc.ClustersCompositionOrder.Item(i);

	        Debug.WriteLine(i.ToString + " - " + ClustCompOrd.ClusterDistance.ToString);

	    End For;

	    Debug.WriteLine("");

	    Debug.WriteLine("=== Центры кластеров ===");

	    //последовательность кластеров

	    Cls := hc.Clusters;

	    For i := 0 To Cls.Count - 1 Do //по кластерам

	        Debug.WriteLine("Кластер №" + (i + 1).ToString + " ");

	        masDouble := Cls.Item(i).Center;

	        For j := 0 To masDouble.Length - 1 Do //по всем признакам в кластере

	            Debug.WriteLine(masDouble[j].ToString);

	        End For;

	    End For;

	    Debug.WriteLine("");

	    Debug.WriteLine("=== Списки объектов ===");

	    For i := 0 To hc.Clusters.Count - 1 Do //по кластерам

	        Debug.WriteLine("Кластер №" + i.ToString);

	        masInteger := hc.Clusters.Item(i).ObjectsList;

	        For j := 0 To hc.Clusters.Item(i).Size - 1 Do //по всем объектам в кластере

	            Debug.WriteLine(masInteger[j].ToString);

	        End For;

	    End For;

	    Debug.WriteLine("");

	    Debug.WriteLine("=== дендрограмма ===");

	    //возвращение дендрограммы (массив символов)

	    For j := 0 To hc.Dendrogram.GetUpperBound(1) Do

	         str := "";

	         For i := 0 To hc.Dendrogram.GetUpperBound(2) Do

	             str := str + hc.Dendrogram[j, i];

	         End For;

	         Debug.WriteLine(str);

	     End For;

	End Sub UserProc;


В результате выполнения примера заданы настройки:


	- способ расчета расстояний между кластерами;


	- число кластеров, на которое нужно разбить множество объектов;


	- способ расчета расстояний между объектами;


	- способ стандартизации признаков;


	- критерий останова;


	- пороговое значение расстояний между кластерами;


	- настройки стандартизации коэффициентов;


	- настройки дендрограммы.


В окно консоли выведены списки объектов принадлежность к кластерам,
 последовательность кластеров, последовательность составления кластеров.


См. также:


[ISmHierarchicalClusterAnalysis](ISmHierarchicalClusterAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
