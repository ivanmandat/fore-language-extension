# IStringList.IndexOf

IStringList.IndexOf
-


# IStringList.IndexOf


## Синтаксис


IndexOf(Value: String): Integer;


## Параметры


Value. Значение,
 которое необходимо найти.


## Описание


Метод IndexOf осуществляет прямой
 поиск указанного значения.


## Комментарии


Метод возвращает индекс элемента в случае удачного поиска, и -1, если
 значение не найдено.


## Пример


			Sub UserProc;

Var

    StrL: IStringList;

    i: Integer;

Begin

    StrL := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL.Add("Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    i := StrL.IndexOf("Number 25");

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк,
 осуществлен поиск элемента со значением «Number 25» и в случае удачного
 поиска в переменной i будет содержаться индекс этого элемента.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
