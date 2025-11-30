# IRdsDictionaryTranslations.Remove

IRdsDictionaryTranslations.Remove
-


# IRdsDictionaryTranslations.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс настройки в коллекции.


## Описание


Метод Remove удаляет настройку
 с указанным индексом из коллекции.


## Комментарии


Значение параметра Index должно
 быть неотрицательным числом, но меньше значения свойства [IRdsDictionaryTranslations.Count](IRdsDictionaryTranslations.Count.htm).
 Индекс первого элемента в коллекции - «0», последнего - «[IRdsDictionaryTranslations.Count](IRdsDictionaryTranslations.Count.htm)
 - 1». Нумерация индексов - сплошная.


Если удаление объекта прошло успешно, то метод возвращает значение True, значение свойства [IRdsDictionaryTranslations.Count](IRdsDictionaryTranslations.Count.htm)
 уменьшается на единицу; в обратном случае - False.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ, содержащего
 справочник НСИ. Идентификатор репозитория - «RDS_REPO», справочника -
 «RDS_DICT». Также необходимо добавить ссылки на системные сборки «Metabase»
 и «Rds».


	Sub UserProc;

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

	    If DictTransl.Count > 2 Then

	        If DictTransl.Remove(DictTransl.Count
	 - 1) Then

	            Debug.WriteLine("Удаление прошло успешно");

	        End If;

	    End If;

	    (RdsDict As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет удалена последняя настройка в коллекции.
 Если удаление прошло успешно, то в окно консоли об этом будет выведено
 сообщение.


См. также:


[IRdsDictionaryTranslations](IRdsDictionaryTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
