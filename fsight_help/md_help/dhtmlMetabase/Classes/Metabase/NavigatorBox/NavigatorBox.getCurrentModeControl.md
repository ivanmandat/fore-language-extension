# NavigatorBox.getCurrentModeControl

NavigatorBox.getCurrentModeControl
-


# NavigatorBox.getCurrentModeControl


## Синтаксис


getCurrentModeControl();


## Описание


Метод getCurrentModeControl возвращает
 класс представления объектов навигатора.


## Комментарии


Представление объектов возвращается одним из классов:


	- [MetabaseObjectsIconView](../MetabaseObjectsIconView/MetabaseObjectsIconView.htm).
	 Объекты представлены в виде значков;


	- [MetabaseObjectsListView](../MetabaseObjectsListView/MetabaseObjectsListView.htm).
	 Объекты представлены в виде таблицы.


## Пример


Для выполнения примера разместите на html-странице компонент [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «mb» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»). Получим класс представления объектов
 навигатора:


navbox.getCurrentModeControl();
После выполнения примера в консоль браузера будет выведен класс «[MetabaseObjectsListView](../MetabaseObjectsListView/MetabaseObjectsListView.htm)».


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
