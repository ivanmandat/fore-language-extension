# IDimCalendarSelection.Period

IDimCalendarSelection.Period
-


# IDimCalendarSelection.Period


## Синтаксис


Period: [IDimCalendarPeriodSelection](../IDimCalendarPeriodSelection/IDimCalendarPeriodSelection.htm);


## Описание


Свойство Period возвращает параметры
 отметки элементов календаря.


## Комментарии


Используя данное свойство возможно отметить элементы календарного справочника
 в указанном временном диапазоне и только по указанным уровням.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента DimensionTree, источником
 данных которого является компонент UiDimension с наименованием «UiDimension1».
 UiDimension обеспечивает доступ к календарному справочнику.


Пример будет выполнен при нажатии на кнопку.


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        DimSelection: IDimCalendarSelection;

        CalendarPeriod: IDimCalendarPeriodSelection;

        StartDate, EndDate: DateTime;

    Begin

        UiDimension1.Active := True;

        DimSelection := UiDimension1.Selection As IDimCalendarSelection;

        CalendarPeriod := DimSelection.Period;

        CalendarPeriod.Levels := DimCalendarLevelSet.Quarter;

        CalendarPeriod.Select_(DimCalendarLevelSet.HalfYear, False);

        StartDate := DateTime.Parse("10.08.2001");

        If StartDate < CalendarPeriod.Start Then

            StartDate := CalendarPeriod.Start;

        End If;

        EndDate := DateTime.Parse("10.10.2002");

        If EndDate > CalendarPeriod.End_ Then

            EndDate := CalendarPeriod.End_;

        End If;

        CalendarPeriod.Set_(StartDate, EndDate);

        CalendarPeriod.Active := True;

        UiDimension1.Selection := DimSelection As IDimSelection;

    End Sub Button1OnClick;


После выполнения примера в календарном справочнике будут отмечены уровни
 кварталов и полугодий в период с 10.08.2001 по 10.10.2002.


См. также:


[IDimCalendarSelection](IDimCalendarSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
