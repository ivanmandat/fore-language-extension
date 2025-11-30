# ICustomDimTree.Include

ICustomDimTree.Include
-


# ICustomDimTree.Include


## Синтаксис


Include(PrimaryKey: Variant): Boolean;


## Параметры


PrimaryKey. Первичный
 ключ элемента, доступ к которому необходимо определить.


## Описание


Свойство Include определяет,
 будет ли указанный элемент доступен в отметке в OLAP.


## Комментарии


Допустимые значения свойства:


	- True. Элемент будет
	 доступен в отметке;


	- False. Элемент будет
	 недоступен в отметке.


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

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustDimTree := CustDim.Tree;

	    CustDimTree.Include(CustDimTree.RootChildren.Item(0)) := False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в отметке в OLAP не будет доступен первый корневой
 элемент измерения фактов.


См. также:


[ICustomDimTree](ICustomDimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
