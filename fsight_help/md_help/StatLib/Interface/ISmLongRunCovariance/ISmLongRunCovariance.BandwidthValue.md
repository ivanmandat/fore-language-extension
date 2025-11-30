# ISmLongRunCovariance.BandwidthValue

ISmLongRunCovariance.BandwidthValue
-


# ISmLongRunCovariance.BandwidthValue


## Синтаксис


BandwidthValue: Double;


## Описание


Свойство BandwidthValue определяет
 значение пропускной способности ядра.


## Комментарии


Свойство актуально, если [ISmLongRunCovariance.LRCBandwidthMethod](ISmLongRunCovariance.LRCBandwidthMethod.htm) = LRCBandwidthMethodType.UserSpecified.


## Пример


Для выполнения примера подключите системную сборку Stat.


			Sub UserProc;

Var

    lrc: SmLongRunCovariance;

    can, fra, ger, ita: Array[15] Of Double;

    res, i, j: Integer;

    str: String;

    strArr: Array Of String;

    doubleArr: Array Of Double;

    doubleRes: Double;

Begin

    lrc := New SmLongRunCovariance.Create;

    // задаем значения переменных

    can[0] := 6209; fra[0] := Double.Nan; ger[0] := 3415; ita[0] := 2822;

    can[1] := 6385; fra[1] := Double.Nan; ger[1] := 3673; ita[1] := 3023;

    can[2] := 6752; fra[2] := Double.Nan; ger[2] := 4013; ita[2] := 3131;

    can[3] := 6837; fra[3] := 4545; ger[3] := 4278; ita[3] := 3351;

    can[4] := 6495; fra[4] := 4664; ger[4] := 4577; ita[4] := 3463;

    can[5] := 6907; fra[5] := 4861; ger[5] := 5135; ita[5] := 3686;

    can[6] := 7349; fra[6] := 5195; ger[6] := 5388; ita[6] := 3815;

    can[7] := 7213; fra[7] := 5389; ger[7] := 5610; ita[7] := 3960;

    can[8] := 7061; fra[8] := 5463; ger[8] := 5787; ita[8] := 4119;

    can[9] := 7180; fra[9] := 5610; ger[9] := 6181; ita[9] := 4351;

    can[10] := Double.Nan; fra[10] := 5948; ger[10] := 6633; ita[10] := 4641;

    can[11] := Double.Nan; fra[11] := 6218; ger[11] := 6910; ita[11] := 5008;

    can[12] := Double.Nan; fra[12] := 6521; ger[12] := 7146; ita[12] := 5305;

    can[13] := Double.Nan; fra[13] := 6788; ger[13] := 7248; ita[13] := 5611;

    can[14] := Double.Nan; fra[14] := 7222; ger[14] := 7689; ita[14] := 5693;

    // задаем входные ряды

    lrc.Regressors.Clear;

    lrc.Regressors.Add.Value := can;

    lrc.Regressors.Add.Value := fra;

    lrc.Regressors.Add.Value := ger;

    lrc.Regressors.Add.Value := ita;

    // метод обработки пропусков

    lrc.MissingData.Method := MissingDataMethod.Casewise;

    // период идентификации

    lrc.ModelPeriod.FirstPoint := 1;

    lrc.ModelPeriod.LastPoint := 15;

    // тип окна

    lrc.LRCWindow := LRCWindowType.Symmetric;

    // стандартизация данных

    lrc.RemoveMeans := True;

    // учет количества степеней свободы

    lrc.DFAdjustment := True;

    // количество степеней свободы

    lrc.DFNumber := 2;

    // параметры ядра

    lrc.LRCKernel := LRCKernelType.Bartlett;

    // метод пропускной способности ядра

    lrc.LRCBandwidthMethod := LRCBandwidthMethodType.UserSpecified;

    // значение пропускной способности ядра

    lrc.BandwidthValue := 1.00;

    // спецификация лага

    lrc.LRCLagSpecification := LRCLagSpecificationType.Fixed;

    // количество лагов

    lrc.NumberOfLags := 1;

    // расчет модели

    res := lrc.Execute;

    Debug.WriteLine(lrc.Errors);

    For i := 0 To lrc.WarningsCount - 1 Do

        Debug.WriteLine(lrc.Warnings[i]);

    End For;

    Debug.WriteLine("Ковариационная матрица: ");

    Debug.Indent;

    For i := 0 To lrc.CovarianceMatrix.GetUpperBound(1) Do

        str := "";

        For j := 0 To lrc.CovarianceMatrix.GetUpperBound(2) Do

            str := str + (lrc.CovarianceMatrix[i, j] As Double).ToString + "  ";

        End For;

        Debug.WriteLine(str);

    End For;

    Debug.Unindent;

End Sub UserProc;


После выполнения примера будет построена модель долгосрочной ковариации,
 заданы настройки:


	- период идентификации;


	- тип окна;


	- количество степеней свободы равно двум;


	- параметры ядра;


	- метод и значение пропускной способности ядра;


	- спецификация и количество лагов.


В окно консоли будут выведена ковариационная матрица.


См. также:


[ISmLongRunCovariance](ISmLongRunCovariance.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
