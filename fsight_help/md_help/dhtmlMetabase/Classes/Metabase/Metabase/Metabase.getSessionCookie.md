# Metabase.getSessionCookie

Metabase.getSessionCookie
-


# Metabase.getSessionCookie


## Синтаксис


getSessionCookie() : String;


## Описание


Метод getSessionCookie возвращает
 идентификационный номер cookie.


## Комментарии


Метод возвращает значение вида: "C1".


## Пример


Для выполнения примера необходимо наличие любого подключения к метабазе,
 например используя компонента [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим текущий номер
 cookie:


// Получим объект метабазы
metabase = eaxMdService.getMetabase();
// Получим идентификационный номер cookie
metabase.getSessionCookie();

В результате выполнения примера был получен идентификационный номер
 cookie текущей сессии.


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
