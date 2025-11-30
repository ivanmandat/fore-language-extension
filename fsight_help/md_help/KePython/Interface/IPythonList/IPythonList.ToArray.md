# IPythonList.ToArray

IPythonList.ToArray
-


# IPythonList.ToArray


## Синтаксис


ToArray: Array;


## Описание


Метод ToArray преобразует содержимое
 списка в массив Fore.


## Комментарии


Полученный массив будет иметь тип данных Variant. Если список был многомерным,
 то полученный массив также будет многомерным.


## Пример


Для выполнения примера предполагается наличие папки с модулями Python
 d:\Work\Python\. В папке имеется модуль sample.py. В модуле реализована
 следующая функция:


def getArr2Dim():

    arr2Dim = [[1,2,3],[10,20,30]]

    return arr2Dim


Добавьте ссылку на системную сборку Python.


	Sub UserProc;

	Var

	    pUtils: IPythonUtils;

	    pList: IPythonList;

	    Result: Variant;

	    Arr: Array;

	    i, j: Integer;

	Begin

	    pUtils := New PythonUtils.Create;

	    pUtils.AddFolderToPythonPath("d:\Work\Python\");

	    //Получение списка, который является результатом выполнения функции

	    Result := pUtils.Invoke("sample", "getArr2Dim");

	    //Создание списка из полученного результата функции getArr2Dim

	    pList := New PythonList.Create(Result);

	    //Т.к. результатом функции getNewList является объект, то созданный список в pList

	    //будет состоять из одного элемента. Этот элемент необходимо также привести к типу IPythonList, чтобы

	    //работать с отдельными элементами списка из результата getArr2Dim.

	    pList := pList.Item(0) As IPythonList;

	    Arr := pList.ToArray;

	    Debug.WriteLine("Количество измерений: " + Arr.Rank.ToString);

	    If Arr.Rank = 2 Then

	        For i := Arr.GetLowerBound(1) To Arr.GetUpperBound(1) Do

	            For j := Arr.GetLowerBound(2) To Arr.GetUpperBound(2) Do

	                Debug.Write(Arr[i, j] + ' ');

	            End For;

	            Debug.WriteLine("");

	        End For;

	    End If;

	End Sub UserProc;


При выполнении примера будет выполнена функция Python - getArr2Dim.
 Данная функция возвращает двумерный список. Полученный список будет преобразован
 в двумерный массив Fore. Значения элементов массива будут выведены в консоль
 среды разработки.


См. также:


[IPythonList](IPythonList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
