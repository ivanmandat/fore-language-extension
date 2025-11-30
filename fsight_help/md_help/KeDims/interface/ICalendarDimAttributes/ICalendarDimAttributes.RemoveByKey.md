# ICalendarDimAttributes.RemoveByKey

ICalendarDimAttributes.RemoveByKey
-


# ICalendarDimAttributes.RemoveByKey


## Синтаксис


RemoveByKey(AttributeKey: Integer): Boolean;


## Параметры


AttributeKey - ключ справочника, который необходимо удалить.


## Описание


Метод RemoveByKey осуществляет удаление пользовательского атрибута, ключ которого передается посредством параметра AttributeKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	    UserAttrs: ICalendarDimAttributes;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CALENDAR_DIM").Edit;

	    CalDim := MObj As ICalendarDimension;

	    UserAttrs := CalDim.Attributes;

	    If UserAttrs.FindByKey(14475) <> Null Then

	        UserAttrs.RemoveByKey(14475);

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера из календарного справочника будет удален пользовательский атрибут с ключом "14475", если таковой имеется.


См. также:


[ICalendarDimAttributes](ICalendarDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
