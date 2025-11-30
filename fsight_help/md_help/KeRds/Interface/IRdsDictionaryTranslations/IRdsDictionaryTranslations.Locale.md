# IRdsDictionaryTranslations.Locale

IRdsDictionaryTranslations.Locale
-


# IRdsDictionaryTranslations.Locale


## Синтаксис


Locale(Index: Integer): [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm);


## Параметры


Index. Индекс настройки в коллекции.


## Описание


Свойство доступно только для чтения.


Свойство Locale возвращает уникальный
 числовой идентификатор языка, для которого предназначена настройка с указанным
 индексом.


## Комментарии


Значение параметра Index должно
 быть неотрицательным числом, но меньше значения свойства [IRdsDictionaryTranslations.Count](IRdsDictionaryTranslations.Count.htm).
 Индекс первого метода в коллекции - «0», последнего - «[IRdsDictionaryTranslations.Count](IRdsDictionaryTranslations.Count.htm)
 - 1». Нумерация индексов - сплошная.


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

	    Locale: LocaleCodeID;

	Begin

	    Mb := MetabaseClass.Active;

	    RdsRepoDescr := Mb.ItemById("RDS_REPO");

	    RdsDict := Mb.ItemByIdNamespace("RDS_DICT", RdsRepoDescr.Key).Edit As IRdsDictionary;

	    DictTransl := RdsDict.Translations;

	    If DictTransl.Count > 2 Then

	        Locale := DictTransl.Locale(DictTransl.Count - 1);

	        If DictTransl.RemoveByLocale(Locale) Then

	            Debug.WriteLine("Удаление прошло успешно");

	        End If;

	    End If;

	    (RdsDict As IMetabaseObject).Save;

	End Sub UserSub;


После выполнения примера будет получен идентификатор языка для последней
 настройки в коллекции. Затем данная настройка будет удалена. Если удаление
 прошло успешно, то в окно консоли об этом будет выведено сообщение.


См. также:


[IRdsDictionaryTranslations](IRdsDictionaryTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
