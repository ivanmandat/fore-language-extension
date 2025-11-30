# IMetabaseObjectDescriptor

IMetabaseObjectDescriptor
-


# IMetabaseObjectDescriptor


Сборка: Metabase;


## Описание


Интерфейс IMetabaseObjectDescriptor
 содержит свойства и методы описания объекта репозитория.


## Иерархия наследования


           IMetabaseObjectDescriptor


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IMetabaseObjectDescriptor.Attributes.htm)
		 Свойство Attributes
		 возвращает [системные](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#object)
		 и [пользовательские](admin.chm::/04_SecurityPolicy/Creating_attributes.htm#object_classes)
		 атрибуты объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Cache](IMetabaseObjectDescriptor.Cache.htm)
		 Свойство Cache возвращает
		 коллекцию записей кеша объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Children](IMetabaseObjectDescriptor.Children.htm)
		 Свойство Children возвращает
		 коллекцию описаний дочерних объектов репозитория.


		 ![](../../Property_Image.gif)
		 [ClassId](IMetabaseObjectDescriptor.ClassId.htm)
		 Свойство ClassId возвращает
		 идентификатор класса объекта.


		 ![](../../Property_Image.gif)
		 [CommonClassName](IMetabaseObjectDescriptor.CommonClassName.htm)
		 Свойство CommonClassName
		 возвращает наименование класса объекта репозитория в заданном
		 падеже.


		 ![](../../Property_Image.gif)
		 [Dependencies](IMetabaseObjectDescriptor.Dependencies.htm)
		 Свойство Dependencies
		 возвращает коллекцию описаний объектов, от которых зависит данный
		 объект.


		 ![](../../Property_Image.gif)
		 [Dependents](IMetabaseObjectDescriptor.Dependents.htm)
		 Свойство Dependents
		 возвращает коллекцию описаний объектов, зависящих от данного объекта.


		 ![](../../Property_Image.gif)
		 [Description](IMetabaseObjectDescriptor.Description.htm)
		 Свойство Description
		 определяет описание (примечание) объекта.


		 ![](../../Property_Image.gif)
		 [ElementDependencies](IMetabaseObjectDescriptor.ElementDependencies.htm)
		 Свойство ElementDependencies
		 возвращает информацию о зависимостях данного объекта от элементов
		 справочников НСИ.


		 ![](../../Property_Image.gif)
		 [ElementDependenciesTrackingType](IMetabaseObjectDescriptor.ElementDependenciesTrackingType.htm)
		 Свойство ElementDependenciesTrackingType
		 определяет тип отслеживания связей.


		 ![](../../Property_Image.gif)
		 [ElementDependents](IMetabaseObjectDescriptor.ElementDependents.htm)
		 Свойство ElementDependents
		 возвращает информацию о зависимостях данного объекта или элемента
		 справочника НСИ от объектов репозитория.


		 ![](../../Property_Image.gif)
		 [IconIndex](IMetabaseObjectDescriptor.IconIndex.htm)
		 Свойство IconIndex
		 возвращает индекс пиктограммы объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Id](IMetabaseObjectDescriptor.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [IsCheckedOut](IMetabaseObjectDescriptor.IsCheckedOut.htm)
		 Свойство IsCheckedOut
		 возвращает признак блокировки объекта на редактирование.


		 ![](../../Property_Image.gif)
		 [IsDeferred](IMetabaseObjectDescriptor.IsDeferred.htm)
		 Свойство IsDeferred
		 возвращает признак отложенной загрузки описания объекта.


		 ![](../../Property_Image.gif)
		 [IsEdited](IMetabaseObjectDescriptor.IsEdited.htm)
		 Свойство IsEdited возвращает
		 признак редактирования описания объекта.


		 ![](../../Property_Image.gif)
		 [IsInternal](IMetabaseObjectDescriptor.IsInternal.htm)
		 Свойство IsInternal
		 возвращает признак внутреннего объекта репозитория.


		 ![](../../Property_Image.gif)
		 [IsLink](IMetabaseObjectDescriptor.IsLink.htm)
		 Свойство IsLink возвращает
		 признак того, что данный объект находится в другом репозитории.


		 ![](../../Property_Image.gif)
		 [IsPermanent](IMetabaseObjectDescriptor.IsPermanent.htm)
		 Свойство IsPermanent
		 возвращает признак постоянного объекта репозитория.


		 ![](../../Property_Image.gif)
		 [IsShared](IMetabaseObjectDescriptor.IsShared.htm)
		 Свойство IsShared возвращает
		 признак наличия объекта в системе управления версиями.


		 ![](../../Property_Image.gif)
		 [IsSharingSupported](IMetabaseObjectDescriptor.IsSharingSupported.htm)
		 Свойство IsSharingSupported
		 возвращает признак возможности добавления объекта в систему управления
		 версиями.


		 ![](../../Property_Image.gif)
		 [IsShortcut](IMetabaseObjectDescriptor.IsShortcut.htm)
		 Свойство IsShortcut
		 возвращает признак того, что данный объект является ярлыком на
		 другой объект репозитория.


		 ![](../../Property_Image.gif)
		 [IsSpecial](IMetabaseObjectDescriptor.IsSpecial.htm)
		 Свойство IsSpecial
		 определяет признак принадлежности к специальным объектам репозитория.


		 ![](../../Property_Image.gif)
		 [Key](IMetabaseObjectDescriptor.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Link](IMetabaseObjectDescriptor.Link.htm)
		 Свойство Link определяет
		 связь данного объекта с объектом, имеющим тип «Связь с репозиторием».


		 ![](../../Property_Image.gif)
		 [LocalCheckedOutFileNames](IMetabaseObjectDescriptor.LocalCheckedOutFileNames.htm)
		 Свойство LocalCheckedOutFileNames
		 возвращает строковый массив, содержащий список локальных файлов,
		 в которых хранятся измененные данные объекта.


		 ![](../../Property_Image.gif)
		 [LocalFileName](IMetabaseObjectDescriptor.LocalFileName.htm)
		 Свойство LocalFileName
		 возвращает наименование, используемое для формирования имен локальных
		 файлов, в которых хранятся данные объекта.


		 ![](../../Property_Image.gif)
		 [LocalFileNames](IMetabaseObjectDescriptor.LocalFileNames.htm)
		 Свойство LocalFileNames
		 возвращает строковый массив, содержащий список локальных файлов,
		 в которых хранятся данные объекта.


		 ![](../../Property_Image.gif)
		 [LocalFolderName](IMetabaseObjectDescriptor.LocalFolderName.htm)
		 Свойство LocalFolderName
		 возвращает путь к папке на диске, в которой хранятся локальные
		 файлы объекта, добавленного в систему управления версиями.


		 ![](../../Property_Image.gif)
		 [Metabase](IMetabaseObjectDescriptor.Metabase.htm)
		 Свойство Metabase возвращает
		 репозиторий, в котором создан текущий объект.


		 ![](../../Property_Image.gif)
		 [Name](IMetabaseObjectDescriptor.Name.htm)
		 Свойство Name определяет
		 наименование объекта для [текущего
		 языка репозитория](../IMetabase/IMetabase.CurrentLocale.htm).


		 ![](../../Property_Image.gif)
		 [Names](IMetabaseObjectDescriptor.Names.htm)
		 Свойство Names возвращает
		 коллекцию наименований объекта для разных языков.


		 ![](../../Property_Image.gif)
		 [Namespace_](IMetabaseObjectDescriptor.Namespace_.htm)
		 Свойство Namespace_
		 возвращает описание объекта-контейнера, в котором хранится текущий
		 объект.


		 ![](../../Property_Image.gif)
		 [OriginalMetabase](IMetabaseObjectDescriptor.OriginalMetabase.htm)
		 Свойство OriginalMetabase
		 возвращает идентификатор оригинальной метабазы.


		 ![](../../Property_Image.gif)
		 [Params](IMetabaseObjectDescriptor.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Parent](IMetabaseObjectDescriptor.Parent.htm)
		 Свойство Parent возвращает
		 описание объекта-владельца.


		 ![](../../Property_Image.gif)
		 [ParentAllowed](IMetabaseObjectDescriptor.ParentAllowed.htm)
		 Свойство ParentAllowed
		 возвращает признак возможности установки текущего объекта в качестве
		 дочернего для указанного объекта.


		 ![](../../Property_Image.gif)
		 [Screenshot](IMetabaseObjectDescriptor.Screenshot.htm)
		 Свойство Screenshot
		 определяет изображение, используемое при предварительном просмотре
		 объекта в репозитории.


		 ![](../../Property_Image.gif)
		 [SecurityDescriptor](IMetabaseObjectDescriptor.SecurityDescriptor.htm)
		 Свойство SecurityDescriptor
		 возвращает параметры управления доступом к текущему объекту.


		 ![](../../Property_Image.gif)
		 [Shortcut](IMetabaseObjectDescriptor.Shortcut.htm)
		 Свойство Shortcut определяет
		 описание объекта, на который ссылается ярлык.


		 ![](../../Property_Image.gif)
		 [SourceParams](IMetabaseObjectDescriptor.SourceParams.htm)
		 Свойство SourceParams
		 возвращает коллекцию параметров объекта, на который ссылается
		 данный объект.


		 ![](../../Property_Image.gif)
		 [Timestamp](IMetabaseObjectDescriptor.Timestamp.htm)
		 Свойство Timestamp
		 возвращает дату и время последнего сохранения объекта репозитория.


		 ![](../../Property_Image.gif)
		 [TrackElementDependencies](IMetabaseObjectDescriptor.TrackElementDependencies.htm)
		 Свойство TrackElementDependencies
		 определяет признак отслеживания зависимостей объекта от элементов
		 справочника НСИ.


		 ![](../../Property_Image.gif)
		 [TrackElementDependents](IMetabaseObjectDescriptor.TrackElementDependents.htm)
		 Свойство TrackElementDependents
		 определяет признак отслеживания объектов, зависящих от элементов
		 текущего объекта.


		 ![](../../Property_Image.gif)
		 [VcsFileName](IMetabaseObjectDescriptor.VcsFileName.htm)
		 Свойство VcsFileName
		 возвращает наименование, используемое для формирования имен файлов
		 на сервере управления версиями, в которых хранятся данные объекта.


		 ![](../../Property_Image.gif)
		 [VcsFolderName](IMetabaseObjectDescriptor.VcsFolderName.htm)
		 Свойство VcsFolderName
		 возвращает путь к папке на сервере управления версиями, в которой
		 хранятся файлы объекта, добавленного в систему управления версиями.


		 ![](../../Property_Image.gif)
		 [Version](IMetabaseObjectDescriptor.Version.htm)
		 Свойство Version возвращает
		 версию объекта.


		 ![](../../Property_Image.gif)
		 [VersionChangedLocaly](IMetabaseObjectDescriptor.VersionChangedLocaly.htm)
		 Свойство VersionChangedLocaly
		 возвращает признак наличия локальных изменений объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Bind](IMetabaseObjectDescriptor.Bind.htm)
		 Метод Bind возвращает
		 объект, которому соответствует данное описание.


		 ![](../../Sub_Image.gif)
		 [CheckAndAudit](IMetabaseObjectDescriptor.CheckAndAudit.htm)
		 Метод CheckAndAudit
		 проверяет права доступа текущего пользователя на указанные операции
		 и заносит запись в протокол доступа с указанным комментарием.


		 ![](../../Sub_Image.gif)
		 [CheckAndAuditLabel](IMetabaseObjectDescriptor.CheckAndAuditLabel.htm)
		 Метод CheckAndAuditLabel
		 проверяет права доступа текущего пользователя на указанные операции
		 и заносит запись в протокол доступа с указанным комментарием,
		 а также вычисляет параметры метки безопасности, используемой при
		 печати и экспорте объектов репозитория.


		 ![](../../Sub_Image.gif)
		 [CheckAndAuditOperation](IMetabaseObjectDescriptor.CheckAndAuditOperation.htm)
		 Метод CheckAndAuditOperation
		 проверяет права доступа текущего пользователя на указанные операции
		 и протоколирует результат проверки в соответствии с выбранным
		 вариантом аудита.


		 ![](../../Sub_Image.gif)
		 [CheckAndAuditOperationLabel](IMetabaseObjectDescriptor.CheckAndAuditOperationLabel.htm)
		 Метод CheckAndAuditOperationLabel
		 проверяет права доступа текущего пользователя на указанные операции
		 и протоколирует результат проверки в соответствии с выбранным
		 вариантом аудита, а также вычисляет параметры метки безопасности,
		 используемой при печати и экспорте объектов репозитория.


		 ![](../../Sub_Image.gif)
		 [CheckIn](IMetabaseObjectDescriptor.CheckIn.htm)
		 Метод CheckIn осуществляет
		 снятие блокировки на редактирование с объекта.


		 ![](../../Sub_Image.gif)
		 [CheckInEx](IMetabaseObjectDescriptor.CheckInEx.htm)
		 Метод CheckInEx осуществляет
		 публикацию изменений объекта.


		 ![](../../Sub_Image.gif)
		 [CheckOut](IMetabaseObjectDescriptor.CheckOut.htm)
		 Метод CheckOut осуществляет
		 блокировку объекта на редактирование.


		 ![](../../Sub_Image.gif)
		 [Edit](IMetabaseObjectDescriptor.Edit.htm)
		 Метод Edit открывает
		 объект на редактирование.


		 ![](../../Sub_Image.gif)
		 [EditDescriptor](IMetabaseObjectDescriptor.EditDescriptor.htm)
		 Метод EditDescriptor
		 осуществляет редактирование описания объекта.


		 ![](../../Sub_Image.gif)
		 [EditTemporary](IMetabaseObjectDescriptor.EditTemporary.htm)
		 Метод EditTemporary
		 открывает объект для временного изменения свойств.


		 ![](../../Sub_Image.gif)
		 [FetchChildren](IMetabaseObjectDescriptor.FetchChildren.htm)
		 Метод FetchChildren
		 возвращает коллекцию описаний дочерних объектов с учетом объектов
		 с отложенной загрузкой описания.


		 ![](../../Sub_Image.gif)
		 [FetchDependencies](IMetabaseObjectDescriptor.FetchDependencies.htm)
		 Метод FetchDependencies
		 возвращает коллекцию описаний объектов, от которых зависит данный
		 объект с учетом объектов с отложенной загрузкой описания.


		 ![](../../Sub_Image.gif)
		 [FetchDependents](IMetabaseObjectDescriptor.FetchDependents.htm)
		 Метод FetchDependents
		 возвращает коллекцию описаний объектов, зависящих от данного объекта
		 с учетом объектов с отложенной загрузкой описания.


		 ![](../../Sub_Image.gif)
		 [FindNext](IMetabaseObjectDescriptor.FindNext.htm)
		 Метод FindNext осуществляет
		 поиск следующего объекта, удовлетворяющего условиям поиска.


		 ![](../../Sub_Image.gif)
		 [GetChangesHistory](IMetabaseObjectDescriptor.GetChangesHistory.htm)
		 Метод GetChangesHistory
		 возвращает коллекцию записей протокола доступа, которые содержат
		 информацию о действиях, произведенных над объектом в заданном
		 промежутке времени.


		 ![](../../Sub_Image.gif)
		 [GetCheckOutInfo](IMetabaseObjectDescriptor.GetCheckOutInfo.htm)
		 Метод GetCheckOutInfo
		 возвращает информацию о блокировках объекта.


		 ![](../../Sub_Image.gif)
		 [GetDeniedAccess](IMetabaseObjectDescriptor.GetDeniedAccess.htm)
		 Метод GetDeniedAccess
		 для указанного субъекта безопасности проверяет наличие установленных
		 запретов выполнения действий над текущим объектом.


		 ![](../../Sub_Image.gif)
		 [GetExternalOpenXml](IMetabaseObjectDescriptor.GetExternalOpenXml.htm)
		 Метод GetExternalOpenXml
		 генерирует XML-структуру, содержащую параметры открытия объекта.


		 ![](../../Sub_Image.gif)
		 [GetHistory](IMetabaseObjectDescriptor.GetHistory.htm)
		 Метод GetHistory возвращает
		 историю изменения объекта.


		 ![](../../Sub_Image.gif)
		 [GetLatestVCS](IMetabaseObjectDescriptor.GetLatestVCS.htm)
		 Метод GetLatestVCS
		 получает информацию об объекте из системы управления версиями
		 и в соответствии с ней осуществляет обновление объекта в репозитории.


		 ![](../../Sub_Image.gif)
		 [GetSecurity](IMetabaseObjectDescriptor.GetSecurity.htm)
		 Метод GetSecurity получает
		 политику доступа объекта.


		 ![](../../Sub_Image.gif)
		 [HasAccess](IMetabaseObjectDescriptor.HasAccess.htm)
		 Метод HasAccess осуществляет
		 проверку наличия прав у текущего пользователя на определенные
		 операции над объектом.


		 ![](../../Sub_Image.gif)
		 [HasChildren](IMetabaseObjectDescriptor.HasChildren.htm)
		 Метод HasChildren возвращает
		 признак наличия у текущих объектов дочерних объектов.


		 ![](../../Sub_Image.gif)
		 [HistoryVCS](IMetabaseObjectDescriptor.HistoryVCS.htm)
		 Метод HistoryVCS вызывает
		 окно просмотра истории публикаций объекта в системе управления
		 версиями.


		 ![](../../Sub_Image.gif)
		 [IsCheckedOut](IMetabaseObjectDescriptor.IsCheckedOut.htm)
		 Метод IsCheckedOut
		 возвращает признак блокировки объекта на редактирование.


		 ![](../../Sub_Image.gif)
		 [LoadChildScreenshots](IMetabaseObjectDescriptor.LoadChildScreenshots.htm)
		 Метод LoadChildScreenshots
		 кеширует изображения, используемые при предварительном просмотре,
		 для всех дочерних объектов.


		 ![](../../Sub_Image.gif)
		 [MoveTo](IMetabaseObjectDescriptor.MoveTo.htm)
		 Метод MoveTo осуществляет
		 перенос одного объекта репозитория в другой.


		 ![](../../Sub_Image.gif)
		 [Open](IMetabaseObjectDescriptor.Open.htm)
		 Метод Open осуществляет
		 открытие объекта и возвращает его данные.


		 ![](../../Sub_Image.gif)
		 [OpenWithParam](IMetabaseObjectDescriptor.OpenWithParam.htm)
		 Метод OpenWithParam
		 осуществляет открытие объекта с одним параметром и возвращает
		 его данные.


		 ![](../../Sub_Image.gif)
		 [SaveDescriptor](IMetabaseObjectDescriptor.SaveDescriptor.htm)
		 Метод SaveDescriptor
		 сохраняет изменения описания объекта.


		 ![](../../Sub_Image.gif)
		 [SetIdNoCheck](IMetabaseObjectDescriptor.SetIdNoCheck.htm)
		 Метод SetIdNoCheck
		 осуществляет изменение идентификатора объекта без проверки на
		 соответствие установленному формату идентификаторов.


		 ![](../../Sub_Image.gif)
		 [Share](IMetabaseObjectDescriptor.Share.htm)
		 Метод Share помещает
		 объект в систему управления версиями.


		 ![](../../Sub_Image.gif)
		 [UndoCheckOut](IMetabaseObjectDescriptor.UndoCheckOut.htm)
		 Метод UndoCheckOut
		 осуществляет отмену изменений и снятие блокировки объекта.


		 ![](../../Sub_Image.gif)
		 [UndoCheckOutEx](IMetabaseObjectDescriptor.UndoCheckOutEx.htm)
		 Метод UndoCheckOutEx
		 осуществляет отмену изменений и возвращает предыдущую версию объекта.


		 ![](../../Sub_Image.gif)
		 [UnShare](IMetabaseObjectDescriptor.UnShare.htm)
		 Метод находится в стадии разработки.


		 ![](../../Sub_Image.gif)
		 [UpdateTimestamp](IMetabaseObjectDescriptor.UpdateTimestamp.htm)
		 Метод UpdateTimestamp
		 обновляет временную отметку [справочника](UiNavObj.chm::/reference_book/Create.htm).


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
