# IMsBreakpoints.FindByKey

IMsBreakpoints.FindByKey
-


# IMsBreakpoints.FindByKey


## Синтаксис


		FindByKey(BreakpointKey: Integer): [IMsBreakpoint](../IMsBreakpoint/IMsBreakpoint.htm);


## Параметры


BreakpointKey. Ключ точки.


## Описание


Метод FindByKey
 осуществляет поиск точки останова в коллекции по её ключу.


## Комментарии


Если точка останова с указанным ключом не найдена, то метод возвращает
 значение Null.


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

		    Breakpoint := Breakpoints.FindByKey(0);

		    If Breakpoint <> Null Then

		        Breakpoint.Enable := False;

		    End If;

		    Calculation.Resume;

		End Sub UserProc;


В результате выполнения примера для задачи будет установлена точка останова,
 срабатывающая, если модель MODEL рассчитывается на дату 01.01.2012. Расчёт
 задачи будет запущен. Затем, если будет найдена точка с ключом «0», то
 она будет деактивирована.


См. также:


[IMsBreakpoints](IMsBreakpoints.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
