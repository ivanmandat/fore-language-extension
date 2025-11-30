# NavigatorRibbon.ChangedPassword

NavigatorRibbon.ChangedPassword
-


# NavigatorRibbon.ChangedPasswordClick


## Синтаксис


ChangedPasswordClick: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ChangedPasswordClick
 наступает после заполнения полей нажатия кнопки «OK»
 в диалоге для смены пароля.


## Комментарии


Диалог смены пароля вызывается при помощи команды «Сервис
 > Сменить пароль...».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события ChangedPasswordClick для [ленты
 инструментов навигатора](NavigatorRibbon.htm):


            var ribbon = nav._Ribbon;
            ribbon.ChangedPasswordClick.add(function ()
                {
                    cpd = ribbon.[getChangePassDialog](NavigatorRibbon.getChangePassDialog.htm)();
                    console.log("Новый пароль: " + cpd.getNewPass() + "; Старый пароль: " + cpd.getOldPass() + "; Подтверждение пароля: " + cpd.getConfirmPass())
                });

После выполнения примера откройте диалог для смены пароля. Заполните
 все поля диалога и нажмите кнопку «OK». В консоль браузера будет выведено
 сообщение, содержащее введенные данные, например:


Новый пароль: new; Старый пароль: old; Подтверждение
 пароля: new


См. также:


[NavigatorRibbon](NavigatorRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
