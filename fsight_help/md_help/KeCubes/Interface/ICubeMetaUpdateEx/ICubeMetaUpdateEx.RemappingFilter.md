# ICubeMetaUpdateEx.RemappingFilter

ICubeMetaUpdateEx.RemappingFilter
-


# ICubeMetaUpdateEx.RemappingFilter


## Синтаксис


RemappingFilter: [IMetabaseObjectDescriptors](kesom.chm::/interface/imetabaseobjectdescriptors/imetabaseobjectdescriptors.htm);


## Описание


Свойство RemappingFilter
 возвращает коллекцию объектов, которые должны быть пропущены при копировани.


## Комментарии


Данное свойство используется при повторном копировании базы данных временных
 рядов в уже существующую базу данных временных рядов. RemappingFilter
 позволяет сократить количество копируемых объектов.


Свойство RemappingFilter
 рекомендуется всегда использовать, если в копируемой базе данных временных
 рядов содержатся дочерние справочники.


## Пример


Для выполнения примера в репозитории предполагается наличие баз данных
 временных рядов с идентификаторами «TSDB_SRC» и «MDM_TBL_DICT_COUNTRY».
 Данные базы данных временных рядов должны иметь идентичную структуру и
 одинаковые дочерние объекты, одним из которых является табличный справочник
 НСИ с идентификатором «MDM_TBL_DICT_COUNTRY».


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    RubUpdateEx: ICubeMetaUpdateEx;

    RubObj: IMetabaseObject;

    Rub: IRubricator;

    RemappingFilter: IMetabaseObjectDescriptors;

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

    // Настраиваем параметры объекта копирования

    RubUpdateEx := Obj As ICubeMetaUpdateEx;

    // Указываем исходную базу данных временных рядов

    RubObj := mb.ItemById("TSDB_SRC").Bind;

    Rub := RubObj.As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    // Указываем репозиторий, в который будет скопирована
 база данных временных рядов

    RubUpdateEx.Metabase := Mb;

    // Указываем НСИ для хранения данных базы данных временных рядов

    RubUpdateEx.RdsDatabase := Rub.Database;

    // Указываем базу данных временных рядов, в которую будет выполняться копирование

    RubUpdateEx.TargetRubricator := mb.ItemById("TSDB_DEST").Bind As IRubricator;

    // Исключаем объекты,
 присутствующие в базе данных временных рядов, в которую будет выполняться копирование

    RemappingFilter := RubUpdateEx.RemappingFilter;

    RemappingFilter.Add(mb.ItemByIdNamespace("MDM_TBL_DICT_COUNTRY", RubObj.Key));

    // Выполняем копирование

    RubUpdateEx.Apply(Progress);

    // Сохраняем изменения в объекте копирования

    Obj.Save;

End Sub UserProc;


В результате выполнения примера база данных временных рядов «TSDB_SRC»
 будет скопирована в базу данных временных рядов «MDM_TBL_DICT_COUNTRY».
 Дочерний справочник «MDM_TBL_DICT_COUNTRY» не будет скопирован повторно.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
