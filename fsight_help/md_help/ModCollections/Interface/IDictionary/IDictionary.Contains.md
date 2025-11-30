# IDictionary.Contains

IDictionary.Contains
-


# IDictionary.Contains


## Синтаксис


Contains(Key: Variant): Boolean;


## Параметры


Key. Ключ элемента.


## Описание


Метод Contains осуществляет
 проверку наличия элемента с ключом Key.


## Комментарии


Метод возвращает значение True,
 если элемент с указанным ключом имеется в словаре и False,
 если элемент отсутствует.


## Пример


	Sub Main;

	Var

	    Hast: IHashtable;

	    i: Integer;

	    s: String;

	Begin

	    Hast := New Hashtable.Create;

	    For i := 0 To 100 Do

	        Hast.Add(Math.RandBetweenI(0, 100), Math.RandBetween(0, 100));

	    End For;

	    If Hast.Contains(10) Then

	        s := "Yes";

	    Else

	        s := "No";

	    End If;

	End Sub Main;


После выполнения примера будет создана хеш-таблица, содержащая случайные
 числа в диапазоне от 0 до 100. Каждый элемент будет иметь случайный ключ.
 В переменной s будет содержаться значение Yes, если в хеш-таблице присутствует
 элемент с ключом 10.


См. также:


[IDictionary](IDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
