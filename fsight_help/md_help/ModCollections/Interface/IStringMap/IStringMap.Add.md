# IStringMap.Add

IStringMap.Add
-


# IStringMap.Add


## Синтаксис


Add(Key: String; Value: String);


## Параметры


Key. Уникальный строковый ключ
 элемента.


Value. Значение элемента.


## Описание


Метод Add осуществляет добавление
 нового элемента в карту.


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

	End Sub UserProc;


После выполнения примера будет сгенерирована карта строк случайного
 размера, элементы с повторяющимися ключами перезаписываются.


См. также:


[IStringMap](IStringMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
