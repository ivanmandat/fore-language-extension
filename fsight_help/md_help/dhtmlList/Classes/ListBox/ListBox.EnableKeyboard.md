# ListBox.EnableKeyboard

ListBox.EnableKeyboard
-


# ListBox.EnableKeyboard


## Синтаксис


EnableKeyboard: Boolean;


## Описание


Свойство EnableKeyboard определяет
 возможность выделять элементы списка при помощи клавиш UP, DOWN.


## Комментарии


Если для свойства установлено значение true,
 значит элементы списка могут выделяться при помощи клавиатуры. Значение
 true установлено по умолчанию.


## Пример


Для выполнения примера создадим компонент [ListBox](../../Components/ListBox/ListBox.htm)
 (см."[Пример
 создания компонента ListBox](../../Components/ListBox/Example_ListBox.htm)") c наименованием «listbox». Для
 того чтобы отключить возможность выбора элемента с клавиатуры используйте
 свойство EnableKeyboard:


listbox.setEnableKeyboard(false);


После выполнения примера выделять элемент списка будет возможно только
 по щелчку мыши.


См. также:


[ListBox](ListBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
