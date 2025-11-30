# IStandardDimAttributes.Name

IStandardDimAttributes.Name
-


# IStandardDimAttributes.Name


## Синтаксис


Name: [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm);


## Описание


Свойство Name определяет атрибут
 справочника, назначение которого - Наименование.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimAtrrs: IStandardDimAttributes;

	    DimAtribut: IStandardDimAttribute;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimAtrrs:=Dimens.Attributes;

	    DimAtribut:=DimAtrrs.Name;

	    s:=DimAtribut.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 атрибута справочника, назначение которого - Наименование. Идентификатор
 табличного справочника - «TAB_DIM».


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
