# IInMemManager

IInMemManager
-


# IInMemManager


Сборка: Cubes;


## Описание


Интерфейс IInMemManager содержит
 свойства и методы для работы с кешем In-Memory.


## Иерархия наследования


IInMemManager


## Комментарии


Механизм In-Memory используется для ускорения работы с данными при многопользовательской
 работе с кубами в репозитории. Более подробно читайте в статье «[Кеширование
 (In-Memory)](UiNav.chm::/02_Navigator/UiNav_Cache.htm#data_cache)».


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [SharedMemory](IInMemManager.SharedMemory.htm)
		 Свойство SharedMemory
		 возвращает объем используемой отображаемой памяти в байтах.


		 ![](../../Property_Image.gif)
		 [StoredMemory](IInMemManager.StoredMemory.htm)
		 Свойство StoredMemory
		 возвращает объем места на диске в байтах, занятого кешем.


		 ![](../../Property_Image.gif)
		 [UseCachedDimensions](IInMemManager.UseCachedDimensions.htm)
		 Свойство UseCachedDimensions
		 возвращает признак использования кеша In-Memory при работе со
		 справочниками.


		 ![](../../Property_Image.gif)
		 [UseInMem](IInMemManager.UseInMem.htm)
		 Свойство UseInMem возвращает
		 признак использования кеша In-Memory при работе с данными кубов
		 репозитория.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CanCacheDimension](IInMemManager.CanCacheDimension.htm)
		 Метод CanCacheDimension
		 осуществляет проверку на возможность кеширования данных указанного
		 справочника.


		 ![](../../Sub_Image.gif)
		 [CheckHasDimension](IInMemManager.CheckHasDimension.htm)
		 Метод CheckHasDimension
		 проверяет наличие кешированных данных для указанного справочника
		 репозитория.


		 ![](../../Sub_Image.gif)
		 [CheckHasMatrix](IInMemManager.CheckHasMatrix.htm)
		 Метод CheckHasMatrix
		 осуществляет проверку и возвращает наличие в кеше кешированных
		 данных для указанного варианта отображения куба.


		 ![](../../Sub_Image.gif)
		 [ClearCachedData](IInMemManager.ClearCachedData.htm)
		 Метод ClearCachedData
		 удаляет из кеша все данные, связанные с указанным кубом.


		 ![](../../Sub_Image.gif)
		 [GetDimension](IInMemManager.GetDimension.htm)
		 Метод GetDimension
		 возвращает данные указанного справочника из кеша.


		 ![](../../Sub_Image.gif)
		 [GetMatrix](IInMemManager.GetMatrix.htm)
		 Метод GetMatrix возвращает
		 матрицу с данными из кеша в соответствии с заданными параметрами
		 расчёта куба.


		 ![](../../Sub_Image.gif)
		 [PreloadMatrix](IInMemManager.PreloadMatrix.htm)
		 Метод PreloadMatrix
		 загружает кешированные данные указанного варианта отображения
		 куба в оперативную память.


		 ![](../../Sub_Image.gif)
		 [PrepareDimension](IInMemManager.PrepareDimension.htm)
		 Метод PrepareDimension
		 кеширует данные указанного справочника.


		 ![](../../Sub_Image.gif)
		 [PrepareMatrix](IInMemManager.PrepareMatrix.htm)
		 Метод PrepareMatrix
		 для указанного варианта отображения куба отстраивает матрицу,
		 которая будет сохранена в кеш.


		 ![](../../Sub_Image.gif)
		 [PrepareMatrixPartial](IInMemManager.PrepareMatrixPartial.htm)
		 Метод PrepareMatrixPartial
		 для указанного варианта отображения куба в соответствии с заданной
		 отметкой отстраивает матрицу, которая будет сохранена в кеш.


		 ![](../../Sub_Image.gif)
		 [ResetDimension](IInMemManager.ResetDimension.htm)
		 Метод ResetDimension
		 удаляет из кеша данные указанного справочника.


		 ![](../../Sub_Image.gif)
		 [ResetMatrix](IInMemManager.ResetMatrix.htm)
		 Метод ResetMatrix удаляет
		 из кеша матрицу с данными для указанного варианта отображения
		 куба.


		 ![](../../Sub_Image.gif)
		 [UpdateBySelection](IInMemManager.UpdateBySelection.htm)
		 Метод UpdateBySelection
		 осуществляет обновление данных в кеше в соответствии с заданными
		 параметрами.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
