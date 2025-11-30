# IRdsBaseBinding.DataDomain

IRdsBaseBinding.DataDomain
-


# IRdsBaseBinding.DataDomain


## Синтаксис


DataDomain: [DbDataDomain](Dal.chm::/Enums/DbDataDomain.htm);


## Описание


Свойство DataDomain определяет
 тип данных для хранения в атрибуте многобайтовой информации.


## Комментарии


Если свойство DataDomain имеет
 значение DbDataDomain.Memo, а
 свойство [IRdsAttribute.DataType](../IRdsAttribute/IRdsAttribute.DataType.htm)
 - значение DbDataType.String,
 то атрибут имеет тип «Длинный текст».


При работе с атрибутом «Длинный текст»
 учитывайте следующие ограничения:


	- если используется СУБД Oracle, то нельзя выполнять поиск по
	 значению данного атрибута;


	- данные атрибуты не могут входить в уникальные и неуникальные
	 индексы;


	- выборка и сохранение данных атрибутов могут проходить медленнее
	 по сравнению с обычными текстовыми атрибутами.


## Пример


Использование свойства приведено в примере для [IRdsBaseBinding.InUniqueKey](IRdsBaseBinding.InUniqueKey.htm).


См. также:


[IRdsBaseBinding](IRdsBaseBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
