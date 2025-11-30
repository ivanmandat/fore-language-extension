# Navigator.ObjectListObjectsLoaded

Navigator.ObjectListObjectsLoaded
-


# Navigator.ObjectListObjectsLoaded


## Синтаксис


ObjectListObjectsLoaded: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ObjectListObjectsLoaded
 наступает при загрузке списка объектов репозитория.


## Комментарии


Список объектов репозитория загружается при нажатии на кнопку ленты
 «Обновить».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события ObjectListObjectsLoaded:


nav.ObjectListObjectsLoaded.add(function
 ()


{


    console.log("Доступные типы объектов: "
 + nav.getObjectListFilters())


})


После выполнения примера при нажатии на кнопку ленты «Обновить» в консоль
 браузера будет выведено сообщение:


Доступные типы объектов: 1281,1282,1283,1284,1285,1287,1286,5888,2823,2561,2562,2827,8448,5123


После двоеточия - элементы перечисления PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm)
 - типы объектов, которые отображаются в навигаторе.


См. также:


[Navigator](Navigator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
