# IRdsMergeCallback.OnConflictResolve

IRdsMergeCallback.OnConflictResolve
-


# IRdsMergeCallback.OnConflictResolve


## Синтаксис


OnConflictResolve(LoadElement: Integer; CurrentElement: Integer; Var Ignore: Boolean);


## Параметры


LoadElement. Ключ элемент справочника, загруженного из файла.


CurrentElement. Ключ соответствующего элемента в справочнике.


Ignore. Параметр, определяющий, будет ли производиться синхронизация данных по все атрибутам элемента. Если в качестве значения параметра передается True - будет производиться синхронизация значений атрибутов со значениями, загруженными из файла, если False - синхронизация элемента производиться не будет.


## Описание


Метод OnConflictResolve реализует событие, возникающее при синхронизации данных элемента, имеющего различные значения атрибутов в справочнике и загруженном файле.


## Пример


Использование метода приведено в примере для [IRdsMergeCallback.OnBeforeProcess](IRdsMergeCallback.OnBeforeProcess.htm).


См. также:


[IRdsMergeCallback](IRdsMergeCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
