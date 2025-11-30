# Дополнительные методы для работы с формой ввода

Дополнительные методы для работы с формой ввода
-


# Дополнительные методы для работы с формой ввода


Ниже приведён синтаксис и описание методов, реализованных в модуле [UNIT_WEB_METHODS](DataEntryFormsServices.htm) и предназначенных
 для управления формой ввода.


[![](../../Opened.gif)![](../../Closed.gif)Методы для работы
 с экземпляром формы ввода](javascript:TextPopup(this))


			 Синтаксис метода
			 Описание


			 Public Function GetFormInstanceParametersValues(formInstance:
			 IMetabaseObjectInstance): String;
			 Получение списка значений параметров, с которыми была открыта
			 форма ввода. Список значений параметров возвращается в формате
			 JSON.

Параметры:


				- formInstance.
				 Открытый экземпляр формы ввода.


[![](../../Opened.gif)![](../../Closed.gif)Методы для
 работы с ячейками](javascript:TextPopup(this))


			 Синтаксис метода
			 Описание


			 Public Function GetFormulaDescriptionsUsedAttrs(report:
			 IPrxReport; sheetKey, row, column: integer): String;
			 Получение списка измерений и их атрибутов, используемых
			 в описании формулы в ячейке. Список значений параметров возвращается
			 в формате JSON.

Параметры:


				- report:
				 Отчёт формы ввода, с которой производится операция;

				- row. Номер
				 строки ячейки с формулой;

				- column. Номер
				 столбца ячейки с формулой.


			 Public Sub SetFormulaDescriptionsUsedAttrs(report:
			 IPrxReport; jsonValue: string);
			 Метод для установки атрибутов, используемых в описании
			 формулы в ячейке.


				- report:
				 Отчёт формы ввода, с которой производится операция;

				- jsonValue.
				 Список измерений и их атрибутов в формате JSON. Пример:
				 [{"dimKey":11, "attrId":"id1"},
				 {"dimKey":12, "attrId":"id2"}].


См. также:


[Работа
 с формами ввода](DataEntryFormsServices.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
