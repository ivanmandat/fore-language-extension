# RibbonPanel.getControls

RibbonPanel.getControls
-


# RibbonPanel.getControls


## Синтаксис


getControls ();


## Описание


Метод getControls возвращает массив элементов управления, расположенных на панели.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [Ribbon](../../Components/Ribbon/Ribbon.htm) с наименованием «ribbon». Лента должна содержать вкладку, на которой расположена панель. На панели находится кнопка с изображением (см. «[Пример создания компонента Ribbon](../../Components/Ribbon/Example_Ribbon.htm)»). Изменим позицию изображения кнопки:


var controls = ribbon.getItems()[0].getPanels()[0].getControls();


controls[0].setImagePosition(PP.LTRB.Left);


После выполнения примера изображение кнопки будет расположено слева.


См. также:


[RibbonPanel](RibbonPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
