# IUiPrxReportBaseSubstitutionEventArgs.Context

IUiPrxReportBaseSubstitutionEventArgs.Context
-


# IUiPrxReportBaseSubstitutionEventArgs.Context


## Синтаксис


Context: [PrxReportSubstitutionContext](../../Enums/PrxReportSubstitutionContext.htm);


## Описание


Свойство Context возвращает
 происходящее действие, при котором осуществляется подмена регламентного
 отчета.


## Комментарии


При печати отчёта в настольном приложении свойство возвращает значение
 PrxReportSubstitutionContext.Print, в веб-приложении - PrxReportSubstitutionContext.Export.


В веб-приложении печать отчёта выполняется в два этапа:


	- Отчёт экспортируется в файл выбранного формата.


	- Сохранённый файл выводится на печать.


См. также:


[IUiPrxReportBaseSubstitutionEventArgs](IUiPrxReportBaseSubstitutionEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
