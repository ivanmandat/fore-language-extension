# IMetabaseUpdateSpecialObjectsNode

IMetabaseUpdateSpecialObjectsNode
-


# IMetabaseUpdateSpecialObjectsNode


## Описание


Интерфейс IMetabaseUpdateSpecialObjectsNode
 содержит свойства, определяющие параметры обновления [специальных
 объектов репозитория](UpdManager.chm::/CreateUpdate/Admin_CreateUpdate_SpecialObjects.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ApplyObject](IMetabaseUpdateSpecialObjectsNode.ApplyObject.htm)
		 Свойство ApplyObject
		 определяет признак вхождения в обновление указанного специального
		 объекта.


		 ![](../../Property_Image.gif)
		 [ObjectNode](IMetabaseUpdateSpecialObjectsNode.ObjectNode.htm)
		 Свойство ObjectNode
		 возвращает элемент дерева обновления, соответствующий специальному
		 объекту.


## Свойства, унаследованные от [IMetabaseUpdateObjectNode](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AccessToken](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.AccessToken.htm)


		 Свойство AccessToken
		 возвращает метку доступа объекта, сохраняемую в обновлении.


		 ![](../../Property_Image.gif)
		 [AccessTokenOptions](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.AccessTokenOptions.htm)
		 Свойство AccessTokenOptions
		 определяет опции сохранения настроек метки доступа при сохранении
		 параметров обновления объекта.


		 ![](../../Property_Image.gif)
		 [Acl](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.Acl.htm)
		 Свойство Acl возвращает список
		 контроля доступа к объекту, сохраняемый в обновлении.


		 ![](../../Property_Image.gif)
		 [AlterType](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.AlterType.htm)
		 Свойство AlterType
		 определяет, в каком случае объект будет пересоздаваться на уровне
		 СУБД.


		 ![](../../Property_Image.gif)
		 [ApplyState](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ApplyState.htm)
		 Свойство ApplyState
		 возвращает параметры готовности объекта к обновлению.


		 ![](../../Property_Image.gif)
		 [BoundType](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.BoundType.htm)
		 Свойство BoundType
		 определяет тип обновления.


		 ![](../../Property_Image.gif)
		 [Constraint](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.Constraint.htm)
		 Свойство Constraint
		 определяет способ обновления объекта.


		 ![](../../Property_Image.gif)
		 [DependenciesObjects](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.DependenciesObjects.htm)
		 Свойство DependenciesObjects
		 возвращает зависимые объекты.


		 ![](../../Property_Image.gif)
		 [ExtendedParams](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ExtendedParams.htm)
		 Свойство ExtendedParams
		 определяет дополнительные параметры обновления объектов.


		 ![](../../Property_Image.gif)
		 [ForceKeepId](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ForceKeepId.htm)
		 Свойство ForceKeepId
		 определяет признак отмены изменения идентификатора при обновлении
		 существующих объектов.


		 ![](../../Property_Image.gif)
		 [ForceUniqueId](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ForceUniqueId.htm)
		 Свойство ForceUniqueId
		 определяет признак генерирования нового уникального идентификатора
		 объекта при совпадении идентификаторов объектов в обновлении и
		 в репозитории.


		 ![](../../Property_Image.gif)
		 [IncludeChildrenDependencies](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.IncludeChildrenDependencies.htm)
		 Свойство IncludeChildrenDependencies
		 определяет, включать ли в обновление дочерние объекты.


		 ![](../../Property_Image.gif)
		 [IncludeData](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.IncludeData.htm)
		 Свойство IncludeData
		 определяет признак включения данных объекта в обновление.


		 ![](../../Property_Image.gif)
		 [IncludeScreenshot](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.IncludeScreenshot.htm)
		 Свойство IncludeScreenshot
		 определяет, будет ли включено в обновление изображение предварительного
		 просмотра объекта.


		 ![](../../Property_Image.gif)
		 [IsUnderUpdateRoot](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.IsUnderUpdateRoot.htm)
		 Свойство IsUnderUpdateRoot
		 возвращает признак расположения объекта обновления под корнем [IMetabaseUpdate.RootFolder](../IMetabaseUpdate/IMetabaseUpdate.RootFolder.htm).


		 ![](../../Property_Image.gif)
		 [KeepNativeNames](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.KeepNativeNames.htm)
		 Свойство KeepNativeNames
		 определяет признак сохранения физического имени объекта при обновлении.


		 ![](../../Property_Image.gif)
		 [Object](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.Object.htm)
		 Свойство Object определяет
		 описание объекта репозитория, с которым связан объект обновления.


		 ![](../../Property_Image.gif)
		 [ObjectId](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ObjectId.htm)
		 Свойство ObjectId определяет
		 идентификатор обновляемого объекта.


		 ![](../../Property_Image.gif)
		 [ObjectName](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ObjectName.htm)
		 Свойство ObjectName
		 определяет наименование обновляемого объекта.


		 ![](../../Property_Image.gif)
		 [ObjectOldKey](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ObjectOldKey.htm)
		 Свойство ObjectOldKey
		 возвращает старый ключ объекта.


		 ![](../../Property_Image.gif)
		 [OriginalMetabase](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.OriginalMetabase.htm)
		 Свойство OriginalMetabase
		 возвращает идентификатор репозитория обновляемого объекта.


		 ![](../../Property_Image.gif)
		 [Parent](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.Parent.htm)
		 Свойство Parent возвращает
		 объект-родитель.


		 ![](../../Property_Image.gif)
		 [SDApplyLog](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.SDApplyLog.htm)


		 Свойство SDApplyLog
		 возвращает лог изменения прав доступа.


		 ![](../../Property_Image.gif)
		 [UnboundType](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.UnboundType.htm)
		 Свойство UnboundType
		 определяет тип обновления для репликации.


		 ![](../../Property_Image.gif)
		 [UpdateOrder](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.UpdateOrder.htm)
		 Свойство UpdateOrder
		 определяет порядок обновления данных объектов.


		 ![](../../Property_Image.gif)
		 [UpdatePart](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.UpdatePart.htm)
		 Свойство UpdatePart
		 определяет способ обновления данных объекта.


		 ![](../../Property_Image.gif)
		 [UpdateType](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.UpdateType.htm)
		 Свойство UpdateType
		 определяет тип обновления объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Version](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.Version.htm)
		 Свойство Version возвращает
		 версию обновляемого объекта.


