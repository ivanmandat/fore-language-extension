# IMetabaseUpdateContext.RegisterHierarchyChange

IMetabaseUpdateContext.RegisterHierarchyChange
-


# IMetabaseUpdateContext.RegisterHierarchyChange


## Синтаксис


RegisterHierarchyChange(oldObjKey: Integer; oldHieKey: Integer; oldHieId:
 String; newHieKey: Integer; newHieId: String; newObject: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm));


## Параметры


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
 объект.


## Комментарии


Для переопределения альтернативной иерархии с учетом владельца обновляемого
 объекта используйте метод [IMetabaseUpdateContext.RegisterHierarchyChangeO](IMetabaseUpdateContext.RegisterHierarchyChangeO.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие табличных
 справочников НСИ с идентификаторами «MDM_INDICATOR_S» и «MDM_INDICATOR_D».
 Данные справочники должны содержать аналогичные альтернативные иерархии.
 В файловой системе предполагается наличие файла обновления «C:\RegHieChng.pefx»,
 предназначенного для обновления справочника «MDM_INDICATOR_S».


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

    i: Integer;

    KeyMap: IMetabaseUpdateKeyMap;

    UpdObjRemap: IMetabaseUpdateObjectRemapping;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Создаем обновление

    Update := Mb.CreateUpdate;

    // Загружаем параметры обновления из файла

    Update.LoadFromFileNF("C:\RegHieChng.pefx", UpdateLoadMode.Replace);

    // Создаем дополнительные настройки обновления

    Context := Update.CreateUpdateContext;

    // Получаем справочники

    sourceDim := MB.ItemById("MDM_INDICATOR_S").Bind;

    targetDim := MB.ItemById("MDM_INDICATOR_D").Bind;

    // Получаем иерархии справочников

    sourceHierarchies := (sourceDim As IDimensionModel).Hierarchies;

    targetHierarchies := (targetDim As IDimensionModel).Hierarchies;

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

            context.RegisterHierarchyChange(sourceDim.Key, sourceHierarchy.Key, sourceHierarchy.Id,

                targetHierarchy.Key, targetHierarchy.Id, targetDim);

            // Получаем справочник, используемый для альтернативной иерархии в справочнике-источнике

            sourceHieSrc := sourceHierarchy.Source As IMetabaseObject;

            // Получаем справочник, используемый для альтернативной иерархии в справочнике-приёмнике

            targetHieSrc := targetHierarchy.Source As IMetabaseObject;

            // Переопределяем справочник, используемый для построения альтернативной иерархии в справочнике-источнике.

            // Будет использоваться справочник для построения альтернативной иерархии в справочнике приёмнике

            context.RegisterKeyChange(sourceHieSrc.ClassId, sourceHieSrc.Key, targetHieSrc.Key,

                sourceHieSrc.Id, targetHieSrc.Id, targetHieSrc);

            End If;

    End For;

    // Получаем карту ключей, используемых для повторного сопоставления объектов обновления

    KeyMap := Context.KeyMap;

    // Проверяем, не пустая ли карта

    If Not KeyMap.IsEmpty Then

        // Если карта содержит данные, то перебираем её элементы

        For i := 0 To KeyMap.Count - 1 Do

            // Получаем параметры повторного сопоставления объекта обновления

            UpdObjRemap := KeyMap.Item(i);

            // Выводим информацию о параметрах повторного сопоставления объекта

            Debug.WriteLine("Тип объекта репозитория: " + UpdObjRemap.ClassID.ToString);

            Debug.WriteLine("Допускается ли для объекта несколько повторных сопоставлений: " + UpdObjRemap.HasMultiValues.ToString);

            Debug.WriteLine("Идентификатор нового объекта: " + UpdObjRemap.NewId);

            Debug.WriteLine("Идентификатор старого объекта: " + UpdObjRemap.OldId);

            Debug.WriteLine("Ключ нового объекта: " + UpdObjRemap.NewKey.ToString);

            Debug.WriteLine("Ключ старого объекта: " + UpdObjRemap.OldKey.ToString);

            Debug.WriteLine("Используется нулевое сопоставление: " + UpdObjRemap.NullRemapping.ToString);

            If UpdObjRemap.Object <> Null Then

                Debug.WriteLine("Объект приёмника, используемый для повторного сопоставления: " + UpdObjRemap.Object.Name);

            End If;

            Debug.Write("Тип повторного сопоставления: ");

            Select Case UpdObjRemap.Type

               Case MetabaseUpdateRemappingType.Unknown: Debug.WriteLine("неизвестный тип");

                Case MetabaseUpdateRemappingType.Object: Debug.WriteLine("объект репозитория");

                Case MetabaseUpdateRemappingType.Hierarchy: Debug.WriteLine("альтернативная иерархия");

                Case MetabaseUpdateRemappingType.MetafactsAttribute: Debug.WriteLine("атрибуты временных рядов");

                Case MetabaseUpdateRemappingType.MetavalsAttribute: Debug.WriteLine("атрибуты наблюдений");

                Case MetabaseUpdateRemappingType.None: Debug.WriteLine("тип не задан");

            End Select;

            Debug.WriteLine("");

        End For;

    End If;

    // Применяем обновление

    Update.ApplyEx(Null, Context);

End Sub UserProc;


В результате выполнения примера будет выполнено обновление справочника
 «MDM_INDICATOR_S». Он будет настроен на использование альтернативных иерархий
 справочника «MDM_INDICATOR_D».


См. также:


[IMetabaseUpdateContext](IMetabaseUpdateContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
