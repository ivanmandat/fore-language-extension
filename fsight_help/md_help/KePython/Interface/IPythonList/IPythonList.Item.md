# IPythonList.Item

IPythonList.Item
-


# IPythonList.Item


## Синтаксис


		Item(Index: Integer): Variant;


## Параметры


Index. Индекс элемента списка.


## Описание


Свойство Item возвращает значение
 элемента списка с указанным индексом.


## Пример


Для выполнения примера предполагается наличие папки с модулями Python
 d:\Work\Python\. В папке имеется модуль sample.py. В модуле реализована
 следующая функция:


import random


def getNewList(count):


res = []


i = 0


while i < count:


res.append(random.uniform(0, 100))


i = i + 1


return res


Добавьте ссылку на системную сборку Python.


					Sub UserProc;

		Var

		    pUtils: IPythonUtils;

		    pList: IPythonList;

		    Result, v: Variant;

		    Arr: Array;

		Begin

		    pUtils := New PythonUtils.Create;

		    pUtils.AddFolderToPythonPath("d:\Work\Python\");

		    //Получение списка, который является результатом выполнения функции

		    Result := pUtils.Invoke("sample", "getNewList", 10);

		    //Создание списка из полученного результата функции getNewList

		    pList := New PythonList.Create(Result);

		    //Т.к. результатом функции getNewList является объект, то созданный список в pList

		    //будет состоять из одного элемента. Этот элемент необходимо также привести к типу IPythonList, чтобы

		    //работать с отдельными элементами списка из
		 результата getNewList

		    pList := pList.Item(0) As IPythonList;

		    Debug.WriteLine(pList.Length);

		    Arr := pList.ToArray;

		    For Each v In Arr Do

		        Debug.Write(v + ", ");

		    End For;

		End Sub UserProc;


При выполнении примера будет выполнена функция Python - getNewList.
 Данная функция возвращает список со случайными числами. Полученный список
 будет преобразован в массив Fore. Значения элементов массива будут выведены
 в консоль среды разработки.


См. также:


[IPythonList](IPythonList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
