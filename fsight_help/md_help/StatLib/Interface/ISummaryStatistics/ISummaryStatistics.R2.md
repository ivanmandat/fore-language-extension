# ISummaryStatistics.R2

ISummaryStatistics.R2
-


# ISummaryStatistics.R2


## Синтаксис


R2: Double;


## Описание


Свойство R2 возвращает коэффициент
 детерминации.


## Комментарии


Данный коэффициент определяет долю вариации зависимой переменной, обусловленную
 изменением экзогенных переменных.


## Пример


Для выполнения пример добавьте ссылку на системную сборку Stat.


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

    Debug.Write("Коэффициент детерминации: ");

    Debug.WriteLine(ss.R2);

    Debug.Write("Коэффициент детерминации (нецентрированный): ");

    Debug.WriteLine(ss.R2_2);

    Debug.Write("Информационный критерий Шварца: ");

    Debug.WriteLine(ss.SC);

    Debug.Write("Стандартное отклонение зависимой переменной: ");

    Debug.WriteLine(ss.SD);

    Debug.Write("Стандартная ошибка: ");

    Debug.WriteLine(ss.SE);

    Debug.Write("Стандартное отклонение остатков: ");

    Debug.WriteLine(ss.SEE);

    Debug.Write("Сумма квадратов остатков отклонений исходных данных от модельных: ");

    Debug.WriteLine(ss.SSR);

    Debug.Write("Дисперсия остатков: ");

    Debug.WriteLine(ss.VE);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены статистические
 характеристики:


	- Значение коэффициента детерминации;


	- Значение коэффициента детерминации (нецентрированный);


	- Информационный критерий Шварца;


	- Стандартное отклонение зависимой переменной;


	- Стандартная ошибка;


	- Стандартное отклонение остатков;


	- Сумма квадратов остатков отклонений исходных данных от модельных;


	- Дисперсия остатков.


См. также:


[ISummaryStatistics](ISummaryStatistics.htm)
 | [Коэффициент
 детерминации](Lib.chm::/05_Statistics/UiModellind_DetermCoeff_R2.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
