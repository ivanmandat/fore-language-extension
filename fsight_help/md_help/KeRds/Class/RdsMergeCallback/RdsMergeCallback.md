# RdsMergeCallback

RdsMergeCallback
-


# RdsMergeCallback


## Описание


Класс RdsMergeCallback реализует
 объект, используемый для отслеживания событий, возникающих при синхронизации
 справочников в репозитории НСИ.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnBeforeProcess](RdsMergeCallback.OnBeforeProcess.htm)


		 Метод OnBeforeProcess
		 реализует событие, возникающее после этапа сравнения элементов
		 и непосредственно перед самой синхронизацией элементов, имеющих
		 различные значения атрибутов.


		 ![](../../Sub_Image.gif)
		 [OnConflict](RdsMergeCallback.OnConflict.htm)


		 Метод OnConflict реализует
		 событие, возникающее, если значения атрибутов элемента в справочнике
		 и соответствующего ему элемента, загруженного из файла, имеют
		 различия.


		 ![](../../Sub_Image.gif)
		 [OnConflictResolve](RdsMergeCallback.OnConflictResolve.htm)


		 Метод OnConflictResolve
		 реализует событие, возникающее при синхронизации данных элемента,
		 имеющего различные значения атрибутов в справочнике и загруженном
		 файле.


		 ![](../../Sub_Image.gif)
		 [OnProgress](RdsMergeCallback.OnProgress.htm)


		 Метод OnProgress реализует
		 событие общего статуса процесса синхронизации справочников НСИ.


См. также:


[Классы сборки Rds](../KeRds_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
