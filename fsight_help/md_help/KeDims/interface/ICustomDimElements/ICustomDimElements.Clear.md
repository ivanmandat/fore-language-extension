# ICustomDimElements.Clear

ICustomDimElements.Clear
-


# ICustomDimElements.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет удаление
 всех элементов справочника.


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

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("CUBE_1").Edit;

	    Cube:=MObj As IStandardCube;

	    CustDim:=Cube.FactDimension.Dimension As ICustomDimension;

	    DimElems:=CustDim.Elements;

	    DimElems.Clear;

	    i:=DimElems.Add;

	    DimElems.AttributeValue(i,0):=i+1;

	    DimElems.AttributeValue(i,1):="New_Element";

	    DimElems.AttributeValue(i,2):=i+1;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут удалены все элементы измерения фактов
 и создан один новый.


См. также:


[ICustomDimElements](ICustomDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
