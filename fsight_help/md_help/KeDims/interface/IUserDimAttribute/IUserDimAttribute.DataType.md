# IUserDimAttribute.DataType

IUserDimAttribute.DataType
-


# IUserDimAttribute.DataType


## Синтаксис


DataType: [DbDataType](Dal.chm::/Enums/DbDataType.htm);


## Описание


Свойство DataType определяет
 тип данных атрибута вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimAts: IUserDimAttributes;

	    UsDimAttr: IUserDimAttribute;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimAts:=UsDim.Attributes;

	    UsDimAttr:=UsDimAts.Item(0);

	    i:=UsDimAttr.DataType;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться тип данных
 первого атрибута вычисляемого справочника, преобразованный к целочисленному
 виду. Идентификатор вычисляемого справочника - «USER_DIM».


См. также:


[IUserDimAttribute](IUserDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
