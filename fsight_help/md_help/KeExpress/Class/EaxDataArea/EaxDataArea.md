# EaxDataArea

EaxDataArea
-


# EaxDataArea


Сборка: Express;


## Описание


Класс EaxDataArea используется
 для реализации аналитической области данных.


## Комментарии


Аналитическая область данных - таблица с данными, построенная
 на основе среза данных источника.


## Статические свойства класса, унаследованные от [IEaxDataArea](../../Interface/IEaxDataArea/IEaxDataArea.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalcOnChangedData](../../Interface/IEaxDataArea/IEaxDataArea.CalcOnChangedData.htm)
		 Свойство CalcOnChangedData
		 определяет, используется ли расчёт формул на измененных данных
		 без предварительного сохранения данных в аналитической области.


		 ![](../../Property_Image.gif)
		 [CommentManager](../../Interface/IEaxDataArea/IEaxDataArea.CommentManager.htm)
		 Свойство CommentManager
		 возвращает менеджер комментариев отчёта.


		 ![](../../Property_Image.gif)
		 [ControlInfo](../../Interface/IEaxDataArea/IEaxDataArea.ControlInfo.htm)
		 Свойство ControlInfo
		 возвращает объект, используемый для управления параметрами среза
		 аналитической области.


		 ![](../../Property_Image.gif)
		 [DataSources](../../Interface/IEaxDataArea/IEaxDataArea.DataSources.htm)
		 Свойство DataSources
		 возвращает коллекцию источников данных, на базе которых строятся
		 срезы аналитической области данных.


		 ![](../../Property_Image.gif)
		 [DelayedLoad](../../Interface/IEaxDataArea/IEaxDataArea.DelayedLoad.htm)
		 Свойство DelayedLoad
		 определят возможность отложенной загрузки листов аналитической
		 области.


		 ![](../../Property_Image.gif)
		 [GenerateDimensionParams](../../Interface/IEaxDataArea/IEaxDataArea.GenerateDimensionParams.htm)
		 Свойство GenerateDimensionParams
		 определяет, будет ли использоваться автоматическая генерация параметров
		 измерений для аналитической области данных.


		 ![](../../Property_Image.gif)
		 [Hierarchies](../../Interface/IEaxDataArea/IEaxDataArea.Hierarchies.htm)
		 Свойство Hierarchies
		 возвращает коллекцию альтернативных иерархий аналитической области
		 данных.


		 ![](../../Property_Image.gif)
		 [IsInUpdate](../../Interface/IEaxDataArea/IEaxDataArea.IsInUpdate.htm)
		 Свойство IsInUpdate
		 возвращает признак включенного режима запрета обновления представлений
		 аналитической области данных.


		 ![](../../Property_Image.gif)
		 [Slices](../../Interface/IEaxDataArea/IEaxDataArea.Slices.htm)
		 Свойство Slices возвращает
		 коллекцию срезов аналитической области данных.


		 ![](../../Property_Image.gif)
		 [UseCombinedExecutor](../../Interface/IEaxDataArea/IEaxDataArea.UseCombinedExecutor.htm)
		 Свойство UseCombinedExecutor
		 определяет, используется ли объединение запросов при вычислении
		 источников аналитической области данных.


		 ![](../../Property_Image.gif)
		 [Views](../../Interface/IEaxDataArea/IEaxDataArea.Views.htm)
		 Свойство Views возвращает
		 коллекцию представлений аналитической области данных.


## Статические методы класса, унаследованные от [IEaxDataArea](../../Interface/IEaxDataArea/IEaxDataArea.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](../../Interface/IEaxDataArea/IEaxDataArea.BeginUpdate.htm)
		 Метод BeginUpdate блокирует
		 обновление при внесении изменений в настройки аналитической области
		 данных.


		 ![](../../Sub_Image.gif)
		 [Clear](../../Interface/IEaxDataArea/IEaxDataArea.Clear.htm)
		 Метод Clear очищает
		 аналитическую область данных.


		 ![](../../Sub_Image.gif)
		 [EndUpdate](../../Interface/IEaxDataArea/IEaxDataArea.EndUpdate.htm)
		 Метод EndUpdate возобновляет
		 применение изменений, вносимых в настройки аналитической области
		 данных.


		 ![](../../Sub_Image.gif)
		 [Execute](../../Interface/IEaxDataArea/IEaxDataArea.Execute.htm)
		 Метод Execute выполняет
		 построение всех срезов аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [InitMetabase](../../Interface/IEaxDataArea/IEaxDataArea.InitMetabase.htm)
		 Метод InitMetabase
		 инициализирует работу с объектами репозитория.


		 ![](../../Sub_Image.gif)
		 [ResetStyles](../../Interface/IEaxDataArea/IEaxDataArea.ResetStyles.htm)
		 Метод ResetStyles
		 очищает стили представлений аналитической области данных.


См. также:


[Классы
 сборки Express](../KeExpress_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
