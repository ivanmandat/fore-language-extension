# ToolBar.removeItem

ToolBar.removeItem
-


# ToolBar.removeItem


## Синтаксис


removeItem(item: PP.Ui.[Control](../Control/Control.htm), isDispose: Boolean);


## Параметры


index. Дочерний элемент панели инструментов, который необходимо удалить;


isDispose. Определяет, удалять ли элемент полностью.


## Описание


Метод removeItem удаляет дочерний элемент панели инструментов.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ToolBar](../../Components/ToolBar/ToolBar.htm) с наименованием «toolBar», на котором расположена кнопка с наименованием «imgbtn» (см. «[Пример создания компонента ToolBar](../../Components/ToolBar/Example_ToolBar.htm)»). Удалим эту кнопку:


ToolBar.removeItem (imgbtn);


См. также:


[ToolBar](ToolBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
