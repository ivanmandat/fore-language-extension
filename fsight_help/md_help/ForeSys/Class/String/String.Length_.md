# String.Length_

String.Length_
-


# String.Length_


## Синтаксис


		Length_(Source: String): Integer;


## Параметры


Source.
 Cтрока.


## Описание


Метод Length возвращает количество
 символов в указанной строке.


## Комментарии


Для получения определённого количества символов строки используйте методы
 [String.Left](String.Left.htm) и [String.Right](String.Right.htm).


## Пример


					Sub UserProc;

		Var

		    s1: String;

		    i: Integer;

		Begin

		    s1 := "Calculator";

		    // Получаем количество символов

		    i := String.Length_(s1);

		    Debug.WriteLine("Length_(""" + s1 + """) = " + i.ToString);

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено количество
 символов в строке «Calculator».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
