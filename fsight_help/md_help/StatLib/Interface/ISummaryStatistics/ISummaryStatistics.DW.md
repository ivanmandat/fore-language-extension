# ISummaryStatistics.DW

ISummaryStatistics.DW
-


# ISummaryStatistics.DW


## Синтаксис


DW: Double;


## Описание


Свойство DW возвращает статистику
 Дарбина-Уотсона.


## Комментарии


Данная статистика отображает наличие или отсутствие корреляции по времени
 в ошибках системы.


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

    Debug.Write("Статистика Дарбина-Уотсона: ");

    Debug.WriteLine(ss.DW);

    Debug.Write("Вероятность для нижней границы интервала статистики
 Дарбина-Уотсона: ");

    Debug.WriteLine(ss.DWLowerBound);

    Debug.Write("Вероятность для верхней границы интервала статистики
 Дарбина-Уотсона: ");

    Debug.WriteLine(ss.DWUpperBound);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены статистические
 характеристики:


	- значение статистики Дарбина-Уотсона;


	- вероятность для нижней границы интервала статистики Дарбина-Уотсона;


	- вероятность для верхней границы интервала статистики Дарбина-Уотсона.


См. также:


[ISummaryStatistics](ISummaryStatistics.htm)
 | [Тест
 Дарбина-Уотсона](Lib.chm::/05_Statistics/UiModelling_DurbinW.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
