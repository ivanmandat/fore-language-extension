# IMsFormulaTransform

IMsFormulaTransform
-


# IMsFormulaTransform


Сборка: Ms;


## Описание


Интерфейс IMsFormulaTransform
 предназначен для настройки параметров расчёта модели.


## Иерархия наследования


           IMsFormulaTransform


## Комментарии


Специфика работы с параметрами зависит от метода, выбранного для расчёта
 модели.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalAttributes](IMsFormulaTransform.AdditionalAttributes.htm)
		 Свойство AdditionalAttributes
		 определяет идентификаторы необязательных атрибутов базы данных
		 временных рядов, значения которых должны быть получены при загрузке
		 данных.


		 ![](../../Property_Image.gif)
		 [CalculationDirection](IMsFormulaTransform.CalculationDirection.htm)
		 Свойство CalculationDirection
		 определяет направление поточечного режима расчёта.


		 ![](../../Property_Image.gif)
		 [CalculationOption](IMsFormulaTransform.CalculationOption.htm)
		 Свойство CalculationOption
		 определяет признак применения указанных опций при расчёте модели.


		 ![](../../Property_Image.gif)
		 [CalculationType](IMsFormulaTransform.CalculationType.htm)
		 Свойство CalculationType
		 определяет режим расчёта модели.


		 ![](../../Property_Image.gif)
		 [CalendarMode](IMsFormulaTransform.CalendarMode.htm)
		 Свойство CalendarMode
		 определяет способ расчёта календарных элементов в параметрах модели.


		 ![](../../Property_Image.gif)
		 [DimensionTransparent](IMsFormulaTransform.DimensionTransparent.htm)
		 Свойство DimensionTransparent
		 определяет признак использования общей спецификации расчёта для
		 элементов измерения выходной (моделируемой) переменной.


		 ![](../../Property_Image.gif)
		 [DisplayId](IMsFormulaTransform.DisplayId.htm)
		 Свойство DisplayId
		 определяет вид отображаемой информации в формуле терма.


		 ![](../../Property_Image.gif)
		 [DisplaySettings](IMsFormulaTransform.DisplaySettings.htm)
		 Свойство DisplaySettings
		 определяет режим отображения параметров модели.


		 ![](../../Property_Image.gif)
		 [EquationsFormula](IMsFormulaTransform.EquationsFormula.htm)
		 Свойство EquationsFormula
		 возвращает параметры модели коррекции ошибок.


		 ![](../../Property_Image.gif)
		 [FormulaCount](IMsFormulaTransform.FormulaCount.htm)
		 Свойство FormulaCount
		 возвращает число методов расчёта модели.


		 ![](../../Property_Image.gif)
		 [FormulaItem](IMsFormulaTransform.FormulaItem.htm)
		 Свойство FormulaItem
		 возвращает метод расчёта модели по индексу.


		 ![](../../Property_Image.gif)
		 [Inputs](IMsFormulaTransform.Inputs.htm)
		 Свойство Inputs возвращает
		 коллекцию входных переменных метода.


		 ![](../../Property_Image.gif)
		 [Kind](IMsFormulaTransform.Kind.htm)
		 Свойство Kind определяет
		 тип модели.


		 ![](../../Property_Image.gif)
		 [MetaAttributeFilter](IMsFormulaTransform.MetaAttributeFilter.htm)
		 Свойство MetaAttributeFilter
		 возвращает объект, содержащий фильтр, применяемый к модели.


		 ![](../../Property_Image.gif)
		 [NamingAttributes](IMsFormulaTransform.NamingAttributes.htm)
		 Свойство NamingAttributes
		 определяет список атрибутов, значения которых будут использоваться
		 для отображения элементов измерения в формуле.


		 ![](../../Property_Image.gif)
		 [ObjectList](IMsFormulaTransform.ObjectList.htm)
		 Свойство ObjectList
		 возвращает коллекцию объектов, используемых методом расчёта.


		 ![](../../Property_Image.gif)
		 [OutputPeriod](IMsFormulaTransform.OutputPeriod.htm)
		 Свойство OutputPeriod
		 возвращает параметры периода выгрузки данных.


		 ![](../../Property_Image.gif)
		 [Outputs](IMsFormulaTransform.Outputs.htm)
		 Свойство Outputs возвращает
		 коллекцию выходных переменных метода.


		 ![](../../Property_Image.gif)
		 [Period](IMsFormulaTransform.Period.htm)
		 Свойство Period
		 возвращает период расчёта модели.


		 ![](../../Property_Image.gif)
		 [Series](IMsFormulaTransform.Series.htm)
		 Свойство Series возвращает
		 коллекцию выгружаемых переменных метода.


		 ![](../../Property_Image.gif)
		 [Transform](IMsFormulaTransform.Transform.htm)
		 Свойство Transform
		 возвращает объект, позволяющий настроить параметры метода расчёта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateCalculation](IMsFormulaTransform.CreateCalculation.htm)
		 Метод CreateCalculation
		 создает объект, определяющий параметры, необходимые при расчёте
		 модели с помощью выбранного метода.


		 ![](../../Sub_Image.gif)
		 [CreateCoord](IMsFormulaTransform.CreateCoord.htm)
		 Метод CreateCoord создает
		 объект, содержащий параметры моделируемой переменной, необходимые
		 для расчёта модели.


		 ![](../../Sub_Image.gif)
		 [CreateSelector](IMsFormulaTransform.CreateSelector.htm)
		 Метод CreateSelector
		 создает объект, содержащий свойства для выбора среза переменной,
		 по которому в дальнейшем будет осуществляться настройка метода
		 расчёта.


		 ![](../../Sub_Image.gif)
		 [CreateStringGenerator](IMsFormulaTransform.CreateStringGenerator.htm)
		 Метод CreateStringGenerator
		 создает генератор строкового представления параметров расчёта.


		 ![](../../Sub_Image.gif)
		 [CreateTermInfo](IMsFormulaTransform.CreateTermInfo.htm)
		 Метод CreateTermInfo
		 создает параметр терма.


		 ![](../../Sub_Image.gif)
		 [LoadFromXml](IMsFormulaTransform.LoadFromXml.htm)
		 Метод LoadFromXml загружает
		 параметры модели из Xml.


		 ![](../../Sub_Image.gif)
		 [RefreshAttributesStructure](IMsFormulaTransform.RefreshAttributesStructure.htm)
		 Метод RefreshAttributesStructure
		 обновляет структуру атрибутов модели.


		 ![](../../Sub_Image.gif)
		 [SaveToXml](IMsFormulaTransform.SaveToXml.htm)
		 Метод SaveToXml сохраняет
		 параметры модели в Xml.


		 ![](../../Sub_Image.gif)
		 [TermToText](IMsFormulaTransform.TermToText.htm)


		 Метод TermToText возвращает
		 наименование терма, которое отображается в списке термов.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
