# DropPanel.FrameDown

DropPanel.FrameDown
-


# DropPanel.FrameDown


## Синтаксис


FrameDown: function (sender, args)


## Параметры


sender. Источник события.


args. Информация о событии.


## Описание


Событие FrameDown наступает по щелчку мыши за пределами панели.


## Комментарии


Событие наступает, если для параметра notCreateFrame метода [DropPanel.show](DropPanel.show.htm) установлено значение false.


## Пример


Для выполнения примера создайте компонент [DropPanel](../../Components/DropPanel/DropPanel.htm) и кнопку, при нажатии на которую раскрывается панель (см. «[Пример создания компонента DropPanel](../../Components/DropPanel/Example_DropPanel.htm)»). Добавим обработчик события FrameDown:


DP.FrameDown.add(function (sender, args)


{


    alert("Is out");


})


После выполнения примера при нажатии на кнопку будет раскрыта панель. По щелчку мыши за пределами панели будет выдаваться сообщение «Is out».


См. также:


[DropPanel](DropPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
