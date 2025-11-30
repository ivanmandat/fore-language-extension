# ImageList.getIcon

ImageList.getIcon
-


# ImageList.getIcon


## Синтаксис


getIcon (rowIndex, columnIndex);


## Параметры


rowIndex. Индекс строки.


columnIndex. Индекс столбца.


## Описание


Метод getIcon возвращает верхнюю
 и левую координаты пиктограммы по индексу строки и столбца [списка](dhtmlList.chm::/components/listbox/listbox.htm).


## Пример


Для выполнения примера создадим компонент [ListBox](dhtmlList.chm::/components/listbox/listbox.htm)
 с наименованием «listbox2», содержащий невизуальный компонент [ImageList](dhtmlUi.chm::/components/imagelist/imagelist.htm)
 с наименованием «imagelist2» (см. «[Конструктор
 IconListItem](dhtmlUi.chm::/Classes/iconlistitem/constructor_iconlistitem.htm)»). Добавим обработчик события [ItemSelected](dhtmlList.chm::/Classes/listbox/listbox.itemselected.htm),
 с помощью которого на экран будет выводиться сообщение с координатами
 пиктограммы выделенного элемента списка:


listbox2.ItemSelected.add(function(sender, args)
 {


        alert(imagelist2.getIcon(listbox2.getSelectedItem().getRowIndex(),listbox2.getSelectedItem().getColumnIndex()));


    });


После выполнения примера при выборе любого элемента созданного списка
 на экран будет выводиться сообщение с верхней и левой координатой пиктограммы.


См. также:


[ImageList](ImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
