# IMsCensus2Transform.NormalizeDailyWeights

IMsCensus2Transform.NormalizeDailyWeights
-


# IMsCensus2Transform.NormalizeDailyWeights


## Синтаксис


		NormalizeDailyWeights;


## Описание


Метод NormalizeDailyWeights
 выполняет нормирование весовых коэффициентов дней недели.


## Комментарии


Нормирование весовых коэффициентов дней недели - это изменение их таким
 образом, чтобы в сумме они составляли 7.


При расчёте нормирование выполняется автоматически, а вызов метода NormalizeDailyWeights позволяет
 выполнить нормирование и получить значения весовых коэффициентов дней
 недели с помощью свойства [IMsCensus2Transform.DailyWeights](IMsCensus2Transform.DailyWeights.htm)
 еще до расчёта метода. Данная модель должна рассчитываться методом X11.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель с идентификатором
 MODEL_CENSUS2.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    ModelCont: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    CENS: IMsCensus2Transform;

		    W: Array Of Double;

		    i: Integer;

		Begin

		    // Получаем текущий репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    ModelCont := MB.ItemById("MS");

		    // Получаем модель

		    Model := MB.ItemByIdNamespace("MODEL_CENSUS2", ModelCont.Key).Edit As IMsModel;

		    // Получаем объект для настройки параметров модели

		    Transform := Model.Transform;

		    // Получаем параметры метода расчета

		    Formula := Transform.FormulaItem(0);

		    CENS := Formula.Method As IMsCensus2Transform;

		    // Задаем весовые коэффициенты дней недели и выводим их в окно консоли

		    W := New Double[7];

		    W[0] := 1.17;

		    W[1] := 1.00;

		    W[2] := 1.12;

		    W[3] := 1.10;

		    W[4] := 0.95;

		    W[5] := 0.98;

		    W[6] := 1.07;

		    CENS.DailyWeights := W;

		    Debug.WriteLine("Весовые коэффициенты дней недели до нормирования:");

		    Debug.Indent;

		    For i := 0 To W.Length - 1 Do

		        Debug.WriteLine(W[i]);

		    End For;

		    Debug.Unindent;

		    // Выполняем нормирование
		 весовых коэффициентов дней недели

		    CENS.NormalizeDailyWeights;

		    // Выводим значения весовых коэффициентов дней недели после нормирования

		    Debug.WriteLine("Весовые коэффициенты дней недели после нормирования:");

		    Debug.Indent;

		    W := CENS.DailyWeights;

		    For i := 0 To W.Length - 1 Do

		        Debug.WriteLine(W[i]);

		    End For;

		    Debug.Unindent;

		    // Сохраняем изменения

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены значения
 весовых коэффициентов дней недели до и после нормализации.


См. также:


[IMsCensus2Transform](IMsCensus2Transform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
