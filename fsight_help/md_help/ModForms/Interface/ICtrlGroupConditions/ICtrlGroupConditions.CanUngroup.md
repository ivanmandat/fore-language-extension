# ICtrlGroupConditions.CanUngroup

ICtrlGroupConditions.CanUngroup
-


# ICtrlGroupConditions.CanUngroup


## Синтаксис


CanUngroup(Indexes: Array): Boolean;


## Параметры


Indexes. Массив индексов элементов
 компонента.


## Описание


Метод CanUngroup определяет
 возможность разгруппировки группы элементов.


## Комментарии


Допустимые значения:


	- True. Разгруппировка
	 группы элементов доступна;


	- False. Разгруппировка
	 группы элементов недоступна.


Примечание.
 Группа элементов доступна для разгруппировки, если в массиве указаны все
 элементы группы.


Для разгруппировки отмеченной группы элементов используйте метод [ICtrlGroupConditions.Ungroup](ICtrlGroupConditions.Ungroup.htm).


Для разгруппировки группы элементов по индексам используйте метод [ICtrlGroupConditions.UngroupByIndexes](ICtrlGroupConditions.UngroupByIndexes.htm).


## Пример


Использование метода приведено в примере для [ICtrlGroupConditions.Group](ICtrlGroupConditions.Group.htm).


См. также:


[ICtrlGroupConditions](ICtrlGroupConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
