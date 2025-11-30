# DropPanel.Opening

DropPanel.Opening
-


# DropPanel.Opening


## Синтаксис


Opening: function (sender, args)


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие Opening наступает перед
 открытием компонента.


## Пример


Для выполнения примера создайте компонент [DropPanel](../../Components/DropPanel/DropPanel.htm)
 с наименованием «DP» и [кнопку](../../Components/Button/Button.htm)
 с наименованием «btn» (см. «[Пример
 создания компонента DropPanel](../../Components/DropPanel/Example_DropPanel.htm)»). Добавим обработчик события Opening:


DP.Opening.add(function (sender, args)


{


    btn.dispose();


})


После выполнения примера при нажатии на кнопку будет раскрыта панель.
 Во время открытия панели будет удалена кнопка.


См. также:


[DropPanel](DropPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
