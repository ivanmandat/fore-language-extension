# IMsFormulaTransform.ObjectList

IMsFormulaTransform.ObjectList
-


# IMsFormulaTransform.ObjectList


## Синтаксис


		ObjectList: [IMsTransformObjectList](../IMsTransformObjectList/IMsTransformObjectList.htm);


## Описание


Свойство ObjectList возвращает
 коллекцию объектов, используемых методом расчёта.


## Комментарии


Например, при расчёте модели, основанной на атрибутах базы данных временных
 рядов, в уравнении необходимо использовать атрибут показателей, являющийся
 ссылкой на справочник. Для вставки константного значения справочника в
 уравнение добавьте справочник в коллекцию объектов. Затем получите ключ
 добавленного объекта, на его основе сформируйте внутреннее представление
 терма для справочника и передайте его в уравнение. Терм должен иметь следующий
 формат: «@__<ключ_объекта>».


## Пример


Использование свойства приведено в примере для [IMsFormulaTransformVariable.AttributeId](../IMsFormulaTransformVariable/IMsFormulaTransformVariable.AttributeId.htm).


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
