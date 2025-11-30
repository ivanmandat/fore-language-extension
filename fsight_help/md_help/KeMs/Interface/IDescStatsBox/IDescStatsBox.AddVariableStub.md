# IDescStatsBox.AddVariableStub

IDescStatsBox.AddVariableStub
-


# IDescStatsBox.AddVariableStub


## Синтаксис


		AddVariableStub(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm));


## Параметры


Stub. Переменная, для которой
 требуется произвести расчёт описательных статистик.


## Описание


Метод AddVariableStub осуществляет
 добавление в компонент переменной.


## Комментарии


После добавления переменной в компонент для неё производится расчёт
 описательных статистик.


Если добавляемая переменная содержит дополнительные измерения, то на
 экран будет выведен диалог фиксации элементов по этим измерениям. Если
 вывод диалога не требуется, то рекомендуется использовать метод [IDescStatsBox.AddVariableStubFixedSlice](IDescStatsBox.AddVariableStubFixedSlice.htm).


## Пример


Пример использования приведен в описании свойства [IDescStatsBoxModelSpace](IDescStatsBox.ModelSpace.htm).


См. также:


[IDescStatsBox](IDescStatsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
