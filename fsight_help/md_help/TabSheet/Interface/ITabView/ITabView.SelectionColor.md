# ITabView.SelectionColor

ITabView.SelectionColor
-


# ITabView.SelectionColor


## Синтаксис


		SelectionColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство SelectionColor определяет
 цвет заливки выделенных ячеек таблицы.


## Комментарии


При определении цвета заливки выделенных ячеек таблицы с помощью конструкторов
 [GxColor.CreateRGB](ModDrawing.chm::/Class/GxColor/GxColor.CreateRGB.htm),
 [GxColor.CreateARGB](ModDrawing.chm::/Class/GxColor/GxColor.CreateARGB.htm)
 учитывайте особенности использования степени прозрачности цвета, указанные
 в описании соответствующего конструктора.


Для определения цвета границы выделенных ячеек таблицы используйте свойство
 [ITabView.SelectionBorderColor](ITabView.SelectionBorderColor.htm).


По умолчанию параметры оформления выделенных ячеек таблицы заданы в
 [настройках
 репозитория](UiNav.chm::/02_Navigator/Repo_Default.htm)
 на вкладке «[Оформление в отчетах](UiNav.chm::/02_Navigator/Repo_Default.htm#design)» или с помощью свойств [IDefaultBehaviour.SelectionBorderColor](KeFore.chm::/Interface/IDefaultBehaviour/IDefaultBehaviour.SelectionBorderColor.htm),
 [IDefaultBehaviour.SelectionColor](KeFore.chm::/Interface/IDefaultBehaviour/IDefaultBehaviour.SelectionColor.htm).


## Пример


Использование свойства приведено в примере для [ITabView.SelectionBorderColor](ITabView.SelectionBorderColor.htm).


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
