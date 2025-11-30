# ICustomDimElements.Include

ICustomDimElements.Include
-


# ICustomDimElements.Include


## Синтаксис


Include(Row: Integer): Boolean;


## Параметры


Row. Индекс
 строки, в которой находится элемент.


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

	    DimElems: ICustomDimElements;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("CUBE_1").Edit;

	    Cube:=MObj As IStandardCube;

	    CustDim:=Cube.FactDimension.Dimension As ICustomDimension;

	    DimElems:=CustDim.Elements;

	    DimElems.Include(DimElems.RowCount-1):=False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в отметке в OLAP не будет доступен последний
 элемент измерения фактов.


См. также:


[ICustomDimElements](ICustomDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
