# MetabaseObjectsView.FolderTreeFilter

MetabaseObjectsView.FolderTreeFilter
-


# MetabaseObjectsView.FolderTreeFilter


## Синтаксис


FolderTreeFilter : Array of PP.Mb.MetabaseObjectClass;


## Описание


Свойство FolderTreeFilter определяет
 фильтр для контейнеров.


## Комментарии


Свойство содержит перечисление, с ключами из перечисления PP.Mb.MetabaseObjectClass.
 Указанные типы объектов будут отображены.


Значение свойства устанавливается из JSON и с помощью метода setFolderTreeFilter,
 а возвращается с помощью метода getFolderTreeFilter.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)».


// Получим представление объектов
view = navbox.getObjectsView();
// Настроим фильтр контейнеров
view.setFolderTreeFilter([0]);
// Обновим
view.refresh();
В результате выполнения примера был настроен фильтр, отображающий папки.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
