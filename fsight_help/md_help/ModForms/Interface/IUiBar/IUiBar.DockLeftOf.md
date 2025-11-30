# IUiBar.DockLeftOf

IUiBar.DockLeftOf
-


# IUiBar.DockLeftOf


## Синтаксис


DockLeftOf(Bar: [IUiBar](IUiBar.htm)):
 Boolean;


## Параметры


Bar.
 Компонент формы, слева от которого необходимо
 разместить текущий компонент.


## Описание


Метод DockLeftOf позволяет осуществить
 привязку текущего компонента к форме, располагая его слева от указанного
 в параметрах компонента.


## Комментарии


Допустимые значения:


	- True. Текущий компонент
	 успешно привязан к форме;


	- False. Привязка компонента
	 не произошла.


Метод позволяет привязать панель [ToolBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ToolBar.htm)
 к форме, располагая её слева от указанной в параметре Bar
 панели. Метод актуален, если свойство [IControl.Visible](../IControl/IControl.Visible.htm)
 принимает значение True.


См. также:


[IUiBar](IUiBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
