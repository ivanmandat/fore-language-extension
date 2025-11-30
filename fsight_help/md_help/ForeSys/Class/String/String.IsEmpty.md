# String.IsEmpty

String.IsEmpty
-


# String.IsEmpty


## Синтаксис


IsEmpty: Boolean;


## Описание


Метод IsEmpty возвращает признак
 пустого значения переменной.


## Комментарии


Если значение переменной - пустая строка, то метод возвращает значение
 True, иначе - False.


## Пример


	Sub UserProc;

	Var

	    s1, s2: String;

	    b, b1: Boolean;

	Begin

	    s1 := "";

	    s2 := "abcdef";

	    b := s1.IsEmpty;

	    b1 := s2.IsEmpty;

	    Debug.WriteLine(b);

	    Debug.WriteLine(b1);

	End Sub UserProc;


В результате в переменной «b» будет находиться
 значение True, а в переменной «b1» значение False.


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
