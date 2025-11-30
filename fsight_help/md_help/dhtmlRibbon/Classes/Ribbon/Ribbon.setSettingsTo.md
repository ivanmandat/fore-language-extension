# Ribbon.setSettingsTo

Ribbon.setSettingsTo
-


# Ribbon.setSettingsTo


## Синтаксис


setSettingsTo (controls, settings);


## Параметры


controls. Элемент управления;


settings. JSON-объект со значениями свойств компонента


## Описание


Метод setSettingsTo устанавливает JSON-объект с настройками для указанного элемента управления.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [Ribbon](../../Components/Ribbon/Ribbon.htm) с наименованием «ribbon» (см «[Пример создания компонента Ribbon](../../Components/Ribbon/Example_Ribbon.htm)»). В коренвом каталоге должна быть папка с наименованием «samle_img», где находятся изображения кнопок. Лента содержит вкладку, на которой расположена панель с наименованием «pan1».


//Создаем кнопку


var but1 = new PP.Ui.RibbonButton();


//Размещаем кнопку на панели


pan1.addControl(but1);


//JSON-объект с настройками для кнопки:


var set1 = { Content: "График", ImageUrl: "img/ribbon_img/chart.png" };


//Устанавливаем настройки для кнопки:


ribbon.setSettingsTo(but1,set1);


После выполнения примера на панели будет размещена кнопка с изображением и с надписью «График».


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
