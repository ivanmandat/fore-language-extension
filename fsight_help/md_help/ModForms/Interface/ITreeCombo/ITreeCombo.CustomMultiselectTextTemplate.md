# ITreeCombo.CustomMultiselectTextTemplate

ITreeCombo.CustomMultiselectTextTemplate
-


# ITreeCombo.CustomMultiselectTextTemplate


## Синтаксис


CustomMultiselectTextTemplate: String;


## Описание


Свойство CustomMultiselectTextTemplate
 определяет шаблон, в соответствии с которым будет формироваться текст
 компонента при множественной отметке.


## Комментарии


Свойство актуально, если свойству [CustomMultiselectText](ITreeCombo.CustomMultiselectText.htm)
 установлено значение True. При
 этом по умолчанию будет применяться следующий шаблон: %First…%Last.
 При необходимости он может быть изменен. Для формирования шаблона может
 использоваться любой текст и следующие подстановки:


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


## Пример


Пример использования приведен в описании свойства [CustomMultiselectText](ITreeCombo.CustomMultiselectText.htm).


См. также:


[ITreeCombo](ITreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
