# Navigator.PasswordChanging

Navigator.PasswordChanging
-


# Navigator.PasswordChanging


## Синтаксис


PasswordChanging: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PasswordChanging наступает
 при смене пароля.


## Комментарии


Событие наступает при нажатии на кнопку «OK» в диалоге для смены пароля.
 Чтобы вызвать диалог для смены пароля, выполните команду главного меню
 «Сервис > Сменить пароль».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события PasswordChanging:


nav.PasswordChanging.add(function () { alert("Пароль
 изменяется") });


После выполнения примера при нажатии на кнопку «ОК» в диалоге для смены
 пароля на экран будет выведено сообщение «Пароль изменяется».


См. также:


[Navigator](Navigator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
