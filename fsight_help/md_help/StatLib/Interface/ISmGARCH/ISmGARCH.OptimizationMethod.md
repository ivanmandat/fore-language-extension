# ISmGARCH.OptimizationMethod

ISmGARCH.OptimizationMethod
-


# ISmGARCH.OptimizationMethod


## Синтаксис


OptimizationMethod: [GARCHOptimizationMethod](../../Enums/GARCHOptimizationMethod.htm);


## Описание


Свойство OptimizationMethod
 определяет используемый метод оптимизации.


## Комментарии


По умолчанию используется алгоритм Берндта-Холла-Холла-Хаусмана, т.е.
 OptimizationMethod = GARCHOptimizationMethod.BHHH.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    GARCH: ISmGARCH;

    x: Array[10] Of Double;

    y1, y2: Array[15] Of Double;

    Res: Integer;

Begin

    GARCH := New SmGARCH.Create;

    // Задаем значения переменных

    x[0] := 100; y1[0] := 120; y2[0] := 122;

    x[1] := 111; y1[1] := 125; y2[1] := 127;

    x[2] := 123; y1[2] := 124; y2[2] := 130;

    x[3] := 113; y1[3] := 130; y2[3] := 135;

    x[4] := 119; y1[4] := 133; y2[4] := 140;

    x[5] := 121; y1[5] := 130; y2[5] := 149;

    x[6] := 125; y1[6] := 139; y2[6] := 150;

    x[7] := 131; y1[7] := 140; y2[7] := 155;

    x[8] := 131; y1[8] := 140; y2[8] := 155;

    x[9] := 131; y1[9] := 140; y2[9] := 150;

    y1[10] := 129; y2[10] := 149;

    y1[11] := 139; y2[11] := 150;

    y1[12] := 140; y2[12] := 155;

    y1[13] := 134; y2[13] := 145;

    y1[14] := 140; y2[14] := 165;

    // Задаем объясняемую переменную

    GARCH.Explained.Value := x;

    // Задаем объясняющие переменные

    GARCH.Explanatories.Clear;

    GARCH.Explanatories.Add.Value := y1;

    GARCH.Explanatories.Add.Value := y2;

    // Задаем параметры периодов идентификации и прогноза

    GARCH.ModelPeriod.FirstPoint := 1;

    GARCH.ModelPeriod.LastPoint := 10;

    // Задаем параметры прогнозного ряда

    GARCH.Forecast.LastPoint := 15;

    // Задаем режим определения константы

    GARCH.Intercept.Mode := InterceptMode.AutoEstimate;

    // Задаем метод оптимизации

    GARCH.OptimizationMethod := GARCHOptimizationMethod.BFGS;

    // Выполняем расчёт метода  и выводим результаты

    res := GARCH.Execute;

    Debug.WriteLine("Статистические характеристики:");

    Debug.Indent;

    Debug.WriteLine("Коэффициент детерминации: " + GARCH.SummaryStatistics.R2.ToString);

    Debug.WriteLine("Скорректированный коэффициент детерминации: " + GARCH.SummaryStatistics.AdjR2.ToString);

    Debug.WriteLine("Стандартная ошибка регрессии: " + GARCH.SummaryStatistics.SE.ToString);

    Debug.WriteLine("Сумма квадратов остатков: " + GARCH.SummaryStatistics.SSR.ToString);

    Debug.WriteLine("Статистика Дарбина-Уотсона: " + GARCH.SummaryStatistics.DW.ToString);

    Debug.Unindent;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены статистические
 характеристики


См. также:


[ISmGARCH](ISmGARCH.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
