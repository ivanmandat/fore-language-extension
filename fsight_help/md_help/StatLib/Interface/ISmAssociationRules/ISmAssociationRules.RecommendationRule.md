# ISmAssociationRules.RecommendationRule

ISmAssociationRules.RecommendationRule
-


# ISmAssociationRules.RecommendationRule


## Синтаксис


RecommendationRule(Index: Integer): [ISlRecommendationRule](../ISlRecommendationRule/ISlRecommendationRule.htm);


## Параметры


Index. Индекс правила.


## Описание


Свойство RecommendationRule
 возвращает указанное правило, полученное в результате расчёта метода.


## Комментарии


Индексация правил сквозная и начинается с нуля. Количество правил возвращает
 свойство [ISmAssociationRules.RecommendationRulesCount](ISmAssociationRules.RecommendationRulesCount.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    tr, obj: Array[45] Of Integer;

	    AsRu: SmAssociationRules;

	    res, i, j, Count: integer;

	    s: string;

	    Rule: ISlRecommendationRule;

	    ConditionItemset, ResultItemset, FreqItemset: ISlFrequentItemset;

	    Itemset: Array Of Integer;

	Begin

	     // Массив, содержащий транзакций

	    tr[0] := 1; tr[15] := 6; tr[30] := 11;

	    tr[1] := 1; tr[16] := 6; tr[31] := 11;

	    tr[2] := 1; tr[17] := 6; tr[32] := 11;

	    tr[3] := 2; tr[18] := 7; tr[33] := 12;

	    tr[4] := 2; tr[19] := 7; tr[34] := 12;


    tr[5] := 2; tr[20] := 7; tr[35] := 12;

    tr[6] := 3; tr[21] := 8; tr[36] := 13;

    tr[7] := 3; tr[22] := 8; tr[37] := 13;

    tr[8] := 3; tr[23] := 8; tr[38] := 13;

    tr[9] := 4; tr[24] := 9; tr[39] := 14;

    tr[10] := 4; tr[25] := 9; tr[40] := 14;

    tr[11] := 4; tr[26] := 9; tr[41] := 14;

    tr[12] := 5; tr[27] := 10; tr[42] := 15;

    tr[13] := 5; tr[28] := 10; tr[43] := 15;

    tr[14] := 5; tr[29] := 10; tr[44] := 15;

     // Массив, содержащий элементы

    obj[0] := 0; obj[15] := 3; obj[30] := 6;

    obj[1] := 2; obj[16] := 4; obj[31] := 7;

    obj[2] := 2; obj[17] := 5; obj[32] := 7;

    obj[3] := 0; obj[18] := 6; obj[33] := 6;

    obj[4] := 1; obj[19] := 4; obj[34] := 7;

    obj[5] := 2; obj[20] := 5; obj[35] := 8;

    obj[6] := 0; obj[21] := 5; obj[36] := 1;

    obj[7] := 1; obj[22] := 4; obj[37] := 1;

    obj[8] := 2; obj[23] := 5; obj[38] := 2;

    obj[9] := 0; obj[24] := 6; obj[39] := 3;

    obj[10] := 0; obj[25] := 7; obj[40] := 4;

    obj[11] := 2; obj[26] := 4; obj[41] := 4;

    obj[12] := 3; obj[27] := 6; obj[42] := 5;

    obj[13] := 4; obj[28] := 7; obj[43] := 7;

    obj[14] := 5; obj[29] := 8; obj[44] := 7;

     // Создаем метод


    AsRu := New SmAssociationRules.Create;

     // Массивы транзакций и элементов

    AsRu.Transactions := tr;

    AsRu.Objects := obj;

     // Минимальная поддержка (в процентах)

    AsRu.MinimumSupport := 10;

    AsRu.UseSupportPercent := True;

     // Минимальный уровень доверия

    AsRu.MinimumConfidence := 0.4;

     // Максимальное количество часто встречаемых наборов элементов

    AsRu.MaximumFrequentItemsetsCount := 200000;

     // Минимальное количество элементов в часто встречаемом наборе

    AsRu.MinimumFrequentItemsetSize := 1;

     // Максимальное количество элементов в часто встречаемом наборе

    AsRu.MaximumFrequentItemsetSize := 3;

     // Минимальный уровень значимости

    AsRu.MinimumImportance := 0.1;

     // Метод обработки пропусков

    AsRu.MissingData.Method := MissingDataMethod.Casewise;

     // Выполняем расчёт и выводим результаты

    res := AsRu.Execute;


    If res = 0 Then

        Count := AsRu.RecommendationRulesCount;

        Debug.WriteLine("Количество значимых правил: " + Count.ToString);

        For i := 0 To Count - 1 Do

            s := "";

            s := s + "Условие: ";

            Rule := AsRu.RecommendationRule(i);

            ConditionItemset := Rule.ExplanatoryItemset;

            Itemset := ConditionItemset.Itemset;

            For j := 0 To Itemset.Length - 1 Do

                s := s + Itemset[j].ToString + ",";

            End For;


            ResultItemset := Rule.ExplainedItemset;

            Itemset := ResultItemset.Itemset;

            s := s + " -> следствие: ";

            For j := 0 To Itemset.Length - 1 Do

                s := s + Itemset[j].ToString + ",";

            End For;

            Debug.WriteLine(s);

            Debug.Indent;

            Debug.WriteLine("- уровень доверия: " + Rule.Confidence.ToString);

            Debug.WriteLine("- уровень значимости: " + Rule.Importance.ToString);

            Debug.WriteLine("- поддержка (%): " + Rule.SupportPercent.ToString);

            Debug.WriteLine("- поддержка (кол-во транзакций): " + Rule.SupportCount.ToString);

            Debug.Unindent;


        End For;

        Debug.WriteLine("");

        Count := AsRu.FrequentItemsetsCount;

        Debug.WriteLine("Количество часто встречаемых наборов элементов: " + Count.ToString);

        For i := 0 To Count - 1 Do

            s := "Набор: ";

            FreqItemset := AsRu.FrequentItemset(i);

            Itemset := FreqItemset.Itemset;

            For j := 0 To Itemset.Length - 1 Do

                s := s + Itemset[j].ToString + ";";

            End For;

            Debug.WriteLine(s);

            Debug.Indent;

            Debug.WriteLine("- поддержка (%): " + FreqItemset.SupportPercent.ToString);

            Debug.WriteLine("- поддержка (кол-во транзакций): " + FreqItemset.SupportCount.ToString);

            Debug.Unindent;

        End For;

    End If;

End Sub UserProc;


В результате выполнения примера будет выполнен анализ указанных данных
 методом «Анализ ассоциаций»,
 в окно консоли будут выведены результаты выполнения метода:


	- количество значимых правил;


	- количество часто встречаемых наборов данных.


См. также:


[ISmAssociationRules](ISmAssociationRules.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
