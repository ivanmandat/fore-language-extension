# ITabErrorCheckingOptions

ITabErrorCheckingOptions
-


# ITabErrorCheckingOptions


Сборка: Tab;


## Описание


Интерфейс ITabErrorCheckingOptions
 предназначен для определения параметров индикации ошибок в формулах таблицы.


## Иерархия наследования


           ITabErrorCheckingOptions


## Комментарии


Для получения параметров индикации ошибок используйте следующие свойства:


	- [ITabSheet.ErrorCheckingOptions](../ITabSheet/ITabSheet.ErrorCheckingOptions.htm);


	- [IPrxReportOptions.ErrorCheckingOptions](kereport.chm::/Interface/IPrxReportOptions/IPrxReportOptions.ErrorCheckingOptions.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [EmptyValuesTreatmentType](ITabErrorCheckingOptions.EmptyValuesTreatmentType.htm)
		 Свойство EmptyValuesTreatmentType
		 определяет действие, которое необходимо произвести при [индикации
		 ошибок](UiReport.chm::/desktop/Reports/UiReport_Reports_Param4.htm) для формул со ссылками на пустые ячейки.


		 ![](../../Property_Image.gif)
		 [EnableChecking](ITabErrorCheckingOptions.EnableChecking.htm)
		 Свойство EnableChecking
		 определяет, осуществляется ли проверка и индикация ошибок в формулах.


		 ![](../../Property_Image.gif)
		 [ErrorIndicatorsColor](ITabErrorCheckingOptions.ErrorIndicatorsColor.htm)
		 Свойство ErrorIndicatorsColor
		 определяет цвет индикатора, отображаемого в ячейках, формулы которых
		 содержат ошибки.


		 ![](../../Property_Image.gif)
		 [NumberAsText](ITabErrorCheckingOptions.NumberAsText.htm)
		 Свойство NumberAsText
		 определяет, будут ли ячейки, имеющие числовое значение, отформатированное
		 как текст, отмечаться как ошибочные.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Assign](ITabErrorCheckingOptions.Assign.htm)
		 Метод Assign заполняет
		 параметры индикации ошибок в соответствии параметрами, переданными
		 в Result.


		 ![](../../Sub_Image.gif)
		 [ResetSkippedErrors](ITabErrorCheckingOptions.ResetSkippedErrors.htm)
		 Метод ResetSkippedErrors
		 осуществляет сброс пропущенных ошибок.


См. также:


[Интерфейсы
 сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
