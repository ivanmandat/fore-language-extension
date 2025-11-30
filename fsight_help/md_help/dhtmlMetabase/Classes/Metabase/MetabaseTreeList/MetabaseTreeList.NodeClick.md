# MetabaseTreeList.NodeClick

MetabaseTreeList.NodeClick
-


# MetabaseTreeList.NodeClick


## Синтаксис


NodeClick: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие NodeClick наступает при нажатии на вершину дерева.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [MetabaseTreeList](../../../Components/Metabase/MetabaseTreeList/MetabaseTreeList.htm) с наименованием «list1» (см. «[Пример создания компонента MetabaseTreeList](../../../Components/Metabase/MetabaseTreeList/MetabaseTreeList_Example.htm)»). Добавим обработчик события NodeClick:


        list1.NodeClick.add(function (sender, args)
        {
            list1.setMultiSelect(false);
            console.log(list1.getPathToRoot(list1.getSelectedKeys()[0], false))
        })

После выполнения примера при нажатии на вершину дерева будет отключена возможность множественного выбора и в консоль браузера будет выведен массив объектов репозитория, в которые вложен выделенный объект.


См. также:


[MetabaseTreeList](MetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
