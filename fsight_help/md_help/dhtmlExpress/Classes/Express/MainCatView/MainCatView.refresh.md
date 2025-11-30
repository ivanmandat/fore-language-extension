# MainCatView.refresh

MainCatView.refresh
-


**


# MainCatView.refresh


## Синтаксис


refresh(propName: [PP.Exp.Ui.ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm));


## Параметры


*propName.* Наименование элемента управления, который нужно обновить; задаётся с помощью перечисления [PP.Exp.Ui.ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm).


## Описание


Метод refresh** обновляет указанный элемент на вкладке «Главная» ленты инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее обновим пункт меню «Заголовок» на вкладке «Главная»:


// Получим представление вкладки «Главная»
var mainCategory = expressBox.getRibbonView().getMainCategory();
mainCategory.refresh(PP.Exp.Ui.ControlType.Title);

В результате выполнения примера будет обновлен пункт меню «Заголовок» на вкладке «Главная» ленты инструментов экспресс-отчета.


См. также:


[MainCatView](MainCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
