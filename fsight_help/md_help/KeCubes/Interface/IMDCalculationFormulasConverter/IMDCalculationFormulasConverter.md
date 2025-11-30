# IMDCalculationFormulasConverter

IMDCalculationFormulasConverter
-


# IMDCalculationFormulasConverter


Сборка: Cubes;


## Описание


Интерфейс IMDCalculationFormulasConverter
 содержит свойства и методы для конвертации формул из многомерного расчета
 в вычисляемый куб.


## Иерархия наследования


IMDCalculationFormulasConverter


## Комментарии


Для корректной конвертации формул из многомерного расчета в вычисляемый
 куб должны быть соблюдены следующие условия:


	- Структура многомерного расчета и вычисляемого куба должна быть
	 одинаковой.


	- Порядок кубов-источников и порядок измерений в кубах-источниках
	 должен быть одинаковым.


Для предварительной проверки соответствия структур используйте метод
 [ValidateStructure](IMDCalculationFormulasConverter.ValidateStructure.htm).
 Конвертация формул производится при вызове метода [Convert](IMDCalculationFormulasConverter.Convert.htm).
 После конвертации формулы вычисляемого куба необходимо [сохранить](../ICalculatedCubeInstance/ICalculatedCubeInstance.SaveFormulas.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BatchMode](IMDCalculationFormulasConverter.BatchMode.htm)
		 Свойство BatchMode
		 определяет способ обновления коллекции формул при конвертации.


		 ![](../../Property_Image.gif)
		 [Calculation](IMDCalculationFormulasConverter.Calculation.htm)
		 Свойство Calculation
		 возвращает многомерный расчет, формулы которого будут конвертированы
		 в формулы [вычисляемого
		 куба](IMDCalculationFormulasConverter.Cube.htm).


		 ![](../../Property_Image.gif)
		 [CleanBeforeConvert](IMDCalculationFormulasConverter.CleanBeforeConvert.htm)
		 Свойство CleanBeforeConvert
		 определяет признак очистки списка формул вычисляемого куба перед
		 конвертацией.


		 ![](../../Property_Image.gif)
		 [CorrectSourceFormulas](IMDCalculationFormulasConverter.CorrectSourceFormulas.htm)
		 Свойство CorrectSourceFormulas
		 определяет, будет ли производиться коррекция формул перед конвертацией
		 в формулы [вычисляемого
		 куба](IMDCalculationFormulasConverter.Cube.htm).


		 ![](../../Property_Image.gif)
		 [Cube](IMDCalculationFormulasConverter.Cube.htm)
		 Свойство Cube возвращает
		 вычисляемый куб, в который будут конвертированы формулы из [многомерного
		 расчета](IMDCalculationFormulasConverter.Calculation.htm).


		 ![](../../Property_Image.gif)
		 [Facts](IMDCalculationFormulasConverter.Facts.htm)
		 Свойство Facts возвращает
		 индекс измерения, являющегося в вычисляемом кубе измерением показателей,
		 которые связаны с полями данных.


		 ![](../../Property_Image.gif)
		 [RecursionSource](IMDCalculationFormulasConverter.RecursionSource.htm)
		 Свойство RecursionSource
		 возвращает индекс источника в многомерном расчете, который является
		 рекурсивным.


		 ![](../../Property_Image.gif)
		 [SourceFacts](IMDCalculationFormulasConverter.SourceFacts.htm)
		 Свойство SourceFacts
		 возвращает индекс измерения, являющегося в указанном источнике
		 измерением показателей.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Convert](IMDCalculationFormulasConverter.Convert.htm)
		 Метод Convert осуществляет
		 конвертацию формул из многомерного расчета в вычисляемый куб.


		 ![](../../Sub_Image.gif)
		 [ValidateStructure](IMDCalculationFormulasConverter.ValidateStructure.htm)
		 Метод ValidateStructure
		 осуществляет проверку соответствия структур многомерного расчета
		 и вычисляемого куба.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
