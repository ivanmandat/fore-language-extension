# IUserDimAttributes.Add

IUserDimAttributes.Add
-


# IUserDimAttributes.Add


## Синтаксис


Add: [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);


## Описание


Метод Add осуществляет добавление
 атрибута вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimAts: IUserDimAttributes;

	    UsDimAttr: IUserDimAttribute;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDimAts:=UsDim.Attributes;

	    UsDimAttr:=UsDimAts.Add;

	    UsDimAttr.DataType:=DbDataType.String;

	    UsDimAttr.Id:="New_Attr";

	    UsDimAttr.Name:="Новый атрибут";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в вычисляемом справочнике будет создан новый
 атрибут. Идентификатор вычисляемого справочника - «USER_DIM».


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
