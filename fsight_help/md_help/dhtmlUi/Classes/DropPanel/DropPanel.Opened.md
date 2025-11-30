# DropPanel.Opened

DropPanel.Opened
-


# DropPanel.Opened


## Синтаксис


Opened: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Opened наступает после открытия компонента.


## Пример


Для выполнения примера создайте компонент [DropPanel](../../Components/DropPanel/DropPanel.htm) с наименованием «DP» и [кнопку](../../Components/Button/Button.htm) с наименованием «btn» (см. «[Пример создания компонента DropPanel](../../Components/DropPanel/Example_DropPanel.htm)»). Добавим обработчик события Opened:


DP.Opened.add(function (sender, args)


{


    btn.setWidth(DP.getWidth());


})


После выполнения примера при нажатии на кнопку будет открыта панель. При этом ширина кнопки «btn» станет равной ширине панели.


См. также:


[DropPanel](DropPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
