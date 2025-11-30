# ICustomDimension.Tree

ICustomDimension.Tree
-


# ICustomDimension.Tree


## Синтаксис


Tree: [ICustomDimTree](../ICustomDimTree/ICustomDimTree.htm);


## Описание


Свойство Tree возвращает элементы
 справочника, представленные в виде дерева.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    CustDimTree: ICustomDimTree;

	    Key, Key1, Key2, Key3: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("STD_CUBE").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustDimTree := CustDim.Tree;

	    Key := CustDimTree.Add(Null);

	    Key1 := CustDimTree.Add(Null);

	    Key2 := CustDimTree.Add(Key);

	    Key3 := CustDimTree.Add(Key1);

	    CustDimTree.Name(Key) := "Первый корневой";

	    CustDimTree.Name(Key1) := "Второй корневой";

	    CustDimTree.Name(Key2) := "Первый дочерний";

	    CustDimTree.Name(Key3) := "Второй дочерний";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в измерении фактов будут созданы новые элементы.
 Работа с элементами осуществляется в виде дерева.


См. также:


[ICustomDimension](ICustomDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
