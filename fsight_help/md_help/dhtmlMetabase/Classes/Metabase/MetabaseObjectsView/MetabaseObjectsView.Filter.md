# MetabaseObjectsView.Filter

MetabaseObjectsView.Filter
-


# MetabaseObjectsView.Filter


## Синтаксис


addObject : Array of PP.Mb.MetabaseObjectClass;


## Описание


Свойство Filter определяет перечень
 объектов, которые будут отображены в компоненте.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setDisplayMode,
 а возвращается с помощью метода getDisplayMode.


Свойство содержит перечисление, с ключами из перечисления PP.Mb.MetabaseObjectClass.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)».


// Получим представление объектов
view = navbox.getObjectsView();
// Настроим фильтр объектов
view.setFilter([1281, 2827, 2562]);
// Обновим
view.refresh();
В результате выполнения примера было отображено только 3 типа объектов.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
