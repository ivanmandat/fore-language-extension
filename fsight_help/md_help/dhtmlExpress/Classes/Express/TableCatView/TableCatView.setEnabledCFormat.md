# TableCatView.setEnabledCFormat

TableCatView.setEnabledCFormat
-


**


# TableCatView.setEnabledCFormat


## Синтаксис


setEnabledCFormat(value);


## Параметры


*value.* Значение, задающее доступ
 к кнопке. Если установлено значение true,
 то кнопка «Условное форматирование» доступна, иначе - недоступна.


## Описание


Метод setEnabledCFormat**
 управляет доступом к кнопке «Условное форматирование» на вкладке «Таблица»
 ленты инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 ExpressBox с наименованием «expressBox»
 (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). В приведенном ниже примере открывается
 доступ к кнопке «Условное форматирование» на вкладке «Таблица»:


// Получим представление вкладки «Таблица»
var category = expressBox.getRibbonView().getTableCategory();
// Откроем доступ к кнопке «Условное форматирование»
category.setEnabledCFormat(true);

До выполнения примера кнопка «Условное форматирование» была неактивной
 :


![](../../../MainCatView.setEnabledCFormat_1.gif)


После выполнения примера данная кнопка стала активной:


![](../../../MainCatView.setEnabledCFormat_2.gif)


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
