# ITopobase.GetSpecificTopobase

ITopobase.GetSpecificTopobase
-


# ITopobase.GetSpecificTopobase


## Синтаксис


GetSpecificTopobase(xml: String, trim: Boolean):
 [ITopobase](ITopobase.htm);


## Параметры


xml. Дерево-структура топоосновы;


trim. Признак того, обрезать
 ли результирующую топооснову.


## Описание


Метод GetSpecificTopobase
 создает топооснову по заданному дереву-структуре.


## Комментарии


Допустимые значения параметра trim:


	- True. Результирующая
	 топооснова будет обрезана по размеру топоосновы, заданной деревом-структурой;


	- False. Размер результирующей
	 топоосновы будет совпадать с размером той топоосновы, для которой
	 вызывается метод GetSpecificTopobase.


## Пример


Использование свойства приведено в примере для [ITopobase.Tree](ITopobase.Tree.htm).


См. также:


[ITopobase](ITopobase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
