# ISmLinearRegress.PDLTermCollection

ISmLinearRegress.PDLTermCollection
-


# ISmLinearRegress.PDLTermCollection


## Синтаксис


PDLTermCollection: [ISlPDLTermCollection](../ISlPDLTermCollection/ISlPDLTermCollection.htm);


## Описание


Свойство PDLTermCollection возвращает
 коллекцию лаговых переменных.


## Комментарии


Каждый элемент коллекции реализован интерфейсом [ISlPDLTerm](../ISlPDLTerm/ISlPDLTerm.htm),
 который позволяет задать лаговую переменную и её параметры.


## Пример


Для выполнения примера необходимо добавить ссылку на системную сборку
 Stat.


        Sub UserProc;

        Var

            Method: SmLinearRegress;

            Factors: ISlSeries;

            Serie, Factor, ger, jpn: Array[20] Of Double;

            PDLTermCollect: ISlPDLTermCollection;

            PDLTerm: ISlPDLTerm;


            Sub Print(Data: Array Of Double);

            Var i: Integer;

                d: Double;

            Begin

                For i := 0 To Data.Length - 1 Do

                    If Double.IsNan(Data[i]) Then

                        Debug.WriteLine(i.ToString + ", ---empty---");

                    Else

                        d := Data[i];

                        Debug.WriteLine(i.ToString + ", " + d.ToString);

                    End If;

                End For;

            End Sub Print;

        Begin


            Method := New SmLinearRegress.Create;


            // объясняемая переменная

            Serie[00] := 6209; Serie[10] := 7132;

            Serie[01] := 6385; Serie[11] := 7137;

            Serie[02] := 6752; Serie[12] := 7473;

            Serie[03] := 6837; Serie[13] := 7722;

            Serie[04] := 6495; Serie[14] := 8088;

            Serie[05] := 6907; Serie[15] := Double.Nan;

            Serie[06] := 7349; Serie[16] := Double.Nan;

            Serie[07] := 7213; Serie[17] := 9064;

            Serie[08] := 7061; Serie[18] := 9380;

            Serie[09] := 7180; Serie[19] := 9746;


            // объясняющая переменная


            Factor[00] := 4110; Factor[10] := 5948;

            Factor[01] := 4280; Factor[11] := 6218;

            Factor[02] := 4459; Factor[12] := 6521;

            Factor[03] := 4545; Factor[13] := 6788;

            Factor[04] := 4664; Factor[14] := 7222;

            Factor[05] := 4861; Factor[15] := 7486;

            Factor[06] := 5195; Factor[16] := 7832;

            Factor[07] := 5389; Factor[17] := 8153;

            Factor[08] := 5463; Factor[18] := 8468;

            Factor[09] := 5610; Factor[19] := 9054;


            // первая лаговая переменная

            ger[00] := 3415; ger[10] := 6633;

            ger[01] := 3673; ger[11] := 6910;

            ger[02] := 4013; ger[12] := 7146;

            ger[03] := 4278; ger[13] := 7248;

            ger[04] := 4577; ger[14] := 7689;

            ger[05] := 5135; ger[15] := 8046;

            ger[06] := 5388; ger[16] := 8143;

            ger[07] := 5610; ger[17] := 8064;

            ger[08] := 5787; ger[18] := 8556;

            ger[09] := 6181; ger[19] := 9177;


            // вторая лаговая переменная

            jpn[00] := 1475; jpn[10] := 3052;

            jpn[01] := 1649; jpn[11] := 3453;

            jpn[02] := 1787; jpn[12] := 3666;

            jpn[03] := 1884; jpn[13] := 4008;

            jpn[04] := 1972; jpn[14] := 4486;

            jpn[05] := 2108; jpn[15] := 4663;

            jpn[06] := 2249; jpn[16] := 5115;

            jpn[07] := 2394; jpn[17] := 5655;

            jpn[08] := 2505; jpn[18] := 6358;

            jpn[09] := 2714; jpn[19] := 6995;


            // задаем объясняемую и объясняющую переменные


        Method.Explained.Value := Serie;

            Factors := Method.Explanatories;

            Factors.Add.Value := Factor;


            // задаем параметры регрессии

            Method.MissingData.Method := MissingDataMethod.LinInterpolation;

            Method.ModelPeriod.LastPoint := 20;

            Method.Forecast.LastPoint := 30;


            // задаем лаговые переменные

            PDLTermCollect := Method.PDLTermCollection;

            If PDLTermCollect.Count > 0 Then

                PDLTermCollect.Clear;

            End If;


            // задаем параметры 1-й лаговой переменной

            PDLTerm := PDLTermCollect.Add;

            PDLTerm.Explanatory.Value := ger;

            PDLTerm.PDLConstraint := PDLConstraintType.Both;

            PDLTerm.PolinomialDegreeP := 4;

            PDLTerm.LagLengthK := 1;


            // задаем параметры 2-й лаговой переменной

            PDLTerm := PDLTermCollect.Add;

            PDLTerm.Explanatory.Value := jpn;

            PDLTerm.PDLConstraint := PDLConstraintType.FarEnd;

            PDLTerm.PolinomialDegreeP := 2;

            PDLTerm.LagLengthK := 2;


            If Method.Execute = 0 Then


            // рассчитываем метод с лаговыми переменными, выводим результаты

                Debug.WriteLine("--- Расчёт с лаговыми переменными ---");

                Debug.WriteLine("");

                Debug.WriteLine("=== Сумма по коэффициентам  ===");

                Debug.WriteLine(PDLTerm.EstimatesSum);

                Debug.WriteLine("=== Сумма стандартных ошибок  ===");

                Debug.WriteLine(PDLTerm.StdErrSum);

                Debug.WriteLine("=== Сумма t-статистик  ===");

                Debug.WriteLine(PDLTerm.TStatSum);

                Debug.WriteLine("=== Значение коэффициентов 1-й лаговой переменной  ===");

                PDLTerm := PDLTermCollect.Item(0);

                Print(PDLTerm.BetaCoefficients.Estimate);

                Debug.WriteLine("=== Значение коэффициентов 2-й лаговой переменной  ===");

                PDLTerm := PDLTermCollect.Item(1);

                Print(PDLTerm.BetaCoefficients.Estimate);


                Debug.WriteLine("=== Модельный ряд ===");

                Print(Method.Fitted);


            // удаляем лаговые переменные

                PDLTermCollect.Remove(0);

                PDLTermCollect.Remove(1);


            // рассчитываем метод без лаговых переменных, выводим результаты

                Method.Execute;

                Debug.WriteLine("");

                Debug.WriteLine("--- Расчёт без лаговых переменных ---");

                Debug.WriteLine("");

                Debug.WriteLine("=== Модельный ряд ===");

                Print(Method.Fitted);

            End If;

        End Sub UserProc;


