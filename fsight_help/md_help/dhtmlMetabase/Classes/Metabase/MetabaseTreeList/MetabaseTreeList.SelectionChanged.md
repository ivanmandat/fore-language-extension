# MetabaseTreeList.SelectionChanged

MetabaseTreeList.SelectionChanged
-


# MetabaseTreeList.SelectionChanged


## Синтаксис


SelectionChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SelectionChanged наступает
 после изменения отметки в дереве объектов репозитория.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [MetabaseTreeList](../../../Components/Metabase/MetabaseTreeList/MetabaseTreeList.htm)
 с наименованием «list1» (см. «[Пример
 создания компонента MetabaseTreeList](../../../Components/Metabase/MetabaseTreeList/MetabaseTreeList_Example.htm)»). Добавим обработчик события
 SelectionChanged:


        list1.SelectionChanged.add(function (sender, args) {
            list1.setMultiSelect(false);
            if (list1.getSelectedObjects()[0].getIsOpened() == true) {
                console.log("Объект открыт")
            }
            else console.log("Объект закрыт")
        })

После выполнения примера при изменении отметки в дереве будет отключена
 возможность множественной отметки. При выделении элемента в консоль браузера
 будет выдаваться сообщение «Объект открыт», если для свойства IsOpened
 выделенного объекта установлено значение true.
 Иначе будет выдаваться сообщение «Объект закрыт».


См. также:


[MetabaseTreeList](MetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
