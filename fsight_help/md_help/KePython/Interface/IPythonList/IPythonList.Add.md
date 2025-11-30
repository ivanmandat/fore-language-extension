# IPythonList.Add

IPythonList.Add
-


# IPythonList.Add


## Синтаксис


		Add(Item: Variant);


## Параметры


Item. Значение, которое будет
 добавлено в список.


## Описание


Метод Add добавляет указанное
 значение в список.


## Комментарии


Списки в Python могут содержать значения различных типов, поэтому с
 помощью метода Add можно добавить
 в список как значения простых типов, так и различные объекты, являющиеся
 экземплярами классов Python.


## Пример


Для выполнения примера предполагается наличие папки с модулями Python
 «d:\Work\Python\». В папке имеется модуль «sample.py». В модуле реализована
 следующая функция:


def getSizeOfList(l):

return l.__sizeof__()


Добавьте ссылку на системную сборку Python.


					Sub UserProc;

		Var

		    pUtils: IPythonUtils;

		    pList: IPythonList;

		    Result: Variant;

		Begin

		    pUtils := New PythonUtils.Create;

		    pUtils.AddFolderToPythonPath("d:\Work\Python\");

		    //Создание списка

		    pList := New PythonList.Create(0, "A", Char.Chr(169)); //169-код знака ©

		    //Получение информации о списке

		    Result := pUtils.Invoke("sample", "getSizeOfList", pList);

		    Debug.WriteLine("Количество элементов в списке: " + pList.Length.ToString);

		    Debug.WriteLine("Размер занимаемой памяти (байт): " + Result);

		    //Добавление элементов

		    pList.Add(Integer.MinValue);

		    pList.Add(Double.MaxValue);

		    pList.Add(DateTime.Now.ToString);

		    //Повторное получение информации о списке

		    Result := pUtils.Invoke("sample", "getSizeOfList", pList);

		    Debug.WriteLine("Количество элементов в списке: " + pList.Length.ToString);

		    Debug.WriteLine("Размер занимаемой памяти (байт): " + Result);

		End Sub UserProc;


При выполнении примера будет создан объект, содержащий в себе список
 Python. Список будет передан в функцию getSizeOfList для получения объёма
 памяти, которую он занимает. После этого в список будут добавлены несколько
 элементов и осуществлён повторный вызов функции getSizeOfList. Количество
 элементов в списке и объём занимаемой памяти после создания и после добавления
 новых элементов будут выведены в консоль среды разработки.


См. также:


[IPythonList](IPythonList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
