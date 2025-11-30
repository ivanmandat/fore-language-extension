# Navigator.PasswordChanged

Navigator.PasswordChanged
-


# Navigator.PasswordChanged


## Синтаксис


PasswordChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PasswordChanged наступает
 после смены пароля.


## Комментарии


Событие наступает после нажатия на кнопку «OK» в диалоге для смены пароля.
 Чтобы вызвать диалог для смены пароля, выполните команду главного меню
 «Сервис > Сменить пароль».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события PasswordChanged:


nav.PasswordChanged.add(function () { alert("Пароль
 изменен") });


После выполнения примера при нажатии на кнопку «ОК» в диалоге для смены
 пароля на экран будет выведено сообщение «Пароль изменен».


См. также:


[Navigator](Navigator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
