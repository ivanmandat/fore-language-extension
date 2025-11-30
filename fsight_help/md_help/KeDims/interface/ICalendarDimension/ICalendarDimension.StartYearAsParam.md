# ICalendarDimension.StartYearAsParam

ICalendarDimension.StartYearAsParam
-


# ICalendarDimension.StartYearAsParam


## Синтаксис


StartYearAsParam: Boolean;


## Описание


Свойство StartYearAsParam определяет
 состояние опции «Не фиксировать начало календаря (определить как параметр
 справочника)».


## Комментарии


Если свойству установлено значение True,
 то в календарном справочнике будет создан параметр с идентификатором «YEAR_START».
 Данный параметр будет использоваться для ввода начальной даты календаря.


## Пример


Для выполнения примера предполагается наличие в репозитории календарного
 справочника с идентификатором "CALENDAR_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("CALENDAR_DIM").Edit;

	    CalDim:=MObj As ICalendarDimension;

	    CalDim.StartYearAsParam:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для календарного справочника будет включена
 опция «Не фиксировать начало календаря (определить как параметр справочника)».


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
