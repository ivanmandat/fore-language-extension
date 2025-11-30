# IStandardDimAttributes.Add

IStandardDimAttributes.Add
-


# IStandardDimAttributes.Add


## Синтаксис


Add: [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm);


## Описание


Метод Add осуществляет добавление
 атрибута табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dimens: IStandardDimension;

	    DimAtrrs: IStandardDimAttributes;

	    DimAtribut: IStandardDimAttribute;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TAB_DIM").Edit;

	    Dimens:=MObj As IStandardDimension;

	    DimAtrrs:=Dimens.Attributes;

	    DimAtribut:=DimAtrrs.Add;

	    DimAtribut.Id:="New_Atribut";

	    DimAtribut.Name:="Дополнительный атрибут";

	    DimAtribut.DataType:=DbDataType.Integer;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в табличном справочнике будет создан новый
 атрибут. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
