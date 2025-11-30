# Python.Invoke

Python.Invoke
-


# Python.Invoke


## Синтаксис


		Invoke(ModuleName: String; FunctionName:
		 String; Params: Array): Variant;


## Параметры


ModuleName.
 Наименование Python-модуля в файловой системе или наименование системного
 модуля. При указании Python-модуля в файловой системе используется файл
 с расширением *.ру. Значение параметра является регистрозависимым.


Поиск указанного модуля производится:


	- в папке установки Python рядом с файлом python3*.dll или во
	 вложенной папке Scripts;


	- по указанному пути, который задается с помощью строкового параметра
	 PythonPath в ветке реестра HKEY_CURRENT_USER\SOFTWARE\Foresight\Foresight Analytics Platform\10.0\DevEnv\Python. Для
	 получения подробной информации обратитесь к разделу «[Подключение
	 дополнительных модулей к «Форсайт. Аналитическая платформа](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#java)»;


	- в папке установки продукта «Форсайт. Аналитическая платформа»;


	- в папке, заданной с помощью метода [IPythonUtils.AddFolderToPythonPath](../../Interface/IPythonUtils/IPythonUtils.AddFolderToPythonPath.htm).


FunctionName. Наименование
 выполняемой функции. Значение параметра является регистрозависимым;


Params. Массив значений параметров,
 передаваемых в функцию.


## Описание


Метод Invoke выполняет функцию
 на языке Python и возвращает результат её работы.


## Комментарии


Поиск модуля ModuleName производится
 в текущей папке, из которой была запущена аналитическая платформа. Также
 учитываются папки, которые могли быть заданы с помощью метода [AddFolderToPythonPath](../../Interface/IPythonUtils/IPythonUtils.AddFolderToPythonPath.htm)
 для объекта класса [PythonUtils](../PythonUtils/PythonUtils.htm).


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


Для выполнения примера предполагается наличие в текущей папке аналитической
 платформы модуль Python с наименованием «sample.py». В модуле реализована
 следующая функция:


def summXY(x, y):


return x + y


Добавьте ссылку на системную сборку Python.


					Sub UserProc;

		Var

		    Result: Variant;

		Begin

		    Result := Python.Invoke("sample", "summXY", 100, 500);

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
