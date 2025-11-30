# MsFormulaTransform

MsFormulaTransform
-


# MsFormulaTransform


Сборка: Ms;


## Описание


Класс MsFormulaTransform предназначен
 для настройки параметров расчёта модели.


## Комментарии


Специфика работы с параметрами зависит от метода, выбранного для расчёта
 модели.


## Свойства, унаследованные от [IMsFormulaTransform](../../Interface/IMsFormulaTransform/IMsFormulaTransform.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalAttributes](../../Interface/IMsFormulaTransform/IMsFormulaTransform.AdditionalAttributes.htm)
		 Свойство AdditionalAttributes
		 определяет идентификаторы необязательных атрибутов базы данных
		 временных рядов, значения которых должны быть получены при загрузке
		 данных.


		 ![](../../Property_Image.gif)
		 [CalculationDirection](../../Interface/IMsFormulaTransform/IMsFormulaTransform.CalculationDirection.htm)
		 Свойство CalculationDirection
		 определяет направление поточечного режима расчёта.


		 ![](../../Property_Image.gif)
		 [CalculationOption](../../Interface/IMsFormulaTransform/IMsFormulaTransform.CalculationOption.htm)
		 Свойство CalculationOption
		 определяет признак применения указанных опций при расчёте модели.


		 ![](../../Property_Image.gif)
		 [CalculationType](../../Interface/IMsFormulaTransform/IMsFormulaTransform.CalculationType.htm)
		 Свойство CalculationType
		 определяет режим расчёта модели.


		 ![](../../Property_Image.gif)
		 [CalendarMode](../../Interface/IMsFormulaTransform/IMsFormulaTransform.CalendarMode.htm)
		 Свойство CalendarMode
		 определяет способ расчёта календарных элементов в параметрах модели.


		 ![](../../Property_Image.gif)
		 [DimensionTransparent](../../Interface/IMsFormulaTransform/IMsFormulaTransform.DimensionTransparent.htm)
		 Свойство DimensionTransparent
		 определяет признак использования общей спецификации расчёта для
		 элементов измерения выходной (моделируемой) переменной.


		 ![](../../Property_Image.gif)
		 [DisplayId](../../Interface/IMsFormulaTransform/IMsFormulaTransform.DisplayId.htm)
		 Свойство DisplayId
		 определяет вид отображаемой информации в формуле терма.


		 ![](../../Property_Image.gif)
		 [DisplaySettings](../../Interface/IMsFormulaTransform/IMsFormulaTransform.DisplaySettings.htm)
		 Свойство DisplaySettings
		 определяет режим отображения параметров модели.


		 ![](../../Property_Image.gif)
		 [EquationsFormula](../../Interface/IMsFormulaTransform/IMsFormulaTransform.EquationsFormula.htm)
		 Свойство EquationsFormula
		 возвращает параметры модели коррекции ошибок.


		 ![](../../Property_Image.gif)
		 [FormulaCount](../../Interface/IMsFormulaTransform/IMsFormulaTransform.FormulaCount.htm)
		 Свойство FormulaCount
		 возвращает число методов расчёта модели.


		 ![](../../Property_Image.gif)
		 [FormulaItem](../../Interface/IMsFormulaTransform/IMsFormulaTransform.FormulaItem.htm)
		 Свойство FormulaItem
		 возвращает метод расчёта модели по индексу.


		 ![](../../Property_Image.gif)
		 [Inputs](../../Interface/IMsFormulaTransform/IMsFormulaTransform.Inputs.htm)
		 Свойство Inputs возвращает
		 коллекцию входных переменных метода.


		 ![](../../Property_Image.gif)
		 [Kind](../../Interface/IMsFormulaTransform/IMsFormulaTransform.Kind.htm)
		 Свойство Kind определяет
		 тип модели.


		 ![](../../Property_Image.gif)
		 [MetaAttributeFilter](../../Interface/IMsFormulaTransform/IMsFormulaTransform.MetaAttributeFilter.htm)
		 Свойство MetaAttributeFilter
		 возвращает объект, содержащий фильтр, применяемый к модели.


		 ![](../../Property_Image.gif)
		 [NamingAttributes](../../Interface/IMsFormulaTransform/IMsFormulaTransform.NamingAttributes.htm)
		 Свойство NamingAttributes
		 определяет список атрибутов, значения которых будут использоваться
		 для отображения элементов измерения в формуле.


		 ![](../../Property_Image.gif)
		 [ObjectList](../../Interface/IMsFormulaTransform/IMsFormulaTransform.ObjectList.htm)
		 Свойство ObjectList
		 возвращает коллекцию объектов, используемых методом расчёта.


		 ![](../../Property_Image.gif)
		 [OutputPeriod](../../Interface/IMsFormulaTransform/IMsFormulaTransform.OutputPeriod.htm)
		 Свойство OutputPeriod
		 возвращает параметры периода выгрузки данных.


		 ![](../../Property_Image.gif)
		 [Outputs](../../Interface/IMsFormulaTransform/IMsFormulaTransform.Outputs.htm)
		 Свойство Outputs возвращает
		 коллекцию выходных переменных метода.


		 ![](../../Property_Image.gif)
		 [Period](../../Interface/IMsFormulaTransform/IMsFormulaTransform.Period.htm)
		 Свойство Period
		 возвращает период расчёта модели.


		 ![](../../Property_Image.gif)
		 [Series](../../Interface/IMsFormulaTransform/IMsFormulaTransform.Series.htm)
		 Свойство Series возвращает
		 коллекцию выгружаемых переменных метода.


		 ![](../../Property_Image.gif)
		 [Transform](../../Interface/IMsFormulaTransform/IMsFormulaTransform.Transform.htm)
		 Свойство Transform
		 возвращает объект, позволяющий настроить параметры метода расчёта.


