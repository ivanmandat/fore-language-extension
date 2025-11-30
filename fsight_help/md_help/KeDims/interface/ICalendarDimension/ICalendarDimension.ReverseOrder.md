# ICalendarDimension.ReverseOrder

ICalendarDimension.ReverseOrder
-


# ICalendarDimension.ReverseOrder


## Синтаксис


ReverseOrder: Boolean;


## Описание


Свойство ReverseOrder определяет состояние опции «Обратный порядок элементов в справочнике».


## Пример


Для выполнения примера предполагается наличие в репозитории календарного справочника с идентификатором "CALENDAR_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CALENDAR_DIM").Edit;

	    CalDim := MObj As ICalendarDimension;

	    CalDim.ReverseOrder := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет включена опция «Обратный порядок элементов в справочнике» календарного справочника.


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
