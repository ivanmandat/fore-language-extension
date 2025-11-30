# TabSheet.EnabledChanged

TabSheet.EnabledChanged
-


**


# TabSheet.EnabledChanged


## Синтаксис


EnabledChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие EnabledChanged** генерируется при изменении доступности асинхронной прокрутки таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Обработаем событие EnableChanged:


// Обработаем событие EnabledChanged
tabSheet.EnabledChanged.add(function(sender, args) {
    console.log("Изменена доступность асинхронной прокрутки таблицы.")
});
// Вызовем событие EnabledChanged
tabSheet.EnabledChanged.fire(this);

После выполнения примера при наступлении события EnableChanged в консоли браузера будет выводиться сообщение о том, что изменена доступность асинхронной прокрутки таблицы.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
