# String.Chr

String.Chr
-


# String.Chr


## Синтаксис


		Chr(Value: Integer): String;


## Параметры


Value. ASCII-код.


## Описание


Метод Chr возвращает символ,
 соответствующий указанному ASCII-коду.


## Комментарии


Для получения ASCII-кода, соответствующего символу, используйте метод
 [String.ASCII](String.ASCII.htm).


## Пример


					Sub UserProc;

		Var

		    i: Integer;

		Begin

		    i := 62;

		    // Выводим символ, соответствующий ASCII-коду

		    Debug.WriteLine("Char(" + i.ToString + ") = " + String.Chr(i));

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен символ,
 соответствующий ASCII-коду.


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
