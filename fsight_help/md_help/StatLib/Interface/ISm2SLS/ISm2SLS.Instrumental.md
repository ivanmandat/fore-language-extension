# ISm2SLS.Instrumental

ISm2SLS.Instrumental
-


# ISm2SLS.Instrumental


## Синтаксис


Instrumental: [ISlSeries](../ISlSeries/ISlSeries.htm);


## Описание


Свойство Instrumental определяет
 инструментальные переменные.


## Комментарии


Для определения, будет ли использоваться константа в качестве инструментальной
 переменной, используйте свойство [ISm2SLS.UseConstantAsInstrument](ISm2SLS.UseConstantAsInstrument.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    TwoSLS: Sm2SLS;

		    can, fra, ger, jpn, uk: Array[15] Of Double;

		    C: IIntercept;

		    MC: ICoefficients;

		    X: ISlSerie;

		    res,i: Integer;

		Begin

		    // Задаем значения переменных

		    can[00] := Double.Nan; fra[00] := 4110; ger[00] := 3415; jpn[00] := 1475; uk[00] := 5320;

		    can[01] := 6385; fra[01] := 4280; ger[01] := 3673; jpn[01] := 1649; uk[01] := 5484;

		    can[02] := 6752; fra[02] := 4459; ger[02] := 4013; jpn[02] := Double.Nan; uk[02] := 5517;

		    can[03] := 6837; fra[03] := 4545; ger[03] := 4278; jpn[03] := 1884; uk[03] := 5791;

		    can[04] := 6495; fra[04] := 4664; ger[04] := 4577; jpn[04] := 1972; uk[04] := 5971;

		    can[05] := 6907; fra[05] := Double.Nan; ger[05] := 5135; jpn[05] := 2108; uk[05] := Double.Nan;

		    can[06] := 7349; fra[06] := 5195; ger[06] := 5388; jpn[06] := 2249; uk[06] := 6238;

		    can[07] := 7213; fra[07] := 5389; ger[07] := 5610; jpn[07] := 2394; uk[07] := 6322;

		    can[08] := 7061; fra[08] := 5463; ger[08] := Double.Nan; jpn[08] := 2505; uk[08] := 6340;

		    can[09] := 7180; fra[09] := 5610; ger[09] := 6181; jpn[09] := 2714; uk[09] := 6569;

		    can[10] := 7132; fra[10] := 5948; ger[10] := 6633; jpn[10] := 3052; uk[10] := 6813;

		    can[11] := Double.Nan; fra[11] := 6218; ger[11] := 6910; jpn[11] := 3453; uk[11] := 6974;

		    can[12] := 7473; fra[12] := 6521; ger[12] := 7146; jpn[12] := 3666; uk[12] := 6994;

		    can[13] := 7722; fra[13] := 6788; ger[13] := 7248; jpn[13] := 4008; uk[13] := 7220;

		    can[14] := 8088; fra[14] := 7222; ger[14] := 7689; jpn[14] := 4486; uk[14] := Double.Nan;

		    // Создаем модель

		    TwoSLS := New Sm2SLS.Create;

		    // Задаем параметры периода идентификации

		    TwoSLS.ModelPeriod.FirstPoint := 1;

		    TwoSLS.ModelPeriod.LastPoint := 10;

		    // Задаем параметры периода
		 прогнозирования

		    TwoSLS.Forecast.LastPoint := 15;

		    // Используем автоматическую оценку значения константы

		    C:=TwoSLS.ModelCoefficients.Intercept;

		    C.Mode := InterceptMode.AutoEstimate;

		    // Задаем объясняемую переменную

		    TwoSLS.Explained.Value := can;

		    // Задаем объясняющие переменные

		    X:=TwoSLS.Explanatories.Add;

		    X.Value := fra;

		    X.Name:= "fra";

		    X:=TwoSLS.Explanatories.Add;

		    X.Value := ger;

		    X.Name:= "ger";

		    // Используем константы в инструментальных переменных

		    TwoSLS.UseConstantAsInstrument := True;

		    // Задаем инструментальные переменные

		    TwoSLS.Instrumental.Add.Value := jpn;

		    TwoSLS.Instrumental.Add.Value := uk;

		    // Задаем метод обработки пропусков

		    TwoSLS.MissingData.Method := MissingDataMethod.AnyValue;

		    // Выполняем расчёт и выводим результаты

		    res := TwoSLS.Execute;

		    If res <> 0 Then

		        Debug.WriteLine(TwoSLS.Errors);

		    Else

		        Debug.WriteLine(" === Коэффициенты модели ===");

		        Debug.WriteLine("Константа: " + C.Estimate.ToString);

		        MC := TwoSLS.ModelCoefficients.Coefficients;

		        For i := 0 To MC.Estimate.Length - 1 Do

		            Debug.WriteLine(TwoSLS.Explanatories.Item(i).Name + ": " + MC.Estimate[i].ToString);

		        End For;

		        Debug.WriteLine(" === Описательные статистики === ");

		        Debug.WriteLine("Коэффициент детерминации: " + TwoSLS.SummaryStatistics.R2.ToString);

		        Debug.WriteLine("Сумма квадратов остатков: " + TwoSLS.SummaryStatistics.SSR.ToString);

		        Debug.WriteLine("Стандартная ошибка регрессии: " + TwoSLS.SummaryStatistics.SE.ToString);

		        Debug.WriteLine("");

		        Debug.WriteLine(" === Остатки модели === ");

		        For i := 0 To TwoSLS.Residuals.Length - 1 Do

		            Debug.WriteLine(i.ToString + " " + TwoSLS.Residuals[i].ToString);

		        End For;

		        Debug.WriteLine(" === Модельный ряд === ");

		        For i := 0 To TwoSLS.Fitted.Length - 1 Do

		            Debug.WriteLine(i.ToString + " " + TwoSLS.Fitted[i].ToString);

		        End For;

		        Debug.WriteLine(" === Прогнозный ряд === ");

		        For i := 10 To TwoSLS.Forecast.Value.Length - 1 Do

		            Debug.WriteLine(i.ToString + " " + TwoSLS.Forecast.Value[i].ToString);

		        End For;

		    End If;

		End Sub UserProc;


В результате выполнения примера будет создана и рассчитана модель линейной
 регрессии заданной спецификации. Для оценки коэффициентов используется
 двухшаговый метод наименьших квадратов. Результаты расчёта будут выведены
 в окно консоли.


См. также:


[ISm2SLS](ISm2SLS.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
