# DimSrv.getMetadata

DimSrv.getMetadata
-


# DimSrv.getMetadata


## Синтаксис


getMetadata(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; pattern - шаблон
 запроса;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод getMetadata запрашивает
 метаданные справочника и сохраняет их в модели.


## Пример


Пример использования метода приведен в описании метода [DimSrv.selectGroup](DimSrv.selectGroup.htm).


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
