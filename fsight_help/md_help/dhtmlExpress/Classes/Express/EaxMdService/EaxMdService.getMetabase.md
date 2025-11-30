# EaxMdService.getMetabase

EaxMdService.getMetabase
-


**


# EaxMdService.getMetabase


## Синтаксис


getMetabase();


## Описание


Метод getMetabase** возвращает
 репозиторий.


## Комментарии


Метод возвращает объект класса PP.Mb.[Metabase](dhtmlMetabase.chm::/Classes/Metabase/Metabase/Metabase.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим идентификатор репозитория:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим идентификатор репозитория
console.log("Идентификатор репозитория: " + eaxMdService.getMetabase().getId());

В результате выполнения примера в консоли браузера был выведен идентификатор
 репозитория, с которым соединен текущий экспресс-отчет:


Идентификатор репозитория: WAREHOUSE


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
