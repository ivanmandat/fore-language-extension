# ISmPrincipalComponentAnalysis.Weights

ISmPrincipalComponentAnalysis.Weights
-


# ISmPrincipalComponentAnalysis.Weights


## Синтаксис


Weights: Array;


## Описание


Свойство Weights задает весовые
 коэффициенты для наблюдений.


## Комментарии


Количество коэффициентов должно совпадать с количеством наблюдений.
 Веса являются необязательным параметром метода.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    pc: SmPrincipalComponentAnalysis;

    Obj: ISlSeries;

    d0, d1, d2: Double;

    i, res: Integer;

    ar1,ar2,ar3, wt: Array Of Double;

Begin

    pc := New SmPrincipalComponentAnalysis.Create;

    pc.MissingData.Method := MissingDataMethod.AnyValue;

    ar1 := New Double[10];

    ar2 := New Double[10];

    ar3 := New Double[10];

    // значения ar1, ar2, ar3

    ar1[0] := 7.0000; ar2[0] := 4.0000; ar3[0] := 3.0000;

    ar1[1] := 4.0000; ar2[1] := 1.0000; ar3[1] := 8.0000;

    ar1[2] := 6.0000; ar2[2] := 3.0000; ar3[2] := 5.0000;

    ar1[3] := 8.0000; ar2[3] := 6.0000; ar3[3] := 1.0000;

    ar1[4] := 8.0000; ar2[4] := 5.0000; ar3[4] := 7.0000;

    ar1[5] := 7.0000; ar2[5] := 2.0000; ar3[5] := 9.0000;

    ar1[6] := 5.0000; ar2[6] := 3.0000; ar3[6] := 3.0000;

    ar1[7] := 9.0000; ar2[7] := 5.0000; ar3[7] := 8.0000;

    ar1[8] := 7.0000; ar2[8] := 4.0000; ar3[8] := 5.0000;

    ar1[9] := 8.0000; ar2[9] := 2.0000; ar3[9] := 2.0000;

    Obj := pc.Objects;

    Obj.Add.Value := ar1;

    Obj.Add.Value := ar2;

    Obj.Add.Value := ar3;

    wt := New Double[10]; // весовые коэффициенты

    For i := 0 To 9 Do

        If i Mod 2 = 0 Then

            wt[i] := 1;

        Else

            wt[i] := 0.95;

        End If;

    End For;

    pc.Weights := wt;

    pc.Analysis.Type := AnalysisType.Correlation;

    pc.ScoreType := PCAScoreType.Stand;

    res := pc.Execute;

    If res <> 0 Then

        Debug.WriteLine(pc.Errors);

    Else

        Debug.WriteLine("Собственные вектора: ");

        For i := 1 To 3 Do

            d0 := pc.P[0, i - 1];

            d1 := pc.P[1, i - 1];

            d2 := pc.P[2, i - 1];

            Debug.AssertMsg(False, "Главная компонента №" + i.ToString + ": " + d0.ToString + " " + d1.ToString + " " + d2.ToString);

        End For;

        Debug.WriteLine("================================");

        Debug.WriteLine("Значения главных компонент: ");

        Debug.AssertMsg(False, "Главная компонента №1, №2, №3");

        For i := 1 To pc.v.GetUpperBound(1) + 1 Do

            d0 := pc.V[i - 1, 0];

            d1 := pc.V[i - 1, 1];

            d2 := pc.V[i - 1, 2];

            Debug.AssertMsg(False, "Наблюдение №" + i.ToString + ": " + d0.ToString + " " + d1.ToString + " " + d2.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены собственные вектора
 и значения главных компонент:


Module execution started


Собственные вектора:


Главная компонента №1: 0.64450881386247971 0.68855451999505823
 -0.33241699993826251


Главная компонента №2: 0.37911437498903555 0.089765871545993331
 0.92098554765113538


Главная компонента №3: -0.66398846340147588 0.71960736606844389
 0.20318602109836198


================================


Значения главных компонент:


Главная компонента №1, №2, №3


Наблюдение №1: 0.13006536097340241 -0.22190655148864824
 0.016285709534939768


Наблюдение №2: -0.66440396531647949 0.032786175253055133
 0.1963424906612698


Наблюдение №3: -0.15063497693809266 -0.098209325481139184
 0.092926036870298018


Наблюдение №4: 0.50930046185861055 -0.31735151244028315
 0.21569341883726184


Наблюдение №5: 0.22853629504385942 0.34767954536328649
 0.20822666136800155


Наблюдение №6: -0.26871438533312098 0.42043848101885262
 -0.27138565171490181


Наблюдение №7: -0.19808349593322169 -0.41669298564898205
 0.27216357430806148


Наблюдение №8: 0.29859926451976554 0.53667407692911584
 -0.015375005296917404


Наблюдение №9: 0.069322226359723085 0.0091878894644997974
 0.10581280259107982


Наблюдение №10: 0.043955588750368729 -0.28273554078686675
 -0.83875576728053658


Module execution finished


См. также:


[ISmPrincipalComponentAnalysis](ISmPrincipalComponentAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
