# Navigator.ObjectListModeChanged

Navigator.ObjectListModeChanged
-


# Navigator.ObjectListModeChanged


## Синтаксис


ObjectListModeChanged:  function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ObjectListModeChanged
 наступает при изменении способа отображения значков в списке объектов.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события ObjectListModeChanged:


nav.ObjectListModeChanged.add(function () { alert("Способ
 отображения изменен") });


После выполнения примера при изменении способа отображения значков в
 списке объектов на экран будет выведено сообщение «Способ отображения
 изменен».


См. также:


[Navigator](Navigator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
