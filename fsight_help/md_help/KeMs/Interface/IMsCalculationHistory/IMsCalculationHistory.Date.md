# IMsCalculationHistory.Date

IMsCalculationHistory.Date
-


# IMsCalculationHistory.Date


## Синтаксис


		Date: DateTime;


## Описание


Свойство Date возвращает дату
 создания истории расчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL, содержащего задачу с идентификатором
 PROBLEM_1.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    Hists, HistChild: IMetabaseObjectDescriptors;

		    HistObj, HistObj1: IMetabaseObjectDescriptor;

		    Hist: IMsCalculationHistory;

		    Prob: IMsProblem;

		    Period: IMsForecastingProblem;

		    i, j: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemByIdNamespace("PROBLEM_1",MB.ItemById("KONT_MODEL").Key).Bind;

		    Hists := MObj.Children;

		    Debug.WriteLine(Hists.Count);

		    For i := 0 To Hists.Count - 1 Do

		        Hist := Hists.Item(i).Bind As IMsCalculationHistory;

		        HistObj := Hists.Item(i);

		        HistChild := HistObj.Children;

		        Debug.WriteLine(Hist.Date);

		        Debug.Indent;

		        For j := 0 To HistChild.Count - 1 Do

		            HistObj1 := HistChild.Item(j);

		            Debug.WriteLine(HistObj1.Id+ " | " + HistObj1.Name);

		            If HistObj1.ClassId = MetabaseObjectClass.KE_CLASS_MSPROBLEM Then

		                Prob := HistObj1.Bind As IMsProblem;

		                Period := Prob.Details As IMsForecastingProblem;

		                Debug.Indent;

		                Debug.WriteLine(Period.Period.IdentificationStartDate);

		                Debug.WriteLine(Period.Period.IdentificationEndDate);

		                Debug.WriteLine(Period.Period.ForecastStartDate);

		                Debug.WriteLine(Period.Period.ForecastEndDate);

		                Debug.Unindent;

		            End If;

		        End For;

		        Debug.Unindent;

		    End For;

		End Sub UserProc;


В результате выполнения примера в консоль будут выведены данные по всем
 историям расчёта, сохранённым для задачи моделирования PROBLEM_1. Данные
 включают в себя: дату расчёта, идентификаторы и наименования всех объектов,
 участвующих в расчёте, а также дату начала и окончания периодов идентификации
 и прогнозирования, которые были установлены для задачи при расчёте.


См. также:


[IMsCalculationHistory](IMsCalculationHistory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
