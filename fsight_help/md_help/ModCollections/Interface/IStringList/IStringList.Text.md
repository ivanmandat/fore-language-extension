# IStringList.Text

IStringList.Text
-


# IStringList.Text


## Синтаксис


Text(Delim: String): String;


## Параметры


Delim. Разделитель
 элементов в строке.


## Описание


Свойство Text определяет массив
 как текстовую строку, используя разделитель, передаваемый в качестве входного
 параметра.


## Пример


			Sub UserProc;

Var

    StrL: IStringList;

    i: Integer;

    s: String;

Begin

    StrL := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL.Add("Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    s := StrL.Text("_");

    Debug.WriteLine(s)

End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться текстовая
 строка состоящая из всех элементов массива «StrL», разделенных знаком
 «_».


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
