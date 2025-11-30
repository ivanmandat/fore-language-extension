# TableCatView.getTableStyleListBox

TableCatView.getTableStyleListBox
-


# TableCatView.getTableStyleListBox


## Синтаксис


getTableStyleListBox(): [PP.Ui.ListBox](dhtmlList.chm::/Classes/ListBox/ListBox.htm);


## Описание


Метод getTableStyleListBox возвращает
 список стилей на вкладке ленты инструментов «Таблица: Конструктор».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 ExpressBox с наименованием «expressBox»
 (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


//Получим экземпляр класса PP.Exp.Ui.TableCategory
eRib = expressBox.getRibbonView();
ribbon = eRib.getControl();
cat = ribbon.getCategories();
group = cat.getItem(cat.getCount() - 1);
tableCat = group.getCategories(true)[0];
// Получим список стилей
tableCat.getTableStyleListBox();
// -> [PP.Ui.ListBox]

В результате выполнения примера был получен список стилей таблицы.


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
