# IRdsSortAttributes.AddRefAttribute

IRdsSortAttributes.AddRefAttribute
-


# IRdsSortAttributes.AddRefAttribute


## Синтаксис


AddRefAttribute(Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);
 RefAttribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);
 Ascending: Boolean): [IRdsSortAttribute](../IRdsSortAttribute/IRdsSortAttribute.htm);


## Параметры


Attribute. Атрибут сортировки;


RefAttribute. Ссылочный атрибут
 сортировки;


Ascending. Направление сортировки.


## Описание


Метод AddRefAttribute добавляет
 сортировку для атрибутов, участвующих в связях, и позволяет указать атрибут
 из другого справочника для сортировки по его значениям.


## Комментарии


Допустимые значения параметра Ascending:


	- True. Сортировка по
	 возрастанию;


	- False. Сортировка по
	 убыванию.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «MDM_SORT». Данный репозиторий содержит справочники НСИ с идентификаторами
 «SORT» и «COUNTRY». Справочник «SORT» содержит атрибут «LINK_COUNTRY»,
 ссылающийся на «COUNTRY».


Добавьте ссылки на системные сборки «Metabase», «Rds».


			Sub UserProc;

Var

    Mb: IMetabase;

    RdsKey: Integer;

    DictObj: IMetabaseObjectDescriptor;

    DictInst: IRdsDictionaryInstance;

    Sorter: IRdsElementsSorter;

    Elems: IRdsDictionaryElements;

    Attrs: IRdsAttributes;

    Attr, RefAttr: IRdsAttribute;

Begin

    Mb := MetabaseClass.Active;

    // Получаем ключ репозитория НСИ

    RdsKey := Mb.ItemById("MDM_SORT").Key;

    // Получаем сортируемый справочник НСИ

    DictObj := Mb.ItemByIdNamespace("SORT", RdsKey);

    DictInst := DictObj.Open(Null) As IRdsDictionaryInstance;

    // Получаем сортируемые элементы

    Elems := DictInst.Elements;

    // Создаем объект, выполняющий сортировку

    Sorter := Elems.CreateSorter(Elems.Root);

    // Получаем атрибуты сортируемого справочника

    Attrs := DictInst.Dictionary.Attributes;

    // Получаем атрибут, участвующий в связи

    Attr := Attrs.FindById("LINK_COUNTRY");

    // Получаем связанный справочник

    DictObj := Mb.ItemByIdNamespace("COUNTRY", RdsKey);

    DictInst := DictObj.Open(Null) As IRdsDictionaryInstance;

    // Получаем атрибуты связанного справочника

    Attrs := DictInst.Dictionary.Attributes;

    // Получаем атрибут, по значениям которого будет выполнена сортировка

    RefAttr := Attrs.FindById("NAME");

    // Задаем атрибут сортировки

    Sorter.Attributes.AddRefAttribute(Attr, RefAttr, True);

    // Выполняем сортировку и сохраняем результаты

    Sorter.Sort(True);

    Sorter.Save;

End Sub UserProc;


Результат выполнения примера: элементы справочника «SORT» отсортированы
 по возрастанию значений атрибута «NAME», расположенного в связанном справочнике.


См. также:


[IRdsSortAttributes](IRdsSortAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
