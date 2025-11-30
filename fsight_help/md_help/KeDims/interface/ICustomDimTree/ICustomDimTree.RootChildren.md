# ICustomDimTree.RootChildren

ICustomDimTree.RootChildren
-


# ICustomDimTree.RootChildren


## Синтаксис


RootChildren: [ICustomDimTreeChildren](../ICustomDimTreeChildren/ICustomDimTreeChildren.htm);


## Описание


Свойство RootChildren возвращает
 список корневых элементов дерева.


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

	    v: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustDimTree := CustDim.Tree;

	    TreeChild := CustDimTree.RootChildren;

	    v := TreeChild.Item(TreeChild.Count - 1);

	    CustDimTree.Remove(v);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет удален последний корневой элемент измерения
 фактов.


См. также:


[ICustomDimTree](ICustomDimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
