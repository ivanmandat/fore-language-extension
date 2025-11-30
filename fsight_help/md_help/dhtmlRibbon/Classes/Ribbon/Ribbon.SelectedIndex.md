# Ribbon.SelectedIndex

Ribbon.SelectedIndex
-


# Ribbon.SelectedIndex


## Синтаксис


SelectedIndex: Number


## Описание


Свойство SelectedIndex устанавливает индекс активной вкладки.


## Комментарии


Индекс активной вкладки по умолчанию - 0.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [Ribbon](../../Components/Ribbon/Ribbon.htm) с наименованием «ribbon», содержащего, как минимум, одну вкладку (см. «[Пример создания компонента Ribbon](../../Components/Ribbon/Example_Ribbon.htm)»).


ribbon.getItems()[ribbon.getSelectedIndex()].getGroupName()


После выполнения примера будет возвращено имя группы, в которую входит выделенная вкладка.


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
