# ICalendarDimension.DateFromWeek

ICalendarDimension.DateFromWeek
-


# ICalendarDimension.DateFromWeek


## Синтаксис


DateFromWeek(Year: Integer; Week: Integer; Day: Integer): DateTime;


## Параметры


Year - год в котором производится расчет.


Week - индекс недели в году. Индексация недель начинается с 0.


Day - количество дней от начала недели, в соответствии с которым производится расчет даты.


## Описание


Метод DateFromWeek осуществляет расчет даты, соответствующей указанному дню. Расчет производится с учетом [дня начала недели](../ICalendarWeekLevel/ICalendarWeekLevel.FirstDayOfWeek.htm) и [количества дней в неделе](../ICalendarWeekLevel/ICalendarWeekLevel.RestDays.htm), установленных для данного справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории календарного справочника с идентификатором "CALENDAR_DIM". В период календаря входит 2009 год. В структуре справочника имеется уровень "Недели". В параметрах недель включены следующие настройки: Первый день недели - Понедельник; Число дней в неделе - 5 дней.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: ICalendarDimension;

	    d: DateTime;

	Begin

	    MB := MetabaseClass.Active;

	    Dim := MB.ItemById("CALENDAR_DIM").Bind As ICalendarDimension;

	    d := Dim.DateFromWeek(2009, 0, 0);

	    Debug.WriteLine(d.ToString);

	    d := Dim.DateFromWeek(2009, 0, 4);

	    Debug.WriteLine(d.ToString);

	    d := Dim.DateFromWeek(2009, 10, 5);

	    Debug.WriteLine(d.ToString);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены следующие рассчитанные значения:


29.12.2008 00:00:00


01.01.2009 00:00:00


13.03.2009 00:00:00


См. также:


[ICalendarDimension](ICalendarDimension.htm) | [ICalendarDimension.WeekFromDate](ICalendarDimension.WeekFromDate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
