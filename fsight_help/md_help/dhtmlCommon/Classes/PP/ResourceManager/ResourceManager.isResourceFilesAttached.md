# ResourceManager.isResourceFilesAttached

ResourceManager.isResourceFilesAttached
-


# ResourceManager.isResourceFilesAttached


## Синтаксис


isResourceFilesAttached(cultureInfo: [PP.CultureInfo](../CultureInfo/CultureInfo.htm));


## Параметры


cultureInfo. Язык и региональные параметры. Необязательный параметр, по умолчанию используется текущий язык и параметры, получаемые с помощью метода [PP.getCurrentCulture](../PP.getCurrentCulture.htm).


## Описание


Метод isResourceFilesAttached проверяет, подключены ли ресурсные файлы для указанной локали.


## Комментарии


Если файлы ресурсов для указанной локали подключены, то метод возвращает элемент <script> c ссылкой на все добавленные файлы ресурсов в виде одной строки. Иначе метод возвращает значение null.


## Пример


Пример использования метода приведён на странице описания свойства [ResourceManager.RootResourcesFolder](ResourceManager.RootResourcesFolder.htm).


См. также:


[ResourceManager](ResourceManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
