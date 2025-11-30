# IRdsBatchCallback

IRdsBatchCallback
-


# IRdsBatchCallback


Сборка: Rds;


## Описание


Интерфейс IRdsBatchCallback
 предназначен для обработки исключительных ситуаций, возникающих
 при выполнении пакета элементов справочника НСИ.


## Иерархия наследования


           IRdsBatchCallback


## Комментарии


Для обработки исключительных ситуаций должен быть создан пользовательский
 класс, переопределяющий все свойства и методы данного интерфейса.


## Метод


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CheckExecute](IRdsBatchCallback.CheckExecute.htm)


		 Метод CheckExecute
		 реализует событие, возникающее при выполнении метода [Execute](../IRdsDictionaryBatch/IRdsDictionaryBatch.Execute.htm),
		 в случае возникновения конфликтов.


		 ![](../../Sub_Image.gif)
		 [OnError](IRdsBatchCallback.OnError.htm)


		 Метод OnError реализует
		 событие, происходящее при возникновении ошибки во время выполнения
		 пакета.


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
