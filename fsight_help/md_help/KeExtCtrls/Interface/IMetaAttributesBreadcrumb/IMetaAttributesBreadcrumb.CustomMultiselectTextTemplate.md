# IMetaAttributesBreadcrumb.CustomMultiselectTextTemplate

IMetaAttributesBreadcrumb.CustomMultiselectTextTemplate
-


# IMetaAttributesBreadcrumb.CustomMultiselectTextTemplate


## Синтаксис


CustomMultiselectTextTemplate: String;


## Описание


Свойство CustomMultiselectTextTemplate
 определяет шаблон, в соответствии с которым будет формироваться текст
 компонента при множественной отметке.


## Комментарии


Свойство актуально, если свойству [CustomMultiselectText](IMetaAttributesBreadcrumb.CustomMultiselectText.htm)
 установлено значение True. При
 этом по умолчанию будет применяться следующий шаблон: %First…%Last.
 При необходимости он может быть изменен. Для формирования шаблона может
 использоваться любой текст и следующие подстановками:


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


Пример использования приведен в описании свойства [CustomMultiselectText](IMetaAttributesBreadcrumb.CustomMultiselectText.htm).


См. также:


[IMetaAttributesBreadcrumb](IMetaAttributesBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
