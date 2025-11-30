# IAlgorithmCalculationResult.HasWarnings

IAlgorithmCalculationResult.HasWarnings
-


# IAlgorithmCalculationResult.HasWarnings


## Синтаксис


HasWarnings: Boolean;


## Описание


Свойство HasWarnings возвращает
 признак возникновения предупреждений при расчёте алгоритма.


## Комментарии


Допустимые значения:


	- True. При расчёте алгоритма
	 возникли предупреждения;


	- False. При расчёте алгоритма
	 не возникли предупреждения.


Список сообщений о предупреждениях задается с помощью метода [IMsProblemCalculationCallback.OnWarning](kems.chm::/interface/imsproblemcalculationcallback/imsproblemcalculationcallback.onwarning.htm).


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

	    Warnings: IStringList;

	    Warning: String;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Выполним расчёт алгоритма

	    CalcResult := CalcAlgo.Calculate;

	    // Выполним проверку на наличие предупреждений при расчёте алгоритма

	    If CalcResult.HasWarnings Then

	        Warnings := CalcResult.Errors;

	        For i := 0 To Warnings.Count-1 Do

	            Warning := Warnings.Item(i);

	            // Выведем в консоль список предупреждений

	            Debug.WriteLine(Warning);

	        End For;

	    End If;

	End Sub UserProc;


В результате выполнения примера будет рассчитан алгоритм расчёта. При
 возникновении предупреждений в расчёте в консоль будет выведен список
 предупреждений.


См. также:


[IAlgorithmCalculationResult](IAlgorithmCalculationResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
