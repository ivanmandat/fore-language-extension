# IEaxDataAreaExternalTransformations

IEaxDataAreaExternalTransformations
-


# IEaxDataAreaExternalTransformations


Сборка: Express;


## Описание


Интерфейс IEaxDataAreaExternalTransformations
 предназначен для работы с коллекцией задач моделирования, используемых
 для преобразования данных в срезе данных.


## Иерархия наследования


           IEaxDataAreaExternalTransformations


## Комментарии


Доступ к коллекции предоставляет свойство [IEaxDataAreaPivotSlice.ExternalTransformations](../IEaxDataAreaPivotSlice/IEaxDataAreaPivotSlice.ExternalTransformations.htm).


При работе с задачей моделирования результат расчёта матрицы данных
 должен напрямую передаваться в аналитическую область данных. Для этого
 используйте свойство [IEaxGrid.FillTabSheet](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.FillTabSheet.htm)
 со значением False.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IEaxDataAreaExternalTransformations.Count.htm)
		 Свойство Count возвращает
		 количество задач моделирования, добавленных в коллекцию.


		 ![](../../Property_Image.gif)
		 [Item](IEaxDataAreaExternalTransformations.Item.htm)
		 Свойство Item возвращает
		 настройки задачи моделирования с указанным индексом.


		 ![](../../Property_Image.gif)
		 [RefreshSourcesAfterSave](IEaxDataAreaExternalTransformations.RefreshSourcesAfterSave.htm)
		 Свойство RefreshSourcesAfterSave
		 определяет признак необходимости переоткрыть источники данных
		 после сохранения данных в них.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IEaxDataAreaExternalTransformations.Add.htm)
		 Метод Add добавляет
		 настройки для задачи моделирования.


		 ![](../../Sub_Image.gif)
		 [Clear](IEaxDataAreaExternalTransformations.Clear.htm)
		 Метод Clear удаляет
		 из коллекции все задачи моделирования.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IEaxDataAreaExternalTransformations.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск настроек задачи моделирования по её ключу в репозитории.


		 ![](../../Sub_Image.gif)
		 [IndexOf](IEaxDataAreaExternalTransformations.IndexOf.htm)
		 Метод IndexOf для указанных
		 настроек задачи моделирования возвращает индекс в коллекции.


		 ![](../../Sub_Image.gif)
		 [Move](IEaxDataAreaExternalTransformations.Move.htm)
		 Метод Move перемещает
		 настройки задачи моделирования в коллекции.


		 ![](../../Sub_Image.gif)
		 [Remove](IEaxDataAreaExternalTransformations.Remove.htm)
		 Метод Remove удаляет
		 из коллекции настройки задачи моделирования с указанным индексом.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IEaxDataAreaExternalTransformations.RemoveByKey.htm)
		 Метод RemoveByKey удаляет
		 из коллекции настройки задачи моделирования с указанным ключом.


		 ![](../../Sub_Image.gif)
		 [RemoveObject](IEaxDataAreaExternalTransformations.RemoveObject.htm)
		 Метод RemoveObject
		 удаляет из коллекции указанные настройки задачи моделирования.


См. также:


[Интерфейсы
 сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
