# ISlSerie.Include

ISlSerie.Include
-


# ISlSerie.Include


## Синтаксис


Include: Boolean;


## Описание


Свойство Include определяет,
 включен ли ряд данных в расчеты.


## Комментарии


Свойство Include актуально для
 многофакторных методов расчёта.


Допустимые значения:


	- True. Значение по умолчанию.
	 Ряд данных включен в расчёты;


	- False. Ряд данных исключён
	 из расчетов.


## Пример


Для выполнения примера добавьте ссылки на системные сборки: MathFin,
 Stat.


	Sub UserProc;

	Var

	    method: SmDecisionTree;

	    y, x1, x2, x3, x4: array[15] Of double;

	    Explanatories: ISlSeries;

	    Explanatory: ISlSerie;

	    Dependent, FilledDependent: ISlSerie;

	    BinningSettings: IBinningSettings;

	    res: integer;

	    maxlength, i: integer;

	    strng: string;

	    leng: array[4] Of integer;

	    Function AddStrVal(str, strval: string): string;

	    Begin

	        Return str + "  " + strval;

	    End Function AddStrVal;

	Begin

	    // Создаем объект для расчета метода

	    method := New SmDecisionTree.Create;


    // Задаем начальные значения переменных

    x1[0] := 2; x2[0] := 2; x3[0] := 4; x4[0] := 1; y[0] := 1;

    x1[1] := 5; x2[1] := 4; x3[1] := 5; x4[1] := 2; y[1] := 2;

    x1[2] := 15; x2[2] := 6; x3[2] := 6; x4[2] := 3; y[2] := 3;

    x1[3] := 3; x2[3] := 1; x3[3] := 34; x4[3] := 3; y[3] := 1;

    x1[4] := 8; x2[4] := 3; x3[4] := 7; x4[4] := 2; y[4] := 2;

    x1[5] := 11; x2[5] := 5; x3[5] := 5; x4[5] := 1; y[5] := 3;

    x1[6] := 1; x2[6] := 2; x3[6] := 3; x4[6] := 3; y[6] := 1;

    x1[7] := 6; x2[7] := 4; x3[7] := 5; x4[7] := 2; y[7] := 2;

    x1[8] := 12; x2[8] := 6; x3[8] := 12; x4[8] := 3; y[8] := 3;

    x1[9] := 4; x2[9] := 2; x3[9] := 8; x4[9] := 2; y[9] := 1;

    x1[10] := 7; x2[10] := 4; x3[10] := 13; x4[10] := 2; y[10] := 2;

    x1[11] := 13; x2[11] := 6; x3[11] := 6; x4[11] := 2; y[11] := 3;

    x1[12] := 1; x2[12] := 1; x3[12] := 9; x4[12] := 1; y[12] := Double.Nan;

    x1[13] := 9; x2[13] := 4; x3[13] := 6; x4[13] := 1; y[13] := Double.Nan;

    x1[14] := 11; x2[14] := 7; x3[14] := 5; x4[14] := 1; y[14] := Double.Nan;

    // Задаем объясняемый ряд

    method.Dependent.Value := y;

    // Задаем объясняющие ряды

    Explanatories := method.Explanatories;

    Explanatories.Add.Value := x1;

    Explanatories.Add.Value := x2;

    Explanatories.Add.Value := x3;

    Explanatories.Add.Value := x4;

    // Получаем параметры процедуры Binning для объясняемого ряда

    Dependent := method.Dependent;

    BinningSettings := Dependent.BinningSettings;

    // Задаем метод разбиения

    BinningSettings.Method := BinningMethod.EqualDepth;

    // Задаем количество итоговых категорий

    BinningSettings.NumOfCategories := 4;

    // Задаем максимальное количество итераций

    BinningSettings.MaxIt := 9;

    // Выполняем расчёт метода

    res := method.Execute;


    // Выводим результаты классификации

    Debug.WriteLine(" == Classification1 == ");

    Debug.WriteLine(" No    in  in_cat  out_cat out");

    FilledDependent := method.FilledDependent;

    leng[0] := Dependent.Value.Length;

    leng[1] := Dependent.Categories.Length;

    leng[2] := FilledDependent.Categories.Length;

    leng[3] := FilledDependent.Value.Length;

    maxlength := Math.MaxI(leng);

    For i := 0 To maxlength - 1 Do

        strng := i.ToString;

        If (i < leng[0]) Then strng := addstrval(strng, Dependent.Value[i].ToString);

        Else strng := addstrval(strng, "-"); End If;

        If (i < leng[1]) Then strng := addstrval(strng, Dependent.Categories[i].ToString);

        Else strng := addstrval(strng, "-"); End If;

        If (i < leng[2]) Then strng := addstrval(strng, FilledDependent.Categories[i].ToString);

        Else strng := addstrval(strng, "-"); End If;

        If (i < leng[3]) Then strng := addstrval(strng, FilledDependent.Value[i].ToString);

        Else strng := addstrval(strng, "-"); End If;

        Debug.WriteLine(strng);

    End For;

    // Исключаем из расчета ряд

    Explanatory := method.Explanatories.Item(3);

    Explanatory.Include := False;

    // Выполняем расчёт метода

    res := method.Execute;


    // Выводим результаты классификации

    Debug.WriteLine(" == Classification2 == ");

    Debug.WriteLine(" No    in  in_cat  out_cat out");

    FilledDependent := method.FilledDependent;

    leng[0] := Dependent.Value.Length;

    leng[1] := Dependent.Categories.Length;

    leng[2] := FilledDependent.Categories.Length;

    leng[3] := FilledDependent.Value.Length;

    maxlength := Math.MaxI(leng);

    For i := 0 To maxlength - 1 Do

        strng := i.ToString;

        If (i < leng[0]) Then strng := addstrval(strng, Dependent.Value[i].ToString);

        Else strng := addstrval(strng, "-"); End If;

        If (i < leng[1]) Then strng := addstrval(strng, Dependent.Categories[i].ToString);

        Else strng := addstrval(strng, "-"); End If;

        If (i < leng[2]) Then strng := addstrval(strng, FilledDependent.Categories[i].ToString);

        Else strng := addstrval(strng, "-"); End If;

        If (i < leng[3]) Then strng := addstrval(strng, FilledDependent.Value[i].ToString);

        Else strng := addstrval(strng, "-"); End If;

        Debug.WriteLine(strng);

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены результаты
 классификации для всех рядов данных и при одном исключенном.


См. также:


[ISlSerie](ISlSerie.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
