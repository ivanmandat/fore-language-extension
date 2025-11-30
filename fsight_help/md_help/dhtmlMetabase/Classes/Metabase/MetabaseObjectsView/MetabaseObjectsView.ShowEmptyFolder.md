# MetabaseObjectsView.ShowEmptyFolder

MetabaseObjectsView.ShowEmptyFolder
-


# MetabaseObjectsView.ShowEmptyFolder


## Синтаксис


ShowEmptyFolder : Boolean;


## Описание


Свойство ShowEmptyFolder определяет
 признак отображения пустых папок.


## Комментарии


Содержание объектов учитывает заданный фильтр [MetabaseObjectsView.Filter](MetabaseObjectsView.Filter.htm).


Значение свойства устанавливается из JSON и с помощью метода setShowEmptyFolder,
 а возвращается с помощью метода getShowEmptyFolder.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Получим представление объектов
view = navbox.getObjectsView();
// Получим признак отображения пустых папок
view.getShowEmptyFolder();
// -> true
В результате выполнения примера был получен признак отображения пустых
 папок.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
