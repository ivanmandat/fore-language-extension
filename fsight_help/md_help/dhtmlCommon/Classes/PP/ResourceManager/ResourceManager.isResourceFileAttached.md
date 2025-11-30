# ResourceManager.isResourceFileAttached

ResourceManager.isResourceFileAttached
-


# ResourceManager.isResourceFileAttached


## Синтаксис


isResourceFileAttached(resourceName: String);


## Параметры


resourceName. Строка в формате «res_<Наименование локали>».


## Описание


Метод isResourceFileAttached проверяет, подключён ли файл ресурсов для указанной локали.


## Комментарии


Если файл ресурсов для указанной локали подключён, то метод возвращает элемент <script> c ссылкой на все добавленные файлы ресурсов в виде одной строки. Иначе метод возвращает значение null.


## Пример


Пример использования метода приведён на странице описания свойства [ResourceManager.RootResourcesFolder](ResourceManager.RootResourcesFolder.htm).


См. также:


[ResourceManager](ResourceManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