В примере определяются следующие параметры расчета линейной регрессии:


	- объясняемая, объясняющая две лаговые переменные;


	- для каждой лаговой переменной задан лаг, степень полинома и
	 метод отсечения слагаемых.


Затем метод рассчитывается с лаговыми переменными и без них. Оба раза
 результаты расчета будут выведены в окно консоли:


        --- Расчёт с лаговыми переменными ---


        === Сумма по коэффициентам  ===

        -0,259287376046178

        === Сумма стандартных ошибок  ===

        1,#QNAN

        === Сумма t-статистик  ===

        1,#QNAN

        === Значение коэффициентов 1-й лаговой переменной  ===

        0, -1.7962778395230557E+030

        1, 0

        === Значение коэффициентов 2-й лаговой переменной  ===

        0, -0.72547345120881013

        1, 0.027016101144493737

        2, 0.43916997401813851

        === Модельный ряд ===


        0, ---empty---

        1, ---empty---

        2, 6746.6262960822805

        3, 6705.2419410586554

        4, 6811.0056257257002

        5, 6865.9015751798979

        6, 7292.6256724880859

        7, 7154.7388452839468

        8, 7034.0549816297171

        9, 7019.5326444809853

        10, 7175.7552959831073

        11, 7133.7987951692921

        12, 7493.2677988806945

        13, 7752.1833310759594

        14, 8246.7312273784864

        15, 8412.3662053850512

        16, 8747.7534296460744

        17, 9049.2002280807264

        18, 9295.9170202707646

        19, 9751.2990862005718


        --- Расчёт без лаговых переменных ---


        === Модельный ряд ===

        0, ---empty---

        1, ---empty---

        2, 6613.769915787384

        3, 6773.9117223980902

        4, 6876.8830698908987

        5, 6906.7321402631733

        6, 6883.5744185839867

        7, 6964.012416733297

        8, 7099.7805343158489

        9, 7199.9024146523625

        10, 7212.3379803167554

        11, 7375.27145090251

        12, 7662.7794419466027

        13, 7976.5614721920238

        14, 8075.9943825777045

        15, 8402.5141370048095

        16, 8745.8416724303534

        17, 8884.288279843915

        18, 9302.1786791848208

        19, 9731.6658709754629


См. также:


[ISmLinearRegress](ISmLinearRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
