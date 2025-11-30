# IMsBreakpoint.Enable

IMsBreakpoint.Enable
-


# IMsBreakpoint.Enable


## Синтаксис


		Enable: Boolean;


## Описание


Свойство Enable
 определяет признак доступности точки останова.


## Комментарии


Допустимые значения:


	- True. По умолчанию Точка
	 останова доступна и будет учитываться при расчете задачи моделирования;


	- False. Точка останова
	 недоступна и не учитывается при расчете задачи моделирования.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
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

		    i: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    ModelSpaceDescr := Mb.ItemById("MODEL_SPACE");

		    Problem := Mb.ItemByIdNamespace("PROBLEM",ModelSpaceDescr.Key).Edit As IMsProblem;

		    CalcSettings := Problem.CreateCalculationSettings;

		    CallBack := New MCallback.Create;

		    CalcSettings.Callback:= CallBack;

		    CalcSettings.FactIncluded:= True;

		    Calculation := Problem.Calculate(CalcSettings);

		    Breakpoints := Calculation.Breakpoints;

		    Breakpoints.Clear;

		    Breakpoint := Breakpoints.Add(MsBreakpointKind.ModelCalendar);

		    CalendarBreakpoint :=Breakpoint As IMsModelCalendarBreakpoint;

		    CalendarBreakpoint.Name:= "CalendarBreakpoint";

		    Model := Mb.ItemByIdNamespace("MODEL",ModelSpaceDescr.Key).Edit As IMsModel;

		    CalendarBreakpoint.Model:= Model;

		    CalendarBreakpoint.CalendarPoint:= DateTime.ComposeDay(2012, 01, 01);

		    Calculation.Run;

		    For i := 0 To Breakpoints.Count -1 Do

		        Breakpoint := Breakpoints.Item(i);

		        Breakpoint.Enable := False;

		    End For;

		    Calculation.Resume;

		End Sub UserProc;


В результате выполнения примера для задачи будет установлена точка останова,
 срабатывающая, если модель MODEL рассчитывается на дату 01.01.2012. Расчёт
 задачи будет запущен. Затем все точки останова будут деактивированы.


См. также:


[IMsBreakpoint](IMsBreakpoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
