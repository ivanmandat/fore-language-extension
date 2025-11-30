# PP.App.getMetabase

PP.App.getMetabase
-


# PP.App.getMetabase


## Синтаксис


getMetabase(cfg: Object);


## Параметры


cfg. Конфигурация репозитория.
 Представляет собой JSON-объект, со следующими полями: Id
 - идентификатор репозитория, ConnectionOdId
 - моникёр подключения к репозиторию, PPServiceUrl
 - адрес сервиса, UserCreds - объект
 с аутентификационными данными пользователя. В качестве параметра может
 использоваться значение, возвращаемое методом [PP.App.getMetabaseConfig](PP.App.getMetabaseConfig.htm).


## Описание


Метод getMetabase возвращает
 объект [репозитория](dhtmlMetabase.chm::/Classes/Metabase/Metabase/Metabase.htm).


## Комментарии


Метод возвращает объект типа [PP.Mb.Metabase](dhtmlMetabase.chm::/Classes/Metabase/Metabase/Metabase.htm).


См. также:


[PP.App](PP.App.getMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
