# IRibbonButton.SplitButton

IRibbonButton.SplitButton
-


# IRibbonButton.SplitButton


## Синтаксис


SplitButton: Boolean;


## Описание


Свойство SplitButton определяет признак разделения кнопки при наличии подэлементов.


## Комментарии


Если для кнопки в свойстве [SubItems](IRibbonButton.SubItems.htm) задана коллекция подэлементов, из которых будет формироваться раскрывающееся меню, то рядом с текстом с правой стороны будет отображен знак «▼». Если свойству SplitButton установлено значение True, то кнопка будет разделена на две части. При нажатии на кнопку будет сгенерировано событие [OnChange](../IBaseRibbonElement/IBaseRibbonElement.OnChange.htm). Нажатие на знак «▼» приведет к раскрытию меню. Если свойству SplitButton установлено значение False, то разделения кнопки на части не производится. Нажатие кнопки приводит к раскрытию меню. При этом событие [OnChange](../IBaseRibbonElement/IBaseRibbonElement.OnChange.htm) для самой кнопки не генерируется.


По умолчанию свойству SplitButton установлено значение True.


## Пример


Пример использования приведен в описании свойства [Action](IRibbonButton.Action.htm).


См. также:


[IRibbonButton](IRibbonButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