## Свойства, унаследованные от [IMetabaseUpdateNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Condition](../IMetabaseUpdateNode/IMetabaseUpdateNode.Condition.htm)
		 Свойство Condition
		 возвращает условие, при выполнении которого будет осуществляться
		 обновление объекта.


		 ![](../../Property_Image.gif)
		 [CustomProperties](../IMetabaseUpdateNode/IMetabaseUpdateNode.CustomProperties.htm)
		 Свойство CustomProperties
		 возвращает коллекцию пользовательских метаданных объекта обновления.


		 ![](../../Property_Image.gif)
		 [Enabled](../IMetabaseUpdateNode/IMetabaseUpdateNode.Enabled.htm)
		 Свойство Enabled определяет,
		 выполнять ли обновление объекта.


		 ![](../../Property_Image.gif)
		 [Index](../IMetabaseUpdateNode/IMetabaseUpdateNode.Index.htm)
		 Свойство Index возвращает
		 индекс объекта обновления.


		 ![](../../Property_Image.gif)
		 [Key](../IMetabaseUpdateNode/IMetabaseUpdateNode.Key.htm)
		 Свойство Key возвращает
		 ключ объекта обновления.


		 ![](../../Property_Image.gif)
		 [Label](../IMetabaseUpdateNode/IMetabaseUpdateNode.Label.htm)
		 Свойство Label определяет
		 наименование объекта обновления.


		 ![](../../Property_Image.gif)
		 [NodeType](../IMetabaseUpdateNode/IMetabaseUpdateNode.NodeType.htm)
		 Свойство NodeType возвращает
		 тип объекта обновления.


		 ![](../../Property_Image.gif)
		 [ParentNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.ParentNode.htm)
		 Свойство ParentNode
		 возвращает родительскую структуру для объекта обновления.


## Методы, унаследованные от [IMetabaseUpdateNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Prepare](../IMetabaseUpdateNode/IMetabaseUpdateNode.Prepare.htm)
		 Метод Prepare осуществляет
		 подготовку объекта к обновлению.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
