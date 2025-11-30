# ICalendarDimension.AssignAttributesFormats

ICalendarDimension.AssignAttributesFormats
-


# ICalendarDimension.AssignAttributesFormats


## Синтаксис


AssignAttributesFormats(Source: [ICalendarDimension](ICalendarDimension.htm));


## Параметры


Source - календарный справочник,
 из которого будут скопированы форматы представления атрибутов.


## Описание


Метод AssignAttributesFormats
 копирует форматы представления атрибутов из указанного календарного справочника.


## Пример


Для выполнения примера в репозитории предполагается наличие календарных
 справочников с идентификаторами «DICT_CALEND» и «CALENDAR_SOURCE».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim, CalDimSour: ICalendarDimension;

	Begin

	    MB := MetabaseClass.Active;

	    CalDimSour := MB.ItemById("CALENDAR_SOURCE").Bind As ICalendarDimension;

	    MObj := MB.ItemById("DICT_CALEND").Edit;

	    CalDim := MObj As ICalendarDimension;

	    CalDim.AssignAttributesFormats(CalDimSour);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера форматы представления атрибутов для справочника
 «DICT_CALEND» будут скопированы из справочника «CALENDAR_SOURCE».


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
