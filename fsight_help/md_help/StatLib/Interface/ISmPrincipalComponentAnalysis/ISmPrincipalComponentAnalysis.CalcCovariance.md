# ISmPrincipalComponentAnalysis.CalcCovariance

ISmPrincipalComponentAnalysis.CalcCovariance
-


# ISmPrincipalComponentAnalysis.CalcCovariance


## Синтаксис


CalcCovariance: [CalcCovarianceType](../../Enums/CalcCovarianceType.htm);


## Описание


Свойство CalcCovariance определяет
 метод расчета стандартного отклонения.


## Комментарии


Значение данного свойства используется, только если тип анализа исходных
 данных выбран «Корреляционная матрица исходных данных» ([ISlAnalysis.Type](../ISlAnalysis/ISlAnalysis.Type.htm)).


По умолчанию расчет стандартного отклонения производится по генеральной
 совокупности (GeneralCovariance).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    pc: SmPrincipalComponentAnalysis;

    Obj: ISlSeries;

    d0, d1, d2: Double;

    i, res: Integer;

    ar1,ar2,ar3: Array Of Double;

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

    pc.Analysis.Type := AnalysisType.Correlation;

    pc.CalcCovariance := CalcCovarianceType.SampleCovariance;

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


Главная компонента №1: 0.64200457634989416 0.68636164136057776
 -0.34166916924798257


Главная компонента №2: 0.38467229168844341 0.097130330134305665
 0.91792860668744924


Главная компонента №3: -0.66321742434359598 0.72074502858973277
 0.20166618906061454


================================


Значения главных компонент:


Главная компонента №1, №2, №3


Наблюдение №1: 0.12903035852981545 -0.21839226959071706
 0.02025485072666143


Наблюдение №2: -0.66669301100579936 0.0217442534129067
 0.19999666028421142


Наблюдение №3: -0.14638086480259591 -0.10060632857139759
 0.094644662986802838


Наблюдение №4: 0.51324074516097307 -0.31491122407391198
 0.22138084765686122


Наблюдение №5: 0.22137977909251411 0.34314958971596865
 0.20643080180376572


Наблюдение №6: -0.27162977083739037 0.41840155766303921
 -0.27021100431677547


Наблюдение №7: -0.19095172298978533 -0.41443860123329074
 0.27083977554578842


Наблюдение №8: 0.29646093774132237 0.54376056232352743
 -0.01319193797809412


Наблюдение №9: 0.068009757606577848 0.0080503305179512527
 0.10711010517240993


Наблюдение №10: 0.047533791504367734 -0.28675787016407545
 -0.83725476188162995


Module execution finished


См. также:


[ISmPrincipalComponentAnalysis](ISmPrincipalComponentAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
