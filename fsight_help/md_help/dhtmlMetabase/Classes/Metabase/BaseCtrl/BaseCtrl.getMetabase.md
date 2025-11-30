# BaseCtrl.getMetabase

BaseCtrl.getMetabase
-


# BaseCtrl.getMetabase


## Синтаксис


getMetabase ()


## Описание


Метод getMetabase возвращает
 репозиторий, который используется BI-инструментом.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](dhtmlDim.chm::/Components/Metabase/DimTree/DimTree.htm)
 с наименованием «dimTree» и [измерения](dhtmlDim.chm::/Classes/Metabase/DimSource/DimSource.htm)
 с наименованием «dim» (см. «[Пример
 создания компонента DimTree](dhtmlDim.chm::/Components/Metabase/DimTree/DimTree_Example.htm)»). Выведем в консоль браузера информацию
 о веб-сервисе:


dimTree.getDimTreeCtrl().getMetabase().getStatus(function (sender, args)


{


    var
 res = JSON.parse(args.ResponseText);


    console.log(res);


})


После выполнения примера в консоль браузера будет выведена [информация
 о веб-сервисе](PPSOMService.chm::/Operations/Repository/GetStatus.htm).


[BaseCtrl](BaseCtrl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
