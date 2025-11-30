# IPythonParameter.Name

IPythonParameter.Name
-


# IPythonParameter.Name


## Синтаксис


		Name: String;


## Описание


Свойство Name определяет наименование
 параметра.


## Комментарии


Наименование является регистрозависимым. Если параметр будет передан
 в функцию, в сигнатуре которой отсутствует параметр с заданным наименованием,
 то будет сгенерирована исключительная ситуация.


## Пример


Для выполнения примера предполагается наличие папки с модулями Python
 «d:\Work\Python\». В папке имеется модуль «sample.py». В модуле реализована
 функция, которая выполняет различные математические действия не менее
 чем с двумя операндами:


def getMathOperationWithOperands(a = 0, b = 0, c = 0):


if (a != 0) and (b != 0) and (c != 0):


return ((a + b) * c)


elif (a != 0) and (b != 0):


return a+b


elif (a != 0) and (c != 0):


return a-c


elif (b != 0) and (c != 0):


return b*c


else:


return -1


Добавьте ссылку на системную сборку Python.


					Sub UserProc;

		Var

		    pUtils: IPythonUtils;

		    pObj1, pObj2, pObj3: IPythonValueObject;

		    pParam1, pParam2, pParam3: IPythonParameter;

		    Result: Variant;

		Begin

		    pUtils := New PythonUtils.Create;

		    pUtils.AddFolderToPythonPath("d:\Work\Python\");

		    //Создание трёх объектов со значениями

		    pObj1 := New PythonValueObject.Create(100);

		    pObj2 := New PythonValueObject.Create(200);

		    pObj3 := New PythonValueObject.Create(300);

		    //Создание трёх именованных параметров

		    pParam1 := New PythonParameter.Create("a", pObj1);

		    pParam2 := New PythonParameter.Create("b", pObj2);

		    pParam3 := New PythonParameter.Create("c", pObj3);

		    //Выполнение функции с различными параметрами

		    Result := pUtils.Invoke("sample", "getMathOperationWithOperands", pParam1, pParam2);

		    Debug.WriteLine(Result);

		    Result := pUtils.Invoke("sample", "getMathOperationWithOperands", pParam2, pParam3);

		    Debug.WriteLine(Result);

		    Result := pUtils.Invoke("sample", "getMathOperationWithOperands", pParam1, pParam3);

		    Debug.WriteLine(Result);

		    Result := pUtils.Invoke("sample", "getMathOperationWithOperands", pParam1, pParam2, pParam3);

		    Debug.WriteLine(Result);

		    //Смена настроек в параметре: a --> b

		    Debug.WriteLine("   Смена параметра: a --> b");

		    pParam1.Name := "b";

		    pParam1.Value := New PythonValueObject.Create(-200);

		    Result := pUtils.Invoke("sample", "getMathOperationWithOperands", pParam1, pParam3);

		    Debug.WriteLine(Result);

		End Sub UserProc;


При выполнении примера будут созданы три именованных параметра со значениями.
 С различными комбинациями этих параметров будет выполнена Python функция
 - getMathOperationWithOperands. Результаты выполнения будут выведены в
 консоль среды разработки.


См. также:


[IPythonParameter](IPythonParameter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
