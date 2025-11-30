# IVZItemsNames.Add

IVZItemsNames.Add
-


# IVZItemsNames.Add


## Синтаксис


Add(Key: String, Value: String);


## Параметры


Key. Ключ элемента в коллекции;


Value. Значение элемента в
 коллекции.


## Описание


Метод Add добавляет новый элемент
 в коллекцию.


## Комментарии


Для удаления из коллекции элемента по его ключу используйте метод [IVZItemsNames.Remove](IVZItemsNames.Remove.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Visualizators.


	Sub UserProc;

	Var

	    Names: IVZItemsNames;

	    Item: String;

	    Key: Variant;

	Begin

	    Names := New VZItemsNames.Create;

	    Names.Add("14", "Белгородская область");

	    Names.Add("15", "Брянская область");

	    Names.Add("17", "Владимирская область");

	    Debug.WriteLine("Исходное количество элементов в коллекции: " +

	        Names.Count.ToString);

	    // Получим первый элемент коллекции

	    Key := Names.AllKeys.Item(0);

	    Item := Names.Item(Key);

	    Debug.WriteLine("Первый элемент: " + Key + " " + Item);

	    // Удалим данный элемент

	    Names.Remove(Key);

	    Debug.WriteLine("Размер коллекции после удаления элемента «" + Item + "»: " +

	        Names.Count.ToString);

	    // Очистим коллекцию полностью

	    Names.Clear;

	End Sub UserProc;


В результате примера была создана коллекция из трёх элементов. Затем
 из коллекции был удалён один из элементов. В окно консоли будут выведены
 размеры коллекции после её создания и после удаления одного элемента:


Исходное количество элементов в коллекции: 3


Размер коллекции после удаления элемента «Белгородская
 область»: 2


После выполнения всех операций коллекция будет очищена.


См. также:


[IVZItemsNames](IVZItemsNames.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
