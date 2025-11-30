# IRdsDictionaryElementData.ValueTranslation

IRdsDictionaryElementData.ValueTranslation
-


# IRdsDictionaryElementData.ValueTranslation


## Синтаксис


ValueTranslation(Index: Integer; Locale:[LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
 Variant;


## Параметры


Index. Индекс атрибута.


Locale. Уникальный числовой
 идентификатор языка.


## Описание


Свойство ValueTranslation для
 указанного языка определяет значение атрибута по его индексу.


## Комментарии


Значение может быть задано только для строкового атрибута, если для
 атрибута и для справочника НСИ разрешен перевод на различные языки (свойства
 [IRdsAttributeTranslations.IsOn](../IRdsAttributeTranslations/IRdsAttributeTranslations.IsOn.htm)
 и [IRdsDictionaryTranslations.IsOn](../IRdsDictionaryTranslations/IRdsDictionaryTranslations.IsOn.htm)).


Значение параметра Index должно
 быть неотрицательным числом, но меньше значения свойства [IRdsDictionaryElementData.Count](IRdsDictionaryElementData.Count.htm).
 Индекс первого атрибута в коллекции - «0», последнего - «[IRdsDictionaryElementData.Count](IRdsDictionaryElementData.Count.htm)
 - 1». Нумерация индексов - сплошная.


В качестве параметра Locale
 нельзя указывать значение LocaleCodeID.None.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ, содержащего
 справочник НСИ. Идентификатор репозитория - «RDS_REPO», справочника -
 «RDS_DICT». Также необходимо добавить ссылки на системные сборки «Metabase»
 и «Rds».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RdsRepoDescr: IMetabaseObjectDescriptor;

	    RdsDictObj: IMetabaseObject;

	    RdsDict: IRdsDictionary;

	    DictTransl: IRdsDictionaryTranslations;

	    RdsDictInst: IRdsDictionaryInstance;

	    ElemData: IRdsDictionaryElementData;

	Begin

	    Mb := MetabaseClass.Active;

	    RdsRepoDescr := Mb.ItemById("RDS_REPO");

	    RdsDictObj := Mb.ItemByIdNamespace("RDS_DICT", RdsRepoDescr.Key).Edit;

	    RdsDict := RdsDictObj As IRdsDictionary;

	    DictTransl := RdsDict.Translations;

	    DictTransl.Add(LocaleCodeID.English_UnitedStates);

	    RdsDictInst := RdsDictObj.Open(Null) As IRdsDictionaryInstance;

	    ElemData := RdsDictInst.CreateElementData;

	    ElemData.ValueTranslation(1, LocaleCodeID.Russian) := "Россия";

	    ElemData.ValueTranslation(1, LocaleCodeID.English_UnitedStates) := "Russia";

	    RdsDictInst.Insert(-2, ElemData);

	    RdsDictObj.Save;

	End Sub UserProc;


После выполнения примера справочник НСИ будет настроен для работы с
 русским и английским языками. В справочник будет добавлен новый элемент,
 для которого значение атрибута «NAME» будет задано для русского и английского
 языков.


См. также:


[IRdsDictionaryElementData](IRdsDictionaryElementData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
