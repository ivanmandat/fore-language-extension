# IStringMap.Remove

IStringMap.Remove
-


# IStringMap.Remove


## Синтаксис


Remove(Key: String);


## Параметры


Key. Ключ
 удаляемого элемента.


## Описание


Метод Remove осуществляет удаление
 элемента с указанным ключом.


## Пример


	Sub UserProc;

	Var

	    StrMap: IStringMap;

	    i: Integer;

	Begin

	    StrMap := New StringMap.Create;

	    For i := 0 To Math.RandBetweenI(50, 100) Do

	        StrMap.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Value " + Math.RandBetweenI(0, 100).ToString);

	    End For;

	    StrMap.Remove(StrMap.Key(StrMap.Count - 1));

	End Sub UserProc;


После выполнения примера будет сгенерирована карта строк случайного
 размера, элементы с повторяющимися ключами перезаписываются. Последний
 элемент карты будет удален.


См. также:


[IStringMap](IStringMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
