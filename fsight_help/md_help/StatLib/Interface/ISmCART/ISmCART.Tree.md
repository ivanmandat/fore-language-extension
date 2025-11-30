# ISmCART.Tree

ISmCART.Tree
-


# ISmCART.Tree


## Синтаксис


Tree: [IBinaryTreeNode](../IBinaryTreeNode/IBinaryTreeNode.htm);


## Описание


Свойство Tree возвращает
 построенное дерево решений.


## Комментарии


Дерево решений является иерархическим деревом правил, где каждому объекту
 соответствует единственный узел, дающий решение. Под правилом понимается
 логическая конструкция, представленная в виде «если … то …».


## Пример


Для выполнения примера добавьте ссылки на системную сборку Stat.


	Public Sub UserProc;

	Var

	    CART: SmCART;

	    y: Array[16] Of Integer;

	    x1: Array[16] Of Integer;

	    x2: Array[16] Of Integer;

	    x3dbl: array[16] Of double;

	    x4cat: array[16] Of integer;

	    TreeSizeSpecification: ITreeSpecification;

	    res: integer;

	    i: integer;

	    str: string;

	    d: double;

	    CatList: Array Of Integer;

	Begin

	    // Создаем объект для расчета дерева классификации

	    CART := New SmCART.Create;

	    // Задаем значения объясняемого ряда

	    y[0] := 1000; y[4] := 201; y[8] := -1; y[12] := 5002;

	    y[1] := 1000; y[5] := 201; y[9] := 5002; y[13] := 5002;

	    y[2] := 1000; y[6] := 201; y[10] := 5002; y[14] := -1;

	    y[3] := 1000; y[7] := 201; y[11] := 5002; y[15] := 5002;

	    // Задаем значение объясняющего порядкового ряда x1

	    x1[0] := 0; x1[4] := 0; x1[8] := 0; x1[12] := 1;

	    x1[1] := 0; x1[5] := 0; x1[9] := 1; x1[13] := 1;

	    x1[2] := 0; x1[6] := 0; x1[10] := 1; x1[14] := 1;

	    x1[3] := 0; x1[7] := 0; x1[11] := 1; x1[15] := 1;

	    // Задаем значение объясняющего порядкового ряда x2

	    x2[0] := 10; x2[4] := 10; x2[8] := 20; x2[12] := 20;

	    x2[1] := 10; x2[5] := 20; x2[9] := 10; x2[13] := 20;

	    x2[2] := 10; x2[6] := 20; x2[10] := 10; x2[14] := 20;

	    x2[3] := 10; x2[7] := 20; x2[11] := 20; x2[15] := 20;

	    // Задаем значения объясняющего количественного ряда

	    x3dbl[0] := 1; x3dbl[4] := 4; x3dbl[8] := 9; x3dbl[12] := 11;

	    x3dbl[1] := 2; x3dbl[5] := 6; x3dbl[9] := 9; x3dbl[13] := 12;

	    x3dbl[2] := 3; x3dbl[6] := 7; x3dbl[10] := 10; x3dbl[14] := 13;

	    x3dbl[3] := 5; x3dbl[7] := 8; x3dbl[11] := 10; x3dbl[15] := 14;

	    // Задаем значения объясняющего категориального ряда

	    x4cat[0] := 1; x4cat[4] := 1; x4cat[8] := 2; x4cat[12] := 3;

	    x4cat[1] := 1; x4cat[5] := 1; x4cat[9] := 2; x4cat[13] := 3;

	    x4cat[2] := 1; x4cat[6] := 1; x4cat[10] := 2; x4cat[14] := 3;

	    x4cat[3] := 1; x4cat[7] := 2; x4cat[11] := 2; x4cat[15] := 3;


    // Задаем параметры, описывающее дерево

    TreeSizeSpecification := CART.TreeSizeSpecification;

    TreeSizeSpecification.MaximumNumberOfLevels := 10;

    TreeSizeSpecification.MinimumNumberOfCases := 2;

    // Задаем объясняемый ряд

    CART.Dependent.Value := y;

    // Задаем объясняющие порядковые ряды

    CART.ExplanatoriesOrdered.Add.Value := x1;

    CART.ExplanatoriesOrdered.Add.Value := x2;

    // Задаем объясняющий количественный ряд

    cart.ExplanatoriesContinuous.Add.Value := x3dbl;

    // Задаем объясняющей категориальный ряд

    CART.ExplanatoriesCategorical.Add.Value := x4cat;

    // Выполняем расчет

    res := CART.Execute;

    If res <> 0 Then

        Debug.WriteLine("Произошла ошибка");

        Debug.WriteLine(CART.Errors);

    // Если расчёт выполнен без ошибок, то выводим результаты

    Else

        Debug.WriteLine("Начальные значения - обработанные значения:");

        Debug.Indent;

        For i := 0 To CART.Dependent.Value.Length - 1 Do

            str := i.ToString +  ":   ";

            d := CART.Dependent.Value[i];

            str := str + d.ToString + "   -   ";

            d := CART.FilledDependent[i];

            str := str + d.ToString + "    ";

            Debug.WriteLine(str);

        End For;

        Debug.Unindent;

        // Выводим список категорий

        CatList := CART.CategoriesList;

        If CatList.Length > 0 Then

            Debug.WriteLine("Список категорий:");

            Debug.Indent;

            For i := 0 To CatList.Length - 1 Do

                Debug.WriteLine(CatList[i]);

            End For;

            Debug.Unindent;

        End If;

        // Выводим дерево решений

        Debug.WriteLine("Дерево решений:");

        print(CART.Tree);

    End If;

