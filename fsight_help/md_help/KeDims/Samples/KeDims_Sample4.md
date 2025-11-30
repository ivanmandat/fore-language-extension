# Создание элементов в измерении фактов

Создание элементов в измерении фактов
-


# Создание элементов в измерении фактов


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором CUBE_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    CustDimTree: ICustomDimTree;

	    Root1, Root2, Child1, Child2: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustDimTree := CustDim.Tree;

	    Root1 := CustDimTree.Add(Null);

	    Root2 := CustDimTree.Add(Null);

	    Child1 := CustDimTree.Add(Root1);

	    Child2 := CustDimTree.Add(Root2);

	    CustDimTree.Name(Root1) := "Первый корневой";

	    CustDimTree.Name(Root2) := "Второй корневой";

	    CustDimTree.Name(Child1) := "Первый дочерний";

	    CustDimTree.Name(Child2) := "Второй дочерний";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в измерении фактов будут созданы новые элементы.
 Работа с элементами осуществляется в виде дерева.


См. также:


[Примеры](KeDims_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
