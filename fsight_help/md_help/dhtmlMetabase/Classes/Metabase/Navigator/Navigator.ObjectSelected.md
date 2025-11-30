# Navigator.ObjectSelected

Navigator.ObjectSelected
-


# Navigator.ObjectSelected


## Синтаксис


ObjectSelected:  function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ObjectSelected наступает
 при изменении отметки в списке объектов.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события ObjectSelected:


nav.ObjectSelected.add(function () { alert("Выделен
 объект") });


После выполнения примера при изменении отметки в списке объектов на
 экран будет выведено сообщение «Выделен объект».


См. также:


[Navigator](Navigator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
