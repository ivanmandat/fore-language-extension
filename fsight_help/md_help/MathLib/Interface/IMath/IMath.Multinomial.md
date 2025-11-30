# IMath.Multinomial

IMath.Multinomial
-


# IMath.Multinomial


## Синтаксис


Multinomial(Values: Array): Double;


## Параметры


Values.
 Массив целых чисел.


## Описание


Метод Multinominal возвращает
 отношение факториала суммы значений к произведению факториалов.


## Комментарии


Значение каждого элемента массива должно принадлежать промежутку [0, 170].


Необходимо использовать массив значений типа [Integer](Fore.chm::/03_dataTypes/Fore_DataTypes.htm).


Функция корректно работает как с одномерными, так и с двумерными массивами.


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


					Sub UserProc;

		Var

		    r: Double;

		    Arr: Array[3] Of Integer;

		Begin

		    Arr[0] := 2;

		    Arr[1] := 3;

		    Arr[2] := 4;

		    r := Math.Multinomial(Arr);

		    Debug.WriteLine(r);

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен результат
 отношения, равный 1260.


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
