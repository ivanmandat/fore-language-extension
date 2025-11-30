# IBindingDimCombo.CustomMultiselectText

IBindingDimCombo.CustomMultiselectText
-


# IBindingDimCombo.CustomMultiselectText


## Синтаксис


CustomMultiselectText: String;


## Описание


Свойство CustomMultiselectText
 определяет значение параметра «CUSTOMMULTISELECTTEXT»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «CUSTOMMULTISELECTTEXT»
 определяет шаблон, в соответствии с которым будет формироваться текст
 редактора при множественной отметке. По умолчанию применяется следующий
 шаблон: %First…%Last. При необходимости
 он может быть изменен. Для формирования шаблона может использоваться любой
 текст и следующие подстановки:


		 Подстановка
		 Описание


		 %First
		 Наименование первого выделенного элемента.


		 %Last
		 Наименование последнего выделенного элемента.


		 %Count
		 Количество выделенных элементов.


		 %TotalCount
		 Количество вершин в дереве.


Свойство CustomMultiselectText доступно
 для использования, если свойству [IBindingDimCombo.CustomMultiselectTextDefined](IBindingDimCombo.CustomMultiselectTextDefined.htm)
 установлено значение True. При
 изменении свойства CustomMultiselectText
 свойству [IBindingDimCombo.CustomMultiselectTextDefined](IBindingDimCombo.CustomMultiselectTextDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingDimCombo.Group](ibindingdimcombo.group.htm).


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
