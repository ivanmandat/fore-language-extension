# ICalculatedCubeInstance.CreateApply

ICalculatedCubeInstance.CreateApply
-


# ICalculatedCubeInstance.CreateApply


## Синтаксис


CreateApply(


Source: [ICubeInstanceSource](../ICubeInstanceSource/ICubeInstanceSource.htm);


[ApplyMode: [SelectionControlApplyMode](../../Enums/SelectionControlApplyMode.htm)
 = 1]): [ICubeSelectionControlApply](../ICubeSelectionControlApply/ICubeSelectionControlApply.htm);


## Параметры


Source. Источник вычисляемого
 куба, для которого будет создан объект управления отметкой. Если в качестве
 значения параметра передается значение Null,
 то создаваемый объект будет использоваться для управления отметкой измерений
 самого вычисляемого куба.


ApplyMode. Режим, в котором
 будет выполняться применение параметров управления отметкой.


## Описание


Метод CreateApply создает объект,
 используемый для управления отметкой измерений куба.


## Пример


Пример использования данного метода приведен в примере для метода [Apply](ICalculatedCubeInstance.Apply.htm).


См. также:


[ICalculatedCubeInstance](ICalculatedCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
