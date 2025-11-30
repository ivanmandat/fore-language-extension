# IPythonClassObject

IPythonClassObject
-


# IPythonClassObject


Сборка: Python;


## Описание


Интерфейс IPythonClassObject
 предназначен для работы с объектом, который является экземпляром класса
 на языке Python.


## Иерархия наследования


           [IPythonObject](../IPythonObject/IPythonObject.htm)


           IPythonClassObject


## Комментарии


Для создания нового объекта, который является экземпляром класса Python,
 предназначен Fore-класс - [PythonClassObject](../../Class/PythonClassObject/PythonClassObject.htm).
 Если экземпляр класса Python является результатом выполнения какой-либо
 функции Python, то приведите результат метода Invoke
 к интерфейсу IPythonClassObject.
 Для проверки, какой тип имеет результат функций Python, используется свойство
 [IPythonObject.Type](../IPythonObject/IPythonObject.Type.htm).


## Свойства, унаследованные от [IPythonObject](../IPythonObject/IPythonObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Type](../IPythonObject/IPythonObject.Type.htm)
		 Свойство Type возвращает
		 тип объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetAttr](IPythonClassObject.GetAttr.htm)
		 Метод GetAttr получает
		 значение аргумента с указанным наименованием у экземпляра класса.


		 ![](../../Sub_Image.gif)
		 [Invoke](IPythonClassObject.Invoke.htm)
		 Метод Invoke выполняет
		 функцию класса и возвращает результат её работы.


		 ![](../../Sub_Image.gif)
		 [SetAttr](IPythonClassObject.SetAttr.htm)
		 Метод SetAttr задаёт
		 значение аргумента с указанным наименованием у экземпляра класса.


См. также:


[Интерфейсы
 сборки Python](../KePython_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
