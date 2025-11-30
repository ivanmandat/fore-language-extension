# ISmDecisionTree.Tree

ISmDecisionTree.Tree
-


# ISmDecisionTree.Tree


## Синтаксис


Tree: [ISlTreeNode](../ISlTreeNode/ISlTreeNode.htm);


## Описание


Свойство Tree возвращает
 построенное дерево решений.


## Комментарии


Дерево решений является иерархическим деревом правил, где каждому объекту
 соответствует единственный узел, дающий решение. Под правилом понимается
 логическая конструкция, представленная в виде «если … то …».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserDecisionTree;

Var

    dTree: SmDecisionTree;

    expl, ex1, ex2: Array[12] Of Double;

    res, i, j: Integer;

    TreeNode: ISlTreeNode;

    CatList: Array Of Integer;

    S: String;

    // Процедура вывода дерева решений

    Sub print(nodes: ISlTreeNodes);

    Var

        i: Integer;

        Node: ISlTreeNode;

        s: String;

    Begin

        For i := 0 To nodes.Count - 1 Do

            Debug.Indent;

            Node := nodes.Item(i);

            s := "Значение '" + Node.Value.ToString + "' ";

            s := s + "в ряде '" + Node.ExplanatorieIndex.ToString + "' ";

            s := s + "имеет вес '" + Node.Weight.ToString + "' ";

            s := s + "и поддержку '" + Node.Instances.ToString + "'";

            Debug.WriteLine(s);

            print(nodes.Item(i).Children);

            Debug.Unindent;

        End For;

    End Sub print;

Begin

    dTree := New SmDecisionTree.Create;

    // Задаем исходные данные

    ex1[0] := 0; ex2[0] := 0; expl[0] := 0;

    ex1[1] := 0; ex2[1] := 1; expl[1] := 1;

    ex1[2] := 1; ex2[2] := 0; expl[2] := 2;

    ex1[3] := 1; ex2[3] := 1; expl[3] := 3;

    ex1[4] := 0; ex2[4] := 0; expl[4] := 0;

    ex1[5] := 0; ex2[5] := 1; expl[5] := 1;

    ex1[6] := 1; ex2[6] := 0; expl[6] := 2;

    ex1[7] := 1; ex2[7] := 1; expl[7] := 3;

    ex1[8] := 1; ex2[8] := 1; expl[8] := Integer.MinValue;

    ex1[9] := 1; ex2[9] := 0; expl[9] := Integer.MinValue;

    ex1[10] := 1; ex2[10] := 0; expl[10] := Integer.MinValue;

    ex1[11] := 1; ex2[11] := 1; expl[11] := Integer.MinValue;

    // Задаем объясняемый ряд

    dTree.Dependent.Value := expl;

    // Задаем объясняющие ряды

    dTree.Explanatories.Add.Value := ex1;

    dTree.Explanatories.Add.Value := ex2;

    // Выполняем расчёт и выводим результаты

    res := dTree.Execute;

    If res <> 0 Then

        Debug.WriteLine(dTree.Errors);

    Else

        Debug.WriteLine("Начальные значения; Обработанные значения;");

        For i := 0 To 11 Do

            Debug.Write(dTree.Dependent.Value[i].ToString + " ");

            Debug.WriteLine(dTree.FilledDependent.Value[i]);

        End For;

        // Выводим дерево решений

        TreeNode := dTree.Tree;

        If TreeNode.Parent = Null Then

            Debug.WriteLine("Дерево решений:");

            print(TreeNode.Children);

        End If;

        // Выводим список категорий

        CatList := dTree.CategoriesList;

        If CatList.Length > 0 Then

            Debug.WriteLine("Список категорий:"); Debug.Indent;

            For i := 0 To CatList.Length - 1 Do

                Debug.WriteLine(CatList[i]);

            End For;

            Debug.Unindent;

        End If;

        Debug.WriteLine("Сводные результаты классификации:");

        Debug.Indent;

        s := "";

        For i := 0 To dTree.ClassificationSummary.GetUpperBound(1) Do

            For j := 0 To dTree.ClassificationSummary.GetUpperBound(2) Do

                s := s + dTree.ClassificationSummary[i, j].ToString + " ";

            End For;

            Debug.WriteLine(s);

            s := "";

        End For;

        Debug.Unindent;

        Debug.WriteLine("Результаты классификации обучающего множества:");

        Debug.Indent;

        For i := 0 To dTree.FilledLearningSample.GetUpperBound(1) Do

            Debug.WriteLine(dTree.FilledLearningSample[i]);

        End For;

        Debug.Unindent;

    End If;

End Sub UserDecisionTree;


После выполнения примера в окно консоли будут выведены: результаты обработки
 пропусков, дерево решений и список категорий.


См. также:


[ISmDecisionTree](ISmDecisionTree.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
