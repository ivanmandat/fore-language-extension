# ISmKmeansClusterAnalysis.FuzzyMembership

ISmKmeansClusterAnalysis.FuzzyMembership
-


# ISmKmeansClusterAnalysis.FuzzyMembership


## Синтаксис


FuzzyMembership: Array;


## Описание


Свойство FuzzyMembership определяет
 вероятностную матрицу принадлежностей объектов к каждому кластеру.


## Комментарии


Для получения результирующей принадлежности объектов кластерам используйте
 свойство [ISmKmeansClusterAnalysis.Membership](ISmKmeansClusterAnalysis.Membership.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    KCA: SmKmeansClusterAnalysis;

    Obj: ISlSeries;

    x1: Array[5] Of Double;

    masDouble: Array Of Double;

    res, i, j: Integer;

    str: String;

Begin

    KCA := New SmKmeansClusterAnalysis.Create;

    // Задаем рассматриваемые объекты

    Obj := KCA.Objects;

    x1[0]:= 2;  x1[1]:= 2;  x1[2]:= 2;  x1[3]:= 2;  x1[4]:= 1;

    KCA.Objects.Add.Value:=x1;

    x1[0]:= 2;  x1[1]:= 4;  x1[2]:= 1;  x1[3]:= 4;  x1[4]:= 3;

    KCA.Objects.Add.Value:=x1;

    x1[0]:= 2;  x1[1]:= 2;  x1[2]:= 2;  x1[3]:= 5;  x1[4]:= 2;

    KCA.Objects.Add.Value:=x1;

    x1[0]:= 3;  x1[1]:= 1;  x1[2]:= 0;  x1[3]:= 2;  x1[4]:= 3;

    KCA.Objects.Add.Value:=x1;

    x1[0]:= 1;  x1[1]:= 4;  x1[2]:= 0;  x1[3]:= 3;  x1[4]:= 4;

    KCA.Objects.Add.Value:=x1;

    x1[0]:= 3;  x1[1]:= 7;  x1[2]:= 5;  x1[3]:= 6;  x1[4]:= 5;

    KCA.Objects.Add.Value:=x1;

    x1[0]:= 1;  x1[1]:= 4;  x1[2]:= 0;  x1[3]:= 5;  x1[4]:= 2;

    KCA.Objects.Add.Value:=x1;

    x1[0]:= 3;  x1[1]:= 2;  x1[2]:= 2;  x1[3]:= 3;  x1[4]:= 2;

    KCA.Objects.Add.Value:=x1;

    // Задаем тип алгоритма

    KCA.Modification := KMeansModification.KModes;

    // Способ расчета расстояния между точками

    KCA.KModesDistance := KModesDistanceType.Hamming;

    // Задаем метод выбора оптимального числа нечётких классов

    KCA.ClusterCountSelection := ClusterCountSelectionType.VarDisAutoSelection;

    // Задаем минимальное и максимальное число кластеров

    KCA.ClusterCountMin := 2;

    KCA.ClusterCountMax := 4;

    // Включаем нечёткую кластеризацию

    KCA.IsFuzzy := True;

    // Выполняем расчёт и выводим результаты

    res := KCA.Execute;

    If res <> 0 Then

        Debug.WriteLine(KCA.Errors);

    Else

        Debug.WriteLine("=== Принадлежность объектов кластерам ===");

        Debug.WriteLine("Объект - Кластер");

        masDouble := KCA.Membership.Value;

        For i := 0 To masDouble.Length - 1 Do

            Debug.WriteLine("  " + i.ToString + " - " + masDouble[i].ToString)

        End For;

        Debug.WriteLine("=== Вероятностная принадлежность объектов кластерам ===");

        For i := 0 To KCA.FuzzyMembership.GetUpperBound(1) Do

            str := "";

            For j := 0 To KCA.FuzzyMembership.GetUpperBound(2) Do

                str := str + "  " + (KCA.FuzzyMembership[i, j] As Double).ToString;

            End For;

            Debug.WriteLine(str);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены:


	- принадлежность объектов кластерам;


	- вероятностная принадлежность объектов кластерам.


См. также:


[ISmKmeansClusterAnalysis](ISmKmeansClusterAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
