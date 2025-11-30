# IMsAttributesFormulasList

IMsAttributesFormulasList
-


# IMsAttributesFormulasList


Сборка: Ms;


## Описание


Интерфейс IMsAttributesFormulasList
 содержит свойства и методы для работы с коллекцией методов расчёта дополнительных
 атрибутов модели по формулам.


## Комментарии


Коллекция используется, если модель содержится в контейнере моделирования
 базы данных временных рядов. Формулы в коллекции предназначены для расчёта
 дополнительных атрибутов показателей. Каждый элемент коллекции реализован
 интерфейсом [IMsFormulaTransform](../IMsFormulaTransform/IMsFormulaTransform.htm)
 и позволяет настроить параметры расчёта атрибута.


Расчёт дополнительных атрибутов возможен только в задаче трансформации.
 Дополнительные атрибуты - это атрибуты ряда, присутствующие в базе данных
 временных рядов, но не являющиеся обязательными для однозначной идентификации
 ряда.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMsAttributesFormulasList.Count.htm)
		 Свойство Count возвращает
		 количество методов расчёта в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](IMsAttributesFormulasList.Item.htm)
		 Свойство Item возвращает
		 метод расчёта из коллекции по его индексу.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IMsAttributesFormulasList.Add.htm)
		 Метод Add добавляет
		 новый метод расчёта в коллекцию.


		 ![](../../Sub_Image.gif)
		 [Clear](IMsAttributesFormulasList.Clear.htm)
		 Метод Clear очищает
		 коллекцию методов.


		 ![](../../Sub_Image.gif)
		 [FindByAttributeId](IMsAttributesFormulasList.FindByAttributeId.htm)
		 Метод FindByAttributeId
		 осуществляет поиск метода по атрибуту, который он рассчитывает.


		 ![](../../Sub_Image.gif)
		 [IndexOf](IMsAttributesFormulasList.IndexOf.htm)
		 Метод IndexOf возвращает
		 индекс указанного метода.


		 ![](../../Sub_Image.gif)
		 [Remove](IMsAttributesFormulasList.Remove.htm)
		 Метод Remove удаляет
		 метод расчёта из коллекции по его индексу.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
