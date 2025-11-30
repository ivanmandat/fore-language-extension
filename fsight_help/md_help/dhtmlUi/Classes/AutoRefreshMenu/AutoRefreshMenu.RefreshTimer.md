# AutoRefreshMenu.RefreshTimer

AutoRefreshMenu.RefreshTimer
-


# AutoRefreshMenu.RefreshTimer


## Синтаксис


RefreshTimer: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RefreshTimer генерируется
 при срабатывании таймера периодического обновления.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Добавим обработчики
 событий RefreshTimer и RefreshStateChanged,
 вызовем события:


// По шагам получим меню автообновления отчета
ribbonView = expressBox.getRibbonView();
control = ribbonView.getControl();
auReMenuControl = control.getControlById("MainAutoRefreshButton");
autoRefreshMenu = auReMenuControl.getMenu();
// Обработаем событие RefreshStateChanged
autoRefreshMenu.RefreshStateChanged.add(function (sender, args) { console.log("Изменилось состояние автообновления") });
// Обработаем событие RefreshTimer
autoRefreshMenu.RefreshTimer.add(function (sender, args) { console.log("Сработал таймер периодического обновления") });
// Зададим параметры периодического обновления - обновлять каждые 2 секунды
autoRefreshMenu.setPeriod(2, PP.Mb.TimeUnits.Seconds);
// Отключим автообновление при смене отметки
autoRefreshMenu.setMarkChangedRefresh(false);
// -> Изменилось состояние автообновления
// Запустим таймер периодического обновления
autoRefreshMenu.startPeriodicalTimer();
// -> Сработал таймер периодического обновления
// Отключим таймер периодического обновление
autoRefreshMenu.stopPeriodicalTimer();
В результате выполнения примера будут добавлены обработчики событий
 RefreshTimer и RefreshStateChanged.
 Будет настроен таймер периодического обновления, отключено автообновление
 при смене отметки. События будут вызваны, в окно консоли будут выведены
 сообщения «Изменилось состояние автообновления» и «Сработал таймер периодического
 обновления».


См. также:


[AutoRefreshMenu](AutoRefreshMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
