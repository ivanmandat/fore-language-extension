# ISummaryStatistics.LogL

ISummaryStatistics.LogL
-


# ISummaryStatistics.LogL


## Синтаксис


LogL: Double;


## Описание


Свойство LogL возвращает логарифм функции правдоподобия.


## Комментарии


Используется в тестах регрессионной модели на наличие избыточных или пропущенных переменных.


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

    Debug.Write("Логарифм функции правдоподобия: ");

    Debug.WriteLine(ss.LogL);

    Debug.Write("Остаток логарифма функции правдоподобия: ");

    Debug.WriteLine(ss.RestrLogL);

    Debug.Write("р-значение вероятности для LR-статистики: ");

    Debug.WriteLine(ss.LRprobability);

    Debug.Write("LR-статистика: ");

    Debug.WriteLine(ss.LRstatistic);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены статистические характеристики:


-
Логарифм функции правдоподобия;


-
Остаток логарифма функции правдоподобия;


-
р-значение вероятности для LR-статистики;


-
Значение LR-статистики.


См. также:


[ISummaryStatistics](ISummaryStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
