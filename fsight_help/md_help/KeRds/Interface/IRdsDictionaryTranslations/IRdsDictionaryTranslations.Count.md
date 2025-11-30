# IRdsDictionaryTranslations.Count

IRdsDictionaryTranslations.Count
-


# IRdsDictionaryTranslations.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 языков, на которые переводится справочник.


## Комментарии


Емкость коллекции - это количество элементов, которое может содержать
 коллекция. Свойство Count - это
 количество элементов, которое в действительности содержится в коллекции.
 Емкость всегда больше или равна значению свойства Count.
 Если при добавлении элементов в коллекцию значение свойства Count
 превышает емкость, то она автоматически увеличивается.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ, содержащего
 справочник НСИ. Идентификатор репозитория - «RDS_REPO», справочника -
 «RDS_DICT». Также необходимо добавить ссылки на системные сборки «Metabase»
 и «Rds».


	Sub UserSub;

	Var

	    Mb: IMetabase;

	    RdsRepoDescr: IMetabaseObjectDescriptor;

	    RdsDict: IRdsDictionary;

	    DictTransl: IRdsDictionaryTranslations;

	    i: Integer;

	    Transl: IRdsDictionaryTranslation;

	Begin

	    Mb := MetabaseClass.Active;

	    RdsRepoDescr := Mb.ItemById("RDS_REPO");

	    RdsDict := Mb.ItemByIdNamespace("RDS_DICT", RdsRepoDescr.Key).Bind As IRdsDictionary;

	    DictTransl := RdsDict.Translations;

	    For i := 0 To DictTransl.Count - 1 Do

	        Transl := DictTransl.Item(i);

	        If Transl.Locale = DictTransl.DefaultLocale Then

	            Debug.WriteLine(Transl.Name);

	        End If;

	    End For;

	End Sub UserSub;


При выполнении примера методом перебора будут просмотрены все настройки,
 предназначенные для перевода справочника на различные языки. Если язык,
 для которого предназначена настройка, и язык, установленный по умолчанию
 для справочника, совпадут, то в окно консоли будет выведено наименование
 справочника на данном языке.


См. также:


[IRdsDictionaryTranslations](IRdsDictionaryTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
