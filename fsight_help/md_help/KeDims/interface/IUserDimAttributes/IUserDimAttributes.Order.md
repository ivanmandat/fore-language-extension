# IUserDimAttributes.Order

IUserDimAttributes.Order
-


# IUserDimAttributes.Order


## Синтаксис


Order: [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);


## Описание


Свойство Order определяет атрибут
 справочника, назначение которого - Порядок.


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

	    UsDimAttr:=UsDimAts.Order;

	    i:=UsDimAttr.Key;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться ключ атрибута
 вычисляемого справочника, назначение которого - Порядок. Идентификатор
 справочника - USER_DIM.


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
