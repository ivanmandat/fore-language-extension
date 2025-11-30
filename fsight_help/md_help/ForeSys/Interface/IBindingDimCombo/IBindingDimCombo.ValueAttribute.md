# IBindingDimCombo.ValueAttribute

IBindingDimCombo.ValueAttribute
-


# IBindingDimCombo.ValueAttribute


## Синтаксис


ValueAttribute: Boolean;


## Описание


Свойство ValueAttribute
 определяет значение параметра «ATTRIBUTEVALUE»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «ATTRIBUTEVALUE» определяет
 атрибут справочника, из значений которого будет формироваться значение
 ячейки. По умолчанию будет использоваться атрибут с назначением «Идентификатор».


Свойство ValueAttribute доступно
 для использования, если свойству [IBindingDimCombo.ValueAttributeDefined](ibindingdimcombo.valueattributedefined.htm)
 установлено значение True. При
 изменении свойства ValueAttribute
 свойству [IBindingDimCombo.ValueAttributeDefined](ibindingdimcombo.valueattributedefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingDimCombo.Group](ibindingdimcombo.group.htm).


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
