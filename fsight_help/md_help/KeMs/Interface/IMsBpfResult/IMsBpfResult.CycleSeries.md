# IMsBpfResult.CycleSeries

IMsBpfResult.CycleSeries
-


# IMsBpfResult.CycleSeries


## Синтаксис


		CycleSeries: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


## Описание


Свойство CycleSeries возвращает
 циклическую составляющую исходного ряда.


## Комментарии


С помощью данного интерфейса также можно получить:


	- [IMsBpfResult.NonCyclicalSeries](IMsBpfResult.NonCyclicalSeries.htm).
	 Нециклическая составляющая исходного ряда;


	- [IMsBpfResult.Weights](IMsBpfResult.Weights.htm).
	 Веса.


## Пример


Приведён пользовательский метод расчёта, возвращающий прогнозные значения
 для какого-либо прогнозного метода расчёта.


Добавьте ссылки на системные сборки: Ms, Stat.


					Public Function BpfResult(Result: Variant): ITimeSeries;

		Var

		    BpfRes: IMsBpfResult;

		    Series: ITimeSeries;

		Begin

		    BpfRes := Result As IMsBpfResult;

		    // Выводим наименование метода

		    Debug.WriteLine("Наименование метода: " + BpfRes.BaseMethod.Name);

		    Debug.WriteLine("");

		    // Получаем модельный
		 ряд и выводим его в окно консоли

		    Series := BpfRes.Fitted;

		    Debug.WriteLine("Модельный ряд");

		    Print(Series);

		    // Получаем ряд остатков и выводим его в окно консоли

		    Series := BpfRes.Residuals;

		    Debug.WriteLine("Ряд остатков");

		    Print(Series);

		    // Получаем моделируемый ряд и выводим его в окно консоли

		    Series := BpfRes.TimeSeries;

		    Debug.WriteLine("Моделируемый ряд");

		    Print(Series);

		    // Возвращаем прогнозный ряд

		    Return BpfRes.NonCyclicalSeries;

		End Function BpfResult;


В результате выполнения примера в окно консоли будут выведены результаты
 расчёта фильтра Бакстера-Кинга.


Данный пользовательский метод может быть использован в [детерминированном
 уравнении](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm), в [калькуляторе](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 в анализе временных рядов и в [редакторе выражения](UiNav.chm::/GUI/ExpressionEditor.htm).
 Например, использование пользовательского метода в детерминированном уравнении:


IMSBPFRESULT_CYCLESERIES.BpfResult(Bpf(X1, Null,
 1, 2, 5))


Где:


	- IMSBPFRESULT_CYCLESERIES.
	 Идентификатор модуля, в котором содержится пользовательский метод;


	- BpfResult. Название
	 пользовательского метода;


	- [Bpf](../IModelling/IModelling.Bpf.htm).
	 Метод расчета «Фильтр Бакстера-кинга»;


	- X1. Фактор модели.


См. также:


[IMsBpfResult](IMsBpfResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
