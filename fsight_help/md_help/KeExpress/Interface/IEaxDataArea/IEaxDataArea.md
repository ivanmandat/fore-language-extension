# IEaxDataArea

IEaxDataArea
-


# IEaxDataArea


Сборка: Express;


## Описание


Интерфейс IEaxDataArea используется
 для работы с аналитической областью данных.


## Иерархия наследования


           IEaxDataArea


## Комментарии


Аналитическую область данных можно получить, используя следующие свойства:


	- [IEaxAnalyzer.DataArea](../IEaxAnalyzer/IEaxAnalyzer.DataArea.htm);


	- [IPrxReport.DataArea](KeReport.chm::/Interface/IPrxReport/IPrxReport.DataArea.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalcOnChangedData](IEaxDataArea.CalcOnChangedData.htm)
		 Свойство CalcOnChangedData
		 определяет, используется ли расчёт формул на измененных данных
		 без предварительного сохранения данных в аналитической области.


		 ![](../../Property_Image.gif)
		 [CommentManager](IEaxDataArea.CommentManager.htm)
		 Свойство CommentManager
		 возвращает менеджер комментариев отчёта.


		 ![](../../Property_Image.gif)
		 [ControlInfo](IEaxDataArea.ControlInfo.htm)
		 Свойство ControlInfo
		 возвращает объект, используемый для управления параметрами среза
		 аналитической области.


		 ![](../../Property_Image.gif)
		 [DataSources](IEaxDataArea.DataSources.htm)
		 Свойство DataSources
		 возвращает коллекцию источников данных, на базе которых строятся
		 срезы аналитической области данных.


		 ![](../../Property_Image.gif)
		 [DelayedLoad](IEaxDataArea.DelayedLoad.htm)
		 Свойство DelayedLoad
		 определят возможность отложенной загрузки листов аналитической
		 области.


		 ![](../../Property_Image.gif)
		 [GenerateDimensionParams](IEaxDataArea.GenerateDimensionParams.htm)
		 Свойство GenerateDimensionParams
		 определяет, будет ли использоваться автоматическая генерация параметров
		 измерений для аналитической области данных.


		 ![](../../Property_Image.gif)
		 [Hierarchies](IEaxDataArea.Hierarchies.htm)
		 Свойство Hierarchies
		 возвращает коллекцию альтернативных иерархий аналитической области
		 данных.


		 ![](../../Property_Image.gif)
		 [IsInUpdate](IEaxDataArea.IsInUpdate.htm)
		 Свойство IsInUpdate
		 возвращает признак включенного режима запрета обновления представлений
		 аналитической области данных.


		 ![](../../Property_Image.gif)
		 [Slices](IEaxDataArea.Slices.htm)
		 Свойство Slices возвращает
		 коллекцию срезов аналитической области данных.


		 ![](../../Property_Image.gif)
		 [UseCombinedExecutor](IEaxDataArea.UseCombinedExecutor.htm)
		 Свойство UseCombinedExecutor
		 определяет, используется ли объединение запросов при вычислении
		 источников аналитической области данных.


		 ![](../../Property_Image.gif)
		 [Views](IEaxDataArea.Views.htm)
		 Свойство Views возвращает
		 коллекцию представлений аналитической области данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](IEaxDataArea.BeginUpdate.htm)
		 Метод BeginUpdate блокирует
		 обновление при внесении изменений в настройки аналитической области
		 данных.


		 ![](../../Sub_Image.gif)
		 [Clear](IEaxDataArea.Clear.htm)
		 Метод Clear очищает
		 аналитическую область данных.


		 ![](../../Sub_Image.gif)
		 [EndUpdate](IEaxDataArea.EndUpdate.htm)
		 Метод EndUpdate возобновляет
		 применение изменений, вносимых в настройки аналитической области
		 данных.


		 ![](../../Sub_Image.gif)
		 [Execute](IEaxDataArea.Execute.htm)
		 Метод Execute выполняет
		 построение всех срезов аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [InitMetabase](IEaxDataArea.InitMetabase.htm)
		 Метод InitMetabase
		 инициализирует работу с объектами репозитория.


		 ![](../../Sub_Image.gif)
		 [ResetStyles](IEaxDataArea.ResetStyles.htm)
		 Метод ResetStyles
		 очищает стили представлений аналитической области данных.


См. также:


[Интерфейсы
 сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
