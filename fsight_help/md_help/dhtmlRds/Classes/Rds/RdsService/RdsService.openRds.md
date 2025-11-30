# RdsService.openRds

RdsService.openRds
-


# RdsService.openRds


## Синтаксис


openRds(keyOrDict: String|[PP.Rds.Dictionary](../Dictionary/Dictionary.htm), params: Object, forEdit: Boolean, reOpen: Boolean, callback: function|PP.Delegate);


## Параметры


keyOrDict. Ключ открываемого справочника НСИ или объект справочника;


params. Параметры открытия;


forEdit. Признак открытия справочника на редактирование его структуры. Если параметр равен значению true, то после открытия справочника изменение его структуры будет доступно, иначе - недоступно;


reOpen. Признак переоткрытия справочника. Если параметр равен значению true, то справочник будет перекрыт, обновятся только его элементы, иначе - он будет загружен полностью;


callback. Возвратная функция.


## Описание


Метод openRds открывает справочник НСИ.


## Пример


Пример использования метода приведён на странице «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)».


См. также:


[RdsService](RdsService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
