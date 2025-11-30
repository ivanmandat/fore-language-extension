# ISlAnalysis.StandartizationCoefficients

ISlAnalysis.StandartizationCoefficients
-


# ISlAnalysis.StandartizationCoefficients


## Синтаксис


StandartizationCoefficients: Array;


## Описание


Свойство StandartizationCoefficients
 определяет коэффициенты стандартизации.


## Комментарии


Количество коэффициентов должно совпадать с количеством изучаемых рядов
 данных (переменных). Коэффициенты будут рассчитаны только для типов анализов
 «Корреляционная матрица исходных данных»
 и «Стандартизированная матрица исходных
 данных» ([ISlAnalysis.Type](ISlAnalysis.Type.htm)).
 Если используется тип анализа «Стандартизированная
 матрица исходных данных», то данные коэффициенты можно задавать.


## Пример


Добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    pc: SmPrincipalComponentAnalysis;

	    Obj: ISlSeries;

	    d0, d1, d2: Double;

	    i, res: Integer;

	    ar1, ar2, ar3, sc: Array Of Double;

	    Analysis: ISlAnalysis;

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

	    Analysis := pc.Analysis;

	    Analysis.Type := AnalysisType.Standardised;

	    sc := New Double[3];

	    sc[0] := 1.2;

	    sc[1] := 2.5;

	    sc[2] := 3.2;

	    Analysis.StandartizationCoefficients := sc;

	    pc.ScoreType := PCAScoreType.Stand;

	    res := pc.Execute;

	    If res <> 0 Then

	        Debug.WriteLine(pc.Errors);

	    Else

	        Debug.WriteLine("Собственные векторы:");

	        For i := 1 To 3 Do

	            d0 := pc.P[0, i - 1];

	            d1 := pc.P[1, i - 1];

	            d2 := pc.P[2, i - 1];

	            Debug.AssertMsg(False, "Главная компонента №" + i.ToString + ": " +

	                d0.ToString + " " + d1.ToString + " " + d2.ToString);

	        End For;

	        Debug.WriteLine("================================");

	        Debug.WriteLine("Значения главных компонент:");

	        Debug.AssertMsg(False, "Главная компонента №1, №2, №3");

	        For i := 1 To pc.v.GetUpperBound(1) + 1 Do

	            d0 := pc.V[i - 1, 0];

	            d1 := pc.V[i - 1, 1];

	            d2 := pc.V[i - 1, 2];

	            Debug.AssertMsg(False, "Наблюдение №" + i.ToString + ": " +

	                d0.ToString + " " + d1.ToString + " " + d2.ToString);

	        End For;

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения собственных
 векторов и значения главных компонент:


Выполнение модуля начато

Собственные векторы:

Главная компонента №1: -0.92077649209595513 -0.35985195392551339 0.15058958416656218

Главная компонента №2: 0.20622323551290711 -0.12135686560426749 0.97095030166599983

Главная компонента №3: -0.33112328329197255 0.92508328404889983 0.18595238324701854

================================

Значения главных компонент:

Главная компонента №1, №2, №3

Наблюдение №1: -0.060809859614934327 -0.2454876177488676 0.028147225845809285

Наблюдение №2: 0.66860029745174931 0.19162338500533929 0.034715532141783134

Наблюдение №3: 0.18618054751448709 -0.061246236909666622 0.045741724414850318

Наблюдение №4: -0.34316225847182846 -0.44822528387430632 0.30484156623651032

Наблюдение №5: -0.23843388081487207 0.26394983999230748 0.28784386374366361

Наблюдение №6: 0.079280509769494828 0.48518379140398377 -0.28313931560677952

Наблюдение №7: 0.35156470563011327 -0.3579537004102874 0.17276430429903653

Наблюдение №8: -0.41537910325207889 0.44504416372953226 0.1146060944483282

Наблюдение №9: -0.037687730971773109 -0.01426133822207557 0.12057760466810775

Наблюдение №10: -0.19015322724035691 -0.25862700296595931 -0.82609860019130865

Выполнение модуля завершено


См. также:


[ISlAnalysis](ISlAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
