# ISmBackPropagation.RelevanceMeasure

ISmBackPropagation.RelevanceMeasure
-


# ISmBackPropagation.RelevanceMeasure


## Синтаксис


RelevanceMeasure: [IBinaryModelRelevanceMeasure](../IBinaryModelRelevanceMeasure/IBinaryModelRelevanceMeasure.htm);


## Описание


Свойство RelevanceMeasure возвращает
 критерии качества бинарной классификации.


## Комментарии


Критерии качества классификации рассчитываются, если объясняемый ряд
 является бинарным.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    NN: SmBackPropagation;

	    bin, x1, x2: Array[60] Of Double;

	    Ex: ISlSeries;

	    res, i, j: Integer;

	    s: String;

	    CrossValidation: ICrossValidation;

	Begin

	    NN := New SmBackPropagation.Create;

	    // Генерируем исходные данные

	    bin[0] := 0; x1[0] := 0.42; x2[0]:= -47;

	    bin[1] := 1; x1[1] := 0.3; x2[1]:=  57;

	    bin[2] := 1; x1[2] := 0.32; x2[2]:= 21;

	    bin[3] := 1; x1[3] := 1.5; x2[3]:=  17;

	    bin[4] := 1; x1[4] := 0.4;  x2[4]:= 92;

	    bin[5] := 0; x1[5] := 1.88; x2[5]:= 20;

	    bin[6] := 0; x1[6] := 1.38; x2[6]:= -22;

	    bin[7] := 1; x1[7] := 1.92; x2[7]:= 160;

	    bin[8] := 0; x1[8] := 1.16; x2[8]:= -29;

	    bin[9] := 0; x1[9] := 0.78; x2[9]:= 87;

	    bin[10] := 0; x1[10] := 0.9; x2[10]:=   136;

	    bin[11] := 1; x1[11] := 0.62; x2[11]:=  -19;

	    bin[12] := 1; x1[12] := 1.46; x2[12]:=  127;

	    bin[13] := 0; x1[13] := 1.1; x2[13]:=   109;

	    bin[14] := 1; x1[14] := 0.22; x2[14]:=  3;

	    bin[15] := 1; x1[15] := 1.68; x2[15]:=  119;

	    bin[16] := 1; x1[16] := 0.9; x2[16]:=   120;

	    bin[17] := 0; x1[17] := 0.92; x2[17]:=  43;

	    bin[18] := 1; x1[18] := 1.4; x2[18]:=   -49;

	    bin[19] := 0; x1[19] := 0.98; x2[19]:=  117;

	    bin[20] := 0; x1[20] := 0.44; x2[20]:=  109;

	    bin[21] := 0; x1[21] := 1.48; x2[21]:=  144;

	    bin[22] := 0; x1[22] := 1.18; x2[22]:=  86;

	    bin[23] := 0; x1[23] := 0.18; x2[23]:=  94;

	    bin[24] := 0; x1[24] := 1.5; x2[24]:=   96;

	    bin[25] := 0; x1[25] := 0.28; x2[25]:=  139;

	    bin[26] := 0; x1[26] := 0.58; x2[26]:=  -9;

	    bin[27] := 1; x1[27] := 0.92; x2[27]:=  20;

	    bin[28] := 1; x1[28] := 0.18; x2[28]:=  -31;

	    bin[29] := 1; x1[29] := 1.62; x2[29]:=  106;

	    bin[30] := 0; x1[30] := 1.84; x2[30]:=  2;

	    bin[31] := 0; x1[31] := 1.6; x2[31]:=   138;

	    bin[32] := 1; x1[32] := 0.14; x2[32]:=  53;

	    bin[33] := 0; x1[33] := 1.9; x2[33]:=   23;

	    bin[34] := 0; x1[34] := 1.88; x2[34]:=  75;

	    bin[35] := 1; x1[35] := 0.14; x2[35]:=  30;

	    bin[36] := 0; x1[36] := 0.86; x2[36]:=  45;

	    bin[37] := 0; x1[37] := 1.4; x2[37]:= -9;

	    bin[38] := 1; x1[38] := 1.54; x2[38]:= -21;

	    bin[39] := 0; x1[39] := 0.62; x2[39]:= 75;

	    bin[40] := 0; x1[40] := 1.72; x2[40]:= 108;

	    bin[41] := 1; x1[41] := 0.6; x2[41]:= 35;

	    bin[42] := 1; x1[42] := 0.9; x2[42]:= 29;

	    bin[43] := 1; x1[43] := 0.9; x2[43]:= -20;

	    bin[44] := 1; x1[44] := 1.62; x2[44]:= 78;

	    bin[45] := 0; x1[45] := 0; x2[45] := 152;

	    bin[46] := 1; x1[46] := 0.42; x2[46] := -2;

	    bin[47] := 1; x1[47] := 1.84; x2[47] := 157;

	    bin[48] := 0; x1[48] := 1.82; x2[48] := 119;

	    bin[49] := 0; x1[49] := 1.26; x2[49] := -37;

	    bin[50] := 1; x1[50] := 1.9; x2[50] := 45;

	    bin[51] := 1; x1[51] := 0.16; x2[51] := -46;

	    bin[52] := 0; x1[52] := 1.28; x2[52] := -35;

	    bin[53] := 0; x1[53] := 1.14; x2[53] := -45;

	    bin[54] := 0; x1[54] := 0.34; x2[54] := -53;

	    bin[55] := 0; x1[55] := 1.3; x2[55] := 104;

	    bin[56] := 1; x1[56] := 0.5; x2[56] := 46;

	    bin[57] := 0; x1[57] := 0.22; x2[57] := -41;

	    bin[58] := 0; x1[58] := 1.46; x2[58] := 31;

	    bin[59] := 0; x1[59] := 0.28; x2[59] := 126;


    // Задаем объясняемый ряд

    NN.Dependent.Value := bin;

    // Задаем объясняющие ряды

    Ex := NN.Explanatories;

    Ex.Add.Value := x1;

    Ex.Add.Value := x2;

    // Число нейронов во внутреннем слое

    NN.Neurons := 22;

    // Число итераций

    NN.Epoch := 400;

    // Минимальное значение delta

    NN.DeltasMinimum := 0.001;

    // Задаем параметры кросс-валидации

    CrossValidation := NN.CrossValidation;

    CrossValidation.SamplingType := CrossValidationSamplingType.Kfold;

    CrossValidation.NumberOfFolds := 4;

    // Выполняем расчёт и выводим результаты

    res := NN.Execute;

    If res <> 0 Then

        Debug.WriteLine("Произошла ошибка");

    Else

        // Выводим сводные результаты классификации

        Debug.WriteLine(" === Сводные результаты классификации  ===");

        Debug.Indent;

        s := "";

        For i := 0 To NN.ClassificationSummary.GetUpperBound(1) Do

            For j := 0 To NN.ClassificationSummary.GetUpperBound(2) Do

                s := s + NN.ClassificationSummary[i, j].ToString + " ";

            End For;

            Debug.WriteLine(s);

            s := "";

        End For;

        Debug.Unindent;

        // Выводим критерии качества классификации

        Debug.WriteLine("Критерии качества классификации");

        Debug.Indent;

        Debug.WriteLine("Общая точность: " + NN.RelevanceMeasure.Accuracy.ToString);

        Debug.WriteLine("Ф - оценка: " + NN.RelevanceMeasure.F1.ToString);

        Debug.WriteLine("Количество истинно-положительных значений: " + NN.RelevanceMeasure.TruePositive.ToString);

        Debug.WriteLine("Количество истинно-отрицательных значений: " + NN.RelevanceMeasure.TrueNegative.ToString);

        Debug.WriteLine("Количество ложно-положительных значений: " + NN.RelevanceMeasure.FalsePositive.ToString);

        Debug.WriteLine("Количество ложно-отрицательных значений: " + NN.RelevanceMeasure.FalseNegative.ToString);

        Debug.Unindent;

    End If;

End Sub UserProc;


В результате выполнения примера для указанных данных будет выполнена
 кластеризация с помощью сети обратного распространения, в окно консоли
 будут выведены сводные результаты классификации и критерии качества классификации


См. также:


[ISmBackPropagation](ISmBackPropagation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
