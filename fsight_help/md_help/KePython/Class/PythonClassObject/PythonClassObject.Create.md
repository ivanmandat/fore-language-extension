# PythonClassObject.Create

PythonClassObject.Create
-


# PythonClassObject.Create


## Синтаксис


		Create(ModuleName: String; ClassName: String;
		 Params: Array);


## Параметры


ModuleName. Наименование модуля
 с кодом на Python в файловой системе. Наименование является регистрозависимым
 и указывается без расширения.


ClassName. Наименование класса.
 Наименование является регистрозависимым.


Params. Массив значений параметров,
 которые необходимо передать в конструктор класса.


## Описание


Конструктор Create создаёт объект,
 который является экземпляром класса с указанным наименованием.


## Комментарии


Если в классе Python используется конструктор по умолчанию, то параметр
 Params можно не указывать.


## Пример


Пример использования приведён в описании метода [IPythonClassObject.GetAttr](../../Interface/IPythonClassObject/IPythonClassObject.GetAttr.htm).


См. также:


[PythonClassObject](PythonClassObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
