# MetabaseObjectsListView.getSelectedObjects

MetabaseObjectsListView.getSelectedObjects
-


# MetabaseObjectsListView.getSelectedObjects


## Синтаксис


getSelectedObjects();


## Описание


Метод getSelectedObjects возвращает
 выделенные объекты репозитория.


## Комментарии


Метод возвращает массив объектов типа [PP.Mb.Object](../Object/Object.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/MetabaseObjectsListView.htm)
 с наименованием «list» (см. «[Пример
 создания компонента MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/Example_MetabaseObjectsListView.htm)»). Выделите объекты, которые
 должны остаться в компоненте.


// Уберем текущий фокус
list.removeFocus();
// Оставим только выделенные объекты
list.loadFrom(list.getSelectedObjects());
В результате выполнения примера остались только выделенные объекты.


См. также:


[MetabaseObjectsListView](MetabaseObjectsListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
