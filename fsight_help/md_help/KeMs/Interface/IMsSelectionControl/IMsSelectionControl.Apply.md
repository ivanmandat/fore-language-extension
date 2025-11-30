# IMsSelectionControl.Apply

IMsSelectionControl.Apply
-


# IMsSelectionControl.Apply


## Синтаксис


Apply(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm),
 SelSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm),
 [ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)
 = Null]): [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Параметры


Stub. Источник данных;


SelSet. Коллекция отметок измерения;


ParamValues. Коллекция значений
 параметров измерения.


## Описание


Метод Apply применяет отметку
 элементов управляющего измерения источника данных для изменения набора
 элементов управляемых измерений.


## Комментарии


Параметр ParamValues по умолчанию
 принимает значение Null.


Перед использованием метода убедитесь, что свойство [IMsSelectionControl.IsActive](IMsSelectionControl.IsActive.htm)
 принимает значение True.


Данный метод поддерживает зависимость управляющих измерений с управляемыми.
 Например, если измерение A управляет измерением B, а B управляет измерением
 C, то при отметке элементов измерения A будет изменен набор элементов
 измерения B. По отметке элементов измерения B будет изменен набор элементов
 измерения C.


Для получения списка измерений источника данных используйте метод [IMsSelectionControl.GetStubSel](IMsSelectionControl.GetStubSel.htm).


Для отметки управляющего измерения используйте класс [DimSelectionSetFactory](KeDims.chm::/Class/DimSelectionSetFactory/DimSelectionSetFactory.htm)
 и методы [IDimSelectionSetFactory.CreateDimSelectionSet](KeDims.chm::/interface/IDimSelectionSetFactory/IDimSelectionSetFactory.CreateDimSelectionSet.htm),
 [IDimSelectionSet.Add](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.Add.htm),
 [IDimSelection.SelectElement](KeDims.chm::/interface/IDimSelection/IDimSelection.SelectElement.htm).


## Пример


Использование метода приведено в примере для [IMsSelectionControl.GetStubSel](IMsSelectionControl.GetStubSel.htm).


См. также:


[IMsSelectionControl](IMsSelectionControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
