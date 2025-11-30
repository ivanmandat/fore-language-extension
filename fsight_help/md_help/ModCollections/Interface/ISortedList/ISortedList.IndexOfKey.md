# ISortedList.IndexOfKey

ISortedList.IndexOfKey
-


# ISortedList.IndexOfKey


## Синтаксис


IndexOfKey(Key: Variant): Integer;


## Параметры


Key. Ключ
 элемента, индекс которого необходимо получить.


## Описание


Метод IndexOfKey возвращает
 индекс элемента по ключу.


## Комментарии


Метод возвращает значение -1, если элемент с указанным ключом
 отсутствует.


## Пример


	Sub UserProc;

	Var

	    SortList: ISortedList;

	    i: Integer;

	Begin

	    SortList := New SortedList.Create;

	    For i := 0 To Math.RandBetweenI(50, 100) Do

	        SortList.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Number " + Math.RandBetweenI(0, 100).ToString);

	    End For;

	    i := SortList.IndexOfKey("Key_25");

	End Sub UserProc;


После выполнения примера в переменной i будет содержаться индекс элемента
 с ключом «Key_25», если таковой существует.


См. также:


[ISortedList](ISortedList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
