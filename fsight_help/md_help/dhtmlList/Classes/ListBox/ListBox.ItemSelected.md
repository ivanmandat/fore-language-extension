# ListBox.ItemSelected

ListBox.ItemSelected
-


# ListBox.ItemSelected


## Синтаксис


ItemSelected: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ItemSelected наступает при выделении элемента списка.


## Пример


Для выполнения примера создайте компонент [ListBox](../../Components/ListBox/ListBox.htm) (см. «[Пример создания компонента ListBox](../../Components/ListBox/Example_ListBox.htm)») с наименованием «listbox». Добавим обработчик события ItemSelected:


listbox.ItemSelected.add(function(sender, args)


{


    confirm(listbox.getSelectedItem().getContent());


});


После выполнения примера на html-странице будет размещен список элементов, изображенный на странице «[Пример создания компонента ListBox](../../Components/ListBox/Example_ListBox.htm)». При выделении элементов списка на экран будет выводиться сообщение c содержимым элемента.


См. также:


[ListBox](ListBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
