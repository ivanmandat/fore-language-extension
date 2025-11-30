# ICustomDimTree.MoveBefore

ICustomDimTree.MoveBefore
-


# ICustomDimTree.MoveBefore


## Синтаксис


MoveBefore(PrimaryKey: Variant; Element: Variant);


## Параметры


PrimaryKey. Первичный ключ
 перемещаемого элемента.


Element. Первичный ключ элемента,
 перед которым необходимо поместить перемещаемый элемент.


## Описание


Метод MoveBefore помещает элемент
 с первичным ключом PrimaryKey
 перед элементом с ключом Element.


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

	    v := TreeChild.Item(TreeChild.Count - 1);

	    v1 := TreeChild.Item(TreeChild.Count - 2);

	    CustDimTree.MoveBefore(v, v1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера последний корневой элемент будет смещен на
 одну позицию вверх.


См. также:


[ICustomDimTree](ICustomDimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
