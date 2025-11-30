# IVZDataDictionary.Add

IVZDataDictionary.Add
-


# IVZDataDictionary.Add


## Синтаксис


Add(Key: String; Value: Variant);


## Параметры


Key. Ключ добавляемого элемента;


Value. Новый элемент словаря.


## Описание


Метод Add добавляет в словарь
 новый элемент.


## Комментарии


Для удаления элемента используйте метод [IVZDataDictionary.Remove](IVZDataDictionary.Remove.htm).


## Пример


Добавьте ссылку на системную сборку Visualizators.


	Sub UserProc;

	Var

	    Dictionary: IVZDataDictionary;

	    i: Integer;

	    Key: Variant;

	Begin

	    // Создадим новый словарь и добавим в него элементы

	    Dictionary := New VZDataDictionary.Create;

	    Dictionary.Add("Ключ 1", 25);

	    Dictionary.Add("Ключ 2", "Значение элемента");

	    Dictionary.Add("Ключ 3", 2.4);

	    // Удалим элемент в позиции с заданным ключом

	    Dictionary.Remove("Ключ 3");

	    // Выведем размер словаря

	    Debug.WriteLine("Размер словаря: " + Dictionary.Count.ToString);

	    // Выведем список всех ключей и значений элементов
	 словаря

	    Debug.WriteLine("Словарь:");

	    For i := 0 To Dictionary.Count - 1 Do

	        Key := Dictionary.AllKeys.Item(i);

	        Debug.WriteLine(Key + " " + Dictionary.Item(Key));

	    End For;

	    // Очистим словарь

	    Dictionary.Clear;

	End Sub UserProc;


В результате выполнения примера был создан новый словарь данных, содержащий
 три элемента. Затем из словаря данных был удалён элемент с ключом «Ключ
 3». В окно консоли был выведен размер словаря и список всех ключей и значений
 его элементов. После выполнения всех операций словарь был очищен.


См. также:


[IVZDataDictionary](IVZDataDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
