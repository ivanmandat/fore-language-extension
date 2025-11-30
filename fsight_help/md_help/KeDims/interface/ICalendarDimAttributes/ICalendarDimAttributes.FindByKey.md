# ICalendarDimAttributes.FindByKey

ICalendarDimAttributes.FindByKey
-


# ICalendarDimAttributes.FindByKey


## Синтаксис


FindByKey(AttributeKey: Integer): [ICalendarDimAttribute](../ICalendarDimAttribute/ICalendarDimAttribute.htm);


## Параметры


AttributeKey - ключ атрибута, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет поиск пользовательского атрибута, ключ которого передается посредством параметра AttributeKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CalDim: ICalendarDimension;

	    UserAttrs: ICalendarDimAttributes;

	    UserAttr: ICalendarDimAttribute;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    CalDim := MB.ItemById("CALENDAR_DIM").Bind As ICalendarDimension;

	    UserAttrs := CalDim.Attributes;

	    UserAttr := UserAttrs.FindByKey(14475);

	    If UserAttr <> Null Then

	        s := UserAttr.Name;

	    Else

	        s := "Attribute not found";

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск пользовательского атрибута с ключом "14475" и в случае удачного поиска в переменной "s" будет содержаться наименование найденного атрибута.


См. также:


[ICalendarDimAttributes](ICalendarDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
