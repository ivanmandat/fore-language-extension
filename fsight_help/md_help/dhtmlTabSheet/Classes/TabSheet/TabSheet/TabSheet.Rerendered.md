# TabSheet.Rerendered

TabSheet.Rerendered
-


**


# TabSheet.Rerendered


## Синтаксис


Rerendered: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Rerendered** генерируется после перерисовки таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Обработаем событие Rerendered:


// Обработаем событие Rerendered
tabSheet.Rerendered.add(function(sender, args) {
    console.log("Таблица перерисована.")
});
// Вызовем событие Rerendered
tabSheet.Rerendered.fire(this);

В результате выполнения примера при наступлении события Rerendered в консоли браузера будет выводиться сообщение о том, что таблица перерисована.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
