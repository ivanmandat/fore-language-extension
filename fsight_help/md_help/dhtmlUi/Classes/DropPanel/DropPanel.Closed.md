# DropPanel.Closed

DropPanel.Closed
-


# DropPanel.Closed


## Синтаксис


Closed: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Closed наступает после закрытия компонента.


## Пример


Для выполнения примера разместите на html-странице компонент [DropPanel](../../Components/DropPanel/DropPanel.htm) с наименованием «DP» (см. «[Пример создания компонента DropPanel](../../Components/DropPanel/Example_DropPanel.htm)»). Добавим обработчик события Closed:


DP.Closed.add(function (sender, args)


{


    alert("Панель закрыта")


})


После закрытия панели на экран будет выведено сообщение «Панель закрыта».


См. также:


[DropPanel](DropPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
