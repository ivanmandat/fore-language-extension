# Конструктор ActiveMenuItem

Конструктор ActiveMenuItem
-


# Конструктор ActiveMenuItem


## Синтаксис


ActiveMenuItem (settings);


## Параметры


settings. JSON-объект со значениями
 свойств класса.


## Описание


Конструктор ActiveMenuItem создает
 экземпляр класса [ActiveMenuItem](ActiveMenuItem.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Menu](../../Components/Menu/Menu.htm) с наименованием «menu»
 (см. «[Пример создания
 компонента Menu](../../Components/Menu/Menu_example.htm)»). Добавим пункт меню - экземпляр класса ActiveMenuItem:


menu.insertItem(new
 PP.Ui.ActiveMenuItem(


{


    Content: "Active
 menu item"


}), 1)


После выполнения примера в меню на первом месте будет размещен новый
 элемент с наименованием «Active menu item». При наведении на него курсора
 элемент не подсвечивается. При нажатии на элемент меню не закрывается.


[ActiveMenuItem](ActiveMenuItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
