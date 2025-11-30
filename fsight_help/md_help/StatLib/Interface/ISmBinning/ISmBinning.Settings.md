# ISmBinning.Settings

ISmBinning.Settings
-


# ISmBinning.Settings


## Синтаксис


Settings: [IBinningSettings](../IBinningSettings/IBinningSettings.htm);


## Описание


Свойство Settings возвращает
 параметры процедуры Binning.


## Комментарии


Для получения результатов расчета используйте свойство [ISmBinning.Categories](ISmBinning.Categories.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Bin: SmBinning;

    arr: Array Of Double;

    Categories: Array Of Integer;

    i, res: Integer;

    Settings: IBinningSettings;

    Clusters: IClustersType;

    Cl: IClusterType;

Begin

    // Создаем объект для выполнения процедуры Binning

    Bin := New SmBinning.Create;

    // Задаем массив исходных векторов

    arr := New Double[14];

    arr[0] := 27; arr[7] := 36;

    arr[1] := 11; arr[8] := 26;

    arr[2] := Double.Nan; arr[9] := 26;

    arr[3] := 36; arr[10] := 9;

    arr[4] := 35; arr[11] := Double.Nan;

    arr[5] := Double.Nan; arr[12] := 27;

    arr[6] := 11; arr[13] := 10;

    Bin.Values.Value := arr;

    // Получаем настройки процедуры

    Settings := Bin.Settings;

    // Задаем метод разбиения

    Settings.Method := BinningMethod.KMeansClustering;

    // Задаем количество итоговых категорий

    Settings.NumOfCategories := 4;

    // Выделяем пропуски в отдельную категорию

    Settings.TreatNanAsCategory := True;

    // Задаем максимальное количество итераций

    Settings.MaxIt := 9;

    // Выполняем процедуру Binning

    res := Bin.Execute;

    // Если выполнение прошло без ошибок, то выводим результат в окно консоли

    If res = 0 Then

        // Выводим категории

        Debug.WriteLine("Категории");

        Categories := Bin.Categories;

        Debug.Indent;

        For i := 0 To Categories.Length - 1 Do

            Debug.WriteLine(i.ToString + ": " + Categories[i].ToString);

        End For;

        Debug.Unindent;

        Debug.WriteLine("");

        // Выводим кластеры

        Debug.WriteLine("Кластеры");

        Clusters := Settings.Clusters;

        Debug.Indent;

        For i := 0 To Clusters.Count - 1 Do

            Cl := Clusters.Item(i);

            Debug.WriteLine("№ " + i.ToString);

            Debug.Indent;

            Debug.WriteLine(((i = 0)? "[" : "(") + Cl.LowerBound[0].ToString + ";" + Cl.UpperBound[0].ToString + "]");

            Debug.WriteLine("центр: " + Cl.Center[0].ToString);

            Debug.WriteLine("число объектов: " + Cl.Size.ToString);

            Debug.Unindent;

        End For;

        Debug.Unindent;

    End If;

End Sub UserProc;


В результате выполнения примера для заданного массива будет выполнена
 процедура Binning. Результаты будут выведены в окно консоли.


См. также:


[ISmBinning](ISmBinning.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
