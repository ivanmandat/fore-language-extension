# ISmDiscriminantAnalysis.RelevanceMeasure

ISmDiscriminantAnalysis.RelevanceMeasure
-


# ISmDiscriminantAnalysis.RelevanceMeasure


## Синтаксис


RelevanceMeasure: [IBinaryModelRelevanceMeasure](../IBinaryModelRelevanceMeasure/IBinaryModelRelevanceMeasure.htm);


## Описание


Свойство RelevanceMeasure возвращает
 критерии качества бинарной классификации.


## Комментарии


Критерии качества классификации рассчитываются, если объясняемый ряд
 является бинарным.


## Пример


Для выполнения примера добавьте ссылки на системные сборки: MathFin,
 Stat.


					Sub UserProc;

		Var

		    DA: SmDiscriminantAnalysis;

		    y, x1, x2, x3, x4, x5, x6, x7, x8: Array[60] Of Double;

		    Ex: ISlSeries;

		    res, i, j: Integer;

		    resM: Array Of Integer;

		    str: String;

		Begin

		    DA := New SmDiscriminantAnalysis.Create;

		    // Исходные данные: шестьдесят объектов с восьмью признаками

		    For i := 0 To 59 Do

		        x1[i] := Math.RandBetween(0, 100);

		        x2[i] := Math.RandBetween(0, 100);

		        x3[i] := Math.RandBetween(0, 100);

		        x4[i] := Math.RandBetween(0, 100);

		        x5[i] := Math.RandBetween(0, 100);

		        x6[i] := Math.RandBetween(0, 100);

		        x7[i] := Math.RandBetween(0, 100);

		        x8[i] := Math.RandBetween(0, 100);

		    End For;

		    // Значения объясняемого ряда

		    For i := 0 To 59 Do

		        y[i] := Math.RandBetweenI(0, 1);

		    End For;

		    // Задаем объясняемую переменную

		    DA.Dependent.Value := y;

		    // Задаем объясняющие переменные

		    Ex := DA.Explanatories;

		    Ex.Add.Value := x1; Ex.Add.Value := x5;

		    Ex.Add.Value := x2; Ex.Add.Value := x6;

		    Ex.Add.Value := x3; Ex.Add.Value := x7;

		    Ex.Add.Value := x4; Ex.Add.Value := x8;

		    // Выполняем расчёт и выводим результаты

		    res := DA.Execute;

		    If res <> 0 Then

		        Debug.WriteLine(DA.Errors);

		    Else

		        Debug.WriteLine(" == Сводные результаты классификации == ");

		        res := DA.ClassCount;

		        Debug.WriteLine("Количество классов: " + res.ToString);

		        resM := DA.ClassificationSummary;

		        For i := 0 To res - 1 Do

		            For j := 0 To res - 1 Do

		                str := str + " " + (resM[i, j] As Integer).ToString;

		            End For;

		            str := str + " | " + (resM[i, res] As Integer).ToString;

		            Debug.WriteLine(str);

		            str := "";

		        End For;

		        str := "- - - - - - - - ";

		        Debug.WriteLine(str);

		        str := "";

		        For j := 0 To DA.ClassCount - 1 Do

		                str := str + " " + (resM[res, j] As Integer).ToString;

		            End For;

		        str := str + " | " + (resM[res, res] As Integer).ToString;

		        Debug.WriteLine(str);

		        // Выводим критерии качества классификации

		        Debug.WriteLine(" == Критерии качества классификации == ");

		        Debug.WriteLine("Общая точность: " + DA.RelevanceMeasure.Accuracy.ToString);

		        Debug.WriteLine("Ф - оценка: " + DA.RelevanceMeasure.F1.ToString);

		        Debug.WriteLine("Точность положительного результата: " + DA.RelevanceMeasure.Precision.ToString);

		        Debug.WriteLine("Полнота положительного результата: " + DA.RelevanceMeasure.Recall.ToString);

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены результаты
 классификации и критерии её качества.


См. также:


[ISmDiscriminantAnalysis](ISmDiscriminantAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
