# ICustomDimTree.Children

ICustomDimTree.Children
-


# ICustomDimTree.Children


## Синтаксис


Children(PrimaryKey: Variant): [ICustomDimTreeChildren](../ICustomDimTreeChildren/ICustomDimTreeChildren.htm);


## Параметры


PrimaryKey. Первичный
 ключ элемента, дочерние элементы которого необходимо получить.


## Описание


Свойство Children возвращает
 для указанного элемента список дочерних элементов.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором "CUBE_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    CustDimTree: ICustomDimTree;

	    TreeChild: ICustomDimTreeChildren;

	    i: Integer;

	    v: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustDimTree := CustDim.Tree;

	    TreeChild := CustDimTree.RootChildren;

	    v := TreeChild.Item(0);

	    TreeChild := CustDimTree.Children(v);

	    For i := 0 To TreeChild.Count - 1 Do

	        Debug.WriteLine(CustDimTree.Name(TreeChild.Item(i)));

	    End For;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименования
 всех дочерних элементов первого корневого элемента измерения фактов.


См. также:


[ICustomDimTree](ICustomDimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
