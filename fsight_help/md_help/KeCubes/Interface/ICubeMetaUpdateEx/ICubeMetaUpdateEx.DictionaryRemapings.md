# ICubeMetaUpdateEx.DictionaryRemapings

ICubeMetaUpdateEx.DictionaryRemapings
-


# ICubeMetaUpdateEx.DictionaryRemapings


## Синтаксис


DictionaryRemapings: [ICubeMetaUpdateDictionaryRemapings](../ICubeMetaUpdateDictionaryRemapings/ICubeMetaUpdateDictionaryRemapings.htm);


## Описание


Свойство DictionaryRemapings
 возвращает коллекцию соответствий объектов копируемой базы данных временных
 рядов и объектов базы-копии.


## Комментарии


Если базы данных временных рядов копируется из одного репозитория в
 другой, то справочники НСИ в репозитории-приёмнике должны быть клонами
 справочников исходного репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC, содержащей пользовательские атрибуты
 временных рядов COUNTRY и INDICATOR. Атрибуты должны быть уникальными
 и ссылаться на справочники. Также должен присутствовать репозиторий НСИ
 с идентификатором RDS_REPO_COPY1, являющийся клоном репозитория НСИ для
 базы данных временных рядов.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

    Progress: IMetabaseUpdateProgress;

    CrInfo: IMetabaseObjectCreateInfo;

    DictRemapings: ICubeMetaUpdateDictionaryRemapings;

    DictRemap: ICubeMetaUpdateDictionaryRemaping;

    Attr: IMetaAttributes;

    RepoCopy, SourceDict: IMetabaseObjectDescriptor;

    s: string;

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    Rub := Mb.ItemById("FC").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    RubUpdateEx.Metabase := Mb;

    CrInfo := RubUpdateEx.CreateInfo;

    CrInfo.Parent := Mb.Root;

    s := Mb.GenerateId("FC_COPY");

    CrInfo.Id := s;

    CrInfo.Name := s;

    RepoCopy := Mb.ItemById("RDS_REPO_COPY1");

    RubUpdateEx.RdsDatabase := RepoCopy.Bind As IRdsDatabase;

    DictRemapings := RubUpdateEx.DictionaryRemapings;

    DictRemapings.Clear;

    // Задаем соответствие для атрибута «COUNTRY»

    DictRemap := DictRemapings.Add;

    Attr := Rub.Facts.Attributes;

    SourceDict := Attr.FindById("COUNTRY").ValuesObject;

    DictRemap.SourceId := SourceDict.Id;

    DictRemap.SourceKey := SourceDict.Key;

    DictRemap.Target := Mb.ItemByIdNamespace("DICT_CTR_COPY1", RepoCopy.Key);

    // Задаем соответствие для атрибута «INDICATOR»

    DictRemap := DictRemapings.Add;

    SourceDict := Attr.FindById("INDICATOR").ValuesObject;

    DictRemap.SourceId := SourceDict.Id;

    DictRemap.SourceKey := SourceDict.Key;

    DictRemap.Target := Mb.ItemByIdNamespace("DICT_IND_COPY1", RepoCopy.Key);

    // Задаем соответствие для единиц измерения

    DictRemap := DictRemapings.Add;

    SourceDict := Attr.FindByKind(MetaAttributeKind.Unit).ValuesObject;

    DictRemap.SourceId := SourceDict.Id;

    DictRemap.SourceKey := SourceDict.Key;

    DictRemap.Target := mb.ItemByIdNamespace("UNITS_COPY1", RepoCopy.Key);

    RubUpdateEx.Apply(Progress);

End Sub UserProc;


После выполнения примера в корневую папку репозитория будет скопирована
 база данных временных рядов FC. Идентификатор копии - FC_COPY. Копия будет
 хранить данные в репозитории RDS_REPO_COPY1. Для справочников данного
 репозитория и репозитория копируемой базы будут заданы соответствия.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
