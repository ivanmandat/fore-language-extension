# ICustomDimTree.Name

ICustomDimTree.Name
-


# ICustomDimTree.Name


## Синтаксис


Name(PrimaryKey: Variant): Variant;


## Параметры


PrimaryKey. Первичный
 ключ элемента.


## Описание


Свойство Name определяет наименование
 для элемента с указанным ключом.


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

	    v: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustDimTree := CustDim.Tree;

	    v := CustDimTree.Add(Null);

	    CustDimTree.Name(v) := "Новый элемент " + v;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корне дерева элементов будет создан один
 новый элемент.


См. также:


[ICustomDimTree](ICustomDimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
