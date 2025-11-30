# IDBLookupControl.ListField

IDBLookupControl.ListField
-


# IDBLookupControl.ListField


## Синтаксис


ListField: String;


## Описание


Свойство ListField определяет
 одно или несколько полей, значения которых отображаются в данном компоненте.


## Комментарии


Разделителем между именами полей служит симво «;».


Компонент поиска расшифровывает поле одной таблицы, выводя значение
 одного или нескольких соответствующих полей другой таблицы. Отличие свойства
 ListField от [DataField](IDBLookupControl.DataField.htm)
 и [KeyField](IDBLookupControl.KeyField.htm) состоит в том,
 что поля заданные в последних двух свойствах не отображаются в компоненте,
 а используются для связи двух источников.


Для полного задания полей списка необходимо определить как набор данных
 [ListSource](IDBLookupControl.ListSource.htm), так и поля этого
 набора.


Перед определением ListField
 необходимо определить связь между двумя наборами данных, используя свойство
 [KeyField](IDBLookupControl.KeyField.htm). Если свойство ListField не установлено, то по
 умолчанию отображаются значения поля [KeyField](IDBLookupControl.KeyField.htm).


См. также:


[IDBLookupControl](IDBLookupControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
