# IRdsDictionaryInstance.FetchAll

IRdsDictionaryInstance.FetchAll
-


# IRdsDictionaryInstance.FetchAll


## Синтаксис


FetchAll: Boolean;


## Описание


Свойство FetchAll определяет,
 загружать ли в кеш значения системных и пользовательских атрибутов вместе.


## Комментарии


Допустимые значения:


	- True. В кеш вместе с
	 значениями системных атрибутов загружаются (или будут подгружены)
	 значения пользовательских атрибутов. Открытие справочника будет занимать
	 больше времени, но увеличится скорость работы с элементами справочника.


	- False. Значение по умолчанию.
	 В кеш загружаются значения только системных атрибутов. Если были загружены
	 значения пользовательских атрибутов, то они будут очищены. Открытие
	 справочника будет занимать меньше времени, но уменьшится скорость
	 работы с элементами справочника.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO», содержащего справочник с идентификатором «OBJ_DICT». Также
 необходимо добавить ссылки на системные сборки «Metabase», «Rds».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RdsDescr: IMetabaseObjectDescriptor;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	Begin

	    MB := MetabaseClass.Active;

	    RdsDescr := MB.ItemById("RDS_REPO");

	    Dict := MB.ItemByIdNamespace("OBJ_DICT", RdsDescr.Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    DictInst.FetchAll := True;

	End Sub UserProc;


После выполнения примера в кеш вместе с значениями системных атрибутов
 будут загружены и значения пользовательских атрибутов.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
