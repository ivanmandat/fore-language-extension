# IList.Contains

IList.Contains
-


# IList.Contains


## Синтаксис


Contains(Value: Variant): Boolean;


## Параметры


Value. Значение
 элемента, наличие которого необходимо проверить.


## Описание


Метод Contains осуществляет
 проверку наличия элемента со значением Value.


## Комментарии


Метод возвращает значение True,
 если значение имеется в коллекции и False,
 если значение отсутствует.


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

    If ArrayL.Contains(50) Then

        Debug.WriteLine("The array contains the value 50");

    Else

        Debug.WriteLine("the array does not contain the value 50");

    End If;

End Sub UserProc;


После выполнения примера будет создан динамический массив со случайными
 значениями. В консоль среды разработки будет выведена информация о наличии
 значение 50 в массиве.


См. также:


[IList](IList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
