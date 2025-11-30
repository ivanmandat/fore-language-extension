# TableCatView.getTableNumberCombo

TableCatView.getTableNumberCombo
-


# TableCatView.getTableNumberCombo


## Синтаксис


getTableNumberCombo(): [PP.Ui.ComboBox](dhtmlUi.chm::/Classes/ComboBox/Constructor_ComboBox.htm);


## Описание


Метод getTableNumberCombo возвращает
 элемент управления форматом числа на вкладке ленты инструментов «Таблица:
 Конструктор».


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
// Получим элемент управления форматом числа
tableCat.getTableNumberCombo();
// -> [PP.Ui.ComboBox]

В результате выполнения примера был получен элемент управления форматом
 числа вкладки «Конструктор».


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
