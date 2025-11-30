# IAdhocReport

IAdhocReport
-


# IAdhocReport


Сборка: Adhoc;


## Описание


Интерфейс IAdhocReport содержит
 свойства и методы инструмента «[Аналитическая
 панель](UIAdhoc.chm::/UiAdhoc_Purpose.htm)».


## Иерархия наследования


           IAdhocReport


## Комментарии


Для работы с источником данных аналитической панели используйте свойства
 интерфейса [IAdhocDataSourceObject](../IAdhocDataSourceObject/IAdhocDataSourceObject.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActiveSlide](IAdhocReport.ActiveSlide.htm)
		 Свойство ActiveSlide
		 определяет активный слайд аналитической панели.


		 ![](../../Property_Image.gif)
		 [AllowEditData](IAdhocReport.AllowEditData.htm)
		 Свойство AllowEditData
		 определяет, разрешено ли редактирование данных в визуализаторе
		 «[Таблица](UiAdhoc.chm::/Blocks/Gadgets/Table.htm)».


		 ![](../../Property_Image.gif)
		 [AutoUpdateSources](IAdhocReport.AutoUpdateSources.htm)
		 Свойство AutoUpdateSources
		 определяет, используется ли автоматическое обновление в аналитической
		 панели.


		 ![](../../Property_Image.gif)
		 [BinaryData](IAdhocReport.BinaryData.htm)
		 Свойство BinaryData
		 возвращает бинарные данные аналитической панели.


		 ![](../../Property_Image.gif)
		 [BulkSettings](IAdhocReport.BulkSettings.htm)
		 Свойство BulkSettings
		 возвращает параметры пакетных операций, выполняемых с аналитической
		 панелью.


		 ![](../../Property_Image.gif)
		 [CalcOnChangedData](IAdhocReport.CalcOnChangedData.htm)
		 Свойство CalcOnChangedData
		 определяет, используется ли [расчёт
		 формул](UiAnalyticalArea.chm::/Working_with_table_data/FormulaCalculation.htm) на измененных данных без предварительного
		 сохранения данных в аналитической панели.


		 ![](../../Property_Image.gif)
		 [DataSourceLinkedObjects](IAdhocReport.DataSourceLinkedObjects.htm)
		 Свойство DataSourceLinkedObjects
		 возвращает набор связанных источников данных аналитической панели.


		 ![](../../Property_Image.gif)
		 [DataSourceObjects](IAdhocReport.DataSourceObjects.htm)
		 Свойство DataSourceObjects
		 возвращает набор источников данных для визуализаторов аналитической
		 панели.


		 ![](../../Property_Image.gif)
		 [DocumentMode](IAdhocReport.DocumentMode.htm)
		 Свойство DocumentMode
		 определяет тип аналитической панели.


		 ![](../../Property_Image.gif)
		 [Id](IAdhocReport.Id.htm)
		 Свойство Id определяет
		 идентификатор аналитической панели.


		 ![](../../Property_Image.gif)
		 [IsDataChanged](IAdhocReport.IsDataChanged.htm)
		 Свойство IsDataChanged
		 определяет, изменены ли данные в визуализаторе «[Таблица](UiAdhoc.chm::/Blocks/Gadgets/Table.htm)».


		 ![](../../Property_Image.gif)
		 [IsDirty](IAdhocReport.IsDirty.htm)
		 Свойство IsDirty определяет,
		 присутствуют ли изменения в параметрах аналитической панели.


		 ![](../../Property_Image.gif)


		 [InnerStyleSheet](IAdhocReport.InnerStyleSheet.htm)


		 Свойство InnerStyleSheet
		 возвращает внутреннюю таблицу стилей.


		 ![](../../Property_Image.gif)
		 [MetabaseObject](IAdhocReport.MetabaseObject.htm)
		 Свойство MetabaseObject
		 возвращает аналитическую панель как объект репозитория, реализуемый
		 интерфейсом [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm).


		 ![](../../Property_Image.gif)
		 [PageSettings](IAdhocReport.PageSettings.htm)
		 Свойство PageSettings
		 возвращает настройки страницы для печати аналитической панели.


		 ![](../../Property_Image.gif)
		 [Resources](IAdhocReport.Resources.htm)
		 Свойство Resources
		 определяет объект «Ресурсы», используемый для хранения переводов
		 аналитической панели.


		 ![](../../Property_Image.gif)
		 [Slides](IAdhocReport.Slides.htm)
		 Свойство Slides возвращает
		 коллекцию слайдов.


		 ![](../../Property_Image.gif)
		 [StyleSheet](IAdhocReport.StyleSheet.htm)
		 Свойство StyleSheet
		 определяет внешнюю таблицу стилей.


		 ![](../../Property_Image.gif)
		 [SupportMultyLanguage](IAdhocReport.SupportMultyLanguage.htm)
		 Свойство SupportMultyLanguage
		 определяет, является ли аналитическая панель мультиязычной.


		 ![](../../Property_Image.gif)
		 [Synchronization](IAdhocReport.Synchronization.htm)
		 Свойство Synchronization
		 возвращает параметры синхронизации измерений аналитической панели.


		 ![](../../Property_Image.gif)
		 [UndoRedo](IAdhocReport.UndoRedo.htm)
		 Свойство UndoRedo определяет
		 параметры стека изменений (отмены/повтора) аналитической панели.


		 ![](../../Property_Image.gif)
		 [UpdateSettings](IAdhocReport.UpdateSettings.htm)
		 Свойство UpdateSettings
		 возвращает настройки параметров автообновления аналитической панели.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddDataSourceLinkedObject](IAdhocReport.AddDataSourceLinkedObject.htm)


		 Метод AddDataSourceLinkedObject
		 добавляет блок типа «Экспресс-отчет»,
		 «Регламентный отчет»
		 или «Аналитическая панель».


		 ![](../../Sub_Image.gif)
		 [AddDataSourceObject](IAdhocReport.AddDataSourceObject.htm)
		 Метод AddDataSourceObject
		 добавляет источник данных для визуализаторов.


		 ![](../../Sub_Image.gif)
		 [AddNewDataSourceObject](IAdhocReport.AddNewDataSourceObject.htm)
		 Метод AddNewDataSourceObject
		 создает и добавляет источник данных.


		 ![](../../Sub_Image.gif)
		 [CopyDataSourceObject](IAdhocReport.CopyDataSourceObject.htm)
		 Метод CopyDataSourceObject
		 создаёт копию указанного источника данных.


		 ![](../../Sub_Image.gif)
		 [CopyDataSourceObjectEx](IAdhocReport.CopyDataSourceObjectEx.htm)
		 Метод CopyDataSourceObjectEx
		 копирует указанный источник данных, создавая для копии идентификатор,
		 заданный пользователем.


		 ![](../../Sub_Image.gif)
		 [CopyFrom](IAdhocReport.CopyFrom.htm)
		 Метод CopyFrom копирует
		 параметры указанной аналитической панели в текущую панель.


		 ![](../../Sub_Image.gif)
		 [LoadFromFile](IAdhocReport.LoadFromFile.htm)
		 Метод LoadFromFile
		 осуществляет загрузку аналитической панели из указанного файла
		 формата PPDASH.


		 ![](../../Sub_Image.gif)
		 [LoadFromStream](IAdhocReport.LoadFromStream.htm)
		 Метод LoadFromStream
		 осуществляет загрузку аналитической панели из потока.


		 ![](../../Sub_Image.gif)
		 [LoadFromXML](IAdhocReport.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек аналитической панели из указанного XML-файл.


		 ![](../../Sub_Image.gif)
		 [Refresh](IAdhocReport.Refresh.htm)
		 Метод Refresh
		 обновляет указанные источники данных аналитической панели.


		 ![](../../Sub_Image.gif)
		 [RefreshDataSources](IAdhocReport.RefreshDataSources.htm)
		 Метод RefreshDataSources
		 обновляет метаданные указанного источника данных аналитической
		 панели.


		 ![](../../Sub_Image.gif)
		 [SaveData](IAdhocReport.SaveData.htm)
		 Метод SaveData сохраняет
		 данные, измененные в визуализаторе «[Таблица](UiAdhoc.chm::/Blocks/Gadgets/Table.htm)».


		 ![](../../Sub_Image.gif)
		 [SaveToCombinedXML](IAdhocReport.SaveToCombinedXML.htm)
		 Метод SaveToCombinedXML
		 сохраняет настройки аналитической панели со слайдами в указанный
		 XML-файл.


		 ![](../../Sub_Image.gif)
		 [SaveToFile](IAdhocReport.SaveToFile.htm)
		 Метод SaveToFile осуществляет
		 сохранение аналитической панели в указанный файл формата PPDASH.


		 ![](../../Sub_Image.gif)
		 [SaveToStream](IAdhocReport.SaveToStream.htm)
		 Метод SaveToStream
		 осуществляет сохранение аналитической панели в поток.


		 ![](../../Sub_Image.gif)
		 [SaveToXML](IAdhocReport.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 сохранение настроек аналитической панели в указанный XML-файл.


См. также:


[Интерфейсы
 сборки Adhoc](../KeAdHoc_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
