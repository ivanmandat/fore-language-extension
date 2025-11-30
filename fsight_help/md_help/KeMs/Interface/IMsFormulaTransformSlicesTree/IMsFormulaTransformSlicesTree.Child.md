# IMsFormulaTransformSlicesTree.Child

IMsFormulaTransformSlicesTree.Child
-


# IMsFormulaTransformSlicesTree.Child


## Синтаксис


Child(Element: Integer; ChildIndex: Integer): Integer;


## Параметры


Element. Индекс родительского
 элемента. 0 - если, элемент является корневым;


ChildIndex. Индекс дочернего
 элемента относительно родительского.


## Описание


Свойство Child возвращает номер
 дочернего элемента относительно всего дерева.


## Пример


Для выполнения примера предполагается наличие в контейнере моделирования
 модели. В модели содержаться входные переменные с дополнительными измерениями.


			Sub UserProc;

Var

    MB: IMetabase;

    Model: IMsModel;

    TransVar: IMsFormulaTransformVariable;

    SliceTree: IMsFormulaTransformSlicesTree;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Model := MB.ItemByIdNamespace("NEW_NONLINREG", MB.ItemById("KONT_MODEL").Key).Bind As IMsModel;

    TransVar := Model.Transform.Inputs.Item(0);

    SliceTree := TransVar.SlicesTree(TransVar);

    For i := 0 To SliceTree.ChildrenCount(0) - 1 Do

        Debug.WriteLine(SliceTree.Name(SliceTree.Child(0, i)));

        If SliceTree.ChildrenCount(SliceTree.Child(0, i)) <> 0 Then

            DebugChildren(SliceTree.Child(0, i), SliceTree, "  ");

        End If;

    End For;

End Sub UserProc;


Sub DebugChildren(Element: Integer; SliceTree: IMsFormulaTransformSlicesTree; s: String);

Var

    j: Integer;

Begin

    For j := 0 To SliceTree.ChildrenCount(Element) - 1 Do

        Debug.WriteLine(s + SliceTree.Name(SliceTree.Child(Element, j)));

        If SliceTree.ChildrenCount(SliceTree.Child(Element, j)) <> 0 Then

            DebugChildren(SliceTree.Child(Element, j), SliceTree, "     ");

        End If;

    End For;

End Sub DebugChildren;


После выполнения примера осуществляется рекурсивный просмотр дерева
 срезов первой входной переменной модели. В консоль будут выведены наименования
 всех элементов дерева.


См. также:


[IMsFormulaTransformSlicesTree](IMsFormulaTransformSlicesTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
