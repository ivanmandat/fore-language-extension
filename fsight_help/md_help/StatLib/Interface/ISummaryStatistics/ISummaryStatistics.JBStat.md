# ISummaryStatistics.JBStat

ISummaryStatistics.JBStat
-


# ISummaryStatistics.JBStat


## Синтаксис


JBStat: Double;


## Описание


Свойство JBStat возвращает значение
 статистики Жака-Бера.


## Комментарии


Критерий Жака-Бера используется для проверки гипотезы о нормальности
 остатков модели.


Для получения значения вероятности статистики Жака-Бера используйте
 свойство [ISummaryStatistics.ProbJBStat](ISummaryStatistics.ProbJBStat.htm).


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

    Con.Mode := InterceptMode.ManualEstimate;

    // Выполняем расчёт

    res := LinearR.Execute;

    ss := LinearR.SummaryStatistics;

    Debug.Write("Cтатистика Жака-Бера: ");

    Debug.WriteLine(ss.JBStat);

    Debug.Write("Вероятность статистики Жака-Бера: ");

    Debug.WriteLine(ss.ProbJBStat);

End Sub UserProc;


После выполнения примера в окно консоли будет выведены значения статистики
 и вероятности статистики Жака-Бера.


См. также:


[ISummaryStatistics](ISummaryStatistics.htm)
 | [Статистика
 Жака-Бера](Lib.chm::/05_Statistics/UiModelling_JarqueBeraStat.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
