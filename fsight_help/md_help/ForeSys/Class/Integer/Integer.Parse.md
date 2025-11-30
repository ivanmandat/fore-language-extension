# Integer.Parse

Integer.Parse
-


# Integer.Parse


## Синтаксис


Parse(Value: String): Integer;


## Параметры


Value. Строковое значение,
 которое необходимо преобразовать к целочисленному типу.


## Описание


Метод Parse преобразует строковое
 значение к целочисленному типу без проверки на корректность строки.


## Комментарии


Данный метод не учитывает установленные региональные параметры. В значении,
 передаваемом в параметре Value,
 разделитель разрядов не используется.


Если преобразование не удалось, то генерируется исключительная ситуация.


Для преобразования вещественных чисел в соответствии с установленными
 региональными параметрами, используйте следующие методы:


	- [ICultureInfo.ParseInteger](../../Interface/ICultureInfo/ICultureInfo.ParseInteger.htm);


	- [ICultureInfo.TryParseInteger](../../Interface/ICultureInfo/ICultureInfo.TryParseInteger.htm).


## Пример


	Sub UserProc;

	Var

	    i: Integer;

	    s: String;

	Begin

	    s := "123456";

	    i := Integer.Parse(s);

	    Debug.WriteLine(i);

	End Sub UserProc;


После выполнения примера в переменной «i» будет
 содержаться значение 123456.


См. также:


[Integer](Integer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
