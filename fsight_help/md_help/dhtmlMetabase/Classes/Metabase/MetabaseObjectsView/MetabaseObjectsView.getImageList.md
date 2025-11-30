# MetabaseObjectsView.getImageList

MetabaseObjectsView.getImageList
-


# MetabaseObjectsView.getImageList


## Синтаксис


getImageList() : [PP.ImageList](dhtmlCommon.chm::/Classes/ImageList/ImageList.htm);


## Описание


Метод getImageList возвращает
 объект спрайта.


## Комментарии


Спрайт - набор картинок в одном файле.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Получим представление объектов
view = navbox.getObjectsView();
// Получим спрайт
view.getImageList();
// -> PP.ImageList {_IconHeight: 16, _IconWidth: 16, _Source: "../Build/img/metabase/GlbClsImg16.png", _IsRetinaAvailable: false, _Image: null…}
В результате выполнения примера был получен объект со спрайтом.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
