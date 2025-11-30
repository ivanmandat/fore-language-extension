# ResourceManager

ResourceManager
-


# ResourceManager


Пространство имен: PP


## Иерархия наследования


[Object](../../Object/Object.htm)


ResourceManager


## Описание


Класс ResourceManager представляет
 собой менеджер ресурсов.


## Комментарии


Класс содержит список элементов управления, требующих локализации, и
 обновляет значения их полей при смене текущего языка системы.


## Синтаксис


PP.initClass(PP.ResourceManager,  [PP.Object](../../Object/Object.htm),
 "PP.ResourceManager");


## Конструктор


				 Имя конструктора
				 Краткое описание


				 ![](../../../Sub_Image.gif)
				 [ResourceManager](dhtmlCommon.chm::/Classes/PP/ResourceManager/Constructor_ResourceManager.htm)
				 Конструктор ResourceManager
				 создает экземпляр класса ResourceManager.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [RootResourcesFolder](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.RootResourcesFolder.htm)
		 Свойство RootResourcesFolder
		 определяет корневую папку, содержащую файлы ресурсов.


		 ![](../../../Property_Image.gif)
		 [String](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.String.htm)
		 Свойство String определяет
		 строку для указанного языка, ресурсного ключа и имени поля.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addToResourceList](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.addToResourceList.htm)
		 Метод addToResourceList
		 добавляет указанный массив к существующему списку наименований
		 файлов ресурсов.


		 ![](../../../Sub_Image.gif)
		 [attachResourceFiles](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.attachResourceFiles.htm)
		 Метод attachResourceFiles
		 инициализирует загрузку файлов ресурсов.


		 ![](../../../Sub_Image.gif)
		 [detachResourceFiles](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.detachResourceFiles.htm)
		 Метод detachResourceFiles
		 отсоединяет все ресурсные файлы для указанного языка.


		 ![](../../../Sub_Image.gif)
		 [isControlRegistered](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.isControlRegistered.htm)
		 Метод isControlRegistered
		 проверяет, зарегистрирован ли указанный элемент управления в менеджере
		 ресурсов.


		 ![](../../../Sub_Image.gif)
		 [isResourceFileAttached](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.isResourceFileAttached.htm)
		 Метод isResourceFileAttached
		 проверяет, подключён ли файл ресурсов для указанной локали.


		 ![](../../../Sub_Image.gif)
		 [isResourceFilesAttached](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.isResourceFilesAttached.htm)
		 Метод isResourceFilesAttached
		 проверяет, подключены ли ресурсные файлы для указанной локали.


		 ![](../../../Sub_Image.gif)
		 [load](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.load.htm)
		 Метод load загружает
		 ресурсные файлы, представленные в виде строки с разделителем через
		 запятую.


		 ![](../../../Sub_Image.gif)
		 [refreshControls](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.refreshControls.htm)
		 Метод refreshControls
		 обновляет элементы управления, зарегистрированные в менеджере
		 ресурсов.


		 ![](../../../Sub_Image.gif)
		 [registerControl](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.registerControl.htm)
		 Метод registerControl
		 регистрирует элемент управления в менеджере ресурсов.


		 ![](../../../Sub_Image.gif)
		 [setResourceHandler](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.setResourceHandler.htm)
		 Метод setResourceHandler
		 устанавливает адрес веб-сервиса, обрабатывающего запросы к менеджеру
		 ресурсов.


		 ![](../../../Sub_Image.gif)
		 [setResourceList](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.setResourceList.htm)
		 Метод setResourceList
		 инициализирует список доступных файлов ресурсов.


		 ![](../../../Sub_Image.gif)
		 [setStrings](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.setStrings.htm)
		 Метод setStrings загружает
		 массив строк для указанных языков, ресурсных ключей и наименований
		 полей.


		 ![](../../../Sub_Image.gif)
		 [unRegisterControl](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.unRegisterControl.htm)
		 Метод unRegisterControl
		 исключает элемент управления из списка зарегистрированных элементов
		 управления в менеджере ресурсов.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [ResourceFileLoaded](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.ResourceFileLoaded.htm)
		 Событие ResourceFileLoaded
		 генерируется после загрузки файла ресурсов.


		 ![](../../../Event_Image.gif)
		 [ResourcesLoaded](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.ResourcesLoaded.htm)
		 Событие ResourcesLoaded
		 генерируется после загрузки ресурсов из файла.


		 ![](../../../Event_Image.gif)
		 [StartupSetLoaded](dhtmlCommon.chm::/Classes/PP/ResourceManager/ResourceManager.StartupSetLoaded.htm)
		 Событие StartupSetLoaded
		 генерируется после загрузки всех файлов ресурсов для текущего
		 языка.


## Свойства, унаследованные от класса [Object](../../Object/Object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](../../Object/Object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP](../../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
