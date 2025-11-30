# IAlgorithmParam.Control

IAlgorithmParam.Control
-


# IAlgorithmParam.Control


## Синтаксис


Control: [IAlgorithmParamControl](../IAlgorithmParamControl/IAlgorithmParamControl.htm);


## Описание


Свойство Control возвращает
 настройки передачи значения в параметр алгоритма.


## Комментарии


В зависимости от [типа управления
 параметром](IAlgorithmParam.Type.htm), приведите значение свойства Control к одному из следующих
 интерфейсов:


	- [IAlgorithmConstantParamControl](../IAlgorithmConstantParamControl/IAlgorithmConstantParamControl.htm);


	- [IAlgorithmObjectParamControl](../IAlgorithmObjectParamControl/IAlgorithmObjectParamControl.htm).


## Пример


Использование свойства приведено в примере для [IAlgorithmConstantParamControl.ConstantValue](../IAlgorithmConstantParamControl/IAlgorithmConstantParamControl.ConstantValue.htm),
 [IAlgorithmObjectParamControl.Param](../IAlgorithmObjectParamControl/IAlgorithmObjectParamControl.Param.htm).


См. также:


[IAlgorithmParam](IAlgorithmParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
