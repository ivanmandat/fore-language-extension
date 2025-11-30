# ISmSelfOrganizingMap.FinalWeights

ISmSelfOrganizingMap.FinalWeights
-


# ISmSelfOrganizingMap.FinalWeights


## Синтаксис


FinalWeights: Array;


## Описание


Свойство FinalWeights возвращает
 матрицу финальных весов синапсов.


## Комментарии


Для определения матрицы весов синапсов используйте свойство [ISmSelfOrganizingMap.InitialWeights](ISmSelfOrganizingMap.InitialWeights.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки Stat и
 MathFin.


			Sub UserProc;

Var

    som: ISmSelfOrganizingMap;

    x1, w, min, max: array Of double;

    res, i, j, m, n: integer;

    indx0: double;

Begin

    som := New SmSelfOrganizingMap.Create;

    m := 2; //размерность объектов

    n := 4; //число кластеров

    som.Objects.Clear;

    x1 := New double[m];

    //добавление признаков, в данном случае получилось 19 объектов с 2 признаками

    x1[0] := 27; x1[1] := 19;

    som.Objects.Add.Value := x1;

    x1[0] := Double.Nan; x1[1] := Double.Nan;

    som.Objects.Add.Value := x1;

    x1[0] := 25; x1[1] := 15;

    som.Objects.Add.Value := x1;

    x1[0] := 36; x1[1] := 27;

    som.Objects.Add.Value := x1;

    x1[0] := 35; x1[1] := 25;

    som.Objects.Add.Value := x1;

    x1[0] := 10; x1[1] := 43;

    som.Objects.Add.Value := x1;

    x1[0] := 11; x1[1] := 44;

    som.Objects.Add.Value := x1;

    x1[0] := 36; x1[1] := 24;

    som.Objects.Add.Value := x1;

    x1[0] := 26; x1[1] := 14;

    som.Objects.Add.Value := x1;

    x1[0] := 26; x1[1] := 14;

    som.Objects.Add.Value := x1;

    x1[0] := 9; x1[1] := 45;

    som.Objects.Add.Value := x1;

    x1[0] := 33; x1[1] := 23;

    som.Objects.Add.Value := x1;

    x1[0] := 27; x1[1] := 16;

    som.Objects.Add.Value := x1;

    x1[0] := 10; x1[1] := 47;

    som.Objects.Add.Value := x1;

    som.ClusterCount := 3;

    som.Epoch := 10;

    // размер сети

    som.RowWidth := 2;

    // метод обработки пропусков

    som.MissingData.Method := MissingDataMethod.Casewise;

    min := New Double[m];

    max := New Double[m];

    For j := 0 To m - 1 Do

        min[j] := som.Objects.Item(0).Value[j];

        max[j] := som.Objects.Item(0).Value[j];

    End For;

    For i := 1 To som.Objects.Count - 1 Do

        For j := 0 To m - 1 Do

            If som.Objects.Item(i).Value[j] < min[j] Then min[j] := som.Objects.Item(i).Value[j]; End If;

            If som.Objects.Item(i).Value[j] > max[j] Then max[j] := som.Objects.Item(i).Value[j]; End If;

        End For;

    End For;

    W := New double[som.ClusterCount, m];

    For i := 0 To som.ClusterCount - 1 Do

        For j := 0 To m - 1 Do

            W[i, j] := 1 / math.Sqrt(m);

        End For;

    End For;

    // задание весов

    som.SynapsysWeights := SynapsysWeightsType.Manual;

    som.InitialWeights := w;

    res := som.Execute;

    Debug.WriteLine(som.Errors);

    Debug.WriteLine("Матрица весов синапсов");

    Debug.Indent;

    For i := 0 To som.ClusterCount - 1 Do // по кластерам

        Debug.WriteLine("Узел №" + i.ToString);

        For j := 0 To som.Clusters.Item(i).Center.Length - 1 Do // по всем объектам в кластере

            indx0 := som.InitialWeights[i, j];

            Debug.WriteLine(indx0.ToString + ", ");

        End For;

        Debug.WriteLine("");

    End For;

    Debug.Unindent;

    Debug.WriteLine("Итоговые веса");

    Debug.Indent;

    For i := 0 To som.ClusterCount - 1 Do // по кластерам

        Debug.WriteLine("Узел №" + i.ToString);

        For j := 0 To som.Clusters.Item(i).Center.Length - 1 Do // по всем объектам в кластере

            indx0 := som.FinalWeights[i, j];

            Debug.WriteLine(indx0.ToString + ", ");

        End For;

        Debug.WriteLine("");

    End For;

    Debug.Unindent;

End Sub UserProc;


После выполнения примера в
 окно консоли будут выведены матрица весов синапсов и итоговые веса.


См. также:


[ISmSelfOrganizingMap](ISmSelfOrganizingMap.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
