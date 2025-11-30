# EaxMdService.setTypedTransformation

EaxMdService.setTypedTransformation
-


# EaxMdService.setTypedTransformation


## Синтаксис


setTypedTransformation(report: [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm),
 transformations: Som.EaxTransformation, transformOperation: Som.ListOperation,
 returnTransrofmations: boolean, transfType: Som.EaxTransformationType,
 callback: ResponseDelegate);


## Параметры


Report. Документ экспресс-отчёта;


Transformations. Array
 of Object. Массив объектов трансформации;


TransformOperation: [PP.Exp.TransfOperationType](../../../Enums/PP.Exp.TransfOperationType.htm).
 Тип операции;


ReturnTransrofmations. Boolean. Признак получения всех
 трансформаций. Если для параметра установлено значение true, то в функцию
 обратного вызова будут возвращены все трансформации сервиса;


TransfType. Тип трансформации;


Callback. Function.
 Функция обратного вызова.


## Описание


Метод setTypedTransformation
 устанавливает коллекцию трансформаций для элемента измерения.


## Комментарий


Значение свойства возвращается с помощью метода getTypedTransformation.


## Пример


Пример использования приведён на странице описания метода [getTypedTransformation](EaxMdService.getTypedTransformation.htm).


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