## Методы, унаследованные от [IMsFormulaTransform](../../Interface/IMsFormulaTransform/IMsFormulaTransform.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateCalculation](../../Interface/IMsFormulaTransform/IMsFormulaTransform.CreateCalculation.htm)
		 Метод CreateCalculation
		 создает объект, определяющий параметры, необходимые при расчёте
		 модели с помощью выбранного метода.


		 ![](../../Sub_Image.gif)
		 [CreateCoord](../../Interface/IMsFormulaTransform/IMsFormulaTransform.CreateCoord.htm)
		 Метод CreateCoord создает
		 объект, содержащий параметры моделируемой переменной, необходимые
		 для расчёта модели.


		 ![](../../Sub_Image.gif)
		 [CreateSelector](../../Interface/IMsFormulaTransform/IMsFormulaTransform.CreateSelector.htm)
		 Метод CreateSelector
		 создает объект, содержащий свойства для выбора среза переменной,
		 по которому в дальнейшем будет осуществляться настройка метода
		 расчёта.


		 ![](../../Sub_Image.gif)
		 [CreateStringGenerator](../../Interface/IMsFormulaTransform/IMsFormulaTransform.CreateStringGenerator.htm)
		 Метод CreateStringGenerator
		 создает генератор строкового представления параметров расчёта.


		 ![](../../Sub_Image.gif)
		 [CreateTermInfo](../../Interface/IMsFormulaTransform/IMsFormulaTransform.CreateTermInfo.htm)
		 Метод CreateTermInfo
		 создает параметр терма.


		 ![](../../Sub_Image.gif)
		 [LoadFromXml](../../Interface/IMsFormulaTransform/IMsFormulaTransform.LoadFromXml.htm)
		 Метод LoadFromXml загружает
		 параметры модели из Xml.


		 ![](../../Sub_Image.gif)
		 [RefreshAttributesStructure](../../Interface/IMsFormulaTransform/IMsFormulaTransform.RefreshAttributesStructure.htm)
		 Метод RefreshAttributesStructure
		 обновляет структуру атрибутов модели.


		 ![](../../Sub_Image.gif)
		 [SaveToXml](../../Interface/IMsFormulaTransform/IMsFormulaTransform.SaveToXml.htm)
		 Метод SaveToXml сохраняет
		 параметры модели в Xml.


		 ![](../../Sub_Image.gif)
		 [TermToText](../../Interface/IMsFormulaTransform/IMsFormulaTransform.TermToText.htm)


		 Метод TermToText возвращает
		 наименование терма, которое отображается в списке термов.


См. также:


[Классы сборки Ms](../KeMs_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
