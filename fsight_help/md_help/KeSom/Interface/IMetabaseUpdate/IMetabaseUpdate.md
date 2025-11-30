# IMetabaseUpdate

IMetabaseUpdate
-


# IMetabaseUpdate


Сборка: Metabase;


## Описание


Интерфейс IMetabaseUpdate содержит
 свойства и методы менеджера обновлений платформы.


## Иерархия наследования


           IMetabaseUpdate


## Комментарии


Для создания обновления используйте метод [IMetabase.CreateUpdate](../IMetabase/IMetabase.CreateUpdate.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AbacRulesNode](IMetabaseUpdate.AbacRulesNode.htm)
		 Свойство AbacRulesNode
		 возвращает структуру правил [атрибутного
		 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm) в обновлении.


		 ![](../../Property_Image.gif)
		 [AccessAllowed](IMetabaseUpdate.AccessAllowed.htm)
		 Свойство AccessAllowed
		 возвращает тип доступа к обновлению.


		 ![](../../Property_Image.gif)
		 [AllowReplaceSD](IMetabaseUpdate.AllowReplaceSD.htm)
		 Свойство AllowReplaceSD
		 определяет возможность замены списка контроля доступа безопасности
		 для объектов обновления.


		 ![](../../Property_Image.gif)
		 [AlterType](IMetabaseUpdate.AlterType.htm)
		 Свойство AlterType
		 определяет настройки пересоздания объектов определённого класса
		 на уровне СУБД.


		 ![](../../Property_Image.gif)
		 [ApplyOptions](IMetabaseUpdate.ApplyOptions.htm)
		 Свойство ApplyOptions
		 определяет настройки применения обновления.


		 ![](../../Property_Image.gif)
		 [BoundType](IMetabaseUpdate.BoundType.htm)
		 Свойство BoundType
		 определяет тип обновления объектов репозитория.


		 ![](../../Property_Image.gif)
		 [Constraint](IMetabaseUpdate.Constraint.htm)
		 Свойство Constraint
		 определяет способ обновления объектов репозитория.


		 ![](../../Property_Image.gif)
		 [CreateMetabase](IMetabaseUpdate.CreateMetabase.htm)
		 Свойство CreateMetabase
		 возвращает наименование репозитория, в котором было создано обновление.


		 ![](../../Property_Image.gif)
		 [CreatePlatformVersion](IMetabaseUpdate.CreatePlatformVersion.htm)
		 Свойство CreatePlatformVersion
		 возвращает версию платформы, в которой было создано обновление.


		 ![](../../Property_Image.gif)
		 [CreateTimestamp](IMetabaseUpdate.CreateTimestamp.htm)
		 Свойство CreateTimestamp
		 возвращает дату и время создания обновления.


		 ![](../../Property_Image.gif)
		 [CreateUserName](IMetabaseUpdate.CreateUserName.htm)
		 Свойство CreateUserName
		 возвращает имя пользователя, под которым было создано обновление.


		 ![](../../Property_Image.gif)
		 [CreateUserSID](IMetabaseUpdate.CreateUserSID.htm)
		 Свойство CreateUserSID
		 возвращает уникальный идентификатор пользователя, под которым
		 было создано обновление.


		 ![](../../Property_Image.gif)
		 [CreateWorkstation](IMetabaseUpdate.CreateWorkstation.htm)
		 Свойство CreateWorkstation
		 возвращает наименование рабочей станции, на который было создано
		 обновление.


		 ![](../../Property_Image.gif)
		 [CustomProperties](IMetabaseUpdate.CustomProperties.htm)
		 Свойство CustomProperties
		 возвращает коллекцию пользовательских метаданных объекта обновления.


		 ![](../../Property_Image.gif)
		 [Description](IMetabaseUpdate.Description.htm)
		 Свойство Description
		 определяет сопроводительный текст, отображаемый в мастере установки
		 обновления перед началом установки.


		 ![](../../Property_Image.gif)
		 [EventsNode](IMetabaseUpdate.EventsNode.htm)
		 Свойство EventsNode
		 определяет модуль обновления.


		 ![](../../Property_Image.gif)
		 [IncludeAbacAttributes](IMetabaseUpdate.IncludeAbacAttributes.htm)
		 Свойство IncludeAbacAttributes
		 определяет признак переноса [пользовательских
		 атрибутов](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm) при использовании [атрибутного
		 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm).


		 ![](../../Property_Image.gif)
		 [LocalCopy](IMetabaseUpdate.LocalCopy.htm)
		 Свойство LocalCopy
		 определяет признак копирования данных при локальном копировании
		 объектов репозитория с помощью обновления.


		 ![](../../Property_Image.gif)
		 [Log](IMetabaseUpdate.Log.htm)
		 Свойство Log возвращает
		 журнал применения обновления.


		 ![](../../Property_Image.gif)
		 [MandatoryAccess](IMetabaseUpdate.MandatoryAccess.htm)
		 Свойство MandatoryAccess
		 определяет параметры мандатного доступа к обновлению.


		 ![](../../Property_Image.gif)
		 [Metabase](IMetabaseUpdate.Metabase.htm)
		 Свойство Metabase возвращает
		 репозиторий, которому принадлежит обновление.


		 ![](../../Property_Image.gif)
		 [PriorDataLinkDependentsClear](IMetabaseUpdate.PriorDataLinkDependentsClear.htm)
		 Свойство PriorDataLinkDependentsClear
		 определяет признак использования предварительной очистки объектов,
		 зависимых по содержимому.


		 ![](../../Property_Image.gif)
		 [Properties](IMetabaseUpdate.Properties.htm)
		 Свойство Properties
		 возвращает коллекцию флагов обновления.


		 ![](../../Property_Image.gif)
		 [ReflectObjectsRights](IMetabaseUpdate.ReflectObjectsRights.htm)
		 Свойство ReflectObjectsRights
		 определяет метод переноса прав на объекты репозитория.


		 ![](../../Property_Image.gif)
		 [RequireUserUpdateMessage](IMetabaseUpdate.RequireUserUpdateMessage.htm)
		 Свойство RequireUserUpdateMessage
		 возвращает признак вывода сообщения с требованием об обновлении
		 пользователей.


		 ![](../../Property_Image.gif)
		 [RootFolder](IMetabaseUpdate.RootFolder.htm)
		 Свойство RootFolder
		 возвращает объект, содержащий структуру обновления.


		 ![](../../Property_Image.gif)
		 [SecurityConflictsLog](IMetabaseUpdate.SecurityConflictsLog.htm)
		 Свойство SecurityConflictsLog
		 возвращает лог конфликтов субъектов безопасности, для которых
		 переносятся права доступа на объекты и конфликты при обновлении
		 мандатного доступа.


		 ![](../../Property_Image.gif)
		 [SpecialObjectsNode](IMetabaseUpdate.SpecialObjectsNode.htm)
		 Свойство SpecialObjectsNode
		 возвращает объект, определяющий параметры обновления специальных
		 объектов.


		 ![](../../Property_Image.gif)
		 [Subjects](IMetabaseUpdate.Subjects.htm)
		 Свойство Subjects определяет
		 субъекты безопасности, для которых переносятся права доступа на
		 объекты.


		 ![](../../Property_Image.gif)
		 [UpdateType](IMetabaseUpdate.UpdateType.htm)
		 Свойство UpdateType
		 определяет тип и способ обновления объектов репозитория.


		 ![](../../Property_Image.gif)
		 [UseLocalVcsFiles](IMetabaseUpdate.UseLocalVcsFiles.htm)
		 Свойство UseLocalVcsFiles
		 определяет признак использования в обновлении локальных версий
		 объектов, добавленных в систему управления версиями.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Apply](IMetabaseUpdate.Apply.htm)
		 Метод Apply осуществляет
		 обновление объектов репозитория.


		 ![](../../Sub_Image.gif)
		 [ApplyEx](IMetabaseUpdate.ApplyEx.htm)
		 Метод ApplyEx осуществляет
		 обновление объектов репозитория с использованием дополнительных
		 настроек.


		 ![](../../Sub_Image.gif)
		 [Clear](IMetabaseUpdate.Clear.htm)
		 Метод Clear осуществляет
		 удаление всех объектов из обновления.


		 ![](../../Sub_Image.gif)
		 [Copy](IMetabaseUpdate.Copy.htm)
		 Метод Copy осуществляет
		 копирование объектов обновления.


		 ![](../../Sub_Image.gif)
		 [CreateUpdateContext](IMetabaseUpdate.CreateUpdateContext.htm)
		 Метод CreateUpdateContext
		 создаёт объект, содержащий дополнительные настройки для обновления.


		 ![](../../Sub_Image.gif)
		 [FindAbacRulesNode](IMetabaseUpdate.FindAbacRulesNode.htm)
		 Метод FindAbacRulesNode
		 осуществляет поиск структуры правил атрибутного доступа в обновлении.


		 ![](../../Sub_Image.gif)
		 [FindSpecialObjectsNode](IMetabaseUpdate.FindSpecialObjectsNode.htm)
		 Метод FindSpecialObjectsNode
		 осуществляет поиск объекта, определяющего параметры обновления
		 специальных объектов.


		 ![](../../Sub_Image.gif)
		 [LoadFromFile](IMetabaseUpdate.LoadFromFile.htm)
		 Метод LoadFromFile
		 загружает обновление из файла с расширением *.pef.


		 ![](../../Sub_Image.gif)
		 [LoadFromFileNF](IMetabaseUpdate.LoadFromFileNF.htm)
		 Метод LoadFromFileNF
		 загружает обновление из файла с расширением *.pefx.


		 ![](../../Sub_Image.gif)
		 [Prepare](IMetabaseUpdate.Prepare.htm)
		 Метод Prepare проверяет
		 корректность обновления.


		 ![](../../Sub_Image.gif)
		 [PrepareC](IMetabaseUpdate.PrepareC.htm)
		 Метод PrepareC проверяет
		 корректность обновления с учётом дополнительных настроек.


		 ![](../../Sub_Image.gif)
		 [Refresh](IMetabaseUpdate.Refresh.htm)
		 Метод Refresh осуществляет
		 синхронизацию обновления с репозиторием.


		 ![](../../Sub_Image.gif)
		 [SaveAvailable](IMetabaseUpdate.SaveAvailable.htm)
		 Метод SaveAvailable
		 сохраняет обновление с доступными пользователю объектами.


		 ![](../../Sub_Image.gif)
		 [SaveToFile](IMetabaseUpdate.SaveToFile.htm)
		 Метод SaveToFile сохраняет
		 обновление в файл с расширением *.pef.


		 ![](../../Sub_Image.gif)
		 [SaveToFileNF](IMetabaseUpdate.SaveToFileNF.htm)
		 Метод SaveToFileNF
		 сохраняет обновление в файл с расширением *.pefx.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
