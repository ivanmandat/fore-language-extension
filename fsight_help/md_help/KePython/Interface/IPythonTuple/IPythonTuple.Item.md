# IPythonTuple.Item

IPythonTuple.Item
-


# IPythonTuple.Item


## Синтаксис


		Item(Index: Integer): Variant;


## Параметры


Index. Индекс элемента в кортеже.


## Описание


Свойство Item возвращает значение
 элемента кортежа с указанным индексом.


## Пример


Для выполнения примера предполагается наличие папки с модулями Python
 «d:\Work\Python\». В папке имеется модуль «sample.py». В модуле реализована
 следующая функция:


def getWeekDayTuple(lang):

if lang.lower().find("rus") != -1:

return ("Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс")

else:

return ("Mo", "Tu", "We", "Th", "Fr", "Sa", "Su")


Добавьте ссылку на системную сборку Python.


					Sub UserProc;

		Var

		    pUtils: IPythonUtils;

		    pTuple: IPythonTuple;

		    Result, v: Variant;

		    Arr: Array;

		Begin

		    pUtils := New PythonUtils.Create;

		    pUtils.AddFolderToPythonPath("d:\Work\Python\");

		    //Получение кортежа, который является результатом выполнения функции

		    Result := pUtils.Invoke("sample", "getWeekDayTuple", "rus");

		    //Создание кортежа из полученного результата функции getWeekDayTuple

		    pTuple := New PythonTuple.Create(Result);

		    //Т.к. результатом функции getWeekDayTuple является объект, то созданный кортеж в pTuple

		    //будет состоять из одного элемента. Этот элемент необходимо также привести к типу IPythonTuple, чтобы

		    //работать с отдельными элементами кортежа из
		 результата getWeekDayTuple

		    pTuple := pTuple.Item(0) As IPythonTuple;

		    Debug.WriteLine(pTuple.Length);

		    Arr := pTuple.ToArray;

		    For Each v In Arr Do

		        Debug.Write(v + " ");

		    End For;

		End Sub UserProc;


При выполнении примера будет выполнена функция Python - getWeekDayTuple.
 Данная функция возвращает кортеж с сокращёнными наименованиями дней недели.
 Полученный кортеж будет преобразован в массив Fore. Значения элементов
 массива будут выведены в консоль среды разработки.


См. также:


[IPythonTuple](IPythonTuple.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
