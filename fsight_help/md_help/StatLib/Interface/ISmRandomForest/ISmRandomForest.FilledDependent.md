# ISmRandomForest.FilledDependent

ISmRandomForest.FilledDependent
-


# ISmRandomForest.FilledDependent


## Синтаксис


FilledDependent: Array;


## Описание


Свойство FilledDependent возвращает
 предсказанную классификацию.


## Комментарии


Для получения сводных результатов классификации используйте свойство
 [ISmRandomForest.ClassificationSummary](ISmRandomForest.ClassificationSummary.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    rf: SmRandomForest;

    Y, CatX: Array[16] Of Integer;

    X: Array[16] Of Double;

    res, i, j: Integer;

    s: string;

    Explanatories: ISlSeries;

    Explan: ISlSerie;

    ExplInt: ISlSeriesInt;

    ExplanInt: ISlSerieInt;

    CatList: Array Of Integer;

Begin

    rf := New SmRandomForest.Create;

    // Задаем объясняемый ряд

    Y[00] := 0; Y[08] := 1;

    Y[01] := 1; Y[09] := 2;

    Y[02] := 1; Y[10] := 0;

    Y[03] := 0; Y[11] := 2;

    Y[04] := 1; Y[12] := 1;

    Y[05] := 2; Y[13] := 2;

    Y[06] := 1; Y[14] := 2;

    Y[07] := 2; Y[15] := 0;

    rf.Dependent.Value := Y;

    // Задаем объясняющие ряды (категориальные)

    CatX[00] := 1; CatX[08] := 1;

    CatX[01] := 3; CatX[09] := 2;

    CatX[02] := 1; CatX[10] := 3;

    CatX[03] := 3; CatX[11] := 2;

    CatX[04] := 1; CatX[12] := 3;

    CatX[05] := 2; CatX[13] := 1;

    CatX[06] := 1; CatX[14] := 1;

    CatX[07] := 2; CatX[15] := 3;

    ExplInt := rf.ExplanatoriesCategorical;

    ExplInt.Clear;

    ExplanInt := ExplInt.Add;

    ExplanInt.Id := "Categorical_X";

    ExplanInt.Name := "CatX";

    ExplanInt.Value := CatX;

    // Задаем объясняющие ряды (количественные)

    X[00] := 34.13; X[08] := 29.27;

    X[01] := 21.52; X[09] := 23.39;

    X[02] := 25.43; X[10] := 28.28;

    X[03] := 43.42; X[11] := 43.55;

    X[04] := 40.19; X[12] := 44.80;

    X[05] := 24.97; X[13] := 23.23;

    X[06] := 20.57; X[14] := 37.14;

    X[07] := 30.81; X[15] := 27.44;

    Explanatories := rf.ExplanatoriesContinuous;

    Explanatories.Clear;

    Explan := Explanatories.Add;

    Explan.Id := "Continuous_X";

    Explan.Name := "X";

    Explan.Value := X;

    // Размер леса

    rf.ForestSize := 20;

    rf.LearningSamplePortion := 0.6;

    // Размер деревьев

    res := rf.Execute;

    If (res = 0) Then

        Debug.WriteLine(" === Вероятность  ===");

        Debug.Indent;

        For i := 0 To rf.Probability.GetUpperBound(1) Do

            For j := 0 To rf.Probability.GetUpperBound(2) Do

                s := s + rf.Probability[i, j].ToString + " ";

            End For;

            Debug.WriteLine(s);

            s := "";

        End For;

        Debug.Unindent;

        Debug.WriteLine(" === Предсказанная классификация ===");

        Debug.Indent;

        For i := 0 To rf.FilledDependent.Length - 1 Do

            Debug.WriteLine((i + 1).ToString + ". " + rf.FilledDependent[i].ToString);

        End For;

        Debug.Unindent;

        Debug.WriteLine("=== Оригинал значений категориального ряда данных ===");

        Debug.Indent;

        For i := 0 To ExplanInt.Value.Length - 1 Do

            Debug.WriteLine((i + 1).ToString + ". " + ExplanInt.OriginalValue[i].ToString);

        End For;

        Debug.Unindent;

        Debug.WriteLine(" === Сводные результаты классификации  ===");

        Debug.Indent;

        s := "";

        For i := 0 To rf.ClassificationSummary.GetUpperBound(1) Do

            For j := 0 To rf.ClassificationSummary.GetUpperBound(2) Do

                s := s + rf.ClassificationSummary[i, j].ToString + " ";

            End For;

            Debug.WriteLine(s);

            s := "";

        End For;

        Debug.Unindent;

        // Выводим список категорий

        CatList := rf.CategoriesList;

        If CatList.Length > 0 Then

            Debug.WriteLine("Список категорий:"); Debug.Indent;

            For i := 0 To CatList.Length - 1 Do

                Debug.WriteLine(CatList[i]);

            End For;

            Debug.Unindent;

        End If;

        Else

            Debug.WriteLine(rf.Errors);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены:


	- вероятность;


	- предсказанная классификация;


	- оригинал значений категориального ряда данных;


	- сводные результаты классификации;


	- список категорий.


См. также:


[ISmRandomForest](ISmRandomForest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
