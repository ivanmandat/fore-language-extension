# IVZStringArray.Add

IVZStringArray.Add
-


# IVZStringArray.Add


## Синтаксис


Add(Value: String): Integer;


## Параметры


Value. Значение нового элемента
 массива.


## Описание


Метод Add добавляет новый элемент
 в массив.


## Комментарии


Для добавления нового элемента в массив по указанному индексу используйте
 метод [IVZStringArray.InsertAt](IVZStringArray.InsertAt.htm).


## Пример


Добавьте ссылку на системную сборку Visualizators.


	Sub UserProc;

	Var

	    Array: IVZStringArray;

	    i: Integer;

	Begin

	    // Создадим новый массив и добавим в него элементы

	    Array := New VZStringArray.Create;

	    Array.Add("Значение 1");

	    Array.Add("Значение 2");

	    Array.Add("Значение 3");

	    // Удалим элемент в позиции с индексом 1

	    Array.Remove(1);

	    // Вставим новый элемент в позицию с индексом 1

	    Array.InsertAt(1, "Новое значение");

	    // Выведем значение элемента в позиции с индексом 1

	    Debug.WriteLine("Элемент в позиции с индексом 1: " + Array.Item(1));

	    // Выведем все элементы массива

	    Debug.WriteLine("Новый массив:");

	    For i := 0 To Array.Count - 1 Do

	        Debug.WriteLine(Array.Item(i));

	    End For;

	    // Выведем размер массива

	    Debug.WriteLine("Размер массива: " + Array.Count.ToString);

	    // Очистим массив

	    Array.Clear;

	End Sub UserProc;


В результате выполнения примера был создан массив строковых переменных.
 В окно консоли были выведены значение элемента массива с индексом «1»,
 список всех элементов массива и размер массива. Затем массив был очищен.


См. также:


[IVZStringArray](IVZStringArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
