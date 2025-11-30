# IMath.AverageI

IMath.AverageI
-


# IMath.AverageI


## Синтаксис


AverageI(Values: Array): Integer;


## Параметры


Values. Массив целых чисел.


## Описание


Метод AverageI возвращает среднее
 арифметическое целочисленных аргументов.


## Комментарии


Необходимо использовать массив значений типа [Integer](Fore.chm::/03_dataTypes/Fore_DataTypes.htm).


Функция корректно работает как с одномерными, так и с двумерными массивами.


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


					Sub UserProc;

		Var

		    r: Integer;

		    Arr: Array[5] Of Integer;

		Begin

		    Arr[0] := 10;

		    Arr[1] := 7;

		    Arr[2] := 9;

		    Arr[3] := 27;

		    Arr[4] := 2;

		    r := Math.AverageI(Arr);

		    Debug.WriteLine(r);

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено среднее
 арифметическое аргументов, равное 11.


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
