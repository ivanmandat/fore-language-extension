# IMsProblemCalculationCallback.OnWarning

IMsProblemCalculationCallback.OnWarning
-


# IMsProblemCalculationCallback.OnWarning


## Синтаксис


OnWarning(Message: String);


## Описание


Метод OnWarning реализует событие
 для вывода предупреждения при расчете задачи моделирования.


## Комментарии


Для корректного использования метод должен быть переопределен в пользовательском
 классе, который является обработчиком событий. Также данный обработчик
 должен быть задан в параметрах, используемых для расчета задачи моделирования.


## Пример


В примере приведено описание пользовательского класса, являющегося обработчиком
 событий.


Добавьте ссылки на системные сборки: Cubes, Matrix, Metabase, Ms.


					Public Class MCallback: ProblemCalculationCallback

		    Public Sub OnError(Message: String);

		    Begin

		        Debug.WriteLine("Ошибка: " + Message);

		    End Sub OnError;


		    Public Sub OnFinish;

		    Begin

		        Debug.WriteLine("Расчет задачи завершен");

		    End Sub OnFinish;


		    Public Sub OnMessage(Message: String);

		    Begin

		        Debug.WriteLine("Сообщение: " + Message);

		    End Sub OnMessage;


		    Public Sub OnModelCalculation(Model: IMsModel);

		    Begin

		        Debug.WriteLine("Расчет модели: " + (Model As IMetabaseObject).Id);

		    End Sub OnModelCalculation;


		    Public Sub OnStep;

		    Begin

		        Debug.WriteLine("Выполнен шаг расчёта");

		    End Sub OnStep;


		    Public Sub OnBreak(Breakpoint: IMsBreakpoint);

		    Begin

		        Debug.WriteLine(Breakpoint.Name);

		    End Sub OnBreak;


		    Public Sub OnWarning(Message: string);

		    Begin

		        Debug.WriteLine("Предупреждение: " + Message);

		    End Sub OnWarning;


		    Public Sub OnStageStart(Stage: MsProblemCalculationStage; Data: Variant);

		    Begin

		        Debug.Write("Начало стадии ");

		        Select Case Stage

		            Case MsProblemCalculationStage.Init: Debug.WriteLine("'Инициализация'");

		            Case MsProblemCalculationStage.DetermIdent: Debug.WriteLine("'Идентификация детерминированных уравнений'");

		            Case MsProblemCalculationStage.Vector: Debug.WriteLine("'Идентификация векторных уравнений'");

		            Case MsProblemCalculationStage.Ident: Debug.WriteLine("'Идентификация стохастических методов'");

		            Case MsProblemCalculationStage.Calc: Debug.WriteLine("'Расчет моделей'");

		            Case MsProblemCalculationStage.Save: Debug.WriteLine("'Сохранение данных'");

		            Case MsProblemCalculationStage.Finish: Debug.WriteLine("'Окончание расчета'");

		            Case MsProblemCalculationStage.Load: Debug.WriteLine("'Загрузка данных'");

		        End Select;

		    End Sub OnStageStart;


		    Public Sub OnStageFinish(Stage: MsProblemCalculationStage; Duration: Integer; Data: Variant);

		    Begin

		        Debug.WriteLine("Стадия завершена. Потрачено времени в миллисекундах: " + Duration.ToString);

		        Debug.WriteLine("");

		    End Sub OnStageFinish;


		    Public Sub OnBeforeSaveData(Stub: IVariableStub; Matrix: IMatrix; var ValueFlag: Integer; Var Cancel: Boolean);

		    Begin

		    End Sub OnBeforeSaveData;


		    Public Sub OnSaveData(Stub: IVariableStub; Matrix: IMatrix; ValueFlag: Integer; AuditRecordKey: Variant);

		    Begin

		    End Sub OnSaveData;


		    Public Function OnGetActiveEvents: MsProblemCalculationCallbackEvents;

		    Begin

		        Return MsProblemCalculationCallbackEvents.All

		    End Function OnGetActiveEvents;

		End Class MCallback;


Использование данного класса для обработки событий приведено в примере
 для [IMsProblemCalculationSettings.BreakOnError](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.BreakOnError.htm).


См. также:


[IMsProblemCalculationCallback](IMsProblemCalculationCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
