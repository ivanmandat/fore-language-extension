# ICubeMetaUpdateAttributeRemapping.AlternateHierarchyMappings

ICubeMetaUpdateAttributeRemapping.AlternateHierarchyMappings
-


# ICubeMetaUpdateAttributeRemapping.AlternateHierarchyMappings


## Синтаксис


AlternateHierarchyMappings: [IAlternateHierarchyMappings](../IAlternateHierarchyMappings/IAlternateHierarchyMappings.htm);


## Описание


Свойство AlternateHierarchyMappings
 возвращает параметры соответствия между альтернативными иерархиями
 в справочниках копируемой базы данных временных рядов и альтернативными
 иерархиями в справочниках базы-копии.


## Комментарии


Параметры соответствия между альтернативными иерархиями актуальны только
 для атрибутов временных рядов, являющихся ссылкой на справочник.


## Пример


Для выполнения примера в репозитории предполагается наличие баз данных
 временных рядов с идентификаторами «TSDB_SRC_HIE» и «TSDB_DEST_HIE». Данные
 базы данных временных рядов должны иметь одинаковую структуру и содержать
 атрибут временных рядов с идентификатором «INDICATOR». Атрибут должен
 являться ссылкой на справочник. В базе данных временных рядов «TSDB_SRC_HIE»
 атрибут «INDICATOR» должен ссылаться на справочник с идентификатором «DICT_INDICATOR_SRC»,
 в базе данных временных рядов «TSDB_DEST_HIE» - на справочник с идентификатором
 «DICT_INDICATOR_DEST». Справочники «DICT_INDICATOR_SRC», «DICT_INDICATOR_DEST»
 должны иметь одинаковую структуру и содержать две или более альтернативные
 иерархии.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Rds.


			Sub UserProc;

Var

    mb: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

    AttrRemapping: ICubeMetaUpdateAttributeRemappings;

    AttrR: ICubeMetaUpdateAttributeRemapping;

    Attr: IMetaAttribute;

    AlterHies: IDimHierarchies;

    AlterHie: IDimHierarchy;

    HieMappings: IAlternateHierarchyMappings;

    HieMap: IAlternateHierarchyMapping;

    Progress: IMetabaseUpdateProgress;

Begin

    // Получаем репозиторий

    mb := MetabaseClass.Active;

    // Создаем объект копирования

    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBEMETAUPDATE;

    CrInfo.Id := Mb.GenerateId("Cube_Meta_Upd");

    CrInfo.Permanent := True;

    CrInfo.Parent := Mb.Root;

    ObjDesc := Mb.CreateObject(CrInfo);

    Obj := ObjDesc.Edit;

    // Задаем параметры объекта копирования

    RubUpdateEx := Obj As ICubeMetaUpdateEx;

    // Указываем базу данных временных рядов, являющуюся источником данных

    Rub := mb.ItemById("TSDB_SRC_HIE").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    // Указываем репозиторий, в который будет скопирована база данных временных рядов

    RubUpdateEx.Metabase := Mb;

    // Указываем репозиторий НСИ для хранения данных базы данных временных рядов

    RubUpdateEx.RdsDatabase := Rub.Database;

    // Указываем базу данных временных рядов, являющуюся приёмником данных

    RubUpdateEx.TargetRubricator := mb.ItemById("TSDB_DEST_HIE").Bind As IRubricator;

    // Задаём соответствие атрибутов

    AttrRemapping := RubUpdateEx.MetafactsAttributeRemappings;

    // Задаём параметры соответствия атрибута «INDICATOR» в источнике и приёмнике

    AttrR := AttrRemapping.FindById("INDICATOR");

    // Задаём параметры соответствия альтернативных иерархий в источнике и приёмнике

    HieMappings := AttrR.AlternateHierarchyMappings;

    // Получаем все альтернативные иерархии, которые присутствуют в справочнике,

    // являющимся источником данных для атрибута «INDICATOR» в исходной базе данных временных рядов

    Attr := Rub.Facts.Attributes.FindById("INDICATOR");

    AlterHies := (Attr.ValuesObject.Bind As IDimensionModel).Hierarchies;

    // Получаем первую альтернативную иерархию

    AlterHie := AlterHies.Item(0);

    // Создаём соответствие между альтернативными иерархиями в источнике и приёмнике

    HieMap := HieMappings.Add(AlterHie.Key, AlterHie.Id);

    // Получаем все альтернативные иерархии, которые присутствуют в справочнике,

    // являющимся источником данных для атрибута «INDICATOR». Атрибут содержится в базе данных

    // временных рядов, являющейся приёмником данных.

    Rub := RubUpdateEx.TargetRubricator;

    Attr := Rub.Facts.Attributes.FindById("INDICATOR");

    AlterHies := (Attr.ValuesObject.Bind As IDimensionModel).Hierarchies;

    // Получаем вторую альтернативную иерархию

    AlterHie := AlterHies.Item(1);

    // Указываем, что первая альтернативная иерархия в исходной базе данных временных рядов

    // соответствует второй альтернативной иерархии в базе данных временных рядов, являющейся приёмником данных.

    HieMap.TargetId := AlterHie.Id;

    HieMap.TargetKey := AlterHie.Key;

    // Выводим параметры копируемой альтернативной иерархии в окно консоли

    Debug.WriteLine("Идентификатор копируемой альтернативной иерархии: " + HieMap.SourceId);

    Debug.WriteLine("Ключ копируемой альтернативной иерархии: " + HieMap.SourceKey.ToString);

    // Выполняем копирование

    RubUpdateEx.Apply(Progress);

    // Сохраняем изменения в объекте копирования

    Obj.Save;

End Sub UserProc;


В результате выполнения примера будет выполнено копирование базы данных
 временных рядов «TSDB_SRC_HIE» в базу данных временных рядов «TSDB_DEST_HIE».
 При копировании справочников, являющихся источниками данных для атрибутов
 «INDICATOR» первая альтернативная иерархия в исходной базе данных временных рядов
 будет соответствовать второй альтернативной иерархии в базе данных временных рядов, являющейся приёмником данных.


См. также:


[ICubeMetaUpdateAttributeRemapping](ICubeMetaUpdateAttributeRemapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
