# String.Chars

String.Chars
-


# String.Chars


## Синтаксис


Chars(Index: Integer): Char;


## Параметры


Index. Индекс символа в строке.
 Индексация начинается с 0.


## Описание


Свойство Chars возвращает из
 символьной строки символ с указанным индексом.


## Пример


			Sub UserProc;

Var

    s, s1: String;

    i, j: Integer;

Begin

    s := "String";

    // Получим количество символов

    i := String.Length_(s);

    Debug.WriteLine ("Всего символов: " + i.ToString);

    // Выведем в консоль символы

    For j:=0 To i-1 Do

        s1 := s.Chars(j);

        Debug.WriteLine ("j=" + j.ToString + " символ " + s1);

    End For;

End Sub UserProc;


После выполнения примера в консоль будут выведены индексы и соответствующие
 им символы строки.


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
