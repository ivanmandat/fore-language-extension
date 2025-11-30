# ISmNaiveBayes.KeyInfluence

ISmNaiveBayes.KeyInfluence
-


# ISmNaiveBayes.KeyInfluence


## Синтаксис


KeyInfluence(Index: Integer): [ISlInfluence](../ISlInfluence/ISlInfluence.htm);


## Параметры


Index. Индекс основного влияния.


## Описание


Свойство KeyInfluence возвращает
 характеристики указанного основного влияния.


## Комментарии


Количество основных влияний возвращает свойство [ISmNaiveBayes.KeyInfluencesCount](ISmNaiveBayes.KeyInfluencesCount.htm).


## Пример


Для выполнения примера добавьте ссылку на сборку Stat.


			Sub UserKeyInfl;

Var

    KeyInfl: SmNaiveBayes;

    infl: ISlInfluence;

    expl: Array[20] Of Integer;

    ex1, ex2: Array[20] Of Double;

    res, count, i: Integer;

Begin

    KeyInfl := New SmNaiveBayes.Create;

    // Задаем исходные данные

    ex1[0] := 0; ex2[0] := 1; expl[0] := 1;

    ex1[1] := 2; ex2[1] := 0; expl[1] := 3;

    ex1[2] := 0; ex2[2] := 2; expl[2] := 2;

    ex1[3] := 1; ex2[3] := 1; expl[3] := 0;

    ex1[4] := 1; ex2[4] := 2; expl[4] := 2;

    ex1[5] := 0; ex2[5] := 2; expl[5] := 1;

    ex1[6] := 2; ex2[6] := 1; expl[6] := 3;

    ex1[7] := 2; ex2[7] := 1; expl[7] := 0;

    ex1[8] := 2; ex2[8] := 1; expl[8] := 0;

    ex1[9] := 2; ex2[9] := 1.45;expl[9]:=0;

    ex1[10] := 1; ex2[10] := 1; expl[10] := 3;

    ex1[11] := 2; ex2[11] := 1; expl[11] := 2;

    ex1[12] := 2; ex2[12] := 1; expl[12] := 0;

    ex1[13] := 2; ex2[13] := 0; expl[13] := 2;

    ex1[14] := 0; ex2[14] := 2; expl[14] := 3;

    ex1[15] := 2; ex2[15] := 1; expl[15] := 1;

    ex1[16] := 2; ex2[16] := 1; expl[16] := 0;

    ex1[17] := 1; ex2[17] := 2; expl[17] := 1;

    ex1[18] := 0; ex2[18] := 0; expl[18] := 3;

    ex1[19] := 2; ex2[19] := 1; expl[19] := 1;

    // Задаем объясняемую переменную

    KeyInfl.Explained := expl;

    // Задаем объясняющие переменные

    KeyInfl.Explanatories.Add.Value := ex1;

    KeyInfl.Explanatories.Add.Value := ex2;

    // Выполняем расчёт и выводим результаты

    res := KeyInfl.Execute;

    If res <> 0 Then

        Debug.WriteLine(KeyInfl.Errors);

    Else

        count := KeyInfl.KeyInfluencesCount;

        Debug.WriteLine("Количество основных влияний: " + count.ToString);

        For i := 0 To count - 1 Do

            infl := KeyInfl.KeyInfluence(i);

            Debug.Write("Значение '" + infl.ExplanatoryValue.ToString);

            Debug.Write("' в объясняющем ряде '" + infl.ExplanatoryId.ToString);

            Debug.Write("' влияет на объясняемое значение '" + infl.ExplainedValue.ToString);

            res := Double.RoundInt(infl.InfluenceRate);

            Debug.WriteLine("' со степенью '" + res.ToString + "%'");

        End For;

    End If;

End Sub UserKeyInfl;


После выполнения примера в окно консоли будут выведены результаты поиска
 ключевых факторов с помощью наивного классификатора Байеса.


См. также:


[ISmNaiveBayes](ISmNaiveBayes.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
