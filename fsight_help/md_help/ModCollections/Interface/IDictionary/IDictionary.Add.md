# IDictionary.Add

IDictionary.Add
-


# IDictionary.Add


## Синтаксис


Add(Key: Variant; Value: Variant);


## Параметры


Key. Ключ элемента словаря.


Value. Значение элемента словаря.


## Описание


Метод Add осуществляет добавление
 элемента в словарь.


## Пример


	Sub UserProc;

	Var

	    Hash: IHashtable;

	    i: Integer;

	    s: String;

	    c: Char;

	Begin

	    Hash := New Hashtable.Create;

	    //Генерация случайной хеш-таблицы

	    For i := 0 To 10 Do

	        Hash.Add("Key_" + Math.RandBetweenI(0, 100).ToString, Char.Chr(Math.RandBetweenI(65, 90)));

	    End For;

	    //Просмотр сгенерированных ключей

	    For Each s In Hash.Keys Do

	        Debug.WriteLine(s);

	    End For;

	    //Просмотр сгенерированных значений

	    For Each c In Hash.Values Do

	        Debug.WriteLine(c As String);

	    End For;

	End Sub UserProc;


После выполнения примера будет создана хеш-таблица, содержащая элементы
 со случайными ключами и значениями. Список ключей и значений будет выведен
 в консоль среды разработки.


См. также:


[IDictionary](IDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
