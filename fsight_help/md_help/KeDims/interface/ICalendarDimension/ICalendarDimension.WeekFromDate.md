# ICalendarDimension.WeekFromDate

ICalendarDimension.WeekFromDate
-


# ICalendarDimension.WeekFromDate


## Синтаксис


WeekFromDate(Date: DateTime): Variant;


## Параметры


Date - дата, для которой необходимо определить параметры дня.


## Описание


Метод WeekFromDate осуществляет расчет параметров дня, соответствующего указанной дате. Расчет производится с учетом [дня начала недели](../ICalendarWeekLevel/ICalendarWeekLevel.FirstDayOfWeek.htm) и [количества дней в неделе](../ICalendarWeekLevel/ICalendarWeekLevel.RestDays.htm), установленных для данного справочника.


Результатом выполнения метода является целочисленный массив, содержащий следующие значения:


-
Первый элемент - год.


-
Второй элемент - номер недели.


-
Третий элемент - номер дня от начала недели.


## Пример


Для выполнения примера предполагается наличие в репозитории календарного справочника с идентификатором "CALENDAR_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: ICalendarDimension;

	    v: Array Of Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dim := MB.ItemById("CALENDAR_DIM").Bind As ICalendarDimension;

	    v := Dim.WeekFromDate(DateTime.Now) As Array Of Integer;

	    Debug.WriteLine("Год - " + v[0].ToString);

	    Debug.WriteLine("Неделя - " + v[1].ToString);

	    Debug.WriteLine("День - " + v[2].ToString);

	End Sub UserProc;


После выполнения примера будут рассчитаны параметры текущего дня. Расчет производится с учетом параметров справочника "CALENDAR_DIM". Полученные результаты будут выведены в консоль среды разработки.


См. также:


[ICalendarDimension](ICalendarDimension.htm) | [ICalendarDimension.DateFromWeek](ICalendarDimension.DateFromWeek.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
