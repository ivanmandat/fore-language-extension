# DimSrv.setElementsGroup

DimSrv.setElementsGroup
-


# DimSrv.setElementsGroup


## Синтаксис


setElementsGroup(dim: PP.Mb.DimSource, args: Object,
 callback: Function|PP.Delegate, errorCallback: Function|PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: groupId
 - идентификатор группы; limitToGroup
 - признак удаления элементов не входящих в группу, если для аргумента
 установлено значение true, то
 элементы, не входящие в группу, будут убраны;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод setElementsGroup
 добавляет группу элементов к метаданным справочника.


## Пример


Пример использования метода приведен в описании метода [DimSrv.selectGroup](DimSrv.selectGroup.htm).


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
