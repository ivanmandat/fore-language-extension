# Добавление элементов управления на ленту приложения

Добавление элементов управления на ленту приложения
-


# Добавление элементов управления на ленту приложения


Элементы управления размещаются на [панелях](../../Classes/RibbonPanel/RibbonPanel.htm)
 ленты приложения. Элементы управления могут быть добавлены:


	- через JSON-объект (см. «[Пример
	 размещения компонента Ribbon через JSON](Example_Ribbon_JSON.htm)»);


	- с помощь метода [RibbonPanel.addControl](../../Classes/RibbonPanel/RibbonPanel.addControl.htm)
	 (см. «[Пример создания компонента Ribbon](Example_Ribbon.htm)»).


При размещении из JSON массив элементов управления добавляется в поле
 «Elements». Для каждого элемента
 управления задаются следующие атрибуты:


	- «Type» - тип элемента
	 управления. Доступны следующие элементы управления:


		 Наименование
		 Краткое описание
		 Класс


		 "Button"
		 Кнопка ленты приложения.
		 [RibbonButton](../../Classes/RibbonButton/RibbonButton.htm)


		 "Group"
		 Группа элементов управления.


		 "Button_Check"
		 Флажок.
		 [CheckBox](dhtmlUi.chm::/Classes/CheckBox/CheckBox.htm)


		 "ComboBox"
		 Раскрывающийся список.
		 [ComboBox](dhtmlUi.chm::/Classes/ComboBox/ComboBox.htm)


		 "Toolbar"
		 Панель инструментов.
		 [ToolBar](dhtmlUi.chm::/Classes/ToolBar/ToolBar.htm)


		 "Label"
		 Подпись.
		 [Label](dhtmlUi.chm::/Classes/Label/Label.htm)


		 "TextSettings"
		 Настройки текста.
		 TextSettings


		 "ListBox"
		 Список.
		 [ListBox](dhtmlList.chm::/Classes/ListBox/ListBox.htm)


	- «IsLargeControl» - размер
	 элемента управления. Если установлено true
	 - элемент управления большого размера, false
	 - маленького размера.


При размещении элементов управления с помощью метода [RibbonPanel.addControl](../../Classes/RibbonPanel/RibbonPanel.addControl.htm)
 на панель может быть добавлен любой элемент управления - наследник PP.Ui.[Control](dhtmlUi.chm::/Classes/control/control.htm).


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
