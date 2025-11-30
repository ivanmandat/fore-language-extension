# ISummaryStatistics.Fstat

ISummaryStatistics.Fstat
-


# ISummaryStatistics.Fstat


## Синтаксис


Fstat: Double;


## Описание


Свойство Fstat возвращает статистику
 Фишера.


## Комментарии


Данная статистика используется для проверки гипотезы о связи между объясняемым
 рядом и регрессорами.


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

    Debug.Write("Статистика Фишера: ");

    Debug.WriteLine(ss.Fstat);

    Debug.Write("Вероятность для статистики Фишера: ");

    Debug.WriteLine(ss.ProbFstat);

    Debug.Write("Статистика Фишера (нецентрированная): ");

    Debug.WriteLine(ss.Fstat_2);

    Debug.Write("Вероятность для статистики Фишера (нецентрированная): ");

    Debug.WriteLine(ss.ProbFstat_2);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены статистические
 характеристики:


	- Значение статистики Фишера;


	- Вероятность для статистики Фишера;


	- Значение статистики Фишера, рассчитанное на основе нецентрированного
	 коэффициента детерминации;


	- Вероятность для статистики Фишера, рассчитанная на основе нецентрированного
	 коэффициента детерминации.


См. также:


[ISummaryStatistics](ISummaryStatistics.htm)
 | [Статистика
 Фишера](Lib.chm::/05_Statistics/UiModelling_Fisher.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
