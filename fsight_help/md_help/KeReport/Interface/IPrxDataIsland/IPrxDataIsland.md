# IPrxDataIsland

IPrxDataIsland
-


# IPrxDataIsland


Сборка: Report;


## Описание


Интерфейс IPrxDataIsland используется
 для работы с областью данных регламентного отчета.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IPrxDataIsland


## Комментарии


Интерфейс предназначен для работы с [областью данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm),
 которая является устаревшим типом таблицы. Для работы с аналитической
 областью данных используйте интерфейс [IEaxDatArea](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm).


Создание области данных и аналитической области данных приведено в примере
 «[Настройка среза
 данных и области данных](../../Intro/KeReport_Programming_DataArea.htm)».


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdjustMode](IPrxDataIsland.AdjustMode.htm)
		 Свойство AdjustMode
		 определяет способ подгонки размеров ячейки.


		 ![](../../Property_Image.gif)
		 [DataIslands](IPrxDataIsland.DataIslands.htm)
		 Свойство DataIslands
		 возвращает коллекцию областей данных.


		 ![](../../Property_Image.gif)
		 [DataRange](IPrxDataIsland.DataRange.htm)
		 Свойство DataRange
		 возвращает диапазон ячеек, содержащих данные.


		 ![](../../Property_Image.gif)
		 [DataSourceTotalsDefined](IPrxDataIsland.DataSourceTotalsDefined.htm)
		 Свойство DataSourceTotalsDefined
		 определяет, включена ли агрегация в источнике данных среза.


		 ![](../../Property_Image.gif)
		 [IsDrillAllowed](IPrxDataIsland.IsDrillAllowed.htm)
		 Свойство IsDrillAllowed
		 определяет, разрешена ли привязка данных ячеек к срезу.


		 ![](../../Property_Image.gif)
		 [OutputPart](IPrxDataIsland.OutputPart.htm)
		 Свойство OutputPart
		 определяет часть области данных, выводимую на лист.


		 ![](../../Property_Image.gif)
		 [OutputRange](IPrxDataIsland.OutputRange.htm)
		 Свойство OutputRange
		 определяет диапазон среза в формате R1C1, выводимый в области
		 данных.


		 ![](../../Property_Image.gif)
		 [Properties](IPrxDataIsland.Properties.htm)
		 Свойство Properties
		 определяет параметры области данных.


		 ![](../../Property_Image.gif)
		 [Range](IPrxDataIsland.Range.htm)
		 Свойство Range определяет
		 ячейку либо диапазон ячеек, в котором расположена область данных.


		 ![](../../Property_Image.gif)
		 [ReadOnly](IPrxDataIsland.ReadOnly.htm)
		 Свойство ReadOnly определяет
		 возможность сохранения измененных данных в источник.


		 ![](../../Property_Image.gif)
		 [Report](IPrxDataIsland.Report.htm)
		 Свойство Report возвращает
		 владельца - регламентный отчет.


		 ![](../../Property_Image.gif)
		 [Sheet](IPrxDataIsland.Sheet.htm)
		 Свойство Sheet определяет
		 лист регламентного отчета, на котором расположена область данных.


		 ![](../../Property_Image.gif)
		 [Slice](IPrxDataIsland.Slice.htm)
		 Свойство Slice определяет
		 срез данных, который является источником для области данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BeginDrill](IPrxDataIsland.BeginDrill.htm)
		 Метод BeginDrill позволяет
		 получить значение ячейки области данных из матрицы среза с возможностью
		 подмены координаты.


		 ![](../../Sub_Image.gif)
		 [Edit](IPrxDataIsland.Edit.htm)
		 Метод Edit открывает
		 область данных на редактирование.


		 ![](../../Sub_Image.gif)
		 [GetRecentChanges](IPrxDataIsland.GetRecentChanges.htm)
		 Метод GetRecentChanges
		 возвращает матрицу измененных значений области данных регламентного
		 отчета.


		 ![](../../Sub_Image.gif)
		 [MarkAllDataAsChanged](IPrxDataIsland.MarkAllDataAsChanged.htm)
		 Метод MarkAllDataAsChanged
		 устанавливает признак наличия изменений всех данных у текущей
		 области данных.


		 ![](../../Sub_Image.gif)
		 [Save](IPrxDataIsland.Save.htm)
		 Метод Save сохраняет
		 изменения, внесенные в область данных.


		 ![](../../Sub_Image.gif)
		 [Recalc](IPrxDataIsland.Recalc.htm)
		 Метод Recalc вычисляет
		 область данных.


		 ![](../../Sub_Image.gif)
		 [Revert](IPrxDataIsland.Revert.htm)
		 Метод Revert отменяет
		 изменения, внесенные в область данных.


		 ![](../../Sub_Image.gif)
		 [Copy](IPrxDataIsland.Copy.htm)
		 Метод Copy осуществляет
		 копирование области данных.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
