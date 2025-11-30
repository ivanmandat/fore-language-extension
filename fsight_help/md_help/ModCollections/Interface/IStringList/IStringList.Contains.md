# IStringList.Contains

IStringList.Contains
-


# IStringList.Contains


## Синтаксис


Contains(Value: String): Boolean;


## Параметры


Value. Значение,
 наличие которого необходимо проверить.


## Описание


Метод Contains осуществляет
 проверку наличия элемента с указанным значением.


## Комментарии


Метод возвращает значение True,
 если элемент с указанным значением имеется и False,
 если элемент отсутствует.


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

    If StrL.Contains("Number 25") Then

        s := "Yes";

    Else

        s := "No";

    End If;

End Sub UserProc;


После выполнения примера будет создан динамический массив строк. В переменной
 s будет содержаться значение Yes, если в массиве будет содержаться элемент
 со значением «Number 25».


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
