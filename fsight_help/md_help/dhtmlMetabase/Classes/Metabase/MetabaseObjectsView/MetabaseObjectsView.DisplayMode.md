# MetabaseObjectsView.DisplayMode

MetabaseObjectsView.DisplayMode
-


# MetabaseObjectsView.DisplayMode


## Синтаксис


DisplayMode : PP.Mb.Ui.[MetabaseDisplayMode](../../../Enums/MetabaseDisplayMode.htm);


## Описание


Свойство DisplayMode определяет
 режим отображения имени объектов репозитория.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setDisplayMode,
 а возвращается с помощью метода getDisplayMode.


По умолчанию содержит значение Both.


Допустимые значения содержатся в перечислении [PP.Mb.Ui.MetabaseDisplayMode](../../../Enums/MetabaseDisplayMode.htm):


	- Names. Только имя;


	- Idents. Только идентификатор;


	- Both. Имя и идентификатор.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)».


// Получим представление объектов
view = navbox.getObjectsView();
// Включим режим отображения только идентификаторов
view.setDisplayMode(PP.Mb.Ui.MetabaseDisplayMode.Idents);
// Обновим объекты
view.refresh();
В результате выполнения примера был включен режим отображения только
 идентификаторов объектов.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
