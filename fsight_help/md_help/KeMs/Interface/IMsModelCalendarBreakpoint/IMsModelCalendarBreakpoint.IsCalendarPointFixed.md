# IMsModelCalendarBreakpoint.IsCalendarPointFixed

IMsModelCalendarBreakpoint.IsCalendarPointFixed
-


# IMsModelCalendarBreakpoint.IsCalendarPointFixed


## Синтаксис


IsCalendarPointFixed: Boolean;


## Описание


Свойство IsCalendarPointFixed
 возвращает признак того, определена ли календарная точка для точки останова.


## Комментарии


Календарная точка определяется значением свойства [IMsModelCalendarBreakpoint.CalendarPoint](IMsModelCalendarBreakpoint.CalendarPoint.htm).
 Если она определена, то IsCalendarPointFixed возвращает значение True. Точка останова будет срабатывать
 только для указанной даты. Для сброса календарной точки используйте метод
 [IMsModelCalendarBreakpoint.RemoveCalendarPointFix](IMsModelCalendarBreakpoint.RemoveCalendarPointFix.htm).


Если календарная точка не задана, то IsCalendarPointFixed возвращает
 значение False. Точка останова
 будет срабатывать для каждой календарной точки расчета.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором MODEL_SPACE. В данном контейнере должна
 присутствовать задача моделирования с идентификатором PROBLEM, рассчитывающая
 модель с идентификатором MODEL. В примере используется класс MCallback,
 описание которого приведено в [IMsProblemCalculationCallback.OnBreak](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnBreak.htm).


Добавьте ссылки на системные сборки: Metabase, Ms.


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

    If CalendarBreakpoint.IsCalendarPointFixed Then

        CalendarBreakpoint.RemoveCalendarPointFix;

    End If;

    Calculation.Run;

End Sub UserProc;


После выполнения примера для задачи будет установлена точка останова,
 срабатывающая для каждой календарной точки расчета модели.


См. также:


[IMsModelCalendarBreakpoint](IMsModelCalendarBreakpoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
