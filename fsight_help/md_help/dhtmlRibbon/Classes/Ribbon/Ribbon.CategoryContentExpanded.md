# Ribbon.CategoryContentExpanded

Ribbon.CategoryContentExpanded
-


# Ribbon.CategoryContentExpanded


## Синтаксис


CategoryContentExpanded: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие CategoryContentExpanded наступает при разворачивании содержимого вкладок.


## Комментарии


Разворачивание содержимого вкладок происходит при нажатии на кнопку , расположенную в верхнем правому углу ленты.


## Пример


Для выполнения примера необходимо наличие на html-странице [ленты приложения](../../Components/Ribbon/Ribbon.htm) с наименованием «ribbon» (см.«[Пример создания компонента Ribbon](../../Components/Ribbon/Example_Ribbon.htm)»), содержащей, как минимум, одну вкладку. Добавим обработчик события CategoryContentExpanded.


ribbon.CategoryContentExpanded.add(function (sender, args)


       {


               ribbon.getHideButton().dispose()


       })


После выполнения примера при разворачивании содержимого панели будет удалена кнопка сворачивания.


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
