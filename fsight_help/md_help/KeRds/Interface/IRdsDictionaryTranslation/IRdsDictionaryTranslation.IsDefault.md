# IRdsDictionaryTranslation.IsDefault

IRdsDictionaryTranslation.IsDefault
-


# IRdsDictionaryTranslation.IsDefault


## Синтаксис


IsDefault: Boolean;


## Описание


Свойство IsDefault возвращает
 признак того, является ли настраиваемый язык языком по умолчанию для справочника.


## Комментарии


Допустимые значения:


	- True. Язык является
	 языком по умолчанию для справочника;


	- False. Язык является
	 языком, на который справочник переводится.


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

	        If Transl.IsDefault Then

	            Debug.WriteLine(Transl.Name);

	        End If;

	    End For;

	End Sub UserSub;


При выполнении примера методом перебора будут просмотрены все настройки,
 предназначенные для перевода справочника на различные языки. Если язык,
 для которого предназначена настройка является языком, установленный по
 умолчанию для справочника, то в окно консоли будет выведено наименование
 справочника на данном языке.


См. также:


[IRdsDictionaryTranslation](IRdsDictionaryTranslation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
