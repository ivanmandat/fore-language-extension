# Конструктор FilterDialog

Конструктор FilterDialog
-


# Конструктор FilterDialog


## Синтаксис


PP.Exp.Ui.FilterDialog(settings);


## Параметры


*settings.* JSON-объект
 со значениями свойств компонента.


## Описание


Конструктор FilterDialog создает
 экземпляр класса FilterDialog.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)).


// Создадим диалог фильтрации
dialog = new PP.Exp.Ui.FilterDialog({
Source: eaxAnalyzer
});
// Отобразим диалог
dialog.show();

В результате выполнения примера будет создан диалог фильтрации.


См. также:


[FilterDialog](FilterDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
