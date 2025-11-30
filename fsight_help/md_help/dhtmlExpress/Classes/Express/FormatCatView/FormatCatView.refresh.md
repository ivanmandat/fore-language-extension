# FormatCatView.refresh

FormatCatView.refresh
-


**


# FormatCatView.refresh


## Синтаксис


refresh();


## Описание


Метод refresh** обновляет
 данные вкладки «Формат» на ленте инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)).


//Получим экземпляр класса PP.Exp.Ui.FormatCategory
eRib = expressBox.getRibbonView();
ribbon = eRib.getControl();
cat = ribbon.getCategories();
catGr = cat.getItem(cat.getCount() - 1);
formatCat = catGr.getCategories(true)[1];
// Используя методы получим содержимое вкладки и обновим элементы управления :
formatCat.getSelectPartCombo();
// ->  PP.Ui.ComboBox
formatCat.getCurrentFormatControls();
// -> [PP.Ui.ComboBox, PP.Ui.RibbonButton]
formatCat.getSlaveCategoriesPanels();
// -> [Object,  Object,  Object,  Object,  Object,  Object,  Object]
formatCat.getFontBox();
// -> PP.Ui.FontBox
formatCat.getBordersAndFillColorControls();
// -> PP.Ui.GridPanel
formatCat.renderContent();
// -> Элементы повторно отрисованы
console.debug(formatCat.getContentRendered ? "Содержимое вкладки отрисовано" : "Содержимое вкладки не отрисовано");
// -> Содержимое вкладки отрисовано
с5.refreshTextNBordersNFillColor();
// -> Элемент управления границей и заливкой обновлены
formatCat.refresh();
// -> Содержимое вкладки обновлено

В результате выполнения примера будут получены элементы управления и
 обновлено содержимое вкладки «Формат».


См. также:


[FormatCatView](FormatCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
