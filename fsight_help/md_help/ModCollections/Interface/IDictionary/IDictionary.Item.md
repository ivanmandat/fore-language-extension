# IDictionary.Item

IDictionary.Item
-


# IDictionary.Item


## Синтаксис


Item(Key: Variant): Variant;


## Параметры


Key. Ключ
 элемента.


## Описание


Свойство Item определяет значение
 элемента словаря с указанным ключом.


## Пример


	Sub UserProc;

	Var

	    Hast: IHashtable;

	    i: Integer;

	    v: Variant;

	Begin

	    Hast := New Hashtable.Create;

	    For i := 0 To 100 Do

	        Hast.Add(i, Math.RandBetween(0, 100));

	    End For;

	    v := Hast.Item(10);

	End Sub UserProc;


После выполнения примера будет создана хеш-таблица и в переменной v
 будет содержаться значение элемента с ключом 10.


См. также:


[IDictionary](IDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
