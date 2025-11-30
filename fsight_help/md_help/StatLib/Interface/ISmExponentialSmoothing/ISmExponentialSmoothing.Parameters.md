# ISmExponentialSmoothing.Parameters

ISmExponentialSmoothing.Parameters
-


# ISmExponentialSmoothing.Parameters


## Синтаксис


Parameters: [IExponentialSmoothingParameters](../IExponentialSmoothingParameters/IExponentialSmoothingParameters.htm);


## Описание


Свойство Parameters определяет
 параметры метода. Использование того или иного параметра зависит от выбранного
 типа тренда и сезонного эффекта.


		 Сезонный эффект


		 Нет
		 Аддитивная
		 Мультипликативная


		 Характер

тренда
		 Нет

		 Delta
		 Delta


		 Линейный (аддитивный)
		 Gamma
		 Delta

Gamma
		 Delta

Gamma


		 Экспоненциальный

(мультипликативный)
		 Gamma
		 Delta

Gamma
		 Delta

Gamma


		 Затухающий
		 Gamma

Phi
		 Delta

Phi
		 Delta

Phi


Параметр Alpha присутствует во всех перечисленных моделях.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: SmExponentialSmoothing;

    serie: Array Of Double;

    status: Integer;

    Params: IExponentialSmoothingParameters;

    Seasonal: ISesonal;

    Stat: Double;

Begin

    Method := New SmExponentialSmoothing.Create;

    serie := New Double[15];

    serie[0] := 670.2000183;

    serie[1] := 576.0680563;

    serie[2] := 717.6484268;

    serie[3] := 856.9105808;

    serie[4] := 885.4609516;

    serie[5] := 1011.846431;

    serie[6] := 995.4496292;

    serie[7] := 1064.74221;

    serie[8] := 1033.324656;

    serie[9] := 780.8584552;

    serie[10] := 657.5033113;

    serie[11] := 654.5472579;

    serie[12] := 678.2380139;

    serie[13] := 642.4128544;

    serie[14] := 751.9611194;

    Method.Serie.Value := serie;

    Method.Forecast.LastPoint := 40;

    Seasonal := Method.SeasonalComponent;

    Seasonal.Mode := SeasonalityType.Additive;

    Seasonal.Cycle := 4;

    Method.TrendComponent := TrendType.Linear;

    Params := Method.Parameters;

    Params.Alpha := 0.15;

    Params.Delta := 0.2;

    Params.Gamma := 0.15;

    status := Method.Execute;

    If status <> 0 Then

        Debug.WriteLine(Method.Errors);

    Else

        Debug.WriteLine("=== Модельный ряд ===");

        Print(Method.Fitted);

        Debug.WriteLine("=== Ряд остатков ===");

        Print(Method.Residuals);

        Stat := Method.SummaryStatistics.DW;

        Debug.WriteLine(Stat.ToString);

        Debug.WriteLine("=== Среднее остатков === ");

        Stat := Method.SummaryStatistics.ME;

        Debug.WriteLine(Stat.ToString);

    End If;

End Sub UserProc;


Sub Print(Data: Array Of Double);

Var

    i: Integer;

    CI: ICultureInfo;

Begin

    CI := CultureInfo.Current;

    Debug.WriteLine("---Begin---");

    For i := 0 To Data.Length - 1 Do

        If Double.IsNan(Data[i]) Then

            Debug.WriteLine("---empty---");

        Else

            Debug.WriteLine(i.ToString + ", " + CI.FormatDoublePrec(Data[i], 4));

        End If;

    End For;

    Debug.WriteLine("---End---");

End Sub Print;


После выполнения примера в окно консоли будут выведены модельный ряд
 и ряд остатков:


Выполнение модуля начато


=== Модельный ряд ===


---Begin---


0, 742,8220


1, 656,8905


2, 641,9241


3, 720,0669


4, 769,5030


5, 716,0377


6, 798,2265


7, 921,7657


8, 956,0445


9, 943,4012


10, 945,8138


11, 982,1126


12, 980,6231


13, 845,9420


14, 795,5858


---End---


=== Ряд остатков ===


---Begin---


0, -72,6220


1, -80,8224


2, 75,7243


3, 136,8437


4, 115,9580


5, 295,8087


6, 197,2232


7, 142,9765


8, 77,2802


9, -162,5427


10, -288,3104


11, -327,5653


12, -302,3851


13, -203,5291


14, -43,6247


---End---


=== Статистика Дарбина-Уотсона ===


0.340927926836332


=== Среднее остатков ===


-29.305807568271


Выполнение модуля завершено


См. также:


[ISmExponentialSmoothing](ISmExponentialSmoothing.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
