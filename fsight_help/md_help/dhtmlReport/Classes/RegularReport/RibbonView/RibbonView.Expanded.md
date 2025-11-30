# RibbonView.Expanded

RibbonView.Expanded
-


# RibbonView.Expanded


## Синтаксис


Expanded: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Expanded наступает при разворачивании ленты.


## Комментарии


Лента сворачивается при нажатии на кнопку ![](expand_button.gif), расположенную в верхнем правом углу.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox». Добавим обработчик события разворачивания ленты инструментов:


       reportBox.getRibbonView().Expanded.add(function (sender, args) {
           alert("Лента развернута")
       })

После выполнения примера при разворачивании ленты инструментов будет выдаваться сообщение «Лента развернута».


См. также:


[RibbonView](RibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
