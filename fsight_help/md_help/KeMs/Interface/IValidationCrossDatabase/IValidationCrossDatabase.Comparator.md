# IValidationCrossDatabase.Comparator

IValidationCrossDatabase.Comparator
-


# IValidationCrossDatabase.Comparator


## Синтаксис


Comparator: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm);


## Описание


Свойство ComparatorDim определяет
 справочник, на котором строится измерение в источнике данных, с которым
 производится сравнение.


## Комментарии


В качестве источника данных может выступать база данных временных рядов
 или стандартный куб, содержащий календарное измерение.


Если значение свойства не задано, то правило валидации выполняется внутри
 родительской базы данных временных рядов.


## Пример


Использование свойства приведено в примере для [IValidationCrossDatabase.Mappings](IValidationCrossDatabase.Mappings.htm).


См. также:


[IValidationCrossDatabase](IValidationCrossDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
