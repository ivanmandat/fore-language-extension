# RdsService.setItem

RdsService.setItem
-


# RdsService.setItem


## Синтаксис


setItem(dict: [PP.Rds.Dictionary](../Dictionary/Dictionary.htm),
 operation: [PP.Rds.ElementOperation](../../../Enums/ElementOperation.htm),
 targetKey: String, atIds: Array, data: Array|[PP.Rds.DItem](../DItem/DItem.htm),
 callback: function|PP.Delegate);


## Параметры


dict. Справочник НСИ;


operation. Тип операции над
 элементом справочника;


targetKey. Ключ элемента, над
 которым требуется выполнить операцию;


atIds. Массив идентификаторов
 [атрибутов](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Attributes.htm);


data. Массив значений указанных
 атрибутов или элемент справочника. Имеет структуру { values: [<массив
 значений указанных атрибутов>], transl: [<массив переводов в виде
 хешей> { <локаль>: <значение> } ] или объект типа [PP.Rds.DItem](../DItem/DItem.htm).


## Описание


Метод setItem добавляет или
 обновляет указанный элемент в справочнике НСИ.


## Пример


Использование метода приведено в примере для [конструктора
 DItem](../DItem/Constructor_DItem.htm).


См. также:


[RdsService](RdsService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
