# ICalendarDimension.OffsetDate

ICalendarDimension.OffsetDate
-


# ICalendarDimension.OffsetDate


## Синтаксис


OffsetDate(Level: [DimCalendarLevel](../../Enums/DimCalendarLevel.htm)):
 Integer;


## Параметры


Level. Уровень календаря.


## Описание


Свойство OffsetDate определяет
 число дней, на которые будет смещена дата начала указанного уровня.


## Комментарии


Смещение доступно для следующих уровней:


	- годы. Level = DimCalendarLevel.Year;


	- кварталы. Level = DimCalendarLevel.Quarter;


	- месяцы. Level = DimCalendarLevel.Month;


	- недели. Level = DimCalendarLevel.Week.


Если значение OffsetDate положительное,
 то смещение выполняется вперед, если отрицательное - назад. Наименование
 уровня календаря формируется с учетом смещения.


Если необходимо задать смещение от конца указанного периода, то установите
 значение [ICalendarDimension.IsDateEnd](ICalendarDimension.IsDateEnd.htm)
 в True.


## Пример


Для выполнения примера предполагается наличие календарного справочника
 с идентификатором «CALENDARSETUP», содержащего недельную динамику. Добавьте
 ссылки на системные сборки «Dimensions», «Metabase».


			Sub UserProc;

Var

    mb: IMetabase;

    CalendarObj: IMetabaseObject;

    Calendar: ICalendarDimension;

Begin

    mb := MetabaseClass.Active;

    CalendarObj := mb.ItemById("CALENDARSETUP").Edit;

    Calendar := CalendarObj As ICalendarDimension;

    If Calendar.WeekLevel.RestDays = DayOfWeekSet.SaturdaySunday Then

        Calendar.OffsetDate(DimCalendarLevel.Week) := -2;

        Calendar.IsDateEnd(DimCalendarLevel.Week) := True;

    End If;

    Calendar.OffsetDate(DimCalendarLevel.Day) := 0;

    CalendarObj.Save;

End Sub UserProc;


Результат выполнения примера: если календарный справочник использует
 5-ти дневную неделю, то наименование для элементов уровня недель будет
 формироваться по последнему рабочему дню т.е. со смещением на
 два дня от конца недели.


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
