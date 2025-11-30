# Ribbon.CategoryContentCollapsed

Ribbon.CategoryContentCollapsed
-


# Ribbon.CategoryContentCollapsed


## Синтаксис


CategoryContentCollapsed: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие CategoryContentCollapsed наступает при сворачивании содержимого вкладок.


## Комментарии


Вкладки сворачиваются при нажатии на кнопку ![](../../Components/Ribbon/Ribbon4.gif), расположенную в правом верхнем углу ленты приложения.


## Пример


Для выполнения примера необходимо наличие на html-странице [ленты приложения](../../Components/Ribbon/Ribbon.htm) с наименованием «ribbon» (см.«[Пример создания компонента Ribbon](../../Components/Ribbon/Example_Ribbon.htm)»), содержащей, как минимум, одну вкладку. Добавим обработчик события CategoryContentCollapsed.


ribbon.CategoryContentCollapsed.add(function (sender, args)


       {


           ribbon.getItems()[0].setCaption("Collapsed")


       });


После выполнения примера при сворачивании содержимого вкладок заголовок первой вкладки поменяется на «Collapsed».


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
