# MenuItem.Checked

MenuItem.Checked
-


# MenuItem.Checked


## Синтаксис


Checked: Boolean


## Описание


Свойство Checked определяет, установлен ли [флаг](../../Components/CheckBox/CheckBox.htm) или [переключатель](../../Components/RadioButton/RadioButton.htm) для пункта меню.


## Комментарии


Если для элемента меню задается данное свойство, то в левой части компонента будет отображаться [флажок](../../Components/CheckBox/CheckBox.htm) или [переключатель](../../Components/RadioButton/RadioButton.htm). [Переключатель](../../Components/RadioButton/RadioButton.htm) настраивается для элементов с общим [именем группы](MenuItem.GroupName.htm). Если имя группы не задано, устанавливается [флажок](../../Components/CheckBox/CheckBox.htm).


Если для свойства установлено значение true, то для заданного элемента установлен [флажок](../../Components/CheckBox/CheckBox.htm) или [переключатель](../../Components/RadioButton/RadioButton.htm). Если установлено значение false, флажок снят, а переключатель не установлен.


По умолчанию значение свойства не установлено.


Примечание. Свойство актуально, если для свойства [ShowIcons](../Menu/Menu.ShowIcons.htm) установлено значение true.


Значение свойства Checked перекрывает значение свойства [Menu.ImageList](../Menu/Menu.ImageList.htm), то есть при наличии переключателя или флажка пиктограммы в левой части меню не отображаются.


## Пример


Пример использования свойства приведен на странице «[Пример создания компонента Menu](../../Components/Menu/Menu_example.htm)».


См. также:


[MenuItem](MenuItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
