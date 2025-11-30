# ICalendarDimension.HierarchyCorrection

ICalendarDimension.HierarchyCorrection
-


# ICalendarDimension.HierarchyCorrection


## Синтаксис


HierarchyCorrection: Boolean;


## Описание


Свойство HierarchyCorrection определяет состояние опции «Коррекция иерархии». Учитывается при включенной опции «Сдвиг последнего уровня на точку вперед».


## Пример


Для выполнения примера предполагается наличие в репозитории календарного справочника с идентификатором "CALENDAR_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("CALENDAR_DIM").Edit;

	    CalDim:=MObj As ICalendarDimension;

	    CalDim.ShiftForward:=True;

	    CalDim.HierarchyCorrection:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет включена опция «Коррекция иерархии» календарного справочника.


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
