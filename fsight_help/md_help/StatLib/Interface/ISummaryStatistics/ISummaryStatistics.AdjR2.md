# ISummaryStatistics.AdjR2

ISummaryStatistics.AdjR2
-


# ISummaryStatistics.AdjR2


## Синтаксис


AdjR2: Double;


## Описание


Свойство AdjR2 возвращает скорректированный
 коэффициент детерминации.


## Комментарии


Предпочтительней модель с наибольшим значением критерия.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    LinearR: SmLinearRegress;

    can, fr: Array[9] Of Double;

    res, i: Integer;

    Con: IIntercept;

    ss: ISummaryStatistics;

Begin

    LinearR := New SmLinearRegress.Create;

    For i := 0 To 8 Do

        can[i] := 1230 + i * 302;

        fr[i] := 579.5 + i * 9.4;

    End For;

    // Задаем параметры модели

    LinearR.Explained.Value := can;

    LinearR.Explanatories.Add.Value := fr;

    Con := LinearR.ModelCoefficients.Intercept;

    con.Mode := InterceptMode.ManualEstimate;

    con.Estimate := 35.7;

    // Выполняем расчёт

    res := LinearR.Execute;

    ss := LinearR.SummaryStatistics;

    Debug.Write("Скорректированный коэффициент детерминации: ");

    Debug.WriteLine(ss.AdjR2);

    Debug.Write("Скорректированный коэффициент детерминации (нецентрированный): ");

    Debug.WriteLine(ss.AdjR2_2);

    Debug.Write("Информационный критерий Акаике: ");

    Debug.WriteLine(ss.AIC);

    Debug.Write("Среднее логарирфма функции правдоподобия: ");

    Debug.WriteLine(ss.AvgLogL);

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены статистические
 характеристики:


	- Скорректированный коэффициент детерминации;


	- Скорректированный коэффициент детерминации (нецентрированный);


	- Информационный критерий Акаике;


	- Среднее логарифма функции правдоподобия.


См. также:


[ISummaryStatistics](ISummaryStatistics.htm)
 | [Скорректированный
 коэффициент детерминации](Lib.chm::/05_Statistics/UiModellind_DetermCoeff_AdjR2.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
