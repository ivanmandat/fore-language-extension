# ISmRandomForest.Forest

ISmRandomForest.Forest
-


# ISmRandomForest.Forest


## Синтаксис


Forest: [IBinaryTreeForest](../IBinaryTreeForest/IBinaryTreeForest.htm);


## Описание


Свойство Forest возвращает массив
 деревьев.


## Комментарии


Для определения числа деревьев в случайном лесе используйте свойство
 [ISmRandomForest.ForestSize](ISmRandomForest.ForestSize.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    rf: SmRandomForest;

    Y, OrdX: Array[16] Of Integer;

    X: Array[16] Of Double;

    res, i: Integer;

    Explanatories: ISlSeries;

    Explan: ISlSerie;

    ExplOrdered: ISlSeriesInt;

    ExpOrd: ISlSerieInt;

    Forest: IBinaryTreeForest;

    TreeNode: IBinaryTreeNode;

Begin

    rf := New SmRandomForest.Create;

    // Задаем объясняемый ряд

    Y[00] := 0; Y[08] := 1;

    Y[01] := 1; Y[09] := 0;

    Y[02] := 0; Y[10] := 2;

    Y[03] := 2; Y[11] := 2;

    Y[04] := 1; Y[12] := 1;

    Y[05] := 1; Y[13] := 2;

    Y[06] := 2; Y[14] := 0;

    Y[07] := 1; Y[15] := 2;

    rf.Dependent.Value := Y;

    // Задаем объясняющие ряды (порядковые)

    OrdX[00] := 0; OrdX[08] := 0;

    OrdX[01] := 0; OrdX[09] := 1;

    OrdX[02] := 0; OrdX[10] := 1;

    OrdX[03] := 0; OrdX[11] := 1;

    OrdX[04] := 0; OrdX[12] := 1;

    OrdX[05] := 0; OrdX[13] := 1;

    OrdX[06] := 0; OrdX[14] := 1;

    OrdX[07] := 0; OrdX[15] := 1;

    ExplOrdered := rf.ExplanatoriesOrdered;

    ExplOrdered.Clear;

    ExpOrd:= ExplOrdered.Add;

    ExpOrd.Value := OrdX;

    // Задаем объясняющие ряды (количественные)

    X[00] := 34.13; X[08] := 29.27;

    X[01] := 21.52; X[09] := 23.39;

    X[02] := 25.43; X[10] := 28.28;

    X[03] := 43.42; X[11] := 43.55;

    X[04] := 40.19; X[12] := 44.80;

    X[05] := 24.97; X[13] := 23.23;

    X[06] := 20.57; X[14] := 37.14;

    X[07] := 30.81; X[15] := 27.44;

    Explanatories := rf.ExplanatoriesContinuous;

    Explanatories.Clear;

    Explan := Explanatories.Add;

    Explan.Value := X;

    // Количество признаков

    rf.NumberOfPredictors := 2;

    // Размер деревьев

    rf.TreeSizeSpecification.MaximumNumberOfLevels := 10;

    rf.TreeSizeSpecification.MinimumNumberOfCases := 2;

    // Производим расчет и выводим сообщения об ошибках

    res:=rf.Execute;

    If (res = 0) Then

        Forest := rf.Forest;

        Debug.WriteLine("Число деревьев в ансамбле: "+Forest.Count.ToString);

        For i := 0 To Forest.Count - 1 Do

            TreeNode := Forest.Item(i);

            Debug.WriteLine("Дерево "+(i+1).ToString);

            Debug.WriteLine(" Корневая вершина");

            print(TreeNode);

        End For;

        Else

            Debug.WriteLine(rf.Errors);

    End If;

End Sub UserProc;

…

Sub print(node: IBinaryTreeNode);

Begin

    Debug.WriteLine("  Номер вершины в дереве: " + node.NodeIndex.ToString);

    Debug.WriteLine("  Коэффициент улучшения: " + node.Improvement.ToString);

    If(node.LeftNode <> Null) Then

        Debug.WriteLine(" Левая ветка");

        print(node.LeftNode);

    End If;

    If(node.RightNode <> Null) Then

        Debug.WriteLine(" Правая ветка");

        print(node.RightNode);

    End If;

End Sub print;


В результате выполнения примера в окно консоли будут выведены:


	- число деревьев в ансамбле;


	- информация о деревьях в ансамбле:


		- корневая вершина дерева;


		- левая ветка дерева;


		- правая ветка дерева.


См. также:


[ISmRandomForest](ISmRandomForest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
