# Конструктор MapCatView

Конструктор MapCatView
-


**


# Конструктор MapCatView


## Синтаксис


PP.Exp.Ui.MapCatView(settings);


## Параметры


*settings.* JSON-объект со значениями свойств класса.


## Описание


Конструктор MapCatView** создает экземпляр класса **MapCatView**.


## Пример


Конструктор предназначен для внутреннего использования.


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Вызовем конструктор класса **MapCatView**:


// Получим представление вкладки «Карта»
var mapCategory = expressBox.getRibbonView().getMapCategory();
mapCategory.refresh();

В результате выполнения примера был создан объект класса **MapCatView**.


См. также:


[MapCatView](MapCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
