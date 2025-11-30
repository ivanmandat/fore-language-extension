# IDtFieldSplitter

IDtFieldSplitter
-


# IDtFieldSplitter


Сборка: Dt;


## Описание


Интерфейс IDtFieldSplitter предназначен
 для разделения полей источников по заданному разделителю.


## Иерархия наследования


IDtFieldSplitter


## Комментарии


Разделение полей осуществляется по их значениям путём поиска заданного
 разделителя.


Для разделения полей приведите источник, описываемый интерфейсом [IDtProvider](../IDtProvider/IDtProvider.htm),
 к интерфейсу IDtFieldSplitter.
 Источник должен быть [открыт](../IDtObject/IDtObject.Open.htm).
 После выполнения метода [Split](IDtFieldSplitter.Split.htm)
 созданные поля будут доступны в коллекции [Fields](../IDtObject/IDtObject.Fields.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Split](IDtFieldSplitter.Split.htm)


		 Метод Split разбивает
		 значения указанного поля на несколько полей в соответствии с заданным
		 разделителем.


См. также:


[Интерфейсы
 сборки Dt](../KeDt_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
