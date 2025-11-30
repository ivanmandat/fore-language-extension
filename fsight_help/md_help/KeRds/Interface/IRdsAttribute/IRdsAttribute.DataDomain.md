# IRdsAttribute.DataDomain

IRdsAttribute.DataDomain
-


# IRdsAttribute.DataDomain


## Синтаксис


DataDomain: [DbDataDomain](Dal.chm::/Enums/DbDataDomain.htm);


## Описание


Свойство DataDomain определяет
 тип данных для хранения в атрибуте многобайтовой информации.


## Комментарии


Если свойство DataDomain имеет
 значение DbDataDomain.Memo, а
 свойство [IRdsAttribute.DataType](IRdsAttribute.DataType.htm)
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


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором TD_MDM. В данном справочнике должен отсутствовать
 атрибут с идентификатором MemoAttr.


Добавьте ссылки на системные сборки: Dal, Metabase, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    Attr: IRdsAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("TD_MDM").Edit;

	    Dict := MObj As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    Attr := Attrs.Add;

	    Attr.DataType := DbDataType.String;

	    Attr.DataDomain := DbDataDomain.Memo;

	    Attr.Id := "MemoAttr";

	    Attr.Name := "Атрибут для многобайтовой информации";

	    Attr.Nullable := True;

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера в справочник НСИ будет добавлен атрибут,
 который может быть использован для хранения многобайтовой информации.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
