# IMetabaseDefinition

IMetabaseDefinition
-


# IMetabaseDefinition


## Описание


Интерфейс IMetabaseDefinition
 содержит свойства и методы описания репозитория.


## Комментарии


Описание репозитория содержит параметры сервера СУБД, на котором расположен
 репозиторий, параметры подключения к системе контроля версиями, а также
 дополнительные настройки, определяющие режимы работы с объектами среды
 разработки.


Также описание репозитория поддерживает интерфейс [IMetabaseLink](../IMetabaseLink/IMetabaseLink.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AuxProjPath](IMetabaseDefinition.AuxProjPath.htm)
		 Свойство AuxProjPath
		 определяет строку, используемую для подключения к серверу управления
		 версиями при работе в репозитории.


		 ![](../../Property_Image.gif)
		 [CheckCustomEvents](IMetabaseDefinition.CheckCustomEvents.htm)
		 Свойство CheckCustomEvents
		 определяет, будет ли осуществляться отслеживание пользовательских
		 событий при работе в репозитории с помощью веб-сервиса.


		 ![](../../Property_Image.gif)
		 [CompileAssemblyOnly](IMetabaseDefinition.CompileAssemblyOnly.htm)
		 Свойство CompileAssemblyOnly
		 определяет признак возможности компиляции форм/модулей вне сборок.


		 ![](../../Property_Image.gif)
		 [Id](IMetabaseDefinition.Id.htm)
		 Свойство Id определяет
		 идентификатор описания репозитория.


		 ![](../../Property_Image.gif)
		 [Manager](IMetabaseDefinition.Manager.htm)
		 Свойство Manager позволяет
		 получить менеджер, в котором зарегистрирован репозиторий, соответствующий
		 текущему описанию.


		 ![](../../Property_Image.gif)
		 [Name](IMetabaseDefinition.Name.htm)
		 Свойство Name определяет
		 наименование описания репозитория.


		 ![](../../Property_Image.gif)
		 [Scope](IMetabaseDefinition.Scope.htm)
		 Свойство Scope определяет
		 местоположение хранения настроек репозитория.


		 ![](../../Property_Image.gif)
		 [VcsLocalPath](IMetabaseDefinition.VcsLocalPath.htm)
		 Свойство VcsLocalPath
		 определяет папку на диске, в которой хранятся локальные файлы
		 объектов.


		 [![](../../Property_Image.gif)](IMetabaseDefinition.VcsName.htm)
		 [VcsName](IMetabaseDefinition.VcsName.htm)
		 Свойство VcsName определяет
		 тип системы управления версиями.


## Свойства, унаследованные от [IMetabaseLinkBase](../IMetabaseLinkBase/IMetabaseLinkBase.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Authentication](../IMetabaseLinkBase/IMetabaseLinkBase.Authentication.htm)


		 Свойство Authentication
		 определяет тип аутентификации, используемый при подключении.


		 ![](../../Property_Image.gif)
		 [DeferredLoading](../IMetabaseLinkBase/IMetabaseLinkBase.DeferredLoading.htm)


		 Свойство DeferredLoading
		 определяет, будет ли производиться отложенная загрузка описаний
		 объектов при работе в репозитории.


		 ![](../../Property_Image.gif)
		 [DriverId](../IMetabaseLinkBase/IMetabaseLinkBase.DriverId.htm)


		 Свойство DriverId определяет
		 идентификатор драйвера базы данных, с использованием которого
		 осуществляется подключение.


		 ![](../../Property_Image.gif)
		 [LogonData](../IMetabaseLinkBase/IMetabaseLinkBase.LogonData.htm)


		 Свойство LogonData
		 возвращает дополнительные параметры модуля безопасности, содержащего
		 настройки, используемые при подключении.


		 ![](../../Property_Image.gif)
		 [SecurityPackage](../IMetabaseLinkBase/IMetabaseLinkBase.SecurityPackage.htm)


		 Свойство SecurityPackage
		 определяет идентификатор пакета безопасности.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Open](IMetabaseDefinition.Open.htm)
		 Метод Open осуществляет
		 подключение к репозиторию в соответствии с указанными параметрами.


		 ![](../../Sub_Image.gif)
		 [OpenDefault](IMetabaseDefinition.OpenDefault.htm)
		 Метод OpenDefault осуществляет
		 подключение к репозиторию в соответствии с настройками по умолчанию.


		 ![](../../Sub_Image.gif)
		 [Save](IMetabaseDefinition.Save.htm)
		 Метод Save позволяет
		 сохранить описание репозитория.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
