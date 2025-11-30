# NavigationItem.IsHeaderControlVisible

NavigationItem.IsHeaderControlVisible
-


# NavigationItem.IsHeaderControlVisible


## Синтаксис


IsHeaderControlVisible: Boolean


## Описание


Свойство IsHeaderControlVisible определяет, отображается ли в заголовке [вкладки](NavigationItem.htm) элемент управления.


## Комментарии


Если установлено значение false, то элемент управления в заголовке не отображается. По умолчанию установлено значение true. Вид элемента управления устанавливается с помощью свойства [HeaderControl](NavigationItem.HeaderControl.htm).


## Пример


Для выполнения примера создайте компонент [NavigationBar](../../Components/NavigationBar/NavigationBar.htm) с наименованием «NB» (см. «[Пример создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Скроем элемент управления из заголовка верхней панели:


NB.getItem(0).setIsHeaderControlVisible(false);


После выполнения примера при обновлении страницы в заголовке первой вкладки не будет отображаться элемент управления.


См. также:


[NavigationItem](NavigationItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
