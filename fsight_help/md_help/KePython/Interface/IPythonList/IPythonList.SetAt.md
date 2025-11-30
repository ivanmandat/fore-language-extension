# IPythonList.SetAt

IPythonList.SetAt
-


# IPythonList.SetAt


## Синтаксис


		SetAt(Index: Integer; Item: Variant);


## Параметры


Index.
 Индекс элемента списка.


Item.
 Значение, которое будет задано элементу списка.


## Описание


Метод SetAt задаёт значение
 указанному элементу списка.


## Комментарии


Тип указываемого значения должен соответствовать тому типу, который
 имеет уже установленное в элементе значение.


## Пример


Добавьте ссылку на системную сборку Python.


					Sub UserProc;

		Var

		    pList: IPythonList;

		    v: Variant;

		    Arr: Array;

		Begin

		    //Создание списка

		    pList := New PythonList.Create("A", "B", "C");

		    Arr := pList.ToArray;

		    For Each v In Arr Do

		        Debug.Write(v + " ");

		    End For;

		    Debug.WriteLine("");

		    //Изменения значения последнего элемента

		    pList.SetAt(2, pList.Item(0) + pList.Item(1));

		    Arr := pList.ToArray;

		    For Each v In Arr Do

		        Debug.Write(v + " ");

		    End For;

		End Sub UserProc;


При выполнении примера будет создан объект, содержащий в себе список
 Python. В списке будет изменено значение последнего элемента. Значения
 элементов списка до и после изменения будут выведены в консоль среды разработки.


См. также:


[IPythonList](IPythonList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
