# MenuItem.CheckedChanged

MenuItem.CheckedChanged
-


# MenuItem.CheckedChanged


## Синтаксис


CheckedChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие CheckedChanged наступает при установке/снятии [флажка](../../Components/CheckBox/CheckBox.htm) или [переключателя](../../Components/RadioButton/RadioButton.htm).


## Комментарии


Событие актуально, если для свойства [MenuItem.Checked](MenuItem.Checked.htm) задано значение, то есть для элемента меню настроен [переключатель](../../Components/RadioButton/RadioButton.htm) или [флажок](../../Components/CheckBox/CheckBox.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [Menu](../../Components/Menu/Menu.htm) с дочерним элементом «item2», для которого установлено значение свойства [Checked](MenuItem.Checked.htm) (true или false) (см. «[Пример создания компонента Menu](../../Components/Menu/Menu_example.htm)»). Добавим обработчик события CheckedChanged:


item2.CheckedChanged.add(function (sender, args)


   {


       menu.setShowIcons(false);


       item2.setEnabled(false)


   });


После выполнения примера при выборе элемента с наименованием «item2» будет скрыта левая часть компонента [Menu](../../Components/Menu/Menu.htm) и элемент меню с наименованием «item2» будет недоступным для пользователя:


![](../../Components/Menu/Menu6.gif)


См. также:


[MenuItem](MenuItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
