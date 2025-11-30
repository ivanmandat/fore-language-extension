# DimSrv.updateStateData

DimSrv.updateStateData
-


# DimSrv.updateStateData


## Синтаксис


updateStateData(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; keys - ключ
 обновляемых элементов;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод updateStateData обновляет
 состояния элементов справочника.


## Пример


Пример использования метода приведен в описании метода [DimSrv.selectByKeys](DimSrv.selectByKeys.htm).


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
