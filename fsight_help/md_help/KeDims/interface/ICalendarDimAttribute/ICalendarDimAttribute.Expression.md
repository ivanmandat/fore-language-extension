# ICalendarDimAttribute.Expression

ICalendarDimAttribute.Expression
-


# ICalendarDimAttribute.Expression


## Синтаксис


Expression(LevelIndex: Integer): [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Параметры


LevelIndex - индекс уровня, для которого необходимо получить выражение.


## Описание


Свойство Expression возвращает выражение, по которому будут формироваться значения атрибута.


## Комментарии


Выражение возвращается для определенного уровня справочника, индекс которого передается в параметре LevelIndex. Для получения индекса справочника используется свойство [CalendarLevelIndex](../ICalendarDimension/ICalendarDimension.CalendarLevelIndex.htm). Для получения выражения, используемого для всех уровней, необходимо в качестве значения параметра LevelIndex передавать значение "-1".


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


[ICalendarDimAttribute](ICalendarDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
