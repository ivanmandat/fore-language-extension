# ICalendarDimAttribute.HasHierarchy

ICalendarDimAttribute.HasHierarchy
-


# ICalendarDimAttribute.HasHierarchy


## Синтаксис


HasHierarchy: Boolean;


## Описание


Свойство HasHierarchy определяет,
 используется ли пользовательский атрибут в качестве альтернативной иерархии.


## Комментарии


Допустимые значения:


	- True. Атрибут используется
	 в качестве альтернативной иерархии;


	- False. Атрибут не используется
	 в качестве альтернативной иерархии.


## Пример


Для выполнения примера в репозитории необходимо наличие календарного
 справочника с идентификатором «DIM_CALENDARR». Создайте атрибут с идентификатором
 «ATTR».


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    calendarDim: ICalendarDimension;

    userAttrs: ICalendarDimAttributes;

    userAttr: ICalendarDimAttribute;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим календарный справочник

    calendarDim := MB.ItemById("DIM_CALENDARR").Edit As ICalendarDimension;

    // Получим коллекцию атрибутов

    userAttrs := CalendarDim.Attributes;

    // Получим пользовательский атрибут

    userAttr := UserAttrs.Item("ATTR");

    // Установим атрибут
 в качестве альтернативной иерархии

    userAttr.HasHierarchy := True;

    // Сохраним изменения

    (calendarDim As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера пользовательский атрибут будет использоваться
 в качестве альтернативной иерархии.


См. также:


[ICalendarDimAttribute](ICalendarDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
