# IEaxDataSources

IEaxDataSources
-


# IEaxDataSources


Сборка: Express;


## Описание


Интерфейс IEaxDataSources содержит
 свойства и методы коллекции источников данных экспресс-отчёта.


## Иерархия


           IEaxDataSources


## Комментарии


При составлении экспресс-отчёта на базе нескольких источников данных,
 создаётся виртуальный куб, включающий в себя все источники. На базе данного
 виртуального куба будет отстраиваться экспресс-отчёт.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ControlInfo](IEaxDataSources.ControlInfo.htm)
		 Свойство ControlInfo
		 возвращает объект, содержащий информацию об источниках данных.


		 ![](../../Property_Image.gif)
		 [Count](IEaxDataSources.Count.htm)
		 Свойство Count возвращает
		 количество источников данных экспресс-отчёта.


		 ![](../../Property_Image.gif)
		 [DisplaySourcesNames](IEaxDataSources.DisplaySourcesNames.htm)
		 Свойство DisplaySourcesNames
		 определяет признак отображения названий источников перед наименованиями
		 элементов в шапке/боковике таблицы.


		 ![](../../Property_Image.gif)
		 [ForcedCommonDim](IEaxDataSources.ForcedCommonDim.htm)
		 Свойство ForcedCommonDim
		 определяет признак принудительного переноса частного измерения
		 в общие.


		 ![](../../Property_Image.gif)
		 [ForcedCommonDimElemToFill](IEaxDataSources.ForcedCommonDimElemToFill.htm)
		 Свойство ForcedCommonDimElemToFill
		 определяет элемент частного измерения, заполняемый данными из
		 источника без этого измерения.


		 ![](../../Property_Image.gif)
		 [Item](IEaxDataSources.Item.htm)
		 Свойство Item возвращает
		 объект, содержащий источник данных экспресс-отчёта.


		 ![](../../Property_Image.gif)
		 [SeparateParameters](IEaxDataSources.SeparateParameters.htm)
		 Свойство SeparateParameters
		 определяет признак создания отдельного параметра в виртуальном
		 кубе на каждый параметр источника.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IEaxDataSources.Add.htm)
		 Метод Add осуществляет
		 добавление источника данных в экспресс-отчёт.


		 ![](../../Sub_Image.gif)
		 [AddDescriptor](IEaxDataSources.AddDescriptor.htm)
		 Метод AddDescriptor
		 осуществляет добавление источника данных в экспресс-отчёт по описанию
		 объекта в репозитории.


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](IEaxDataSources.BeginUpdate.htm)
		 Метод BeginUpdate отключает
		 любую перерисовку коллекции источников данных.


		 ![](../../Sub_Image.gif)
		 [CanForcedCommonDim](IEaxDataSources.CanForcedCommonDim.htm)
		 Метод CanForcedCommonDim
		 возвращает признак возможности принудительного переноса частного
		 измерения в общие.


		 ![](../../Sub_Image.gif)
		 [Clear](IEaxDataSources.Clear.htm)
		 Метод Clear осуществляет
		 удаление всех источников из коллекции источников данных экспресс-отчёта.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IEaxDataSources.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск источника по ключу в коллекции источников данных.


		 ![](../../Sub_Image.gif)
		 [EndUpdate](IEaxDataSources.EndUpdate.htm)
		 Метод EndUpdate возобновляет
		 перерисовку коллекции источников данных.


		 ![](../../Sub_Image.gif)
		 [Move](IEaxDataSources.Move.htm)
		 Метод Move осуществляет
		 перемещение источника данных в коллекции.


		 ![](../../Sub_Image.gif)
		 [RecreateVirtualCubeParams](IEaxDataSources.RecreateVirtualCubeParams.htm)
		 Метод RecreateVirtualCubeParams
		 пересоздаёт параметры виртуального куба.


		 ![](../../Sub_Image.gif)
		 [Refresh](IEaxDataSources.Refresh.htm)
		 Метод Refresh осуществляет
		 обновление коллекции источников данных и таблицы данных экспресс-отчёта.


		 ![](../../Sub_Image.gif)
		 [Remove](IEaxDataSources.Remove.htm)
		 Метод Remove осуществляет
		 удаление источника данных.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IEaxDataSources.RemoveByKey.htm)
		 Метод RemoveByKey осуществляет
		 удаление источника данных по ключу из коллекции источников данных
		 экспресс-отчёта.


См. также:


[Интерфейсы сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
