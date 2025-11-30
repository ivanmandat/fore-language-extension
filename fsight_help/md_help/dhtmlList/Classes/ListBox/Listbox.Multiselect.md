# Listbox.MultiSelect

Listbox.MultiSelect
-


# Listbox.Multiselect


## Синтаксис


MultiSelect: Boolean


## Описание


Свойство MultiSelect определяет, доступен ли множественный выбор элементов списка.


## Комментарии


Если установлено значение true, то доступен множественный выбор. По умолчанию установлено значение false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [ListBox](../../Components/ListBox/ListBox.htm) с наименованием «listbox» (см. «[Пример создания компонента ListBox](../../Components/ListBox/Example_ListBox.htm)»). Включим возможность множественной отметки и добавим обработчик события [ListBox.ItemDeselected](ListBox.ItemDeselected.htm):


listbox.setMultiSelect(true);


listbox.ItemDeselected.add(function (sender, args)


{


    args.ListItem.setContent("deselected");


    alert(listbox.getSelectedItems());


})


После выполнения примера будет доступен множественный выбор элементов списка. При снятии отметки с выбранного элемента, его текст изменится на «deselected», а на экран будет выведено сообщение с наименованиями выделенных элементов.


См. также:


[ListBox](ListBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
