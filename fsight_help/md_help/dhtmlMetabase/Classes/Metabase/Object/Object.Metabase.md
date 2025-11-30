# Object.Metabase

Object.Metabase
-


# Object.Metabase


## Синтаксис


Metabase: [PP.Mb.Metabase](../Metabase/Metabase.htm);


## Описание


Свойство Metabase определяет
 репозиторий, в котором хранится объект.


## Комментарии


Значение свойства задается в конструкторах, а возвращается с помощью
 метода getMetabase.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](dhtmlDim.chm::/Components/Metabase/DimTree/DimTree.htm)
 с наименованием «dimTree» с источником «dim» и сервиса для работы с измерениями
 «dimSrv» (см. «[Пример
 создания компонента DimTree](dhtmlDim.chm::/Components/Metabase/DimTree/DimTree_Example.htm)»). Добавим обработчик события
 [PPService.Executed](../PPService/PPService.Executed.htm):


dimSrv.Executed.add(function ()


{


    console.log("идентификатор репозитория: "
 + dim.getMetabase().getId() + "; Od
 идентификатор объекта: " + dim.getOdId().id + ";
 url сервиса: " + dim.getPPService()._PPServiceUrl)


})


После выполнения любого запроса к сервису в консоль браузера будут выдаваться
 данные об измерении: идентификатор репозитория, в котором оно содержится,
 Od идентификатор объекта и url сервиса.


См. также:


[Object](Object.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
