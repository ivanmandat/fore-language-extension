# IBinaryTreeNode.Value

IBinaryTreeNode.Value
-


# IBinaryTreeNode.Value


## Синтаксис


Value: Double;


## Описание


Свойство Value возвращает проверяемое
 значение.


## Комментарии


Для получения номера объясняющего ряда, по которому происходит разбиение
 вершины, используйте свойство [IBinaryTreeNode.ExplanatorieIndex](IBinaryTreeNode.ExplanatorieIndex.htm).


Если критерий категориальный, то Value
 возвращает пустое значение.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    rf: SmRandomForest;

    Y: Array[16] Of Integer;

    X1,X2: Array[16] Of Double;

    res, i: Integer;

    Explanatories: ISlSeries;

    Explan: ISlSerie;

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

    rf.Dependent := Y;

    // Задаем объясняющие ряды (целочисленные)

    X1[00] := 34.13; X1[08] := 29.27;

    X1[01] := 21.52; X1[09] := 23.39;

    X1[02] := 25.43; X1[10] := 28.28;

    X1[03] := 43.42; X1[11] := 43.55;

    X1[04] := 40.19; X1[12] := 44.80;

    X1[05] := 24.97; X1[13] := 23.23;

    X1[06] := 20.57; X1[14] := 37.14;

    X1[07] := 30.81; X1[15] := 27.44;

    Explanatories := rf.ExplanatoriesContinuous;

    Explanatories.Clear;

    Explan := Explanatories.Add;

    Explan.Id := "Continuous_X1";

    Explan.Name := "X1";

    Explan.Value := X1;

    X2[00] := 13;    X2[08] := 91.27;

    X2[01] := 1.5;   X2[09] := 43.39;

    X2[02] := 25;    X2[10] := 68.28;

    X2[03] := 4.42;  X2[11] := 0.55;

    X2[04] := 40.9;  X2[12] := 2.80;

    X2[05] := 45.97; X2[13] := 1.23;

    X2[06] := 13.57; X2[14] := 37.14;

    X2[07] := 0.81;  X2[15] := 5.44;

    Explan := Explanatories.Add;

    Explan.Id := "Continuous_X2";

    Explan.Name := "X2";

    Explan.Value := X2;

    // Размер леса

    rf.ForestSize := 5;

    // Размер деревьев

    rf.TreeSizeSpecification.MaximumNumberOfLevels := 2;

    rf.TreeSizeSpecification.MinimumNumberOfCases := 1;

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

Var

    i: integer;

    Categorical: Boolean = False;

Begin

    Debug.WriteLine("  Номер вершины в дереве: " + node.NodeIndex.ToString);

    If node.Parent <> Null Then

        Debug.WriteLine("  Корневая вершина: " + node.Parent.Name);

    End If;

    Debug.WriteLine("  Количество наблюдений в вершине: " + node.Total.ToString);

    Debug.WriteLine("  Наименование классифицирующей переменной: " + node.Name);

    Debug.WriteLine("  Номер объясняющего ряда: " + node.ExplanatorieIndex.ToString);

    Debug.WriteLine("  Коэффициент улучшения: " + node.Improvement.ToString);

    Debug.Write("  Тип классифицирующей переменной: ");

    Select Case node.PropertyType

        Case

            DecisionTreePropertyType.Categorical: Debug.WriteLine("категориальная");

            Categorical := True;

        Case DecisionTreePropertyType.NoProperty: Debug.WriteLine("-");

        Case DecisionTreePropertyType.Ordered: Debug.WriteLine("порядковая");

        Case DecisionTreePropertyType.Value: Debug.WriteLine("количественная");

    End Select;

    If Not Categorical Then

        Debug.WriteLine("  Проверяемое значение: " + node.Value.ToString);

    End If;

        For i := 0 To node.Categories.Length - 1 Do

        Debug.WriteLine("  Категория: " + node.Categories[i].ToString);

    End For;

    Debug.Indent;

    If (node.LeftNode <> Null) Then

        Debug.WriteLine("Левая ветка");

        print(node.LeftNode);

    End If;

    Debug.Unindent;

    Debug.Indent;

    If(node.RightNode <> Null) Then

        Debug.WriteLine("Правая ветка");

        print(node.RightNode);

    End If;

    Debug.Unindent;

End Sub print;


В результате выполнения примера в окно консоли будут выведены:


	- число деревьев в ансамбле;


	- информация о ветках дерева.


См. также:


[IBinaryTreeNode](IBinaryTreeNode.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
