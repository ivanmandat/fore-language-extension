# IMetabaseUpdateContext.RegisterHierarchyChangeO

IMetabaseUpdateContext.RegisterHierarchyChangeO
-


# IMetabaseUpdateContext.RegisterHierarchyChangeO


## Синтаксис


RegisterHierarchyChangeO(OwnObject: Integer; oldObjKey:
 Integer; oldHieKey: Integer; oldHieId: String; newHieKey: Integer;
 newHieId: String; newObject: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm));


## Параметры


OwnObject. Владелец объекта,
 альтернативная иерархия которого переопределяется;


oldObjKey. Ключ справочника-источника;


oldHieKey. Ключ альтернативной
 иерархии в справочнике-источнике;


oldHieId. Идентификатор альтернативной
 иерархии в справочнике-источнике;


newHieKey. Ключ альтернативной
 иерархии в справочнике-приёмнике;


newHieId. Идентификатор альтернативной
 иерархии в справочнике-приёмнике;


newObject. Справочник-приёмник.


## Описание


Метод RegisterHierarchyChange
 переопределяет альтернативную иерархию, на которую ссылается обновляемый
 объект, в учетом владельца объекта.


## Комментарии


Для переопределения альтернативной иерархии без учета владельца используйте
 метод [IMetabaseUpdateContext.RegisterHierarchyChange](IMetabaseUpdateContext.RegisterHierarchyChange.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие табличных
 справочников НСИ с идентификаторами «MDM_INDICATOR_S» и «MDM_INDICATOR_D».
 Данные справочники должны содержать аналогичные альтернативные иерархии.
 Справочник «MDM_INDICATOR_S» должен быть дочерним по отношению к
 базе данных временных рядов с идентификатором «TSDB_PEF».


В файловой системе предполагается наличие файла обновления «C:\RegHieOChng.pefx»,
 предназначенного для обновления объекта пользовательского класса, который
 зависит от справочника «MDM_INDICATOR_S» и его родителя.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    Context: IMetabaseUpdateContext;

    sourceDim, targetDim: IMetabaseObject;

    sourceHieSrc, targetHieSrc: IMetabaseObject;

    sourceHierarchies, targetHierarchies: IDimHierarchies;

    sourceHierarchy, targetHierarchy: IDimHierarchy;

    TSDBKey: Integer;

    i: Integer;

    KeyMap: IMetabaseUpdateKeyMap;

    UpdObjRemap: IMetabaseUpdateObjectRemapping;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Создаем обновление

    Update := Mb.CreateUpdate;

    // Загружаем параметры обновления из файла

    Update.LoadFromFileNF("C:\RegHieOChng.pefx", UpdateLoadMode.Replace);

    // Создаем дополнительные настройки обновления

    Context := Update.CreateUpdateContext;

    // Получаем справочники

    sourceDim := MB.ItemById("MDM_INDICATOR_S").Bind;

    targetDim := MB.ItemById("MDM_INDICATOR_D").Bind;

    // Получаем иерархии справочников

    sourceHierarchies := (sourceDim As IDimensionModel).Hierarchies;

    targetHierarchies := (targetDim As IDimensionModel).Hierarchies;

    // Получаем ключ базы данных временных рядов

    TSDBKey := MB.GetObjectKeyById("TSDB_PEF");

    context.RegisterKeyChangeO(TSDBKey, sourceDim.ClassId, sourceDim.Key, targetDim.Key,

                sourceDim.Id, targetDim.Id, targetDim);

    // Перебираем иерархии справочника-источника

    For i := 0 To sourceHierarchies.Count - 1 Do

        // Получаем текущую иерархию справочника-источника

        sourceHierarchy := sourceHierarchies.Item(i);

        // Ищем аналогичную иерархию в справочнике-приёмнике

        targetHierarchy := targetHierarchies.FindById(sourceHierarchy.Id);

        // Если такая иерархия найдена

        If (targetHierarchy <> Null) Then

            // Переопределяем альтернативную иерархию на которую ссылается справочник-источник.

            // Она будет ссылаться на альтернативную иерархию в справочнике-приёмнике

            context.RegisterHierarchyChangeO(TSDBKey, sourceDim.Key, sourceHierarchy.Key, sourceHierarchy.Id,

                targetHierarchy.Key, targetHierarchy.Id, targetDim);

            // Получаем справочник, используемый для альтернативной иерархии в справочнике-источнике

            sourceHieSrc := sourceHierarchy.Source As IMetabaseObject;

            // Получаем справочник, используемый для альтернативной иерархии в справочнике-приёмнике

            targetHieSrc := targetHierarchy.Source As IMetabaseObject;

            // Переопределяем справочник, используемый для построения альтернативной иерархии в справочнике-источнике.

            // Будет использоваться справочник для построения альтернативной иерархии в справочнике приёмнике

            context.RegisterKeyChangeO(TSDBKey, sourceHieSrc.ClassId, sourceHieSrc.Key, targetHieSrc.Key,

                sourceHieSrc.Id, targetHieSrc.Id, targetHieSrc);

            End If;

    End For;

    // Применяем обновление

    Update.ApplyEx(Null, Context);

    // Получаем карту ключей, используемых для повторного сопоставления объектов обновления

    KeyMap := Context.KeyMap;

    // Выполняем поиск параметров сопоставления для справочника, используемого для построения альтернативной иерархии

    UpdObjRemap := KeyMap.FindByOldId(MetabaseObjectClass.KE_CLASS_METADICTIONARYRDS, targetHieSrc.Id);

    // Проверяем, найдены ли параметры

    If UpdObjRemap <> Null Then

        // Выводим информацию о параметрах повторного сопоставления объекта

        Debug.WriteLine("Идентификатор нового объекта: " + UpdObjRemap.NewId);

        Debug.WriteLine("Идентификатор старого объекта: " + UpdObjRemap.OldId);

        Debug.WriteLine("Ключ нового объекта: " + UpdObjRemap.NewKey.ToString);

        Debug.WriteLine("Ключ старого объекта: " + UpdObjRemap.OldKey.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера для объекта пользовательского класса
 будет переопределен справочник, от которого он зависит, и альтернативная
 иерархия данного справочника.


См. также:


[IMetabaseUpdateContext](IMetabaseUpdateContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
