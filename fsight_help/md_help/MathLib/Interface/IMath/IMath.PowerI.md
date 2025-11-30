# IMath.PowerI

IMath.PowerI
-


# IMath.PowerI


## Синтаксис


PowerI(Value: Integer; PowerValue: Integer): Double;


## Параметры


Value. Целое число, возводимое
 в степень;


PowerValue. Показатель степени.


## Описание


Метод PowerI возвращает результат
 возведения целого числа в степень.


## Комментарии


Для получения квадратного корня из числа используйте метод [IMath.Sqrt](IMath.Sqrt.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


			Sub UserProc;

Var

    r: Double;

Begin

    r := Math.PowerI(5,2);

    Debug.WriteLine(r);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен результат
 возведения в степень, равный «25».


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
