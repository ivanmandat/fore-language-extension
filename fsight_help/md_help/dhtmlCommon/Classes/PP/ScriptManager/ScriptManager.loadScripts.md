# ScriptManager.loadScripts

ScriptManager.loadScripts
-


# ScriptManager.loadScripts


## Синтаксис


PP.ScriptManager.loadScripts(url: Array, callback: PP.Delegate|function, global: Boolean);


## Параметры


url. Массив URL-адресов сценариев;


callback. Возвратная функция, выполняемая после загрузки сценариев;


global. Признак использования глобальной очереди для загрузки сценариев. Если параметр равен значению true, то сценарии будут загружены только после загрузки предыдущих сценариев, иначе - не будут.


## Описание


Метод loadScripts загружает массив JS-сценариев.


## Комментарии


Метод возвращает значение true, если был загружен хотя бы один сценарий, и значение false, если не был загружен ни один из сценариев.


## Пример


Пример использования приведён на странице описания метода [ScriptManager.loadScript](ScriptManager.loadScript.htm).


См. также:


[ScriptManager](ScriptManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
