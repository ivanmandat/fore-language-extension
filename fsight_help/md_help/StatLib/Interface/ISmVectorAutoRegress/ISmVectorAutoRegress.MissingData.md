# ISmVectorAutoRegress.MissingData

ISmVectorAutoRegress.MissingData
-


# ISmVectorAutoRegress.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 метод и параметры обработки пропусков.


## Комментарии


По умолчанию обработка пропусков не выполняется.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    VarModel: ISmVectorAutoRegress;

    y1, y2: Array[15] Of Double;

    i, j, res: Integer;

    Eqs: ISlEquations;

    Eq: ISlEquation;

    ARO: Array[2] Of Integer;

Begin

    VarModel := New SmVectorAutoRegress.Create;

    // Задаем значения переменных

    y1[00] := 6209; y1[01] := 6385; y1[02] := 6752;

    y1[03] := 6837; y1[04] := 6495; y1[05] := Double.Nan;

    y1[06] := 7349; y1[07] := 7213; y1[08] := 7061;

    y1[09] := 7180; y1[10] := 7132; y1[11] := Double.Nan;

    y1[12] := 7473; y1[13] := 7722; y1[14] := 8088;

    y2[00] := 4110; y2[01] := 4280; y2[02] := 4459;

    y2[03] := 4545; y2[04] := 4664; y2[05] := 4861;

    y2[06] := 5195;  y2[07] := 5389;  y2[08] := 5463;

    y2[09] := 5610;  y2[10] := 5948;  y2[11] := 6218;

    y2[12] := 6521; y2[13] := 6788; y2[14] := 7222;

    ARO[0] := 1;

    ARO[1] := 2;

    Eqs := VarModel.Equations;

    // Добавляем 1 уравнение

    Eq := Eqs.Add;

    // Определяем параметры исходного ряда

    Eq.Serie.Value := y1;

    // Определяем порядки авторегрессии

    Eq.AutoRegressionOrder := ARO;

    // Определяем параметры прогнозирования

    Eq.Forecast.LastPoint := 43;

    // Определяем параметры константы уравнения

    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

    // Добавляем 2 уравнение

    Eq := Eqs.Add;

    // Определяем параметры исходного ряда

    Eq.Serie.Value := y2;

    // Определяем порядки авторегрессии

    Eq.AutoRegressionOrder := ARO;

    // Определяем параметры константы уравнения

    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

    // Определяем период идентификации

    VarModel.ModelPeriod.FirstPoint := 1;

    VarModel.ModelPeriod.LastPoint := 10;

    // Определяем параметры прогнозирования

    Eq.Forecast.LastPoint := 15;

    // Определяем метод обработки пропусков

    VarModel.MissingData.Method := MissingDataMethod.SampleAverage;

    // Выполняем расчет и выводим результаты

    res := VarModel.Execute;

    If res <> 0 Then

        Debug.WriteLine(VarModel.Errors);

        Else

            For j := 0 To VarModel.Equations.Count - 1 Do

                Debug.Indent;

                Debug.WriteLine("Модельный ряд для уравнения " + j.ToString + " ");

                Debug.Unindent;

                For i := 0 To VarModel.Equations.Item(j).Fitted.Length - 1 Do

                    Debug.WriteLine(VarModel.Equations.Item(j).Fitted[i]);

                End For;

            End For;

            Debug.Indent;

            Debug.WriteLine("VAR - статистики");

            Debug.Unindent;

            Debug.WriteLine("AIC = " + VarModel.VARStatistics.AIC.ToString);

            Debug.WriteLine("LLV = " + VarModel.VARStatistics.LLV.ToString);

            Debug.WriteLine("RC = " + VarModel.VARStatistics.RC.ToString);

            Debug.WriteLine("SC = " + VarModel.VARStatistics.SC.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены модельные ряда
 для уравнений и значения VAR-статистик.


См. также:


[ISmVectorAutoRegress](ISmVectorAutoRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
