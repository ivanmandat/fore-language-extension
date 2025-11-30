# IMetabase

IMetabase
-


# IMetabase


Сборка: Metabase;


## Описание


Интерфейс IMetabase содержит
 свойства и методы коллекции объектов репозитория.


## Иерархия наследования


           [INamedEntityModel](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.htm)


           IMetabase


## Комментарии


Данный интерфейс содержит основные свойства и методы для управления
 объектами репозитория, а также для доступа к различным инструментам продукта
 «Форсайт. Аналитическая платформа».


Если подключение к репозиторию осуществляется в прикладном коде, то
 метод [IMetabaseDefinition.Open](../IMetabaseDefinition/IMetabaseDefinition.Open.htm)
 или [IMetabaseDefinition.OpenDefault](../IMetabaseDefinition/IMetabaseDefinition.OpenDefault.htm)
 вернёт доступ к репозиторию. Для получения доступа к репозиторию, подключение
 к которому уже осуществлено из интерфейса платформы, используйте статическое
 свойство [Active](../IMetabaseClass/IMetabaseClass.Active.htm)
 класса [MetabaseClass](../../Class/MetabaseClass/MetabaseClass.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cache](IMetabase.Cache.htm)
		 Свойство Cache возвращает
		 содержимое кеша репозитория.


		 ![](../../Property_Image.gif)
		 [CacheAutoClear](IMetabase.CacheAutoClear.htm)
		 Свойство CacheAutoClear
		 определяет, используется ли при работе в репозитории режим автоматической
		 очистки кеша.


		 ![](../../Property_Image.gif)
		 [Classes](IMetabase.Classes.htm)
		 Свойство Classes возвращает
		 коллекцию классов объектов репозитория.


		 ![](../../Property_Image.gif)
		 [CompileAssemblyOnly](IMetabase.CompileAssemblyOnly.htm)
		 Свойство CompileAssemblyOnly
		 определяет признак возможности компиляции форм/модулей вне сборок.


		 ![](../../Property_Image.gif)
		 [CurrentDomainSubjectAddState](IMetabase.CurrentDomainSubjectAddState.htm)
		 Свойство CurrentDomainSubjectAddState
		 определяет настройки добавления доменных субъектов безопасности.


		 ![](../../Property_Image.gif)
		 [CurrentLocale](IMetabase.CurrentLocale.htm)
		 Свойство CurrentLocale
		 определяет текущий язык репозитория.


		 ![](../../Property_Image.gif)
		 [DefaultLocale](IMetabase.DefaultLocale.htm)
		 Свойство DefaultLocale
		 определяет язык репозитория по умолчанию.


		 ![](../../Property_Image.gif)
		 [DeferredLoading](IMetabase.DeferredLoading.htm)
		 Свойство DeferredLoading
		 возвращает признак наличия включенной отложенной загрузки объектов
		 репозитория.


		 ![](../../Property_Image.gif)
		 [Definition](IMetabase.Definition.htm)
		 Свойство Definition
		 возвращает описание текущего репозитория, хранящееся в менеджере
		 репозиториев.


		 ![](../../Property_Image.gif)
		 [ElementDependenciesDatabase](IMetabase.ElementDependenciesDatabase.htm)
		 Свойство ElementDependenciesDatabase
		 возвращает объект, предназначенный для работы с зависимостями
		 объектов от элементов справочников НСИ.


		 ![](../../Property_Image.gif)
		 [ElementDependentsDatabase](IMetabase.ElementDependentsDatabase.htm)
		 Свойство ElementDependentsDatabase
		 возвращает ссылки элементов справочников на объекты репозитория.


		 ![](../../Property_Image.gif)
		 [ExceptionHandler](IMetabase.ExceptionHandler.htm)
		 Свойство ExceptionHandler
		 определяет обработчик исключительных ситуаций, который будет использоваться
		 при работе в репозитории.


		 ![](../../Property_Image.gif)
		 [ExceptionMailAddress](IMetabase.ExceptionMailAddress.htm)
		 Свойство ExceptionMailAddress
		 определяет адрес электронной почты, который будет подставляться
		 при отправке сообщений об ошибках платформы.


		 ![](../../Property_Image.gif)
		 [IsScreenshotSupported](IMetabase.IsScreenshotSupported.htm)
		 Свойство IsScreenshotSupported
		 возвращает признак поддержки отображения объектов в виде значков.


		 ![](../../Property_Image.gif)
		 [IsShared](IMetabase.IsShared.htm)
		 Свойство IsShared возвращает
		 признак наличия настроек для работы с системой управления версиями.


		 ![](../../Property_Image.gif)
		 [Item](IMetabase.Item.htm)
		 Свойство Item возвращает
		 описание объекта репозитория по ключу.


		 ![](../../Property_Image.gif)
		 [ItemById](IMetabase.ItemById.htm)
		 Свойство ItemById возвращает
		 описание объекта репозитория по идентификатору.


		 ![](../../Property_Image.gif)
		 [ItemByIdNamespace](IMetabase.ItemByIdNamespace.htm)
		 Свойство ItemByIdNamespace
		 возвращает описание объекта, содержащегося в каком-либо объекте-контейнере.


		 ![](../../Property_Image.gif)
		 [LogonSession](IMetabase.LogonSession.htm)
		 Свойство LogonSession
		 возвращает информацию о текущей сессии с репозиторием.


		 ![](../../Property_Image.gif)
		 [Mode](IMetabase.Mode.htm)
		 Свойство Mode определяет,
		 каким образом произошло подключение к репозиторию.


		 ![](../../Property_Image.gif)
		 [PrivateFolder](IMetabase.PrivateFolder.htm)
		 Свойство PrivateFolder
		 возвращает личную папку текущего пользователя.


		 ![](../../Property_Image.gif)
		 [PrivateFolderRoot](IMetabase.PrivateFolderRoot.htm)
		 Свойство PrivateFolderRoot
		 возвращает корневую папку для личных папок пользователей.


		 ![](../../Property_Image.gif)
		 [Profiles](IMetabase.Profiles.htm)
		 Свойство Profiles возвращает
		 коллекцию профилей пользователей репозитория.


		 ![](../../Property_Image.gif)
		 [Root](IMetabase.Root.htm)
		 Свойство Root возвращает
		 описание корневой папки репозитория.


		 ![](../../Property_Image.gif)
		 [Security](IMetabase.Security.htm)
		 Свойство Security возвращает
		 настройки менеджера безопасности текущего репозитория.


		 ![](../../Property_Image.gif)
		 [SingleUserMode](IMetabase.SingleUserMode.htm)
		 Свойство SingleUserMode
		 возвращает признак возможности работы в репозитории только под
		 одной учетной записью.


		 ![](../../Property_Image.gif)
		 [SpecialObject](IMetabase.SpecialObject.htm)
		 Свойство SpecialObject
		 определяет объект репозитория, который является специальным.


		 ![](../../Property_Image.gif)
		 [SpecialObjects](IMetabase.SpecialObjects.htm)
		 Свойство SpecialObjects
		 возвращает коллекцию специальных объектов репозитория.


		 ![](../../Property_Image.gif)
		 [UpdateHandler](IMetabase.UpdateHandler.htm)
		 Свойство UpdateHandler
		 определяет глобальный обработчик событий работы с обновлениями.


		 ![](../../Property_Image.gif)
		 [UseReservedKeys](IMetabase.UseReservedKeys.htm)
		 Свойство UseReservedKeys
		 определяет количество ключей, которые будут резервироваться для
		 использования в платформе.


