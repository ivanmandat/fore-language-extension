# DimSrv.execCommand

DimSrv.execCommand
-


# DimSrv.execCommand


## Синтаксис


execCommand(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; dmSelectionArg
 - параметры операции, fireEvent
 - признак вызова события [DimSrv.SelectionChanged](DimSrv.SelectionChanged.htm),
 если для параметра установлено значение true,
 то событие будет вызвано;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод execCommand изменяет отметку
 элементов справочника.


## Пример


Пример использования метода приведен в описании метода [DimSrv.selectByKeys](DimSrv.selectByKeys.htm).


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
