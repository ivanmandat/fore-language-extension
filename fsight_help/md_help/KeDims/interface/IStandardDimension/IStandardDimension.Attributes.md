# IStandardDimension.Attributes

IStandardDimension.Attributes
-


# IStandardDimension.Attributes


## Синтаксис


Attributes: [IStandardDimAttributes](../IStandardDimAttributes/IStandardDimAttributes.htm);


## Описание


Свойство Attributes возвращает
 объект, содержащий коллекцию атрибутов табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimAtrs: IStandardDimAttributes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimAtrs:=Dimens.Attributes;

	    i:=DimAtrs.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 атрибутов справочника. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimension](IStandardDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
