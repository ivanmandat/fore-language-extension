# ISummaryStatistics.HQcriterion

ISummaryStatistics.HQcriterion
-


# ISummaryStatistics.HQcriterion


## Синтаксис


HQcriterion: Double;


## Описание


Свойство HQcriterion возвращает
 HQ-критерий.


## Комментарии


Для получения информационного критерия Акаике используйте свойство [ISummaryStatistics.AIC](ISummaryStatistics.AIC.htm).


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

    Debug.Write("HQ-критерий: ");

    Debug.WriteLine(ss.HQcriterion);

    Debug.Write("Число наблюдений, фактически используемых для построения модели: ");

    Debug.WriteLine(ss.IncludedObservations);

    Debug.Write("J-статистики: ");

    Debug.WriteLine(ss.Jstat);

    Debug.Write("Вероятность J-статистики: ");

    Debug.WriteLine(ss.ProbJstat);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены статистические
 характеристики:


	- HQ-критерий;


	- Число наблюдений, фактически используемых для построения модели;


	- Значение J-статистики;


	- Значение вероятности J-статистики.


См. также:


[ISummaryStatistics](ISummaryStatistics.htm)
 | [Информационный
 критерий Ханнана-Куина (HQ-критерий)](Lib.chm::/05_Statistics/Information_Criteria.htm#hq)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
