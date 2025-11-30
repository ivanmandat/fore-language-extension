# ICalendarDimAttributes.Add

ICalendarDimAttributes.Add
-


# ICalendarDimAttributes.Add


## Синтаксис


Add: [ICalendarDimAttribute](../ICalendarDimAttribute/ICalendarDimAttribute.htm);


## Описание


Метод Add осуществляет создание нового пользовательского атрибута.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	    UserAttrs: ICalendarDimAttributes;

	    UserAttr: ICalendarDimAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CALENDAR_DIM").Edit;

	    CalDim := MObj As ICalendarDimension;

	    UserAttrs := CalDim.Attributes;

	    UserAttr := UserAttrs.Add;

	    UserAttr.Expression(-1).AsString := #34 + "Элемент уровня " + #34 + "+LEVEL";

	    UserAttrs.Name := UserAttr;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в календарный справочник будет добавлен новый пользовательский атрибут, для элементов всех уровней будет задано одно выражение. При построении справочника наименования элементов будут формироваться по данному атрибуту.


См. также:


[ICalendarDimAttributes](ICalendarDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
