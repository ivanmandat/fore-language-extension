# IStringMap.Clone

IStringMap.Clone
-


# IStringMap.Clone


## Синтаксис


Clone: [IStringMap](IStringMap.htm);


## Описание


Метод Clone создает копию карты
 строковых элементов.


## Пример


	Sub UserProc;

	Var

	    StrMap, StrMap1: IStringMap;

	    i: Integer;

	Begin

	    StrMap := New StringMap.Create;

	    StrMap1 := New StringMap.Create;

	    For i := 0 To Math.RandBetweenI(50, 100) Do

	        StrMap.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Value " + Math.RandBetweenI(0, 100).ToString);

	    End For;

	    StrMap1 := StrMap.Clone;

	    StrMap.Clear;

	End Sub UserProc;


После выполнения примера будет сгенерирована карта строк случайного
 размера, элементы с повторяющимися ключами перезаписываются. В переменной
 StrMap1 будет содержаться копия карты StrMap.


См. также:


[IStringMap](IStringMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
