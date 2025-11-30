# MetabaseObjectsView.ShowOnlyContainers

MetabaseObjectsView.ShowOnlyContainers
-


# MetabaseObjectsView.ShowOnlyContainers


## Синтаксис


ShowOnlyContainers : Boolean;


## Описание


Свойство ShowOnlyContainers
 определяет режим отображения только контейнеров.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setShowOnlyContainers,
 а возвращается с помощью метода getShowOnlyContainers.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Получим представление объектов
view = navbox.getObjectsView();
// Установим отображение только контейнеров
view.setShowOnlyContainers(true);
В результате выполнения примера был установлен режим отображения только
 контейнеров.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
