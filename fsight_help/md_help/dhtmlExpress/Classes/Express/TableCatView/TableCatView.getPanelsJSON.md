# TableCatView.getPanelsJSON

TableCatView.getPanelsJSON
-


# TableCatView.getPanelsJSON


## Синтаксис


getPanelsJSON();


## Описание


Метод getPanelsJSON возвращает
 панели вкладки «Конструктор» в формате JSON.


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
// Получим панели вкладки «Конструктор»
tableCat.getPanelsJSON();
// -> [Object,  Object,  Object,  Object,  Object,  Object,  Object]

В результате выполнения примера были получены все панели вкладки «Конструктор».


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
