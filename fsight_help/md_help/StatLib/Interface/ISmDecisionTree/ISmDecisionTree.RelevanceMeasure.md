# ISmDecisionTree.RelevanceMeasure

ISmDecisionTree.RelevanceMeasure
-


# ISmDecisionTree.RelevanceMeasure


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

		    dTree: SmDecisionTree;

		    expl, ex1, ex2: Array[12] Of Double;

		    res: Integer;

		Begin

		    dTree := New SmDecisionTree.Create;

		    // Задаем исходные данные

		    ex1[0] := 0; ex2[0] := 0; expl[0] := 0;

		    ex1[1] := 0; ex2[1] := 1; expl[1] := 1;

		    ex1[2] := 1; ex2[2] := 0; expl[2] := 0;

		    ex1[3] := 1; ex2[3] := 1; expl[3] := 1;

		    ex1[4] := 0; ex2[4] := 0; expl[4] := 0;

		    ex1[5] := 0; ex2[5] := 1; expl[5] := 1;

		    ex1[6] := 1; ex2[6] := 0; expl[6] := 1;

		    ex1[7] := 1; ex2[7] := 1; expl[7] := 1;

		    ex1[8] := 1; ex2[8] := 1; expl[8] := 0;

		    ex1[9] := 1; ex2[9] := 0; expl[9] := 0;

		    ex1[10] := 1; ex2[10] := 0; expl[10] := 1;

		    ex1[11] := 1; ex2[11] := 1; expl[11] := 1;

		    // Задаем объясняемый ряд

		    dTree.Dependent.Value := expl;

		    // Задаем объясняющие ряды

		    dTree.Explanatories.Add.Value := ex1;

		    dTree.Explanatories.Add.Value := ex2;

		    // Выполняем расчёт и выводим результаты

		    res := dTree.Execute;

		    If res <> 0 Then

		        Debug.WriteLine(dTree.Errors);

		    Else

		        // Выводим критерии качества классификации

		        Debug.WriteLine("Критерии качества классификации");

		        Debug.Indent;

		        Debug.WriteLine("Количество истинно-положительных значений: " + dTree.RelevanceMeasure.TruePositive.ToString);

		        Debug.WriteLine("Количество истинно-отрицательных значений: " + dTree.RelevanceMeasure.TrueNegative.ToString);

		        Debug.WriteLine("Количество ложно-положительных значений: " + dTree.RelevanceMeasure.FalsePositive.ToString);

		        Debug.WriteLine("Количество ложно-отрицательных значений: " + dTree.RelevanceMeasure.FalseNegative.ToString);

		        Debug.WriteLine("Общая точность: " + dTree.RelevanceMeasure.Accuracy.ToString);

		        Debug.WriteLine("Ф - оценка: " + dTree.RelevanceMeasure.F1.ToString);

		        Debug.WriteLine("Точность положительного результата: " + dTree.RelevanceMeasure.Precision.ToString);

		        Debug.WriteLine("Полнота положительного результата: " + dTree.RelevanceMeasure.Recall.ToString);

		        Debug.Unindent;

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены критерии
 качества классификации.


См. также:


[ISmDecisionTree](ISmDecisionTree.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
