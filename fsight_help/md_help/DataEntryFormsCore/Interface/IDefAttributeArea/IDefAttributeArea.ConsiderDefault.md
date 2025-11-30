# IDefAttributeArea.ConsiderDefault

IDefAttributeArea.ConsiderDefault
-


# IDefAttributeArea.ConsiderDefault


## Синтаксис


		ConsiderDefault: Boolean;


## Описание


Свойство ConsiderDefault определяет,
 будет ли сохраняться значение по умолчанию в качестве значения атрибута
 при создании нового элемента.


## Комментарии


Свойство актуально, если свойству [IDefAttributeArea.ReadOnly](IDefAttributeArea.ReadOnly.htm)
 установлено значение True.


Если свойству ConsiderDefault
 установлено значение True, то
 при создании новых элементов в качестве значения атрибута [IDefAttributeArea.AttributeKey](IDefAttributeArea.AttributeKey.htm)
 будет устанавливаться значение по умолчанию, указанное в свойстве [IDefAttributeArea.DefaultValue](IDefAttributeArea.DefaultValue.htm).
 Если свойству ConsiderDefault
 установлено значение False, то
 для новых элементов будет задаваться пустое значение атрибута.


См. также:


[IDefAttributeArea](IDefAttributeArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
