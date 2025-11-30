# MetabaseTreeList.NodeDblClick

MetabaseTreeList.NodeDblClick
-


# MetabaseTreeList.NodeDblClick


## Синтаксис


NodeDblClick: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие NodeDblClick наступает
 при двойном щелчке по вершине дерева.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [MetabaseTreeList](../../../Components/Metabase/MetabaseTreeList/MetabaseTreeList.htm)
 с наименованием «list1» (см. «[Пример
 создания компонента MetabaseTreeList](../../../Components/Metabase/MetabaseTreeList/MetabaseTreeList_Example.htm)»). Добавим обработчик события
 NodeDblClick:


        list1.NodeDblClick.add(function (sender, args)
        {
            list1.setMultiSelect(false);
            obj = list1.getMbObjectByKey(list1.getSelectedKeys());
            if (obj.[getReadOnly](../Object/Object.ReadOnly.htm)() == true) alert("Объект предназначен только для чтения")
            else alert("Редактировать объект?")
        })

После выполнения примера при двойном щелчке по вершине дерева будет отключена
 возможность множественного выбора элементов и на экран будет выдаваться
 сообщение «Объект предназначен только для чтения», если для свойства ReadOnly установлено значение true, иначе - сообщение «Редактировать
 объект?».


См. также:


[MetabaseTreeList](MetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
