# ICustomDimAttribute.DataType

ICustomDimAttribute.DataType
-


# ICustomDimAttribute.DataType


## Синтаксис


DataType: [DbDataType](Dal.chm::/Enums/DbDataType.htm);


## Описание


Свойство DataType определяет
 тип данных атрибута.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    CustAtrs: ICustomDimAttributes;

	    CustAtribut: ICustomDimAttribute;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Cube:=MB.ItemById("CUBE_1").Bind As IStandardCube;

	    CustDim:=Cube.FactDimension.Dimension As ICustomDimension;

	    CustAtrs:=CustDim.Attributes;

	    CustAtribut:=CustAtrs.Item(0);

	    i:=CustAtribut.DataType;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться тип данных
 первого атрибута измерения фактов, преобразованный к целочисленному виду.
 Идентификатор куба - «CUBE_1».


См. также:


[ICustomDimAttribute](ICustomDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
