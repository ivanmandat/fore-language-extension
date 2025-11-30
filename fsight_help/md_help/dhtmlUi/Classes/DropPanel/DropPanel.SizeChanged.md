# DropPanel.SizeChanged

DropPanel.SizeChanged
-


# DropPanel.SizeChanged


## Синтаксис


SizeChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SizeChanged наступает после того, как были изменены размеры компонента.


## Комментарии


Для наступления события необходимо, чтобы для свойства [DropPanel.EnableResize](DropPanel.EnableResize.htm) было установлено значение true.


## Пример


Для выполнения примера создайте компонент [DropPanel](../../Components/DropPanel/DropPanel.htm) и кнопку, при нажатии на которую раскрывается панель (см. «[Пример создания компонента DropPanel](../../Components/DropPanel/Example_DropPanel.htm)»). Добавим обработчик события SizeChanged:


DP.SizeChanged.add (function (sender, args)


{


    alert("Установленный размер: высота: " + DP.getHeight() + ", ширина: " + DP.getWidth());


})


После выполнения примера при нажатии на кнопку будет раскрываться панель. После изменения размеров панели путем перетаскивания ее границ на экран будет выведено сообщение с информацией об установленных размерах компонента.


См. также:


[DropPanel](DropPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
