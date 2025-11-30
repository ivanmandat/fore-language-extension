# IPythonTuple.Length

IPythonTuple.Length
-


# IPythonTuple.Length


## Синтаксис


		Length: Integer;


## Описание


Свойство Length возвращает длину
 кортежа.


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

		    pTuple: IPythonTuple;

		    Result: Variant;

		Begin

		    pUtils := New PythonUtils.Create;

		    pUtils.AddFolderToPythonPath("d:\Work\Python\");

		    //Создание списка
		 и кортежа

		    pList := New PythonList.Create(0, "A", Char.Chr(169)); //169-код знака ©

		    pTuple := New PythonTuple.Create(0, "A", Char.Chr(169)); //169-код знака ©

		    //Получение информации о списке

		    Result := pUtils.Invoke("sample", "getSizeOfList", pList);

		    Debug.WriteLine("Количество элементов в списке: " + pList.Length.ToString);

		    Debug.WriteLine("Размер занимаемой памяти (байт): " + Result);

		    //Получение информации о кортеже

		    Result := pUtils.Invoke("sample", "getSizeOfList", pTuple);

		    Debug.WriteLine("Количество элементов в списке: " + pTuple.Length.ToString);

		    Debug.WriteLine("Размер занимаемой памяти (байт): " + Result);

		End Sub UserProc;


При выполнении примера будут созданы объекты, содержащие в себе список
 и кортеж Python. Каждый из объектов будет передан в функцию getSizeOfList
 для получения объёма памяти, которую он занимает. Количество элементов
 в списке и кортеже и объёмы занимаемой памяти будут выведены в консоль
 среды разработки.


См. также:


[IPythonTuple](IPythonTuple.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
