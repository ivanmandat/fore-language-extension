# ISmKmeansClusterAnalysis.Distances

ISmKmeansClusterAnalysis.Distances
-


# ISmKmeansClusterAnalysis.Distances


## Синтаксис


Distances: Array;


## Описание


Свойство Distances возвращает
 расстояния объектов до центров кластеров, к которым они принадлежат.


## Комментарии


Для определения варианта выбора начальных центров кластеров используйте
 свойство [ISmKmeansClusterAnalysis.InitCenters](ISmKmeansClusterAnalysis.InitCenters.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    KCA: SmKmeansClusterAnalysis;

    Obj: ISlSeries;

    Cls: IClustersType;

    x1: Array[2] Of Double;

    masDouble: Array Of Double;

    masInteger: Array Of Integer;

    res, i, j: Integer;

    str: string;

Begin

    KCA := New SmKmeansClusterAnalysis.Create;

    // Задаем рассматриваемые объекты

    Obj := KCA.Objects;

    x1[0]:= 27; x1[1]:= 19;

    Obj.Add.Value := x1;

    x1[0]:= 11; x1[1]:= 46;

    Obj.Add.Value := x1;

    x1[0]:= 25; x1[1]:= 15;

    Obj.Add.Value := x1;

    x1[0]:= 36; x1[1]:= 27;

    Obj.Add.Value := x1;

    x1[0]:= 35; x1[1]:= 25;

    Obj.Add.Value := x1;

    x1[0]:= 10; x1[1]:= 43;

    Obj.Add.Value := x1;

    x1[0]:= 11; x1[1]:= 44;

    Obj.Add.Value := x1;

    x1[0]:= 36; x1[1]:= 24;

    Obj.Add.Value := x1;

    x1[0]:= 26; x1[1]:= 14;

    Obj.Add.Value := x1;

    x1[0]:= 26; x1[1]:= 14;

    Obj.Add.Value := x1;

    x1[0]:= 9; x1[1]:= 45;

    Obj.Add.Value := x1;

    x1[0]:= 33; x1[1]:= 23;

    Obj.Add.Value := x1;

    x1[0]:= 27; x1[1]:= 16;

    Obj.Add.Value := x1;

    x1[0]:= 10; x1[1]:= 47;

    Obj.Add.Value := x1;

    // Задаем количество кластеров

    KCA.ClusterCount := 3;

    // Задаем максимальное число итераций

    KCA.MaxIt := 100;

    // Задаем вариант выбора начальных центров кластеров

    KCA.InitCenters := ClusterCentersType.FirstObject;

    // Не исключаем повторяющиеся элементы перед проведением кластеризации

    KCA.ExcludeRepeated := False;

    res := KCA.Execute;

    If res <> 0 Then

        Debug.WriteLine(KCA.Errors);

    Else

        Cls := KCA.Clusters;

        Debug.WriteLine("=== Центры кластеров ===");

        For i := 0 To KCA.Clusters.Count-1 Do //по кластерам

            Debug.WriteLine("  " + "Кластер №" + (i+1).ToString + " ");

            masDouble := Cls.Item(i).Center;

            str := "  " + "(" + masDouble[0].ToString;

            For j := 1 To masDouble.Length-1 Do //по размерности элементов

                str := str + ";" + masDouble[j].ToString;

            End For;

            str := str + ")";

            Debug.WriteLine(str);

        End For;

        Debug.WriteLine("=== Список объектов по кластерам ===");

        For i := 0 To KCA.ClusterCount - 1 Do //по кластерам

            Debug.WriteLine("  " + "Кластер №" + (i+1).ToString + " ");

            masInteger := Cls.Item(i).ObjectsList;

            str := "  " + masInteger[0].ToString;

            For j := 1 To Cls.Item(i).Size - 1 Do //по всем объектам в кластере

                str := str + ",  " + masInteger[j].ToString;

            End For;

            Debug.WriteLine(str);

        End For;

        Debug.WriteLine("=== Расстояния объектов до центров кластеров ===");

        Debug.WriteLine("Объект - Расстояние");

        For i := 0 To KCA.Distances.Length-1 Do

            Debug.WriteLine("  " + i.ToString + " - " + KCA.Distances[i].ToString)

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены:


	- центры кластеров;


	- список объектов по кластерам;


	- расстояния объектов до центров кластеров.


См. также:


[ISmKmeansClusterAnalysis](ISmKmeansClusterAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
