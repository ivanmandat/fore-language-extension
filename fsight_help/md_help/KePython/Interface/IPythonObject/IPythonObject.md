# IPythonObject

IPythonObject
-


# IPythonObject


Сборка: Python;


## Описание


Интерфейс IPythonObject содержит
 базовые свойства всех объектов, которые могут быть использованы в функциях
 на языке Python.


## Иерархия наследования


IPythonObject


## Комментарии


Интерфейс описывает Fore-объект, который может быть передан/получен
 в/из функции на языке Python. Объект может содержать значение простых
 типов (String, Char, Integer, Double, Decimal, Currency, Boolean), которые
 сопоставимы с типами в Python, экземпляр [списка](../IPythonList/IPythonList.htm),
 [кортеж](../IPythonTuple/IPythonTuple.htm) или [экземпляр
 класса Python](../IPythonClassObject/IPythonClassObject.htm).


Для создания нового объекта предназначен Fore-класс - PythonObject.


Интерфейс IPythonObject является базовым для следующих интерфейсов:


	- [IPythonClassObject](../IPythonClassObject/IPythonClassObject.htm);


	- [IPythonList](../IPythonList/IPythonList.htm);


	- [IPythonTuple](../IPythonTuple/IPythonTuple.htm);


	- [IPythonValueObject](../IPythonValueObject/IPythonValueObject.htm);


	- [IPythonDictionary](../IPythonDictionary/IPythonDictionary.htm);


	- [IPythonSet](../IPythonSet/IPythonSet.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Type](IPythonObject.Type.htm)
		 Свойство Type возвращает
		 тип объекта.


См. также:


[Интерфейсы
 сборки Python](../KePython_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
