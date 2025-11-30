# IList.IndexOf

IList.IndexOf
-


# IList.IndexOf


## Синтаксис


IndexOf(Value: Variant): Integer;


## Параметры


Value. Значение
 элемента списка, которое необходимо найти.


## Описание


Метод IndexOf осуществляет поиск
 указанного значения и возвращает индекс в списке, если поиск удачный.


## Комментарии


Метод возвращает «-1», если значение отсутствует в коллекции.


## Пример


			Sub UserProc;

Var

    ArrayL: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(0, 100) Do

        ArrayL.Add(Math.RandBetweenI(0, 100));

    End For;

    i := ArrayL.IndexOf(50);

End Sub UserProc;


После выполнения примера будет создан динамический массив со случайными
 значениями и осуществлён поиск элемента со значением «50». В случае удачного
 поиска в переменной «i» будет содержаться индекс найденного элемента.


См. также:


[IList](IList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