End Sub UserProc;


// Процедура вывода дерева решений

Sub print(node: IBinaryTreeNode);

Var

    i: Integer;

    Categorical: Boolean = False;

Begin

    Debug.Indent;

    Debug.WriteLine("Вершина номер: " + node.NodeIndex.ToString);

    Debug.WriteLine("Улучшение: " + node.Improvement.ToString);

    Debug.WriteLine("Число кейсов в вершине: " + node.Total.ToString);

    Debug.WriteLine("Индекс критерия: " + node.ExplanatorieIndex.ToString);

    Debug.WriteLine("Имя критерия: " + node.Name);

    Debug.Write("Тип критерия: ");

    Select Case node.PropertyType

        Case

            DecisionTreePropertyType.Categorical: Debug.WriteLine("категориальный");

            Categorical := True;

        Case DecisionTreePropertyType.NoProperty: Debug.WriteLine("-");

        Case DecisionTreePropertyType.Ordered: Debug.WriteLine("порядковый");

        Case DecisionTreePropertyType.Value: Debug.WriteLine("количественный");

    End Select;

    If Not Categorical Then

        Debug.WriteLine("Значение критерия: " + node.Value.ToString);

    End If;

    If (node.LeftNode <> Null) Then

        Debug.WriteLine("Левая ветка:  ");

        print(node.LeftNode);

    End If;


    If (node.LeftNodeCategories.Length <> 0) And Categorical Then

        Debug.WriteLine("Список категорий, которые отсеиваются в левую ветку: ");

        For i := 0 To node.LeftNodeCategories.Length - 1 Do

            Debug.WriteLine(node.LeftNodeCategories[i]);

        End For;

    End If;

    If (node.RightNode <> Null) Then

        Debug.WriteLine("Правая ветка: ");

        print(node.RightNode);

    End If;

    If (node.RightNodeCategories.Length <> 0) And Categorical Then

        Debug.WriteLine("Список категорий, которые отсеиваются в правую ветку: ");

        For i := 0 To node.RightNodeCategories.Length - 1 Do

            Debug.WriteLine(node.RightNodeCategories[i]);

        End For;

    End If;

    Debug.Unindent;

End Sub print;


В результате выполнения примера задача будет рассчитана с помощью дерева
 классификации. Результаты расчета выведены в окно консоли.


См. также:


[ISmCART](ISmCART.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
