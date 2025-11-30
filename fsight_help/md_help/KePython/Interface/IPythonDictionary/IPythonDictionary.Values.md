# IPythonDictionary.Values

IPythonDictionary.Values
-


# IPythonDictionary.Values


## Синтаксис


		Values: [IPythonList](../IPythonList/IPythonList.htm);


## Описание


Свойство Values возвращает список
 всех значений словаря.


## Пример


Для выполнения примера предполагается наличие папки с модулями Python
 «d:\Work\Python\». В папке имеется модуль «sample.py». В модуле реализована
 следующая функция:


def getNewDictionary(count):


d = {a: a ** 2 for a in range(count)}


return d


Добавьте ссылку на системную сборку Python.


					Sub UserProc;

		Var

		    pUtils: IPythonUtils;

		    pDict: IPythonDictionary;

		    Result: Variant;

		    KeyList, ValList: IPythonList;

		    i, c: Integer;

		Begin

		    pUtils := New PythonUtils.Create;

		    pUtils.AddFolderToPythonPath("d:\Work\Python\");

		    // Получение словаря, который является результатом выполнения функции

		    Result := pUtils.Invoke("sample", "getNewDictionary", 10);

		    // Создание словаря из полученного результата функции getNewDictionary

		    pDict := New PythonDictionary.Create(Result);

		    KeyList := pDict.Keys;

		    ValList := pDict.Values;

		    c := pDict.Length;

		    // Просмотр имеющихся пар ключ-значение

		    For i := 0 To c - 1 Do

		        Debug.WriteLine("Ключ: " + KeyList.Item(i) + "; Значение: " + ValList.Item(i));

		    End For;

		End Sub UserProc;


При выполнении примера будет выполнена функция Python - getNewDictionary.
 Данная функция возвращает сгенерированный словарь с десятью парами ключ-значение.
 Полученные ключи и значения будут выведены в консоль среды разработки.


См. также:


[IPythonDictionary](IPythonDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
