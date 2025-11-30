# IAlgorithmSettings.CheckArithmeticErrors

IAlgorithmSettings.CheckArithmeticErrors
-


# IAlgorithmSettings.CheckArithmeticErrors


## Синтаксис


CheckArithmeticErrors: Boolean;


## Описание


Свойство CheckArithmeticErrors
 определяет признак проверки арифметических операций, используемых в [формулах
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Formula.htm).


## Комментарии


Допустимые значения:


	- True. При расчёте алгоритма
	 выполняется проверка арифметических операций, используемых в формулах
	 расчёта. Если в формуле производится деление на ноль, то будет выдано
	 соответствующее сообщение с указанием формулы расчёта и блока;


	- False. При расчёте алгоритма
	 не выполняется проверка арифметических операций, используемых в формулах
	 расчёта. Если в формуле производится деление на ноль, то рассчитываемые
	 элементы пропускаются и результатом такого расчёта будет пустое значение.


Примечание.
 Проверку арифметических операций можно не выполнять, если [формула
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Formula.htm) задана верно и в результате расчёта допустимо
 содержание пустых значений.


Для получения подробной информации о проверке арифметических операций
 обратитесь к разделу «[Расчёт
 алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm)».


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта созданы и настроены
 различные блоки.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    Settings: IAlgorithmSettings;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим и изменим настройки выполнения расчёта

	    Settings := CalcAlgo.Settings;

	    Settings.CheckArithmeticErrors := True;

	    Settings.MultiThreadedCalc := False;

	    Settings.PointwiseCalc := True;

	    Settings.NonPointwiseCalcMode := MsNonPointwiseCalcMode.CalcBefore;

	    Settings.SaveData := False;

	    // Выполним проверку на наличие изменений в настройках
	 алгоритма расчёта

	    If Settings.IsDirty Then

	        // Сохраним изменения

	        CalcAlgo.SaveObject;

	    End If;

	End Sub UserProc;


В результате выполнения примера будут заданы настройки выполнения расчёта.


См. также:


[IAlgorithmSettings](IAlgorithmSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
