# TableCatView.refreshNumber

TableCatView.refreshNumber
-


# TableCatView.refreshNumber


## Синтаксис


refreshNumber();


## Описание


Метод refreshNumber обновляет
 элемент управления форматом числа.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 ExpressBox с наименованием «expressBox»
 (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Обновим элемент управления форматом
 числа:


//Получим экземпляр класса PP.Exp.Ui.TableCategory
eRib = expressBox.getRibbonView();
ribbon = eRib.getControl();
cat = ribbon.getCategories();
group = cat.getItem(cat.getCount() - 1);
tableCat = group.getCategories(true)[0];
// Обновим элемент управления форматом числа
tableCat.refreshNumber();

В результате выполнения примера был обновлен элемент управления форматом
 числа.


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
