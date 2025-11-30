# DesignerCatView.refresh

DesignerCatView.refresh
-


**


# DesignerCatView.refresh


## Синтаксис


refresh();


## Описание


Метод refresh** обновляет
 данные вкладки «Конструктор» на ленте инструментов.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее обновим представление и данные
 вкладки «Конструктор»:


// Создадим экземпляр вкладки
cat = new PP.Exp.Ui.DesignerCategory;
// Получим ленту инструментов
ribV = expressBox.getRibbonView();
rib = ribV.getControl();
// Добавим вкладку
rib.addCategory(cat);
// Повторно отрисуем содержимое вкладки
cat.renderContent();
// Обновим содержимое вкладки
cat.refresh();
// Проверим отрисовано ли содержимое вкладки
console.debug(cat.getContentRendered());

В результате выполнения примера будет добавлена вкладка «Конструктор»
 и повторно добавлено содержимое вкладки.


См. также:


[DesignerCatView](DesignerCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
