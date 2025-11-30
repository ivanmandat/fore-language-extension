# Array.Operation

Array.Operation
-


# Array.Operation


## Синтаксис


		Operation(OperationType: [ArrayOperationType](../../Enums/ArrayOperationType.htm),
		 Value: Variant);


## Параметры


OperationType. Тип арифметической
 операции;


Value. Значение, которое будет
 использоваться при выполнении операции над элементами массива.


## Описание


Метод Operation выполняет арифметическую
 операцию над элементами массива с указанным значением.


## Комментарии


Метод используется для работы со следующими [типами данных](Fore.chm::/03_dataTypes/Fore_DataTypes.htm):
 Integer, Decimal, Float.


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


					Sub UserProc;

		Var

		    Matr: Array Of Double;

		    i, j: Integer;

		Begin

		    // Создадим двумерный массив

		    Matr := New Double[3, 3];

		    Matr[0, 0] := 4; Matr[0, 1] := 9; Matr[0, 2] := 3;

		    Matr[1, 0] := 2; Matr[1, 1] := 15; Matr[1, 2] := 7;

		    Matr[2, 0] := 8; Matr[2, 1] := 5; Matr[2, 2] := 13;

		    Debug.WriteLine("Массив до выполнения операции:");

		    // Выведем созданный массив в консоль

		    For i := 0 To Matr.GetUpperBound(1) Do

		        For j := 0 To Matr.GetUpperBound(2) Do

		            Debug.Write(Matr[i, j].ToString + " ");

		        End For;

		        Debug.WriteLine("");

		    End For;

		    // Выполним арифметическую операцию над элементами массива

		    Matr.Operation(ArrayOperationType.Minus, 2);

		    // Выведем результат операции в консоль

		    Debug.WriteLine("Массив после выполнения операции:");

		    For i := 0 To Matr.GetUpperBound(1) Do

		        For j := 0 To Matr.GetUpperBound(2) Do

		            Debug.Write(Matr[i, j].ToString + " ");

		        End For;

		        Debug.WriteLine("");

		    End For;

		End Sub UserProc;


После выполнения примера в консоль будет выведен массив до выполнения
 операции и после. При выполнении операции значения элементов массива уменьшатся
 на 2:


Массив до выполнения операции:


4 9 3


2 15 7


8 5 13


Массив после выполнения операции:


2 7 1


0 13 5


6 3 11


См. также:


[Array](Array.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
