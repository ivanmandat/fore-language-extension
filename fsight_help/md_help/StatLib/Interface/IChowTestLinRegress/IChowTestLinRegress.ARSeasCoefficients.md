# IChowTestLinRegress.ARSeasCoefficients

IChowTestLinRegress.ARSeasCoefficients
-


# IChowTestLinRegress.ARSeasCoefficients


## Синтаксис


ARSeasCoefficients: [IModelCoefficients](../IModelCoefficients/IModelCoefficients.htm);


## Описание


Свойство ARSeasCoefficients
 возвращает коэффициенты сезонной авторегрессии.


## Комментарии


Коэффициенты рассчитываются, если с помощью свойства [ISmChowTest.ARMA](../ISmChowTest/ISmChowTest.ARMA.htm)
 задан порядок сезонной авторегрессии.


## Пример


Добавьте ссылку на системную сборку Stat.


	Sub ChowTestSeas;

	Var

	    ChowTest: SmChowTest;

	    can, fra, ger: Array[20] Of Double;

	    E: Array Of Double;

	    z: Array[20] Of Integer;

	    res: Integer;

	    LR: IChowTestLinRegress;

	    ARMA: ISlARMA;

	    //Процедура вывода данных

	    Sub Print(Data: Array Of Double);

	    Var

	        i: Integer;

	    Begin

	        Debug.Indent;

	        For i := 0 To Data.Length - 1 Do

	            Debug.Write(i.ToString + ", ");

	            Debug.WriteLine(Data[i]);

	        End For;

	        Debug.Unindent;

	    End Sub Print;

	Begin

	    ChowTest := New SmChowTest.Create;

	    // Задаем значения can, fra, ger, z

	    can[00] := 6209; fra[00] := 4110; ger[00] := 3415; z[00] := 0;

	    can[01] := Double.Nan; fra[01] := 4280; ger[01] := 6385; z[01] := 0;

	    can[02] := 6752; fra[02] := 4459; ger[02] := 6752; z[02] := 0;

	    can[03] := 6837; fra[03] := 4545; ger[03] := 6837; z[03] := 0;

	    can[04] := 6495; fra[04] := 4664; ger[04] := 6495; z[04] := 0;

	    can[05] := Double.Nan; fra[05] := 4861; ger[05] := 6907; z[05] := 0;

	    can[06] := 7349; fra[06] := 5195; ger[06] := 7349; z[06] := 0;

	    can[07] := 7213; fra[07] := 5389; ger[07] := 7213; z[07] := 0;

	    can[08] := 7061; fra[08] := 5463; ger[08] := 7061; z[08] := 0;

	    can[09] := 7180; fra[09] := 5610; ger[09] := 7180; z[09] := 0;

	    can[10] := 7132; fra[10] := 5948; ger[10] := 7132; z[10] := 0;

	    can[11] := 7137; fra[11] := 6218; ger[11] := 7137; z[11] := 0;

	    can[12] := 7473; fra[12] := 6521; ger[12] := 7473; z[12] := 1;

	    can[13] := 7722; fra[13] := 6788; ger[13] := 7722; z[13] := 1;

	    can[14] := Double.Nan; fra[14] := 7222; ger[14] := 8088; z[14] := 1;

	    can[15] := 8516; fra[15] := 7486; ger[15] := 8516; z[15] := 1;

	    can[16] := 8941; fra[16] := 7832; ger[16] := 8941; z[16] := 1;

	    can[17] := 9064; fra[17] := 8153; ger[17] := 9064; z[17] := 1;

	    can[18] := 9380; fra[18] := 8468; ger[18] := 9380; z[18] := 1;

	    can[19] := Double.Nan; fra[19] := 9054; ger[19] := 9746; z[19] := 1;

	    // Задаем значения объясняемой и объясняющих переменных

	    ChowTest.Explained.Value := can;

	    ChowTest.Explanatories.Add.Value := fra;

	    ChowTest.Explanatories.Add.Value := ger;

	    // Задаем группы наблюдений

	    ChowTest.GroupSeparator := z;

	    // Задаем режим определения константы

	    ChowTest.Intercept.Mode := InterceptMode.AutoEstimate;

	    // Задаем период расчета

	    ChowTest.ModelPeriod.FirstPoint := 1;

	    ChowTest.ModelPeriod.LastPoint := 20;

	    // Задаем метод обработки пропусков

	    ChowTest.MissingData.Method := MissingDataMethod.LinTrend;

	    // Задаем параметры сезонных авторегрессии и скользящего среднего

	    ARMA := ChowTest.ARMA;

	    ARMA.ParseARSeas("1");

	    ARMA.ParseMASeas("1");

	    // Задаем тип теста

	    ChowTest.TestType := ChowTestType.BreakPoint;


    // Выполняем расчет и выводим результаты

    res := ChowTest.Execute;

    If res <> 0 Then

        Debug.WriteLine(ChowTest.Errors);

    Else

        If ChowTest.ChowTestResult Then

            Debug.WriteLine("Нулевая гипотеза принимается")

        Else

            Debug.WriteLine("Нулевая гипотеза не принимается");

        End If;

        Debug.WriteLine("Уравнение первой группы:");

        LR := ChowTest.LR0;

        Debug.WriteLine("  коэффициенты:");

        E := LR.ModelCoefficients.Coefficients.Estimate;

        Print(E);

        Debug.WriteLine("  коэффициенты сезонной авторегрессии:");

        E := LR.ARSeasCoefficients.Estimate;

        Print(E);

        Debug.WriteLine("  коэффициенты сезонного скользящего среднего:");

        E := LR.MASeasCoefficients.Estimate;

        Print(E);

        Debug.WriteLine("Уравнение второй группы:");

        LR := ChowTest.LR1;

        Debug.WriteLine("  коэффициенты:");

        E := LR.ModelCoefficients.Coefficients.Estimate;

        Print(E);

        Debug.WriteLine("  коэффициенты сезонной авторегрессии:");

        E := LR.ARSeasCoefficients.Estimate;

        Print(E);

        Debug.WriteLine("  коэффициенты сезонного скользящего среднего:");


        E := LR.MASeasCoefficients.Estimate;

        Print(E);

        Debug.WriteLine("Общее уравнение:");

        LR := ChowTest.LR;

        Debug.WriteLine("  коэффициенты:");

        E := LR.ModelCoefficients.Coefficients.Estimate;

        Print(E);

        Debug.WriteLine("  коэффициенты сезонной авторегрессии:");

        E := LR.ARSeasCoefficients.Estimate;

        Print(E);

        Debug.WriteLine("  коэффициенты сезонного скользящего среднего:");

        E := LR.MASeasCoefficients.Estimate;

        Print(E);

    End If;

End Sub ChowTestSeas;


Результат выполнения примера: в окно консоли будут выведены результаты
 расчета теста и значения коэффициентов для уравнений групп.


См. также:


[IChowTestLinRegress](IChowTestLinRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
