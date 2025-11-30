# IStringList.Remove

IStringList.Remove
-


# IStringList.Remove


## Синтаксис


Remove(Value: String);


## Параметры


Value. Значение
 элемента, который необходимо удалить.


## Описание


Метод Remove осуществляет удаление
 элемента с указанным значением.


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

    StrL.Remove("Number 25");

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк
 и из него будет удален элемент со значением «Number 25», если таковой
 имеется.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
