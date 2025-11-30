# NavigatorBox.ObjectListContextMenu

NavigatorBox.ObjectListContextMenu
-


# NavigatorBox.ObjectListContextMenu


## Синтаксис


ObjectListContextMenu: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ObjectListContextMenu
 наступает при вызове контекстного меню для объекта в списке.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»). Добавим обработчик события ObjectListContextMenu:


     navbox.ObjectListContextMenu.add(function ()


        {


            navbox.[setShowNavigationPanel](NavigatorBox.ShowNavigationPanel.htm)(false);


            navbox.[openParentFolder](NavigatorBox.openParentFolder.htm)();


        });


После выполнения примера при вызове контекстного меню для объекта из
 списка будет скрыто дерево папок и открыта родительская папка выбранного
 объекта.


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
