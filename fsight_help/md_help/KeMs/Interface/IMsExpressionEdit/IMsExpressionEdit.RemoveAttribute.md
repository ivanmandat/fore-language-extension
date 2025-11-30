# IMsExpressionEdit.RemoveAttribute

IMsExpressionEdit.RemoveAttribute
-


# IMsExpressionEdit.RemoveAttribute


## Синтаксис


		RemoveAttribute(Value: [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm));


## Параметры


Value. Атрибут базы данных
 временных рядов.


## Описание


Метод RemoveAttribute удаляет
 указанный атрибут из списка атрибутов, значения которых используются в
 компоненте.


## Комментарии


Параметр Value не может принимать
 значение Null.


Метод применяется для тех атрибутов, которые были добавлены с помощью
 метода [IMsExpressionEdit.AddAttribute](IMsExpressionEdit.AddAttribute.htm)
 либо при установке свойства [IMsExpressionEdit.SelectionSet](IMsExpressionEdit.SelectionSet.htm).


Количество атрибутов, добавленных для использования, можно получить
 в свойстве [IMsExpressionEdit.GetAttributeCount](IMsExpressionEdit.GetAttributeCount.htm).


См. также:


[IMsExpressionEdit](IMsExpressionEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
