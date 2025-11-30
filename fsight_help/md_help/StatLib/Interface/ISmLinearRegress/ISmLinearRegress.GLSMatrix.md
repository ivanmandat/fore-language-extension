# ISmLinearRegress.GLSMatrix

ISmLinearRegress.GLSMatrix
-


# ISmLinearRegress.GLSMatrix


## Синтаксис


GLSMatrix: Array;


## Описание


Свойство GLSMatrix определяет
 матрицу ковариаций для обобщенного метода наименьших квадратов.


## Комментарии


Матрица ковариаций должна быть симметричной и положительно определенной.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    OLS: ISmLinearRegress;

    can, fra, ger: Array[10] Of Double;

    omega: Array[10, 10] Of Double;

    res: Integer;

Begin

    OLS := New SmLinearRegress.Create;

    // задаем значения переменных

    can[0] := 6209; fra[0] := 4110; ger[0] := 3415;

    can[1] := 6385; fra[1] := 4280; ger[1] := 3673;

    can[2] := Double.Nan; fra[2] := 4459; ger[2] := 4013;

    can[3] := 6837; fra[3] := 4545; ger[3] := 4278;

    can[4] := 6495; fra[4] := 4664; ger[4] := 4577;

    can[5] := 6907; fra[5] := 4861; ger[5] := 5135;

    can[6] := 7349; fra[6] := 5195; ger[6] := 5388;

    can[7] := 7213; fra[7] := 5389; ger[7] := 5610;

    can[8] := 7061; fra[8] := 5463; ger[8] := 5787;

    can[9] := 7180; fra[9] := 5610; ger[9] := 6181;

    omega[1, 1] := 0;

    omega[2, 2] := 0;

    omega[5, 5] := 0;

    // параметры периода идентификации

    OLS.ModelPeriod.FirstPoint := 1;

    OLS.ModelPeriod.LastPoint := 10;

    // выбор объясняемой переменной

    OLS.Explained.Value := can;

    // выбор регрессоров

    OLS.Explanatories.Clear;

    OLS.Explanatories.Add.Value := fra;

    OLS.Explanatories.Add.Value := ger;

    // параметры коэффициентов модели

    OLS.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    // метод обработки пропусков

    OLS.MissingData.Method := MissingDataMethod.LinTrend;

    // признак использования весов

    OLS.UseWeights := True;

    // задание матрицы ковариаций для обобщенного МНК

    OLS.GLSMatrix := omega;

    // тип МНК

    OLS.LSType := LRLSType.GLS;

    res := OLS.Execute;

    Debug.WriteLine(OLS.Errors);

    Debug.WriteLine("Статистические характеристики");

    Debug.Indent;

    Debug.WriteLine("Статистика Фишера: " + OLS.SummaryStatistics.Fstat.ToString);

    Debug.WriteLine("Вероятность для статистики Фишера: " + OLS.SummaryStatistics.ProbFstat.ToString);

    Debug.Unindent;

End Sub UserProc;


В результате выполнения примера заданы настройки:


	- период идентификации;


	- метод обработки пропусков;


	- параметры коэффициентов модели;


	- матрица ковариаций для обобщенного МНК;


	- тип МНК.


В окно консоли выведены статистические характеристики.


См. также:


[ISmLinearRegress](ISmLinearRegress.htm) | [Метод
 наименьших квадратов](Lib.chm::/01_Regression_models/UiModelling_LinearRegr_LSM.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
