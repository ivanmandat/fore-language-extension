# NavigatorBox.createShortcut

NavigatorBox.createShortcut
-


# NavigatorBox.createShortcut


## Синтаксис


createShortcut();


## Описание


Метод createShortcut создает
 ярлык для выделенного объекта.


## Комментарии


Ярлык создается в той же папке, где расположен объект. Ярлыку присваивается
 идентификатор «SHORTCUT_TO_<идентификатор объекта>».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Создадим ярлык для выделенного в
 списке объекта:


//возвращаем дерево
 папок и список объектов


navbox = nav._navigatorBox


//создаем ярлык для
 выделенного объекта


navbox.createShortcut();


//обновляем дерево
 папок и список объектов


navbox.refresh();


После выполнения примера будет создан ярлык для выделенного объекта.


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
