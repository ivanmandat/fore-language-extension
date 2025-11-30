# TableCatView.refreshTableCFormatButton

TableCatView.refreshTableCFormatButton
-


# TableCatView.refreshTableCFormatButton


## Синтаксис


refreshTableCFormatButton();


## Описание


Метод refreshTableCFormatButton
 обновляет кнопку «Условное форматирование» на вкладке ленты инструментов
 «Таблица: Конструктор».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 ExpressBox с наименованием «expressBox»
 (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Обновим кнопку «Условное форматирование»:


//Получим экземпляр класса PP.Exp.Ui.TableCategory
eRib = expressBox.getRibbonView();
ribbon = eRib.getControl();
cat = ribbon.getCategories();
group = cat.getItem(cat.getCount() - 1);
tableCat = group.getCategories(true)[0];
// Обновим кнопку «Условное форматирование»
tableCat.refreshTableCFormatButton();

В результате выполнения примера была обновлена кнопка «Условное форматирование».


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
