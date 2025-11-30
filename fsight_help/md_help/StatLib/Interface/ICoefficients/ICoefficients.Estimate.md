# ICoefficients.Estimate

ICoefficients.Estimate
-


# ICoefficients.Estimate


## Синтаксис


Estimate: Array;


## Описание


Свойство Estimate возвращает
 массив оцененных значений коэффициентов модели.


## Комментарии


Для получения массива значений вероятностей коэффициентов используйте
 свойство [ICoefficients.Probability](ICoefficients.Probability.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    LR: ISmLinearRegress;

	    Intercept: IIntercept;

	    ModelCoefficients: IModelCoefficients;

	    Coefficients: ICoefficients;

	    can, fra: Array[10] Of Double;

	    res, i: Integer;

	Begin

	    LR := New SmLinearRegress.Create;

	    // Задаем значения переменных

	    Can[0] := 6209; fra[0] := 4110;

	    Can[1] := 6385; fra[1] := 4280;

	    Can[2] := 6495; fra[2] := 4459;

	    Can[3] := 6837; fra[3] := 4545;

	    Can[4] := 6495; fra[4] := 4664;

	    Can[5] := 6907; fra[5] := 4861;

	    Can[6] := 7349; fra[6] := 5195;

	    Can[7] := 7213; fra[7] := 5389;

	    Can[8] := 7061; fra[8] := 5463;

	    Can[9] := 7180; fra[9] := 5610;

	    // Задаем объясняемую переменную

	    LR.Explained.Value := can;

	    // Задаем объясняющие переменные

	    LR.Explanatories.Clear;

	    LR.Explanatories.Add.Value := fra;

	    // Обработка пропусков

	    LR.MissingData.Method := MissingDataMethod.LinInterpolation;

	    // Параметры коэффициентов

	    ModelCoefficients := LR.ModelCoefficients;

	    Coefficients := ModelCoefficients.Coefficients;

	    // Параметры константы модели

	    Intercept := ModelCoefficients.Intercept;

	    Intercept.Mode := InterceptMode.AutoEstimate;

	    res := LR.Execute;

	    Debug.WriteLine("=== Коэффициенты модели ===");

	    For i := 0 To Coefficients.Estimate.Length - 1 Do

	        Debug.WriteLine(Coefficients.Estimate[i]);

	    End For;

	    Debug.WriteLine("=== Вероятности коэффициентов ===");

	    For i := 0 To Coefficients.Probability.Length - 1 Do

	        Debug.WriteLine(Coefficients.Probability[i]);

	    End For;

	    Debug.WriteLine("=== Стандартные ошибки коэффициентов ===");

	    For i := 0 To Coefficients.StandardError.Length - 1 Do

	        Debug.WriteLine(Coefficients.StandardError[i]);

	    End For;

	    Debug.WriteLine("=== t-статистики коэффициентов ===");

	    For i := 0 To Coefficients.TStatistic.Length - 1 Do

	        Debug.WriteLine(Coefficients.TStatistic[i]);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведены значения коэффициентов:


=== Коэффициенты модели
 ===


0,675652218575972


=== Вероятности коэффициентов
 ===


3,21885272861033E-04


=== Стандартные ошибки
 коэффициентов ===


0,112530025662791


=== t-статистики коэффициентов
 ===


6,00419501014458


См. также:


[ICoefficients](ICoefficients.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
