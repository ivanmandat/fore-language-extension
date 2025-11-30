# Использование сборки Python при разработке

Использование сборки Python при разработке
-


# Использование сборки Python при разработке


Сборка Python предназначена для выполнения функций на языке Python,
 получения результатов их работы и дальнейшей работы с полученными данными.
 В зависимости от того, где расположены модули и каким образом реализованы
 функции Python, для выполнения можно использовать следующие методы:


	- [Python.Invoke](../Class/Python/Python.Invoke.htm)
	 или [Python.InvokeModule](../Class/Python/Python.InvokeModule.htm);


	- [IPythonUtils.Invoke](../Interface/IPythonUtils/IPythonUtils.Invoke.htm)
	 или [IPythonUtils.InvokeModule](../Interface/IPythonUtils/IPythonUtils.InvokeModule.htm);


	- [IPythonClassObject.Invoke](../Interface/IPythonClassObject/IPythonClassObject.Invoke.htm).


## Выполнение функций Python


Статический метод [Python.Invoke](../Class/Python/Python.Invoke.htm)
 используется, если модули Python расположены:


	- в папке установки Python рядом с файлом python3*.dll или во
	 вложенной папке Scripts;


	- по указанному пути, который задается с помощью строкового параметра
	 PythonPath в ветке реестра HKEY_CURRENT_USER\SOFTWARE\Foresight\Foresight Analytics Platform\10.0\DevEnv\Python. Для
	 получения подробной информации обратитесь к разделу «[Подключение
	 дополнительных модулей к «Форсайт. Аналитическая платформа](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#java)»;


	- в папке установки продукта «Форсайт. Аналитическая платформа»;


	- в папке, заданной с помощью метода [IPythonUtils.AddFolderToPythonPath](../Interface/IPythonUtils/IPythonUtils.AddFolderToPythonPath.htm).


Статический метод [Python.InvokeModule](../Class/Python/Python.InvokeModule.htm)
 используется, если модули Python добавлены в репозиторий в качестве объектов
 [Python-модуль](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/python_module.htm).
 При этом для выполнения функций Python не требуется создавать какие-либо
 дополнительные объекты.


Функция Python:


def summXY(x, y):

return x + y


Например, код на Fore, реализованный с помощью [Python.Invoke](../Class/Python/Python.Invoke.htm):


	Var

	    Result: Variant;

	Begin

	    Result := Python.Invoke("sample", "summXY", 100, 500);


Если модули Python расположены в какой-либо собственной папке, то для
 использования функций Python в коде выполните следующие действия:


	- Создайте экземпляр класса [PythonUtils](../Class/PythonUtils/PythonUtils.htm),
	 приведите полученный объект к типу [IPythonUtils](../Interface/IPythonUtils/IPythonUtils.htm).


	- С помощью метода [IPythonUtils.AddFolderToPythonPath](../Interface/IPythonUtils/IPythonUtils.AddFolderToPythonPath.htm)
	 задайте список папок, в которых будет производиться поиск модулей
	 и функций Python.


	- Выполните функцию Python с помощью метода [IPythonUtils.Invoke](../Interface/IPythonUtils/IPythonUtils.Invoke.htm)
	 и получите результат.


Предположим, указанная выше функция summXY реализована в модуле sample.py,
 модуль расположен в папке d:\Work\Python\. Следующий код выполнит функцию
 summXY с указанными значениями параметров:


	Var

	    pUtils: IPythonUtils;

	    Result: Variant;

	Begin

	    pUtils := New PythonUtils.Create;

	    pUtils.AddFolderToPythonPath("d:\Work\Python\");

	    Result := pUtils.Invoke("sample", "summXY", 100, 500);


## Выполнение функций Python, реализованных в классе


Для выполнения функций Python, реализованных в классе, в коде выполните
 следующие действия:


	- Создайте экземпляр класса [PythonClassObject](../Class/PythonClassObject/PythonClassObject.htm),
	 приведите полученный объект к типу [IPythonClassObject](../Interface/IPythonClassObject/IPythonClassObject.htm).


	- С помощью методов [IPythonClassObject.GetAttr](../Interface/IPythonClassObject/IPythonClassObject.GetAttr.htm)/[IPythonClassObject.SetAttr](../Interface/IPythonClassObject/IPythonClassObject.SetAttr.htm) получите/измените
	 значения атрибутов класса, если от этих атрибутов в дальнейшем будет
	 зависеть результат выполнения функции.


	- Выполните функцию класса Python с помощью метода [IPythonClassObject.Invoke](../Interface/IPythonClassObject/IPythonClassObject.Invoke.htm) и получите
	 результат.


Код на Python:


class Door:

def __init__(self, color, height, width):

self.color = color

self.height = height

self.width = width

def getDoorDescription(self, comment):

return comment + ". Цвет: " + self.color + " Размеры: " + str(self.height) + "X" + str(self.width) + " мм."


Код на Fore:


	Var

	    pUtils: IPythonUtils;

	    pObj: IPythonClassObject;

	    Result: Variant;

	Begin

	    pUtils := New PythonUtils.Create;

	    pUtils.AddFolderToPythonPath("d:\Work\Python\");

	    //Создание объекта класса Door

	    pObj := New PythonClassObject.Create("sample", "Door", "Red", 2000, 800);

	    //Получить значение атрибута color

	    Result := pObj.GetAttr("color");

	    Debug.WriteLine(Result);

	    //Изменить значение атрибута color

	    pObj.SetAttr("color", "White");

	    //Выполнить функцию экземпляра класса

	    Result := pObj.Invoke("getDoorDescription", "Межкомнатная дверь");


В результате выполнения примера будет создан экземпляр класса Python
 с указанными значениями атрибутов. Затем будет получен и изменён атрибут
 color. Будет выполнена функция getDoorDescription, которая возвращает
 строковый результат.


## Использование именованных параметров


Если для параметров функции на Python определены значения по умолчанию
 и необходимо выполнить функцию, задав значения не всех, а только определённых
 параметров, то можно использовать именованные параметры. Для создания
 именованного параметра предназначен класс [PythonParameter](../Class/PythonParameter/PythonParameter.htm).
 Создайте параметры с нужными именами и значениями и передайте их в метод
 Invoke.


Функция на Python:


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


Код на Fore:


	Var

	    pUtils: IPythonUtils;

	    pObj1, pObj2: IPythonValueObject;

	    pParam1, pParam2: IPythonParameter;

	    Result: Variant;

	Begin

	    pUtils := New PythonUtils.Create;

	    pUtils.AddFolderToPythonPath("d:\Work\Python\");

	    //Создание объектов со значениями

	    pObj1 := New PythonValueObject.Create(100);

	    pObj2 := New PythonValueObject.Create(200);

	    //Создание именованных параметров

	    pParam1 := New PythonParameter.Create("a", pObj1);

	    pParam2 := New PythonParameter.Create("c", pObj2);

	    //Выполнение функции

	    Result := pUtils.Invoke("sample", "getMathOperationWithOperands", pParam1, pParam2);


При выполнении примера будут созданы два именованных параметра со значениями.
 С этими параметрами будет выполнена Python функция getMathOperationWithOperands.


## Работа с типами данных Python


Простые типы данных языка Fore, такие как String, Char, Integer, Double,
 Decimal, Currency, Boolean, совместимы с типами данных языка Python -
 str, int, float, bool. Значения этих типов могут быть переданы в функции
 Python или получены в результате выполнения функций Python без каких-либо
 дополнительных преобразований. Также можно работать с такими типами данных
 Python, как список и кортеж. Для работы со списком используется интерфейс
 [IPythonList](../Interface/IPythonList/IPythonList.htm),
 для работы с кортежем - [IPythonTuple](../Interface/IPythonTuple/IPythonTuple.htm).
 Если функция возвращает список или кортеж, то приведите результат работы
 метода Invoke к соответствующему
 интерфейсу. Для создания нового списка предназначен класс [PythonList](../Class/PythonList/PythonList.htm), нового кортежа - [PythonTuple](../Class/PythonTuple/PythonTuple.htm).


Функция на Python:


def getSizeOfList(l):

return l.__sizeof__()


Код на Fore:


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

	    pList := New PythonList.Create(0, "A", Char.Chr(169));

	    pTuple := New PythonTuple.Create(0, "A", Char.Chr(169));

	    //Получение информации о списке

	    Result := pUtils.Invoke("sample", "getSizeOfList", pList);

	    Debug.WriteLine("Количество элементов в списке: " + pList.Length.ToString);

	    Debug.WriteLine("Размер занимаемой памяти (байт): " + Result);

	    //Получение информации о кортеже

	    Result := pUtils.Invoke("sample", "getSizeOfList", pTuple);

	    Debug.WriteLine("Количество элементов в списке: " + pTuple.Length.ToString);

	    Debug.WriteLine("Размер занимаемой памяти (байт): " + Result);


При выполнении примера будут созданы объекты, содержащие в себе список
 и кортеж Python. Каждый из объектов будет передан в функцию getSizeOfList
 для получения объёма памяти, которую он занимает. Количество элементов
 в списке и кортеже и объёмы занимаемой памяти будут выведены в консоль
 среды разработки.


## Обработка исключительных ситуаций


Обработка всех исключительных ситуаций осуществляются с помощью оператора
 [Try…Except…Finally…End
 Try](Fore.chm::/10_Processing_Exceptions/processing_the_exceptions.htm).
 Для обработки ошибок, которые могут возникнуть при выполнении функций
 Python, используется класс [PythonException](../Class/PythonException/PythonException.htm).


	Var

	    pUtils: IPythonUtils;

	    Result: Variant;

	Begin

	    pUtils := New PythonUtils.Create;

	    pUtils.AddFolderToPythonPath("d:\Work\Python\");

	    Try

	        Result := pUtils.Invoke("sample", "summXY", "a", 100);

	        Debug.WriteLine(Result);

	    Except On e: PythonException Do

	        Debug.WriteLine(e.Message);

    End Try;


Данный код выполняет указанную выше функцию summXY с параметрами различных
 типов. При выполнении кода осуществляется обработка возможных исключительных
 ситуаций с помощью оператора Try…Except…Finally…End Try. Если возникнет
 ошибка, то текст ошибки будет выведен в консоль среды разработки.


См. также:


[Введение
 в сборку Python](Python_Intro.htm) | [Иерархия
 сборки Python](Hierarchy/Python_Assembly_Hierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
