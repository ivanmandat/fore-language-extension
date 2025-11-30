# IMsProblemCalculationCallback.OnBreak

IMsProblemCalculationCallback.OnBreak
-


# IMsProblemCalculationCallback.OnBreak


## Синтаксис


OnBreak(Breakpoint: [IMsBreakpoint](../IMsBreakpoint/IMsBreakpoint.htm));


## Параметры


Breakpoint. Точка останова,
 сгенерировавшая событие.


## Описание


Метод OnBreak реализует событие,
 происходящее при срабатывании точки останова во время расчета задачи моделирования.


## Комментарии


Для корректного использования метод должен быть переопределен в пользовательском
 классе, который является обработчиком событий. Также данный обработчик
 должен быть задан в параметрах, используемых для расчета задачи моделирования.


## Пример


В примере приведено описание пользовательского класса, являющегося обработчиком
 событий. Для выполнения примера добавьте ссылку на системную сборку «Ms».


			Class MCallback: ProblemCalculationCallback

    Public Sub OnError(Message: String);

    Begin

    End Sub OnError;


    Public Sub OnFinish;

    Begin

    End Sub OnFinish;


    Public Sub OnMessage(Message: String);

    Begin

        Debug.WriteLine(DateTime.Now.ToString + " > " + Message);

    End Sub OnMessage;


    Public Sub OnModelCalculation(Model: IMsModel);

    Begin

    End Sub OnModelCalculation;


    Public Sub OnStep;

    Begin

    End Sub OnStep;


    Public Sub OnBreak(Breakp: IMsBreakpoint);

    Var

        CalendBreak: IMsModelCalendarBreakpoint;

        DataBreak: IMsDataBreakpoint;

    Begin

        Debug.WriteLine("Сработала точка останова!");

        Debug.WriteLine("    Ключ точки: '" + Breakp.Key.ToString + "'");

        Debug.WriteLine("    Наименование точки: '" + Breakp.Name + "'");

        Select Case Breakp.Kind

            Case MsBreakpointKind.ModelCalendar:

                Debug.WriteLine("    Точка календарная");

                CalendBreak := Breakp As IMsModelCalendarBreakpoint;

                If CalendBreak.IsCalendarPointFixed Then

                    Debug.WriteLine("    Дата срабатывания: " + CalendBreak.CalendarPoint.ToString);

                Else

                    Debug.WriteLine("    Точка срабатывает на каждую дату расчета");

                End If;

            Case MsBreakpointKind.Data:

                Debug.WriteLine("    Точка на значение в данных");

                DataBreak := Breakp As IMsDataBreakpoint;

                Debug.WriteLine("    Условие срабатывания: " + DataBreak.Condition.AsString);

        End Select;

    End Sub OnBreak;

End Class MCallback;


Использование данного класса для обработки событий приведено в описании
 [IMsModelCalendarBreakpoint.CalendarPoint](../IMsModelCalendarBreakpoint/IMsModelCalendarBreakpoint.CalendarPoint.htm).


См. также:


[IMsProblemCalculationCallback](IMsProblemCalculationCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
