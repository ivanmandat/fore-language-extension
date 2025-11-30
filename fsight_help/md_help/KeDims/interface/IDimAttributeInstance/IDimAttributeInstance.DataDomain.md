# IDimAttributeInstance.DataDomain

IDimAttributeInstance.DataDomain
-


# IDimAttributeInstance.DataDomain


## Синтаксис


DataDomain: [DbDataDomain](Dal.chm::/Enums/DbDataDomain.htm);


## Описание


Свойство DataDomain возвращает
 тип данных для хранения в атрибуте многобайтовой информации.


## Комментарии


Если свойство DataDomain имеет
 значение DbDataDomain.Memo, а
 свойство [IDimAttribute.DataType](../IDimAttribute/IDimAttribute.DataType.htm)
 - значение DbDataType.String,
 то атрибут имеет тип «Длинный текст».


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
 НСИ с идентификатором TMDMDICT_MEMO. В справочнике должно содержаться
 несколько значений.


Для выполнения примера добавьте ссылки на системные сборки: Dal, Dimensions,
 Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    dimension: IDimInstance;

	    attribute: IDimAttributeInstance;

	    attributes: IDimAttributesInstance;

	    i: Integer;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем справочник НСИ

	    dimension := mb.ItemById("TMDMDICT_MEMO").Open(Null) As IDimInstance;

	    // Получаем атрибуты справочника

	    attributes := dimension.Attributes;

	    // Перебираем полученные атрибуты

	    For i := 0 To attributes.Count - 1 Do

	        attribute := attributes.Item(i);

	        // Если атрибут имеет тип «Длинный текст», то выводим его значение

	        If (attribute.DataDomain = DbDataDomain.Memo) And

	            (attribute.Attribute.DataType = DbDataType.String) Then

	            Debug.WriteLine("Значение первого элемента: " + attribute.Value(0));

	        End If;

	    End For;

	End Sub UserProc;


В результате выполнения примера для первого элемента справочника в окно
 консоли будет выведено значение атрибутов типа «Длинный
 текст», если они присутствуют в справочнике НСИ.


См. также:


[IDimAttributeInstance](IDimAttributeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