## Свойства, унаследованные от [INamedEntityModel](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Id.htm)
		 Свойство Id возвращает
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Name.htm)
		 Свойство Name возвращает
		 наименование объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AbandonMerge](IMetabase.AbandonMerge.htm)
		 Метод AbandonMerge
		 откладывает решение возникших конфликтов для публикации других
		 изменений объектов.


		 ![](../../Sub_Image.gif)
		 [Bind](IMetabase.Bind.htm)
		 Метод Bind возвращает
		 структуру объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [CheckInEx](IMetabase.CheckInEx.htm)
		 Метод CheckInEx осуществляет
		 публикацию изменений группы объектов.


		 ![](../../Sub_Image.gif)
		 [CheckInFiles](IMetabase.CheckInFiles.htm)
		 Метод CheckInFiles
		 осуществляет публикацию изменений указанных объектов.


		 ![](../../Sub_Image.gif)
		 [ClearDocumentCacheFiles](IMetabase.ClearDocumentCacheFiles.htm)
		 Метод ClearDocumentCacheFiles
		 очищает кеш [документов](UiNavObj.chm::/UiNavObj_document.htm).


		 ![](../../Sub_Image.gif)
		 [CopyObject](IMetabase.CopyObject.htm)
		 Метод CopyObject осуществляет
		 копирование указанного объекта.


		 ![](../../Sub_Image.gif)
		 [CreateCheckList](IMetabase.CreateCheckList.htm)
		 Метод CreateCheckList
		 создает список, используемый для расчета и проверки контрольных
		 сумм объектов репозитория.


		 ![](../../Sub_Image.gif)
		 [CreateCodeBlock](IMetabase.CreateCodeBlock.htm)
		 Метод CreateCodeBlock
		 возвращает объект, содержащий код на Fore.


		 ![](../../Sub_Image.gif)
		 [CreateCopyInfo](IMetabase.CreateCopyInfo.htm)
		 Метод CreateCopyInfo
		 позволяет создать объект для осуществления копирования по определенным
		 параметрам.


		 ![](../../Sub_Image.gif)
		 [CreateCreateInfo](IMetabase.CreateCreateInfo.htm)
		 Метод CreateCreateInfo
		 создает информацию для нового объекта.


		 ![](../../Sub_Image.gif)
		 [CreateFindInfo](IMetabase.CreateFindInfo.htm)
		 Метод CreateFindInfo
		 позволяет создать объект для осуществления поиска объектов репозитория.


		 ![](../../Sub_Image.gif)
		 [CreateObject](IMetabase.CreateObject.htm)
		 Метод CreateObject
		 создает новый объект.


		 ![](../../Sub_Image.gif)
		 [CreateUpdate](IMetabase.CreateUpdate.htm)
		 Метод CreateUpdate
		 осуществляет создание объекта обновления.


		 ![](../../Sub_Image.gif)
		 [DeleteObject](IMetabase.DeleteObject.htm)
		 Метод DeleteObject
		 осуществляет удаление объекта по ключу.


		 ![](../../Sub_Image.gif)
		 [DeleteObjectO](IMetabase.DeleteObjectO.htm)
		 Метод DeleteObjectO
		 удаляет объект репозитория с указанием способа удаления ссылок
		 на объекты.


		 ![](../../Sub_Image.gif)
		 [FetchItem](IMetabase.FetchItem.htm)
		 Метод FetchItem возвращает
		 описание объекта или объекта, для которого установлен признак
		 [отложенной
		 загрузки описания](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm), по ключу.


		 ![](../../Sub_Image.gif)
		 [FetchItemById](IMetabase.FetchItemById.htm)
		 Метод FetchItemByld
		 возвращает описание объекта или объекта, для которого установлен
		 признак [отложенной
		 загрузки описания](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm), по идентификатору.


		 ![](../../Sub_Image.gif)
		 [FetchItems](IMetabase.FetchItems.htm)
		 Метод FetchItems возвращает
		 описания объектов или объектов, для которых установлен признак
		 [отложенной
		 загрузки описания](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm), по ключам.


		 ![](../../Sub_Image.gif)
		 [FetchItemsById](IMetabase.FetchItemsById.htm)
		 Метод FetchItemsByld
		 возвращает описание указанной коллекции объектов, а также загружает
		 описания указанных связанных объектов.


		 ![](../../Sub_Image.gif)
		 [Find](IMetabase.Find.htm)
		 Метод Find производит
		 поиск объекта (объектов), удовлетворяющего (удовлетворяющих) условиям
		 поиска.


		 ![](../../Sub_Image.gif)
		 [GenerateId](IMetabase.GenerateId.htm)
		 Метод GenerateId генерирует
		 уникальный идентификатор в рамках текущего репозитория.


		 ![](../../Sub_Image.gif)
		 [GenerateKey](IMetabase.GenerateKey.htm)
		 Метод GenerateKey генерирует
		 уникальный ключ в рамках текущего репозитория.


		 ![](../../Sub_Image.gif)
		 [GetConnectedUsers](IMetabase.GetConnectedUsers.htm)
		 Метод GetConnectedUsers
		 позволяет получить информацию о пользователях, подключенных к
		 репозиторию.


		 ![](../../Sub_Image.gif)
		 [GetConnectedUsersEx](IMetabase.GetConnectedUsersEx.htm)
		 Метод GetConnectedUsersEx
		 позволяет получить информацию об активных пользователях, подключенных
		 к репозиторию.


		 ![](../../Sub_Image.gif)
		 [GetCurrentStamp](IMetabase.GetCurrentStamp.htm)
		 Метод GetCurrentStamp
		 возвращает текущую дату и время сервера СУБД, на котором расположен
		 репозиторий.


		 ![](../../Sub_Image.gif)
		 [GetCurrentStampMS](IMetabase.GetCurrentStampMS.htm)
		 Метод GetCurrentStampMS
		 возвращает текущую дату и время сервера СУБД, на котором расположен
		 репозиторий, с точностью до миллисекунд.


		 ![](../../Sub_Image.gif)
		 [GetItems](IMetabase.GetItems.htm)
		 Метод GetItems возвращает
		 коллекцию описаний объектов по ключам.


		 ![](../../Sub_Image.gif)
		 [GetObjectKeyById](IMetabase.GetObjectKeyById.htm)
		 Метод GetObjectKeyById
		 возвращает уникальный ключ объекта по его идентификатору.


		 ![](../../Sub_Image.gif)
		 [GetObjectKeyByIdNamespace](IMetabase.GetObjectKeyByIdNamespace.htm)
		 Метод GetObjectKeyByIdNamespace
		 возвращает ключ объекта, расположенного в указанном контейнере,
		 по его идентификатору.


		 ![](../../Sub_Image.gif)
		 [GetPendingChangesVCS](IMetabase.GetPendingChangesVCS.htm)
		 Метод GetPendingChangesVCS
		 возвращает коллекцию объектов, извлеченных для редактирования
		 в системе управления версиями.


		 ![](../../Sub_Image.gif)
		 [GetPendingCheckins](IMetabase.GetPendingCheckins.htm)
		 Метод GetPendingCheckins
		 возвращает описание всех объектов репозитория, которые захвачены
		 для редактирования.


		 ![](../../Sub_Image.gif)
		 [IsDisconnected](IMetabase.IsDisconnected.htm)
		 Метод IsDisconnected
		 возвращает признак отсутствия соединения с сервером БД.


		 ![](../../Sub_Image.gif)
		 [MoveObject](IMetabase.MoveObject.htm)
		 Метод MoveObject осуществляет
		 перемещение указанного объекта.


		 ![](../../Sub_Image.gif)
		 [PullPush](IMetabase.PullPush.htm)
		 Метод PullPush синхронизирует
		 полученную версию с сервера с текущей версией и отправляет изменения
		 объектов на сервер.


		 ![](../../Sub_Image.gif)
		 [Refresh](IMetabase.Refresh.htm)
		 Метод Refresh осуществляет
		 обновление дерева объектов текущего репозитория.


		 ![](../../Sub_Image.gif)
		 [RefreshO](IMetabase.RefreshO.htm)
		 Метод RefreshO осуществляет
		 обновление репозитория по заданным параметрам.


		 ![](../../Sub_Image.gif)
		 [RequestLicense](IMetabase.RequestLicense.htm)
		 Метод RequestLicense возвращает
		 единицу лицензирования.


		 ![](../../Sub_Image.gif)
		 [ReserveKeys](IMetabase.ReserveKeys.htm)
		 Метод ReserveKeys резервирует
		 указанное количество ключей для использования в аналитической
		 платформе.


		 ![](../../Sub_Image.gif)
		 [ResolveConflict](IMetabase.ResolveConflict.htm)
		 Метод ResolveConflict
		 открывает приложение WinMerge для разрешения возникшего конфликта
		 при публикации изменений объекта.


		 ![](../../Sub_Image.gif)
		 [UndoCheckOutEx](IMetabase.UndoCheckOutEx.htm)
		 Метод UndoCheckOutEx
		 осуществляет отмену изменений и возвращает предыдущую версию объектов.


		 ![](../../Sub_Image.gif)
		 [UndoCheckOutFiles](IMetabase.UndoCheckOutFiles.htm)
		 Метод UndoCheckOutFiles
		 отменяет изменения указанных объектов.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
