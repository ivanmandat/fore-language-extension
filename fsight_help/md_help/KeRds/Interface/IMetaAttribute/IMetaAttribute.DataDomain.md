# IMetaAttribute.DataDomain

IMetaAttribute.DataDomain
-


# IMetaAttribute.DataDomain


## Синтаксис


DataDomain: [DbDataDomain](Dal.chm::/Enums/DbDataDomain.htm);


## Описание


Свойство DataDomain определяет
 тип данных для хранения в атрибуте многобайтовой информации.


## Комментарии


Для атрибута типа «Длинный текст»
 данное свойство должно иметь значение DbDataDomain.Memo,
 а свойство [IMetaAttribute.DataType](IMetaAttribute.DataType.htm)
 - значение DbDataType.String.


При работе с атрибутом «Длинный текст»
 учитывайте следующие ограничения:


	- если используется СУБД Oracle, то нельзя выполнять поиск временных
	 рядов по значению данного атрибута;


	- данные атрибуты не могут входить в уникальный индекс для базы
	 данных временных рядов;


	- данные атрибуты не могут быть обязательными;


	- выборка и сохранение данных атрибутов могут проходить медленнее
	 по сравнению с обычными текстовыми атрибутами.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB_MEMO, не содержащей атрибут временных
 рядов с идентификатором A_COMMENT.


Добавьте ссылки на системные сборки: Cubes, Dal, Metabase, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    TSDB: IRubricator;

	    Facts: IMetabaseObject;

	    Atts: IMetaAttributes;

	    Att: IMetaAttribute;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем базу данных временных рядов

	    TSDB := MB.ItemById("TSDB_MEMO").Bind As IRubricator;

	    // Получаем справочник временных рядов

	    Facts := (TSDB.Facts As IMetabaseObject).Edit;

	    // Получаем атрибуты временных рядов

	    Atts := (Facts As IMetaDictionary).Attributes;

	    // Добавляем атрибут

	    Att := Atts.Add;

	    // Задаем идентификатор и наименование атрибута

	    Att.Id := "A_COMMENT";

	    Att.Name := "Комментарий";

	    // Указываем тип атрибута: длинный текст

	    Att.Kind := MetaAttributeKind.Common;

	    Att.DataType := DbDataType.String;

	    Att.DataDomain := DbDataDomain.Memo;

	    // Указываем, что атрибут видимый, может иметь

	    // нулевые значения и не содержит множественные значения

	    Att.Hidden := False;

	    Att.Nullable := True;

	    Att.HasMultipleValues := False;

	    // Сохраняем изменения

	    Facts.Save;

	End Sub UserProc;


В результате выполнения примера в базу данных будет добавлен новый атрибут
 временных рядов типа «Длинный текст».


См. также:


[IMetaAttribute](IMetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
