# IStandardDimAttributes.Id

IStandardDimAttributes.Id
-


# IStandardDimAttributes.Id


## Синтаксис


Id: [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm);


## Описание


Свойство Id определяет атрибут
 табличного справочника, назначение которого - Идентификатор.


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

	    DimAtribut:=DimAtrrs.Id;

	    s:=DimAtribut.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 атрибута справочника, назначение которого - Идентификатор. Идентификатор
 табличного справочника - «TAB_DIM».


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
