# Navigator.Discuss

Navigator.Discuss
-


# Navigator.Discuss


## Синтаксис


Discuss: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Discuss наступает при выборе одного из пунктов раскрывающегося меню, которое вызывается при нажатии на кнопку ленты «Поделиться».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [Navigator](../../../Components/Metabase/Navigator/Navigator.htm) с наименованием «nav» (см. «[Пример создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события Discuss:


nav.Discuss.add(function () { alert("Поделиться") });


После выполнения примера при нажатии на кнопку «ОК» в диалоге для смены пароля на экран будет выведено сообщение «Поделиться».


См. также:


[Navigator](Navigator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
