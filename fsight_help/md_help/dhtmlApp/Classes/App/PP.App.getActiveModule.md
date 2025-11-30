# PP.App.getActiveModule

PP.App.getActiveModule
-


# PP.App.getActiveModule


## Синтаксис


getActiveModule(moduleName: String);


## Параметры


moduleName. Наименование модуля.
 Необязательный параметр. Если значение не указано, то метод возвращает
 настройки модуля, тип которого сохранён в сессии.


## Описание


Метод getActiveMode возвращает
 настройки текущего модуля системы, либо его настройки по указанному имени.


## Комментарии


Метод возвращает JSON-объект со следующими полями: Data - тип модуля,
 определяемый перечислением [PP.App.ModuleType](../../Enums/ModuleType.htm),
 Name - его наименование, ResourceKey - ключ ресурсов для отображения наименования
 модуля, Url - адрес модуля, Visible - признак видимости модуля, определяемый
 перечислением [PP.ModuleVisibilityMode](dhtmlCommon.chm::/Enums/ModuleVisibilityMode.htm).


## Пример


Использование метода приведено в примере для [PP.App.getImagePath](PP.App.getImagePath.htm).


См. также:


[PP.App](../PP.App.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
