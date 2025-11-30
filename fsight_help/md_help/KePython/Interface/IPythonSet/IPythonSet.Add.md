# IPythonSet.Add

IPythonSet.Add
-


# IPythonSet.Add


## Синтаксис


Add(Value: Variant);


## Параметры


Value. Значение, добавляемое
 во множество.


## Описание


Метод Add добавляет указанное
 значение во множество.


## Комментарии


Если во множестве уже существует элемент с указанным значением, но новый
 элемент не добавляется.


## Пример


Для выполнения примера предполагается наличие папки с модулями Python
 «d:\Work\Python\». В папке имеется модуль «sample.py». В модуле реализована
 следующая функция:


def unionSets(set1, set2):

return set.union(set1, set2)


Добавьте ссылку на системную сборку Python.


	Sub UserProc;

	Var

	    pUtils: IPythonUtils;

	    pSet1, pSet2, pSet3: IPythonSet;

	    Result, v: Variant;

	    Arr: Array;

	Begin

	    pUtils := New PythonUtils.Create;

	    pUtils.AddFolderToPythonPath("d:\Work\Python\");

	    // Создание множеств

	    pSet1 := New PythonSet.Create("A", "B", "C");

	    Debug.WriteLine("Set 1: " + pSet1.Length.ToString);

	    pSet2 := New PythonSet.Create("B", "C", "D");

	    Debug.WriteLine("Set 2: " + pSet2.Length.ToString);

	    // Вызов функции для объединения множеств

	    Result := pUtils.Invoke("sample", "unionSets", pSet1, pSet2);

	    // Создание множества из результата работы функции unionSets

	    pSet3 := New PythonSet.Create(Result);

	    pSet3.Add("E");

	    pSet3.Pop;

	    Debug.WriteLine("Set 3: " + pSet3.Length.ToString);

	    Arr := pSet3.ToArray;

	    For Each v In Arr Do

	        Debug.Write(v + " ");

	    End For;

	    Debug.WriteLine("");

	End Sub UserProc;


При выполнении примера будут созданы два объекта, представляющие собой
 множества Python. Данные множества будут переданы в функцию unionSets
 для объединения. В полученное множество будет добавлен ещё один элемент
 и удалён первый элемент. После этого сформированное множество будет преобразовано
 в массив, элементы массива будут выведены консоль среды разработки.


См. также:


[IPythonSet](IPythonSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
