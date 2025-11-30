# DropPanel.getDroppedDown

DropPanel.getDroppedDown
-


# DropPanel.getDroppedDown


## Синтаксис


getDroppedDown ();


## Описание


Метод getDroppedDown возвращает признак того, раскрыта ли панель.


## Комментарии


Метод возвращает значение false, если панель закрыта, и значение true, если панель раскрыта.


## Пример


Для выполнения примера создайте компонент [DropPanel](../../Components/DropPanel/DropPanel.htm) и [кнопку](../../Components/Button/Button.htm) с наименованием «btn», при нажатии на которую будет раскрываться панель (см. «[Пример создания компонента DropPanel](../../Components/DropPanel/Example_DropPanel.htm)»). Добавим обработчик события [ContextMenu](../Control/Control.OnContextMenu.htm), с помощью которого при нажатии на кнопку правой кнопкой мыши будет выводиться сообщение о том, раскрыта ли панель.


btn.ContextMenu.add(function (sender,args){


    alert("Раскрыта: " + DP.getDroppedDown().toString());


})


Примечание. Для раскрытия панели необходимо в методе в [.show](DropPanel.show.htm) качестве параметра notCreateFrame передавать значение true, чтобы не создавался фрейм. Иначе на экран будет всегда выдаваться значение false, так как при нажатии на кнопку панель будет скрываться.


См. также:


[DropPanel](DropPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
