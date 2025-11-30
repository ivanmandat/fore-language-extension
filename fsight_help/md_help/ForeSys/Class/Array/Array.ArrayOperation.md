# Array.ArrayOperation

Array.ArrayOperation
-


# Array.ArrayOperation


## Синтаксис


		ArrayOperation(OperationType: [ArrayOperationType](../../Enums/ArrayOperationType.htm),
		 Value: Variant);


## Параметры


OperationType. Тип арифметической
 операции;


Value. Массив, который будет
 использоваться при выполнении операции над элементами исходного массива.


## Описание


Метод ArrayOperation выполняет
 арифметическую операцию над элементами массивов.


## Комментарии


Для выполнения арифметической операции в используемых массивах должно
 содержаться одинаковое количество элементов и измерений.


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


					Sub UserProc;

		Var

		    Matr, Matr2: Array Of Double;

		    i, j: Integer;

		Begin

		    // Создадим двумерный массив

		    Matr := New Double[3, 3];

		    Matr[0, 0] := 4; Matr[0, 1] := 9; Matr[0, 2] := 3;

		    Matr[1, 0] := 2; Matr[1, 1] := 15; Matr[1, 2] := 7;

		    Matr[2, 0] := 8; Matr[2, 1] := 5; Matr[2, 2] := 13;

		    Debug.WriteLine("Первый массив до выполнения операции:");

		    // Выведем созданный массив в консоль

		    For i := 0 To Matr.GetUpperBound(1) Do

		        For j := 0 To Matr.GetUpperBound(2) Do

		            Debug.Write(Matr[i, j].ToString + " ");

		        End For;

		        Debug.WriteLine("");

		    End For;

		    // Создадим двумерный массив, который будет использоваться во время операции

		    Matr2 := New Double[3, 3];

		    Matr2[0, 0] := 1; Matr2[0, 1] := 2; Matr2[0, 2] := 1;

		    Matr2[1, 0] := 2; Matr2[1, 1] := 1; Matr2[1, 2] := 5;

		    Matr2[2, 0] := 3; Matr2[2, 1] := 4; Matr2[2, 2] := 2;

		    Debug.WriteLine("Второй массив для выполнения операции:");

		    // Выведем созданный массив в консоль

		    For i := 0 To Matr2.GetUpperBound(1) Do

		        For j := 0 To Matr2.GetUpperBound(2) Do

		            Debug.Write(Matr2[i, j].ToString + " ");

		        End For;

		        Debug.WriteLine("");

		    End For;

		    // Выполним арифметическую операцию над элементами массива

		    Matr.ArrayOperation(ArrayOperationType.Minus, Matr2);

		    // Выведем результат операции в консоль

		    Debug.WriteLine("Первый массив после выполнения операции:");

		    For i := 0 To Matr.GetUpperBound(1) Do

		        For j := 0 To Matr.GetUpperBound(2) Do

		            Debug.Write(Matr[i, j].ToString + " ");

		        End For;

		        Debug.WriteLine("");

		    End For;

		End Sub UserProc;


После выполнения примера в консоль будет выведен массив до выполнения
 операции и после. При выполнении операции значения элементов первого массива
 уменьшатся на значения элементов второго массива:


Первый массив до выполнения операции:


4 9 3


2 15 7


8 5 13


Второй массив для выполнения операции:


1 2 1


2 1 5


3 4 2


Первый массив после выполнения операции:


3 7 2


0 14 2


5 1 11


См. также:


[Array](Array.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
