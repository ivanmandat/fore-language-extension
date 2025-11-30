# ISm2SLS.ARMA

ISm2SLS.ARMA
-


# ISm2SLS.ARMA


## Синтаксис


ARMA: [ISlARMA](../ISlARMA/ISlARMA.htm);


## Описание


Свойство ARMA возвращает параметры
 авторегрессии и скользящего среднего.


## Комментарии


По умолчанию порядки авторегрессии и скользящего среднего не заданы.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    TwoSLS: Sm2SLS;

    can, fra, ger: Array[15] Of Double;

    AR, MA: Array[1] Of Integer;

    C: IIntercept;

    MC:ICoefficients;

    ARMA: ISlARMA;

    res, i: Integer;

Begin

    // Создаем модель

    TwoSLS := New Sm2SLS.Create;

    // Задаем значения переменных

    can[00] := 6209; fra[00] := 4110; ger[00] := 3415;

    can[01] := 6385; fra[01] := 4280; ger[01] := 3673;

    can[02] := 6752; fra[02] := 4459; ger[02] := 4013;

    can[03] := 6837; fra[03] := 4545; ger[03] := 4278;

    can[04] := 6495; fra[04] := 4664; ger[04] := 4577;

    can[05] := 6907; fra[05] := 4861; ger[05] := 5135;

    can[06] := 7349; fra[06] := 5195; ger[06] := 5388;

    can[07] := 7213; fra[07] := 5389; ger[07] := 5610;

    can[08] := 7061; fra[08] := 5463; ger[08] := 6181;

    can[09] := 7180; fra[09] := 5610; ger[09] := 6181;

    can[10] := 7132; fra[10] := 5948; ger[10] := 6633;

    can[11] := 7180; fra[11] := 6218; ger[11] := 6910;

    can[12] := 7473; fra[12] := 6521; ger[12] := 7146;

    can[13] := 7722; fra[13] := 6788; ger[13] := 7248;

    can[14] := 8088; fra[14] := 7222; ger[14] := 7689;

    // Задаем параметры периода идентификации

    TwoSLS.ModelPeriod.FirstPoint := 1;

    TwoSLS.ModelPeriod.LastPoint := 15;

    // Используем автоматическую оценку значения константы

    C:=TwoSLS.ModelCoefficients.Intercept;

    C.Mode := InterceptMode.AutoEstimate;

    // Задаем объясняемую переменную

    TwoSLS.Explained.Value := can;

    // Задаем объясняющие переменные

    TwoSLS.Explanatories.Add.Value := fra;

    TwoSLS.Explanatories.Item(0).Name := "fra";

    // Задаем инструментальные переменные

    TwoSLS.Instrumental.Add.Value := ger;

    ARMA := TwoSLS.ARMA;

    AR[0] := 1;

    ARMA.OrderAR := AR;

    MA[0] := 2;

    ARMA.OrderMA := MA;

    // Задаем максимальное число итераций и точность решения

    ARMA.MaxIteration := 30;

    ARMA.Tolerance := 0.5;

    // Используем лагированные значения объясняемой и объясняющей переменных

    // в качестве дополнительных инструментов

    ARMA.UseARMAasInstrums := True;

    // Выполняем расчёт и выводим результаты

    res := TwoSLS.Execute;

    If res <> 0 Then

        Debug.WriteLine(TwoSLS.Errors);

    Else

        Debug.WriteLine(" === Коэффициенты модели ===");

        Debug.WriteLine("Константа: " + C.Estimate.ToString);

        MC := TwoSLS.ModelCoefficients.Coefficients;

        For i := 0 To MC.Estimate.Length-1 Do

            Debug.WriteLine(TwoSLS.Explanatories.Item(0).Name + ": " + MC.Estimate[i].ToString);

        End For;

        For i := 0 To ARMA.CoefficientsAR.Estimate.Length-1 Do

            Debug.WriteLine("AR(" + AR[i].ToString+"): " + ARMA.CoefficientsAR.Estimate[i].ToString);

        End For;

        For i := 0 To ARMA.CoefficientsMA.Estimate.Length-1 Do

            Debug.WriteLine("MA(" + MA[i].ToString+"): " + ARMA.CoefficientsMA.Estimate[i].ToString);

        End For;

        Debug.WriteLine(" === Описательные статистики === ");

        Debug.WriteLine("Коэффициент детерминации: " + TwoSLS.SummaryStatistics.R2.ToString);

        Debug.WriteLine("Сумма квадратов остатков: " + TwoSLS.SummaryStatistics.SSR.ToString);

        Debug.WriteLine("Стандартная ошибка регрессии: " + TwoSLS.SummaryStatistics.SE.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены коэффициенты
 модели и описательные характеристики.


См. также:


[ISm2SLS](ISm2SLS.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
