# Python.InvokeModule

Python.InvokeModule
-


# Python.InvokeModule


## Синтаксис


InvokeModule(ModuleId: String, FunctionName: String,
 Params: Array): [Variant](ForeSys.chm::/Class/Variant/Variant.htm);


## Параметры


ModuleId. Идентификатор Python-модуля в репозитории;


FunctionName. Наименование
 выполняемой функции;


Params. Массив значений параметров,
 передаваемых в функцию.


## Описание


Метод InvokeModule выполняет
 функцию, хранящуюся в [Python-модуле](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/python_module.htm),
 и возвращает результат её работы.


## Комментарии


Особенности использования параметров:


	- формат значения параметра ModuleId
	 зависит от расположения Python-модуля в репозитории. Если Python-модуль
	 содержится в объекте-контейнере, то значение параметра задаётся в
	 формате: <идентификатор объекта-контейнера>.<идентификатор Python-модуля>;


	- значение параметра FunctionName
	 является регистрозависимым.


Если выполняемая функция не содержит входных параметров, то Params
 можно не указывать. Значения параметров в Params
 могут быть переданы в виде отдельного массива или перечислены через запятую.
 Значения простых типов, таких как String, Char, Integer, Double, Decimal,
 Currency, Boolean (типы str, int, float, bool в Python), передаются в
 соответствии с синтаксисом Fore без каких-либо преобразований. Значение
 Null соответствует значению None в языке Python. Если функция Python принимает
 в качестве входного параметра объект какого-либо класса Python, список
 или кортеж, то необходимо создать соответствующий объект с помощью одного
 из следующих Fore-классов: [PythonClassObject](../PythonClassObject/PythonClassObject.htm),
 [PythonList](../PythonList/PythonList.htm),
 [PythonTuple](../PythonTuple/PythonTuple.htm).


Если функция имеет параметры со значениями по умолчанию и при выполнении
 необходимо передать только часть параметров, то используйте [именованные
 параметры](../../Intro/Use_Assembly_Python_In_Programm.htm#namedparameter). Именованные параметры реализует класс [PythonParameter](../PythonParameter/PythonParameter.htm).
 Создайте параметры с необходимыми [наименованиями](../../Interface/IPythonParameter/IPythonParameter.Name.htm),
 задайте им [значения](../../Interface/IPythonParameter/IPythonParameter.Value.htm)
 и передайте их в метод Invoke.


## Пример


Для выполнения примера предполагается наличие в репозитории Python-модуля
 с идентификатором MOD_PYT. В модуле реализован следующий класс:


def summXY(x, y):


return x + y


Добавьте ссылки на системные сборки: Python.


			Sub UserProc;

Var

    Result: Variant;

Begin

    Result := Python.InvokeModule("MOD_PYT", "summXY", 100, 500);

    Debug.WriteLine(Result);

End Sub UserProc;


При выполнении примера будет выполнена функция на языке Python, осуществляющая
 сложение двух чисел, переданных в параметрах. Результат выполнения функции
 будет выведен в консоль среды разработки.


См. также:


[Python](Python.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
