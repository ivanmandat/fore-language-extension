# ICustomDimTree.MoveAfter

ICustomDimTree.MoveAfter
-


# ICustomDimTree.MoveAfter


## Синтаксис


MoveAfter(PrimaryKey: Variant; Element: Variant);


## Параметры


PrimaryKey. Первичный ключ
 перемещаемого элемента.


Element. Первичный ключ элемента,
 после которого необходимо поместить перемещаемый элемент.


## Описание


Метод MoveAfter помещает элемент
 с первичным ключом PrimaryKey
 после элемента с ключом Element.


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

	    v, v1: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustDimTree := CustDim.Tree;

	    TreeChild := CustDimTree.RootChildren;

	    v := TreeChild.Item(0);

	    v1 := TreeChild.Item(TreeChild.Count - 1);

	    CustDimTree.MoveAfter(v, v1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера первый корневой элемент будет помещен на последнюю
 позицию.


См. также:


[ICustomDimTree](ICustomDimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
