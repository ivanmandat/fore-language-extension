# IMDCalculationInstance

IMDCalculationInstance
-


# IMDCalculationInstance


## Описание


Интерфейс IMDCalculationInstance
 содержит свойства и методы для работы с отстроенным многомерным расчётом
 на сервере БД.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Calculation](IMDCalculationInstance.Calculation.htm)
		 Свойство Calculation
		 возвращает структуру многомерного расчёта на сервере БД.


		 ![](../../Property_Image.gif)
		 [Database](IMDCalculationInstance.Database.htm)
		 Свойство Database возвращает
		 содержимое базы данных, в которой осуществляется многомерный расчёт.


		 ![](../../Property_Image.gif)
		 [Destination](IMDCalculationInstance.Destination.htm)
		 Свойство Destination
		 возвращает данные отстроенного приёмника данных, участвующего
		 в многомерном расчёте на сервере БД.


		 ![](../../Property_Image.gif)
		 [FormulasTableName](IMDCalculationInstance.FormulasTableName.htm)
		 Свойство FormulasTableName
		 возвращает наименование схемы и физическое имя таблицы, являющейся
		 таблицей формул для многомерного расчёта на сервере БД.


		 ![](../../Property_Image.gif)
		 [Sources](IMDCalculationInstance.Sources.htm)
		 Свойство Sources возвращает
		 данные отстроенных источников данных, участвующих в многомерном
		 расчёте на сервере БД.


		 ![](../../Property_Image.gif)
		 [TimeDependent](IMDCalculationInstance.TimeDependent.htm)
		 Свойство TimeDependent
		 возвращает признак зависимости формул от времени.


		 ![](../../Property_Image.gif)
		 [View](IMDCalculationInstance.View.htm)
		 Свойство View возвращает
		 параметры отображения элементов в измерениях указанного куба-источника
		 и в формулах многомерного расчёта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AllFormulas](IMDCalculationInstance.AllFormulas.htm)
		 Метод AllFormulas возвращает
		 итератор по формулам многомерного расчёта.


		 ![](../../Sub_Image.gif)
		 [Apply](IMDCalculationInstance.Apply.htm)
		 Метод Apply применяет
		 параметры расчёта с учетом отметки в измерениях.


		 ![](../../Sub_Image.gif)
		 [Calculate](IMDCalculationInstance.Calculate.htm)
		 Метод Calculate осуществляет
		 многомерный расчёт на сервере БД с учетом установленных параметров
		 расчёта.


		 ![](../../Sub_Image.gif)
		 [CreateApply](IMDCalculationInstance.CreateApply.htm)
		 Метод CreateApply создает
		 объект, осуществляющий управление параметрами многомерного расчёта
		 через отметку в измерениях.


		 ![](../../Sub_Image.gif)
		 [CreateCalculateArgs](IMDCalculationInstance.CreateCalculateArgs.htm)
		 Метод CreateCalculateArgs
		 создает объект, определяющий параметры многомерного расчёта на
		 сервере БД.


		 ![](../../Sub_Image.gif)
		 [CreateFormulas](IMDCalculationInstance.CreateFormulas.htm)
		 Метод CreateFormulas
		 осуществляет создание новой коллекции формул, действующих в различные
		 периоды времени.


		 ![](../../Sub_Image.gif)
		 [CreateFormulasConverter](IMDCalculationInstance.CreateFormulasConverter.htm)
		 Метод CreateFormulasConverter
		 создает объект, предназначенный для конвертации формул из многомерного
		 расчёта в указанный вычисляемый куб.


		 ![](../../Sub_Image.gif)
		 [CreateParser](IMDCalculationInstance.CreateParser.htm)
		 Метод CreateParser
		 создает объект, осуществляющий разбор выражения формулы, заданной
		 в виде символьной строки.


		 ![](../../Sub_Image.gif)
		 [GetProcedureText](IMDCalculationInstance.GetProcedureText.htm)
		 Метод GetProcedureText
		 генерирует текст процедуры, которая может быть использована для
		 запуска выполнения многомерного расчёта на сервере БД.


		 ![](../../Sub_Image.gif)
		 [ElementKeyToText](IMDCalculationInstance.ElementKeyToText.htm)
		 Метод ElementKeyToText
		 возвращает строковое представление элемента.


		 ![](../../Sub_Image.gif)
		 [FindElementEntries](IMDCalculationInstance.FindElementEntries.htm)
		 Метод FindElementEntries
		 осуществляет поиск вхождений элемента в формулы.


		 ![](../../Sub_Image.gif)
		 [ReadFormulas](IMDCalculationInstance.ReadFormulas.htm)
		 Метод ReadFormulas
		 осуществляет чтение формул по указанному элементу.


		 ![](../../Sub_Image.gif)
		 [SaveView](IMDCalculationInstance.SaveView.htm)
		 Метод SaveView сохраняет
		 параметры отображения элементов измерений в редакторе формул многомерного
		 расчёта.


		 ![](../../Sub_Image.gif)
		 [WriteFormulas](IMDCalculationInstance.WriteFormulas.htm)
		 Метод WriteFormulas
		 осуществляет запись формул по указанному элементу.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
