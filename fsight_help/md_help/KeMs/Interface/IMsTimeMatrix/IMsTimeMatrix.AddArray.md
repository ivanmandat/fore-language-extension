# IMsTimeMatrix.AddArray

IMsTimeMatrix.AddArray
-


# IMsTimeMatrix.AddArray


## Синтаксис


AddArray(ArrayValue: Array): [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


## Параметры


ArrayValue. Значения элементов
 массива.


## Описание


Метод AddArray добавляет массив
 в матрицу.


## Комментарии


Для добавления ряда в матрицу используйте метод [IMsTimeMatrix.AddSerie](IMsTimeMatrix.AddSerie.htm).


## Пример


В данном примере описан пользовательский метод.


Для выполнения примера добавьте ссылки на системные сборки Ms.


			Public Function Create(param: IMsTimeMatrix): Variant;

Var

    m : IMsTimeMatrix;

    arr: Array[3] Of Double;

    i, j: Integer;

    s : String;

    serie : ITimeSeries;

Begin

    m := New MsTimeMatrix.Create;

    arr[0] := 0.10;

    arr[1] := 0.20;

    arr[2] := 0.30;

    m.AddArray(arr);

    Debug.WriteLine("Рядов: " + m.Count.ToString);

    For i := 0 To m.Count - 1 Do

        s := "";

        serie := m.Item(i);

        For j := m.StartIndex To m.EndIndex Do

            s := s + (serie.Item(j) As double).ToString + " ";

        End For;

        Debug.WriteLine("Ряд: " + i.ToString + " - " + s);

    End For;

    Return m;

End Function Create;


Метод выполняет добавление массива в матрицу. После чего в окно консоли
 будут выведены ряды результирующей матрицы.


См. также:


[IMsTimeMatrix](IMsTimeMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
