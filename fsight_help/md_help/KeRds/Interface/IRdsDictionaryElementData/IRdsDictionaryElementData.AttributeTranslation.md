# IRdsDictionaryElementData.AttributeTranslation

IRdsDictionaryElementData.AttributeTranslation
-


# IRdsDictionaryElementData.AttributeTranslation


## Синтаксис


AttributeTranslation(AttributeKey: Integer; Locale:[LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
 Variant;


## Параметры


AttributeKey. Ключ атрибута.


Locale. Уникальный числовой
 идентификатор языка.


## Описание


Свойство AttributeTranslation
 для указанного языка определяет значение атрибута по его ключу.


## Комментарии


Значение может быть задано только для строкового атрибута, если для
 атрибута и для справочника НСИ разрешен перевод на различные языки (свойства
 [IRdsAttributeTranslations.IsOn](../IRdsAttributeTranslations/IRdsAttributeTranslations.IsOn.htm)
 и [IRdsDictionaryTranslations.IsOn](../IRdsDictionaryTranslations/IRdsDictionaryTranslations.IsOn.htm)).


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

	    Attr: IRdsAttribute;

	Begin

	    Mb := MetabaseClass.Active;

	    RdsRepoDescr := Mb.ItemById("RDS_REPO");

	    RdsDictObj := Mb.ItemByIdNamespace("RDS_DICT", RdsRepoDescr.Key).Edit;

	    RdsDict := RdsDictObj As IRdsDictionary;

	    DictTransl := RdsDict.Translations;

	    DictTransl.Add(LocaleCodeID.English_UnitedStates);

	    RdsDictInst := RdsDictObj.Open(Null) As IRdsDictionaryInstance;

	    ElemData := RdsDictInst.CreateElementData;

	    Attr := RdsDict.Attributes.Name;

	    ElemData.AttributeTranslation(Attr.Key, LocaleCodeID.Russian) := "Россия";

	    ElemData.AttributeTranslation(Attr.Key, LocaleCodeID.English_UnitedStates) := "Russia";

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
