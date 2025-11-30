# ICustomDimTree.Add

ICustomDimTree.Add
-


# ICustomDimTree.Add


## Синтаксис


Add(ParentPrimaryKey: Variant): Variant;


## Параметры


ParentPrimaryKey. Первичный
 ключ родительского элемента.


## Описание


Метод Add осуществляет добавление
 нового элемента и возвращает его первичный ключ.


## Комментарии


Если в качестве ключа родительского элемента передается несуществующее
 значение или Null, то элемент
 добавляется в корень дерева.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IStandardCube;

    CustDim: ICustomDimension;

    CustDimTree: ICustomDimTree;

    v: Variant;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

    CustDimTree := CustDim.Tree;

    v := CustDimTree.Add(Null);

    CustDimTree.Name(v) := "Новый элемент " + v;

    (Cube As IStandardCube).Save;

End Sub UserProc;


При выполнении примера в корне дерева элементов будет создан один новый
 элемент.


См. также:


[ICustomDimTree](ICustomDimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
