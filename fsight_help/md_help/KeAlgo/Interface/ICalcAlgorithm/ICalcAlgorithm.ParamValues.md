# ICalcAlgorithm.ParamValues

ICalcAlgorithm.ParamValues
-


# ICalcAlgorithm.ParamValues


## Синтаксис


ParamValues: [IAlgorithmParameterValues](../IAlgorithmParameterValues/IAlgorithmParameterValues.htm);


## Описание


Свойство ParamValues возвращает
 настройки начала и окончания периода расчёта алгоритма и коллекцию [параметров
 алгоритма расчёта](CalculationAlgorithm.chm::/Desktop/Work/Set_up_calculation_parameters.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны содержаться
 объекты для расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 [ссылку на сборку](../../Intro/KeAlgo_Programming.htm), необходимую
 для работы с алгоритмом расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    Params: IAlgorithmParameterValues;

	    SDate, EDate: DateTime;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим настройки начала и окончания периода расчёта алгоритма

	    Params := CalcAlgo.ParamValues;

	    // Определим даты начала и окончания расчёта алгоритма

	    SDate := DateTime.Parse("15.10.2020");

	    EDate := DateTime.Parse("30.10.2020");

	    // Проверим, входят ли даты в допустимый диапазон дат

	    If (SDate > Params.MinAllowDate) And (EDate < Params.EndDate) Then

	        // Зададим даты начала и окончания расчёта алгоритма

	        Params.StartDate := SDate;

	        Params.EndDate := EDate;

	    End If;

	    // Выполним расчёт алгоритма

	    CalcAlgo.Calculate;

	End Sub UserProc;


В результате выполнения примера будут рассчитаны объекты алгоритма расчёта
 на период с 15.10.2020 по 30.10.2020.


См. также:


[ICalcAlgorithm](ICalcAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
