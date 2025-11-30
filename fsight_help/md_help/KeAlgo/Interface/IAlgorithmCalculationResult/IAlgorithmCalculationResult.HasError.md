# IAlgorithmCalculationResult.HasError

IAlgorithmCalculationResult.HasError
-


# IAlgorithmCalculationResult.HasError


## Синтаксис


HasError: Boolean;


## Описание


Свойство HasError возвращает
 признак возникновения ошибок при расчёте алгоритма.


## Комментарии


Допустимые значения:


	- True. При расчёте алгоритма
	 возникли ошибки;


	- False. При расчёте алгоритма
	 не возникли ошибки.


Список сообщений об ошибках задается с помощью метода [IMsProblemCalculationCallback.OnError](kems.chm::/interface/imsproblemcalculationcallback/imsproblemcalculationcallback.onerror.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории готового
 алгоритма расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны
 содержаться настроенные объекты.


Добавьте ссылки на системные сборки: Algo, Collections, Metabase. Также
 добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    CalcResult: IAlgorithmCalculationResult;

	    i: Integer;

	    Errors: IStringList;

	    Error: String;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Выполним расчёт алгоритма

	    CalcResult := CalcAlgo.Calculate;

	    // Выполним проверку на наличие ошибок при расчёте алгоритма

	    If CalcResult.HasError Then

	        Errors := CalcResult.Errors;

	        For i := 0 To Errors.Count-1 Do

	            Error := Errors.Item(i);

	            // Выведем в консоль сообщение об ошибке

	            Debug.WriteLine(Error);

	        End For;

	    End If;

	End Sub UserProc;


В результате выполнения примера будет рассчитан алгоритм расчёта. При
 возникновении ошибок в расчёте в консоль будут выведены сообщения об ошибках.


См. также:


[IAlgorithmCalculationResult](IAlgorithmCalculationResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
