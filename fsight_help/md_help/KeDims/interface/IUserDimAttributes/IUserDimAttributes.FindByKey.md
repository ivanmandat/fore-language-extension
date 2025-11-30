# IUserDimAttributes.FindByKey

IUserDimAttributes.FindByKey
-


# IUserDimAttributes.FindByKey


## Синтаксис


FindByKey(AttributeKey: Integer): [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);


## Параметры


AttributeKey. Ключ
 атрибута, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий атрибут вычисляемого справочника.
 Поиск осуществляется по ключу, передаваемому посредством параметра AttributeKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimAts: IUserDimAttributes;

	    UsDimAttr: IUserDimAttribute;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimAts:=UsDim.Attributes;

	    UsDimAttr:=UsDimAts.FindByKey(5253);

	    If UsDimAttr<>Null Then

	        s:=UsDimAttr.Name;

	    Else

	        s:="It is not found";

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск атрибута с ключом «5253»
 и в случае удачного поиска в переменной «s» будет содержаться наименование
 найденного атрибута. Идентификатор вычисляемого справочника - «USER_DIM».


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
