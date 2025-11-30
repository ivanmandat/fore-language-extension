# IStandardDimAttributes.FindByKey

IStandardDimAttributes.FindByKey
-


# IStandardDimAttributes.FindByKey


## Синтаксис


FindByKey(AttributeKey: Integer): [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm);


## Параметры


AttributeKey — ключ
 атрибута, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий атрибут табличного справочника.
 Поиск осуществляется по ключу, передаваемому посредством параметра AttributeKey.


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

	    DimAtribut:=DimAtrrs.FindByKey(4796);

	    If DimAtribut<>Null Then

	        s:=DimAtribut.Name;

	    Else

	        s:="It is not found";

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск атрибута с ключом «4796»
 и в случае удачного поиска в переменной «s» будет содержаться наименование
 найденного атрибута. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
