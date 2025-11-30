# IRdsDictionaryTranslations.Clear

IRdsDictionaryTranslations.Clear
-


# IRdsDictionaryTranslations.Clear


## Синтаксис


Clear;


## Описание


Метод Clear очищает коллекцию
 настроек.


## Комментарии


После вызова метода значение свойства [IRdsDictionaryTranslations.Count](IRdsDictionaryTranslations.Count.htm)
 становится равным нулю.


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

	Begin

	    Mb := MetabaseClass.Active;

	    RdsRepoDescr := Mb.ItemById("RDS_REPO");

	    RdsDict := Mb.ItemByIdNamespace("RDS_DICT", RdsRepoDescr.Key).Edit As IRdsDictionary;

	    DictTransl := RdsDict.Translations;

	    DictTransl.IsOn := False;

	    DictTransl.Clear;

	    (RdsDict As IMetabaseObject).Save;

	End Sub UserSub;


После выполнения примера для справочника НСИ будет отключена возможность
 перевода на различные языки. Коллекция настроек будет очищена.


См. также:


[IRdsDictionaryTranslations](IRdsDictionaryTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
