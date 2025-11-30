# IRdsDictionaryElementData.RecordO

IRdsDictionaryElementData.RecordO
-


# IRdsDictionaryElementData.RecordO


## Синтаксис


RecordO(Options: Variant): [IOrmRecord](KeOrm.chm::/Interface/IOrmRecord/IOrmRecord.htm);


## Параметры


Options. Вариант возвращаемых
 данных.


## Описание


Свойство RecordO возвращает
 данные атрибутов элемента в зависимости от заданного параметра в виде
 объекта, описываемого интерфейсом [IOrmRecord](KeOrm.chm::/Interface/IOrmRecord/IOrmRecord.htm).


## Комментарии


Параметр Options определяет
 вариант возвращаемых данных. Допустимые значения:


	- 0. Свойство RecordO
	 работает аналогично свойству [IRdsDictionaryElementData.Record](IRdsDictionaryElementData.Record.htm)
	 и возвращает отображаемые значения атрибутов;


	- 1. Свойство RecordO
	 возвращает значения атрибутов, которые лежат в таблице, являющейся
	 источником данных справочника.


Представление значений атрибутов элемента в виде объекта,
 описываемого интерфейсом [IOrmRecord](KeOrm.chm::/Interface/IOrmRecord/IOrmRecord.htm),
 используется при [расширенном
 поиске](../IRdsDictionaryElementsSearch/IRdsDictionaryElementsSearch.Condition.htm) элементов справочника. Если предполагается чтение/изменений
 значений атрибутов, то используйте свойства [AccessAttribute](IRdsDictionaryElementData.AccessAttribute.htm),
 [Attribute](IRdsDictionaryElementData.Attribute.htm), [AttributeTranslation](IRdsDictionaryElementData.AttributeTranslation.htm),
 [Value](IRdsDictionaryElementData.Value.htm), [ValueTranslation](IRdsDictionaryElementData.ValueTranslation.htm)
 или метод [SetAttributeValue](IRdsDictionaryElementData.SetAttributeValue.htm).


Примечание.
 Частое обращение к значению свойства RecordO
 может привести к проблемам с производительностью.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника НСИ с идентификатором DIM.


Добавьте ссылки на системные сборки: Metabase, Orm и Rds.


	Sub UserProc;

	Var

	    DictInst: IRdsDictionaryInstance;

	    Elem: IRdsDictionaryElement;

	Begin

	    DictInst := MetabaseClass.Active.ItemById("DIM").Open(Null) As IRdsDictionaryInstance;

	    DictInst.FetchAll:=True;

	    Elem := DictInst.Elements.Item(1);

	    Debug.WriteLine("Отображаемое значение атрибута: " + Elem.RecordO(0).AttributeValue(4));

	    Debug.WriteLine("Значение атрибута в таблице справочника: "

	        + Elem.RecordO(1).AttributeValue(4));

	End Sub UserProc;


При выполнении примера будет получен второй элемент справочника. В окно
 консоли среды разработки будет выведена информация об отображаемом значении
 указанного атрибута и значение атрибута в таблице справочника.


См. также:


[IRdsDictionaryElementData](IRdsDictionaryElementData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
