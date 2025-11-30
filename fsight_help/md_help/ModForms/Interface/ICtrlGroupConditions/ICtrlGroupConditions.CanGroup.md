# ICtrlGroupConditions.CanGroup

ICtrlGroupConditions.CanGroup
-


# ICtrlGroupConditions.CanGroup


## Синтаксис


CanGroup(Indexes: Array): Boolean;


## Параметры


Indexes. Массив индексов элементов
 компонента.


## Описание


Метод CanGroup определяет возможность
 группировки элементов.


## Комментарии


Допустимые значения:


	- True. Группировка элементов
	 доступна;


	- False. Группировка элементов
	 недоступна.


Примечание.
 Элементы доступны для группировки, если в массиве последовательно указаны
 хотя бы два элемента, которые не содержатся в других группах.


Для группировки отмеченных элементов используйте метод [ICtrlGroupConditions.Group](ICtrlGroupConditions.Group.htm).


Для группировки элементов по индексу используйте метод [ICtrlGroupConditions.GroupByIndexes](ICtrlGroupConditions.GroupByIndexes.htm).


## Пример


Использование метода приведено в примере для [ICtrlGroupConditions.Group](ICtrlGroupConditions.Group.htm).


См. также:


[ICtrlGroupConditions](ICtrlGroupConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
