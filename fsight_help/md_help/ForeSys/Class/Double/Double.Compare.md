# Double.Compare

Double.Compare
-


# Double.Compare


## Синтаксис


Compare(Value1: Double; Value2: Double): Integer;


## Параметры


Value1. Первое сравниваемое
 значение вещественного типа;


Value2. Второе сравниваемое
 значение вещественного типа.


## Описание


Метод Compare осуществляет сравнение
 двух вещественных чисел без учета точности.


## Комментарии


Метод возвращает значение "1", если Value1>Value2, "0",
 если Value1=Value2 и "-1", если Value1<Value2.


## Пример


	Sub UserProc;

	Var

	    x1, x2: Double;

	    i: Integer;

	Begin

	    x1 := Math.Rand;

	    x2 := Math.Rand;

	    i := Double.Compare(x1, x2);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться признак
 сравнения двух случайных вещественных чисел.


См. также:


[Double](Double.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
