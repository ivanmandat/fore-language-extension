# IPythonClassObject.Invoke

IPythonClassObject.Invoke
-


# IPythonClassObject.Invoke


## Синтаксис


		Invoke(FunctionName: String; Params: Array):
		 Variant;


## Параметры


FunctionName.
 Наименование выполняемой функции. Значение параметра является регистрозависимым;


Params.
 Массив значений параметров, передаваемых в функцию.


## Описание


Метод Invoke выполняет функцию
 класса и возвращает результат её работы.


## Комментарии


Все функции классов в Python в своей сигнатуре имеют как минимум один
 входной параметр - self. В данном
 параметре передается экземпляр класса. При выполнении функции с помощью
 метода Invoke данный экземпляр
 класса передаётся автоматически, поэтому его не нужно указывать в массиве
 Params.


Если выполняемая функция не содержит входных параметров, то Params
 можно не указывать. Значения параметров в Params
 могут быть переданы в виде отдельного массива или перечислены через запятую.
 Значения простых типов, таких как String, Char, Integer, Double, Decimal,
 Currency, Boolean (типы str, int, float, bool в Python), передаются в
 соответствии с синтаксисом Fore без каких-либо преобразований. Значение
 Null соответствует значению None в языке Python. Если функция Python принимает
 в качестве входного параметра объект какого-либо класса Python, список
 или кортеж, то необходимо создать соответствующий объект с помощью одного
 из следующих Fore-классов: [PythonClassObject](../../Class/PythonClassObject/PythonClassObject.htm),
 [PythonList](../../Class/PythonList/PythonList.htm),
 [PythonTuple](../../Class/PythonTuple/PythonTuple.htm).


Если функция имеет параметры со значениями по умолчанию и при выполнении
 необходимо передать только часть параметров, то используйте [именованные
 параметры](../../Intro/Use_Assembly_Python_In_Programm.htm#namedparameter). Именованные параметры реализует класс [PythonParameter](../../Class/PythonParameter/PythonParameter.htm).
 Создайте параметры с необходимыми [наименованиями](../IPythonParameter/IPythonParameter.Name.htm),
 задайте им [значения](../IPythonParameter/IPythonParameter.Value.htm)
 и передайте их в метод Invoke.


## Пример


Пример использования приведён в описании метода [IPythonClassObject.GetAttr](IPythonClassObject.GetAttr.htm).


См. также:


[IPythonClassObject](IPythonClassObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
