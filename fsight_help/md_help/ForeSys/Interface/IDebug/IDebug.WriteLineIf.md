# IDebug.WriteLineIf

IDebug.WriteLineIf
-


# IDebug.WriteLineIf


## Синтаксис


		WriteLineIf(Condition: Boolean; Value: Variant);


## Параметры


Condition. Условие, при выполнении
 которого выводится значение, передаваемое в параметре Value;


Value. Значение, которое необходимо
 вывести в консоль. Для корректного вывода в данном параметре должны передаваться
 простые типы данных.


## Описание


Метод WriteLine осуществляет
 вывод значения, передаваемого посредством параметра Value,
 с переводом курсора на новую строку.


## Комментарии


Значение выводится, если выполняется условие Condition.


## Пример


Добавьте системную сборку MathFin.


					Sub UserProc;

		Var

		    a, b: Integer;

		Begin

		    a := Math.RandBetweenI(0, 100);

		    b := Math.RandBetweenI(0, 100);

		    Debug.WriteLine("A=" + a.ToString + "; B=" + b.ToString + " ");

		    Debug.WriteLineIf(a < b, "B больше A");

		    Debug.WriteLineIf(a > b, "А больше B");

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены значения
 двух сгенерированных чисел и сообщение, соответствующее установленным
 условиям.


См. также:


[IDebug](IDebug.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
