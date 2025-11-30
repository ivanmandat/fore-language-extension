# IMsBreakpoints.Remove

IMsBreakpoints.Remove
-


# IMsBreakpoints.Remove


## Синтаксис


		Count: Integer;


## Параметры


Index. Индекс точки останова.


## Описание


Метод Remove удаляет точку из
 коллекции по ее индексу. Метод возвращает значение True,
 если удаление прошло успешно.


## Комментарии


Значение параметра Index должно
 быть неотрицательным числом, но меньше значения свойства [IMsBreakpoints.Count](IMsBreakpoints.Count.htm).
 Индекс первого объекта в коллекции - «0», последнего - «[IMsBreakpoints.Count](IMsBreakpoints.Count.htm)
 - 1». Нумерация индексов - сквозная.


Если удаление точки прошло успешно, то метод возвращает значение True, значение свойства [IMsBreakpoints.Count](IMsBreakpoints.Count.htm)
 уменьшается на единицу; в обратном случае - False.


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

		    Breakpoints.Remove(0);

		    Calculation.Resume;

		End Sub UserProc;


В результате выполнения примера для задачи будет установлена точка останова,
 срабатывающая, если модель MODEL рассчитывается на дату 01.01.2012. Расчёт
 задачи будет запущен. Затем первая точка в коллекции будет удалена.


См. также:


[IMsBreakpoints](IMsBreakpoints.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
