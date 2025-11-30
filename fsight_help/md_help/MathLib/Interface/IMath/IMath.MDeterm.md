# IMath.MDeterm

IMath.MDeterm
-


# IMath.MDeterm


## Синтаксис


MDeterm(Data: Array): Double;


## Параметры


Values.
 Массив вещественных чисел.


## Описание


Метод MDeterm возвращает определитель
 заданной матрицы.


## Комментарии


Матрица должна быть квадратной.


Если входной массив содержит пропуски, функция вернет ошибку.


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


Sub UserProc;

Var

    matr: Array Of Double;

    r: Double;

Begin

    matr := New Double[4, 4];

    matr[0, 0] := 1; matr[0, 1] := 3; matr[0, 2] := 8; matr[0, 3] := 5;

    matr[1, 0] := 1; matr[1, 1] := 3; matr[1, 2] := 6; matr[1, 3] := 1;

    matr[2, 0] := 1; matr[2, 1] := 1; matr[2, 2] := 1; matr[2, 2] := 0;

    matr[3, 0] := 7; matr[3, 1] := 3; matr[3, 2] := 10; matr[3, 3] := 2;

    r := Math.MDeterm(matr);

    Debug.WriteLine(r);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен определитель
 матрицы, равный «160».


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
