# IPythonDictionary.Update

IPythonDictionary.Update
-


# IPythonDictionary.Update


## Синтаксис


Update(Key: Variant; Value: Variant);


## Параметры


Key. Ключ добавляемого элемента.


Value. Значение добавляемого
 элемента.


## Описание


Метод Update обновляет словарь,
 добавляя в него новый элемент, состоящий из указанной пары ключ-значение.


Для выполнения примера предполагается наличие папки с модулями Python
 «d:\Work\Python\». В папке имеется модуль «sample.py». В модуле реализована
 следующая функция:


def getSizeOfDictionary(d):

return d.__sizeof__()


Добавьте ссылку на системную сборку Python.


		Sub UserProc;

		Var

	    pUtils: IPythonUtils;

	    pDict: IPythonDictionary;

	    Result: Variant;

		Begin

		    pUtils := New PythonUtils.Create;

		    pUtils.AddFolderToPythonPath("d:\Work\Python\");

		    // Создание и заполнение словаря

		    pDict := New PythonDictionary.Create(Null);

		    pDict.Update(1, "A");

		    pDict.Update(2, "B");

		    pDict.Update(3, "C");


		    // Получение информации о словаре

	    Result := pUtils.Invoke("sample", "getSizeOfDictionary", pDict);

	    Debug.WriteLine("Количество элементов в списке: " + pDict.Length.ToString);

	    Debug.WriteLine("Размер занимаемой памяти (байт): " + Result);

	    // Добавление элементов

	    pDict.Update(4, "D");

	    pDict.Update(5, "E");

	    pDict.Update(6, "F");

	    // Получение информации о словаре

	    Result := pUtils.Invoke("sample", "getSizeOfDictionary", pDict);

	    Debug.WriteLine("Количество элементов в списке: " + pDict.Length.ToString);

	    Debug.WriteLine("Размер занимаемой памяти (байт): " + Result);

	    // Удаление элементов

	    pDict.Pop(1);

	    pDict.Pop(2);

	    pDict.Pop(6);

	    // Получение информации о словаре

	    Result := pUtils.Invoke("sample", "getSizeOfDictionary", pDict);

	    Debug.WriteLine("Количество элементов в списке: " + pDict.Length.ToString);

	    Debug.WriteLine("Размер занимаемой памяти (байт): " + Result);

	End Sub UserProc;


При выполнении примера будет создан объект, содержащий в себе словарь
 Python. Словарь будет передан в функцию getSizeOfDictionary для получения
 объёма памяти, которую он занимает. После этого в словарь будут сначала
 добавлены, а затем удалены по три элемента. На каждом этапе вызывается
 функция getSizeOfDictionary. Количество элементов в списке и объём занимаемой
 памяти после создания, добавления и удаления элементов будут выведены
 в консоль среды разработки.


См. также:


[IPythonDictionary](IPythonDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
