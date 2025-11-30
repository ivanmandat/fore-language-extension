# Ribbon.CategorySelected

Ribbon.CategorySelected
-


# Ribbon.CategorySelected


## Синтаксис


CategorySelected: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие CategorySelected наступает при выборе вкладки.


## Пример


Для выполнения примера необходимо наличие на html-странице [ленты приложения](../../Components/Ribbon/Ribbon.htm) с наименованием «ribbon» (см.«[Пример создания компонента Ribbon](../../Components/Ribbon/Example_Ribbon.htm)»), содержащей, как минимум, одну вкладку. Добавим обработчик события CategorySelected.


ribbon.CategorySelected.add(function (sender, args)


     {


             ribbon.getSelectedItem().setCaption("Is Selected")


     })


После выполнения примера при выборе вкладки (при нажатии по ее заголовку) будет установлен заголовок вкладки «Is Selected».


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
