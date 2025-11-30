# ICalendarDimAttributes.Remove

ICalendarDimAttributes.Remove
-


# ICalendarDimAttributes.Remove


## Синтаксис


Remove(Index: Variant): Boolean;


## Параметры


Index - индекс атрибута, который необходимо удалить.


## Описание


Метод Remove осуществляет удаление пользовательского атрибута, индекс которого передается посредством параметра Index.


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

	    If UserAttrs.Count <> 0 Then

	        UserAttrs.Remove(0);

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера из календарного справочника будет удален первый пользовательский атрибут.


См. также:


[ICalendarDimAttributes](ICalendarDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
