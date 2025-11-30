# TabSheet.Rendered

TabSheet.Rendered
-


**


# TabSheet.Rendered


## Синтаксис


Rendered: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Rendered** генерируется после отрисовки таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Обработаем событие Rendered:


// Обработаем событие Rendered
tabSheet.Rendered.add(function(sender, args) {
    console.log("Таблица отрисована.")
});
// Вызовем событие Rendered
tabSheet.update();

В результате выполнения примера при наступлении события Rendered в консоли браузера будет выводиться сообщение о том, что таблица отрисована.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
