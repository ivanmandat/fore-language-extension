# Breadcrumb.StartMenuButton

Breadcrumb.StartMenuButton
-


# Breadcrumb.StartMenuButton


## Синтаксис


StartMenuButton: Boolean


## Описание


Свойство StartMenuButton определяет, отображается ли в [компоненте](../../Components/Breadcrumb/Breadcrumb.htm) кнопка для добавления элементов.


## Комментарии


Кнопка для добавления элементов располагается справа от кнопки удаления и имеет следующий вид:


![](../../Components/Breadcrumb/bread1.gif)


При нажатии на данную кнопку раскрывается панель, содержащая список для выбора элементов.


Если для свойства установлено значение false, то кнопка не отображается. По умолчанию установлено значение true.


## Пример


Для выполнения примера [создайте компонент Breadcrumb](../../Components/Breadcrumb/example_Breadcrumb.htm) с наименованием «bread».


Значение свойства можно установить через JSON-объект:


StartMenuButton: false


или на уровне API:


treeList.setStartMenuButton(false);


После выполнения примера в компоненте [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm) не будет отображаться кнопка для добавления элементов.


См. также:


[Breadcrumb](Breadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
