# IMsModelCalendarBreakpoint.CalendarPoint

IMsModelCalendarBreakpoint.CalendarPoint
-


# IMsModelCalendarBreakpoint.CalendarPoint


## Синтаксис


CalendarPoint: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);


## Описание


Свойство CalendarPoint определяет календарную точку срабатывания точки останова.


## Комментарии


Данное свойство задает для модели календарную точку, при расчете которой будет срабатывать точка останова. Модель определяется свойством [IMsModelCalendarBreakpoint.Model](IMsModelCalendarBreakpoint.Model.htm).


Если для CalendarPoint установлено значение, то свойство [IMsModelCalendarBreakpoint.IsCalendarPointFixed](IMsModelCalendarBreakpoint.IsCalendarPointFixed.htm) возвращает значение True; при значении False - CalendarPoint игнорируется.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера моделирования с идентификатором «MODEL_SPACE». В данном контейнере должна присутствовать задача моделирования с идентификатором «PROBLEM», рассчитывающая модель с идентификатором «MODEL». В примере используется класс MCallback, описание которого приведено в [IMsProblemCalculationCallback.OnBreak](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnBreak.htm).


Также перед выполнением процедуры необходимо добавить ссылки на системные сборки «Metabase», «Ms».


			Sub UserProc;

Var

    Mb: IMetabase;

    ModelSpaceDescr: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    CalcSettings: IMsProblemCalculationSettings;

    CallBack: MCallback;

    Calculation: IMsProblemCalculation;

    Breakpoints: IMsBreakpoints;

    Breakpoint: IMsBreakpoint;

    CalendarBreakpoint: IMsModelCalendarBreakpoint;

    Model: IMsModel;

Begin

    Mb := MetabaseClass.Active;

    ModelSpaceDescr := Mb.ItemById("MODEL_SPACE");

    Problem := Mb.ItemByIdNamespace("PROBLEM", ModelSpaceDescr.Key).Edit As IMsProblem;

    CalcSettings := Problem.CreateCalculationSettings;

    CallBack := New MCallback.Create;

    CalcSettings.Callback := CallBack;

    CalcSettings.FactIncluded := True;

    Calculation := Problem.Calculate(CalcSettings);

    Breakpoints := Calculation.Breakpoints;

    Breakpoints.Clear;

    Breakpoint := Breakpoints.Add(MsBreakpointKind.ModelCalendar);

    CalendarBreakpoint := Breakpoint As IMsModelCalendarBreakpoint;

    CalendarBreakpoint.Name := "CalendarBreakpoint";

    Model := Mb.ItemByIdNamespace("MODEL", ModelSpaceDescr.Key).Edit As IMsModel;

    CalendarBreakpoint.Model := Model;

    CalendarBreakpoint.CalendarPoint := DateTime.ComposeDay(2012, 01, 01);

    Calculation.Run;

End Sub UserProc;


После выполнения примера для задачи будет установлена точка останова, срабатывающая, если модель «MODEL» рассчитывается на дату «01.01.2012».


См. также:


[IMsModelCalendarBreakpoint](IMsModelCalendarBreakpoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
