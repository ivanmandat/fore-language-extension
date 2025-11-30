# IDictionary.Remove

IDictionary.Remove
-


# IDictionary.Remove


## Синтаксис


Remove(Key: Variant);


## Параметры


Key. Ключ
 элемента, который необходимо удалить.


## Описание


Метод Remove осуществляет удаление
 элемента с указанным ключом.


## Пример


	Sub Main;

	Var

	    Hast: IHashtable;

	    i: Integer;

	Begin

	    Hast := New Hashtable.Create;

	    For i := 0 To 100 Do

	        Hast.Add(i, Math.RandBetween(0, 100));

	    End For;

	    Hast.Remove(Math.RandBetweenI(0, 100));

	End Sub Main;


После выполнения примера будет создана хеш-таблица, содержащая случайные
 числа в диапазоне от 0 до 100, затем будет удален элемент со случайным
 ключом.


См. также:


[IDictionary](IDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
