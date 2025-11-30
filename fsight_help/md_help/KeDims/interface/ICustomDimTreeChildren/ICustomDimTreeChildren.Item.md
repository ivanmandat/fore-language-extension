# ICustomDimTreeChildren.Item

ICustomDimTreeChildren.Item
-


# ICustomDimTreeChildren.Item


## Синтаксис


Item(Index: Integer): Variant;


## Параметры


Index.
 Индекс элемента в списке.


## Описание


Свойство Item возвращает первичный
 ключ для элемента с указанными индексом.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IStandardCube;

    CustDim: ICustomDimension;

    CustDimTree: ICustomDimTree;

    TreeChild: ICustomDimTreeChildren;

    i: Integer;

    v: Variant;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

    CustDimTree := CustDim.Tree;

    TreeChild := CustDimTree.RootChildren;

    v := TreeChild.Item(0);

    TreeChild := CustDimTree.Children(v);

    For i := 0 To TreeChild.Count - 1 Do

        Debug.WriteLine(CustDimTree.Name(TreeChild.Item(i)));

    End For;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименования
 всех дочерних элементов первого корневого элемента измерения фактов.


См. также:


[ICustomDimTreeChildren](ICustomDimTreeChildren.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
