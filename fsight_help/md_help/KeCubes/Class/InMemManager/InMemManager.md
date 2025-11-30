# InMemManager

InMemManager
-


# InMemManager


Сборка: Cubes;


## Описание


Класс InMemManager реализует
 менеджер для работы с кешем In-Memory.


## Свойства объекта класса, унаследованные от [IInMemManager](../../Interface/IInMemManager/IInMemManager.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [SharedMemory](../../Interface/IInMemManager/IInMemManager.SharedMemory.htm)
		 Свойство SharedMemory
		 возвращает объем используемой отображаемой памяти в байтах.


		 ![](../../Property_Image.gif)
		 [StoredMemory](../../Interface/IInMemManager/IInMemManager.StoredMemory.htm)
		 Свойство StoredMemory
		 возвращает объем места на диске в байтах, занятого кешем.


		 ![](../../Property_Image.gif)
		 [UseCachedDimensions](../../Interface/IInMemManager/IInMemManager.UseCachedDimensions.htm)
		 Свойство UseCachedDimensions
		 возвращает признак использования кеша In-Memory при работе со
		 справочниками.


		 ![](../../Property_Image.gif)
		 [UseInMem](../../Interface/IInMemManager/IInMemManager.UseInMem.htm)
		 Свойство UseInMem возвращает
		 признак использования кеша In-Memory при работе с данными кубов
		 репозитория.


## Методы объекта класса, унаследованные от [IInMemManager](../../Interface/IInMemManager/IInMemManager.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CanCacheDimension](../../Interface/IInMemManager/IInMemManager.CanCacheDimension.htm)
		 Метод CanCacheDimension
		 осуществляет проверку на возможность кеширования данных указанного
		 справочника.


		 ![](../../Sub_Image.gif)
		 [CheckHasDimension](../../Interface/IInMemManager/IInMemManager.CheckHasDimension.htm)
		 Метод CheckHasDimension
		 проверяет наличие кешированных данных для указанного справочника
		 репозитория.


		 ![](../../Sub_Image.gif)
		 [CheckHasMatrix](../../Interface/IInMemManager/IInMemManager.CheckHasMatrix.htm)
		 Метод CheckHasMatrix
		 осуществляет проверку и возвращает наличие в кеше кешированных
		 данных для указанного варианта отображения куба.


		 ![](../../Sub_Image.gif)
		 [ClearCachedData](../../Interface/IInMemManager/IInMemManager.ClearCachedData.htm)
		 Метод ClearCachedData
		 удаляет из кеша все данные, связанные с указанным кубом.


		 ![](../../Sub_Image.gif)
		 [GetDimension](../../Interface/IInMemManager/IInMemManager.GetDimension.htm)
		 Метод GetDimension
		 возвращает данные указанного справочника из кеша.


		 ![](../../Sub_Image.gif)
		 [GetMatrix](../../Interface/IInMemManager/IInMemManager.GetMatrix.htm)
		 Метод GetMatrix возвращает
		 матрицу с данными из кеша в соответствии с заданными параметрами
		 расчёта куба.


		 ![](../../Sub_Image.gif)
		 [PreloadMatrix](../../Interface/IInMemManager/IInMemManager.PreloadMatrix.htm)
		 Метод PreloadMatrix
		 загружает кешированные данные указанного варианта отображения
		 куба в оперативную память.


		 ![](../../Sub_Image.gif)
		 [PrepareDimension](../../Interface/IInMemManager/IInMemManager.PrepareDimension.htm)
		 Метод PrepareDimension
		 кеширует данные указанного справочника.


		 ![](../../Sub_Image.gif)
		 [PrepareMatrix](../../Interface/IInMemManager/IInMemManager.PrepareMatrix.htm)
		 Метод PrepareMatrix
		 для указанного варианта отображения куба отстраивает матрицу,
		 которая будет сохранена в кеш.


		 ![](../../Sub_Image.gif)
		 [PrepareMatrixPartial](../../Interface/IInMemManager/IInMemManager.PrepareMatrixPartial.htm)
		 Метод PrepareMatrixPartial
		 для указанного варианта отображения куба в соответствии с заданной
		 отметкой отстраивает матрицу, которая будет сохранена в кеш.


		 ![](../../Sub_Image.gif)
		 [ResetDimension](../../Interface/IInMemManager/IInMemManager.ResetDimension.htm)
		 Метод ResetDimension
		 удаляет из кеша данные указанного справочника.


		 ![](../../Sub_Image.gif)
		 [ResetMatrix](../../Interface/IInMemManager/IInMemManager.ResetMatrix.htm)
		 Метод ResetMatrix удаляет
		 из кеша матрицу с данными для указанного варианта отображения
		 куба.


		 ![](../../Sub_Image.gif)
		 [UpdateBySelection](../../Interface/IInMemManager/IInMemManager.UpdateBySelection.htm)
		 Метод UpdateBySelection
		 осуществляет обновление данных в кеше в соответствии с заданными
		 параметрами.


См. также:


[Классы
 сборки Cubes](../KeCubes_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
